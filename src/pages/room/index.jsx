import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// Screen sharing is not supported on any mobile browser (OS restriction)
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

export default function RoomPage() {
  const { roomCode } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Stable userID per browser session
    const userID = sessionStorage.getItem("zego_uid") || Date.now().toString();
    sessionStorage.setItem("zego_uid", userID);

    async function startRoom() {
      try {
        // Fetch the token from our serverless function — secret never touches the browser
        const res = await fetch(
          `/api/token?userID=${encodeURIComponent(userID)}&roomID=${encodeURIComponent(roomCode)}`
        );
        if (!res.ok) throw new Error(`Token API error: ${res.status}`);
        const { token, appID } = await res.json();

        // generateKitTokenForProduction uses the server-issued token (no secret needed here)
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
          appID,
          token,
          roomCode,
          userID,
          `User_${userID.slice(-4)}`
        );

        const zc = ZegoUIKitPrebuilt.create(kitToken);

        zc.joinRoom({
          container: containerRef.current,
          sharedLinks: [
            {
              name: "Copy link",
              url: `${window.location.origin}/room/${roomCode}`,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
          },
          // Screen sharing is desktop-only — hide the button on mobile browsers
          showScreenSharingButton: !isMobile,
          showPreJoinView: true,
          showMoreButton: true,
          // Start with front camera on mobile, back camera switching is handled by ZegoCloud
          useFrontFacingCamera: true,
          // showRotatingScreenButton is ZegoCloud's dedicated mobile camera-flip button
          showRotatingScreenButton: isMobile,
          whiteboardConfig: {
            showCreateAndCloseButton: true,
          },
          onLeaveRoom: () => navigate("/join"),
        });
      } catch (err) {
        console.error("Failed to start room:", err);
        setError("Failed to connect. Please try again.");
      }
    }

    startRoom();
  }, [roomCode, navigate]);

  if (error) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
        <p className="text-neutral-400 text-sm">{error}</p>
        <button
          onClick={() => navigate("/join")}
          className="rounded-md bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-neutral-200 transition cursor-pointer"
        >
          Back to Join
        </button>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
