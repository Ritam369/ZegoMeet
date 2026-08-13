import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    const trimmed = roomCode.trim();
    if (!trimmed) return;
    navigate(`/room/${trimmed}`);
  }, [navigate, roomCode]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleJoinRoom();
  };

  const generateCode = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    const code = Array.from({ length: 6 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    ).join("");
    setRoomCode(code);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-black/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-white group-hover:text-neutral-300 transition">
              ZegoMeet
            </span>
          </button>
          <span className="text-xs text-neutral-600 tracking-wide uppercase">Join Room</span>
        </div>
      </nav>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white tracking-tight mb-2">
              Join a call
            </h1>
            <p className="text-sm text-neutral-500">
              Enter a room code or generate a new one.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6 space-y-3">

            {/* Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Room code"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 pr-10 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600"
              />
              {roomCode && (
                <button
                  onClick={() => setRoomCode("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-neutral-400 transition text-xs cursor-pointer"
                  aria-label="Clear"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Join */}
            <button
              onClick={handleJoinRoom}
              disabled={!roomCode.trim()}
              className="w-full rounded-md bg-white py-2.5 text-sm font-semibold text-black transition hover:bg-neutral-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              Join Room →
            </button>

            {/* Divider */}
            <div className="relative py-1">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-800" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-neutral-950 px-3 text-xs text-neutral-600">or</span>
              </div>
            </div>

            {/* Generate */}
            <button
              onClick={generateCode}
              className="w-full rounded-md border border-neutral-800 bg-transparent py-2.5 text-sm font-medium text-neutral-400 transition hover:border-neutral-600 hover:text-white active:scale-95 cursor-pointer"
            >
              Generate room code
            </button>
          </div>

          <p className="mt-5 text-center text-xs text-neutral-700">
            No sign-up required · Rooms are private by default
          </p>

          {/* Back */}
          <button
            onClick={() => navigate("/")}
            className="mt-6 flex items-center gap-1 mx-auto text-xs text-neutral-600 hover:text-neutral-400 transition cursor-pointer"
          >
            ← Back to home
          </button>
        </div>
      </main>
    </div>
  );
}
