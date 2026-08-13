import { createCipheriv } from "crypto";

// ─── Token04 generation (ZegoCloud server-side algorithm) ────────────────────
// Based on: https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/nodejs/server/zegoServerAssistant.js

function rndNum(a, b) {
  return Math.ceil(a + (b - a) * Math.random());
}

function makeRandomIv() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  return Array.from({ length: 16 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
}

function getAlgorithm(key) {
  switch (Buffer.from(key).length) {
    case 16: return "aes-128-cbc";
    case 24: return "aes-192-cbc";
    case 32: return "aes-256-cbc";
    default: throw new Error("Invalid key length: " + Buffer.from(key).length);
  }
}

function aesEncrypt(plainText, key, iv) {
  const cipher = createCipheriv(getAlgorithm(key), key, iv);
  cipher.setAutoPadding(true);
  const encrypted = cipher.update(plainText);
  const final = cipher.final();
  return Buffer.concat([encrypted, final]);
}

function generateToken04(appId, userId, secret, effectiveTimeInSeconds, payload = "") {
  const createTime = Math.floor(Date.now() / 1000);
  const tokenInfo = {
    app_id: appId,
    user_id: userId,
    nonce: rndNum(-2147483648, 2147483647),
    ctime: createTime,
    expire: createTime + effectiveTimeInSeconds,
    payload,
  };

  const plainText = JSON.stringify(tokenInfo);
  const iv = makeRandomIv();
  const encryptBuf = aesEncrypt(plainText, secret, iv);

  const b1 = new Uint8Array(8);
  const b2 = new Uint8Array(2);
  const b3 = new Uint8Array(2);
  new DataView(b1.buffer).setBigInt64(0, BigInt(tokenInfo.expire), false);
  new DataView(b2.buffer).setUint16(0, iv.length, false);
  new DataView(b3.buffer).setUint16(0, encryptBuf.byteLength, false);

  const buf = Buffer.concat([
    Buffer.from(b1),
    Buffer.from(b2),
    Buffer.from(iv),
    Buffer.from(b3),
    encryptBuf,
  ]);

  return "04" + buf.toString("base64");
}

// ─── Vercel Serverless Handler ────────────────────────────────────────────────

export default function handler(req, res) {
  // Only allow GET
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { userID, roomID } = req.query;

  if (!userID || !roomID) {
    return res.status(400).json({ error: "userID and roomID are required" });
  }

  const appID = Number(process.env.ZEGO_APP_ID);
  const serverSecret = process.env.ZEGO_SERVER_SECRET;

  if (!appID || !serverSecret) {
    return res.status(500).json({ error: "Server misconfigured" });
  }

  try {
    // Generate the raw token04 server-side — secret never leaves this function
    const token = generateToken04(appID, userID, serverSecret, 3600);
    return res.status(200).json({ token, appID });
  } catch (err) {
    console.error("Token generation failed:", err);
    return res.status(500).json({ error: "Token generation failed" });
  }
}
