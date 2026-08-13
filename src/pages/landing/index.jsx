import { useNavigate } from "react-router-dom";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const VideoIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
  </svg>
);
const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const LinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5" />
  </svg>
);
const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0zM21 12a3 3 0 11-6 0 3 3 0 016 0zM9 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const ChatIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);
const MonitorIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Toolbar mock icons
const MicIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2M12 19v4m-4 0h8" />
  </svg>
);
const CameraIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
  </svg>
);
const ScreenShareIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const ChatBubbleIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);
const PhoneOffIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    <line x1="2" y1="2" x2="22" y2="22" strokeLinecap="round" />
  </svg>
);

// Feature section icon
const WhiteboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h4m-4 3.5h6" />
  </svg>
);

// Toolbar whiteboard icon (smaller)
const WhiteboardToolbarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h4m-4 3.5h6" />
  </svg>
);

const features = [
  { icon: <VideoIcon />,       title: "HD Video Calls",        desc: "Crystal-clear 1080p video with adaptive bitrate so quality stays sharp even on slower connections." },
  { icon: <ShieldIcon />,      title: "End-to-End Encrypted",  desc: "Every call is secured with industry-standard encryption. Your conversations stay private." },
  { icon: <LinkIcon />,        title: "One-Click Room Links",  desc: "Generate a shareable room link in seconds. No sign-up required for your guests." },
  { icon: <UsersIcon />,       title: "Peer-to-Peer Calls",    desc: "Rooms are capped at 2 participants. Direct 1-on-1 video with no middleman — just you and one other person." },
  { icon: <ChatIcon />,        title: "In-Room Chat",          desc: "Send messages without interrupting the call. Perfect for sharing links, notes, or reactions." },
  { icon: <WhiteboardIcon />,  title: "Whiteboard",            desc: "Collaborate in real time on a shared whiteboard — sketch ideas, annotate, and brainstorm together." },
];

const steps = [
  { step: "01", title: "Create a Room",        desc: 'Hit "Start a Call" and a unique room code is ready instantly.' },
  { step: "02", title: "Share the Link",        desc: "Copy the shareable link and send it via message, email, or QR." },
  { step: "03", title: "Connect & Collaborate", desc: "Join from any browser - no app download, no friction." },
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-black/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white">
              <VideoIcon className="w-4 h-4 text-black" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-white">ZegoMeet</span>
          </div>
          {/* Nav links + CTA */}
          <div className="flex items-center gap-6">
            <button onClick={() => scrollTo("features")} className="hidden sm:block text-sm text-neutral-400 hover:text-white transition cursor-pointer bg-transparent border-none p-0">Features</button>
            <button onClick={() => scrollTo("how-it-works")} className="hidden sm:block text-sm text-neutral-400 hover:text-white transition cursor-pointer bg-transparent border-none p-0">How it works</button>
            <button
              onClick={() => navigate("/join")}
              className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-black transition hover:bg-neutral-200 active:scale-95 cursor-pointer"
            >
              Start a Call
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden py-32 sm:py-40 text-center px-6">
        {/* Subtle radial glow — pure grey, no color */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-3.5 py-1 text-xs text-neutral-400 mb-8 tracking-wide uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
          Free &amp; Instant — No account needed
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white leading-[1.05] max-w-3xl mx-auto">
          Video calls that<br />just work.
        </h1>

        <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-lg mx-auto leading-relaxed">
          HD video, end-to-end encryption, screen sharing, and in-room chat —
          all in your browser with zero setup.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate("/join")}
            className="w-full sm:w-auto rounded-md bg-white px-7 py-2.5 text-sm font-semibold text-black transition hover:bg-neutral-200 active:scale-95 cursor-pointer"
          >
            Start a Call →
          </button>
          <button
            onClick={() => navigate("/join")}
            className="w-full sm:w-auto rounded-md border border-neutral-700 bg-transparent px-7 py-2.5 text-sm font-semibold text-neutral-300 transition hover:border-neutral-500 hover:text-white active:scale-95 cursor-pointer"
          >
            Join a Room
          </button>
        </div>

        {/* Browser frame mock */}
        <div className="mt-20 mx-auto max-w-4xl rounded-xl border border-neutral-800 bg-neutral-950 shadow-2xl shadow-black/80 overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
            <span className="ml-4 flex-1 rounded bg-neutral-800 px-3 py-1 text-xs text-neutral-500 text-left font-mono">
              zegomeet.vercel.app/room/abc-123
            </span>
          </div>
          {/* Video grid */}
          <div className="aspect-video bg-neutral-950 flex items-center justify-center relative p-8">
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {["You", "Guest"].map((name) => (
                <div key={name} className="aspect-video rounded-lg bg-neutral-900 flex flex-col items-center justify-center gap-2 border border-neutral-800">
                  <div className="h-9 w-9 rounded-full bg-neutral-700 flex items-center justify-center text-white font-semibold text-sm">
                    {name[0]}
                  </div>
                  <span className="text-xs text-neutral-500">{name}</span>
                </div>
              ))}
            </div>
            {/* Toolbar mock */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5">
              {[<MicIcon />, <CameraIcon />, <ScreenShareIcon />, <WhiteboardToolbarIcon />, <ChatBubbleIcon />].map((icon, i) => (
                <div key={i} className="h-9 w-9 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400">
                  {icon}
                </div>
              ))}
              <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center text-black">
                <PhoneOffIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-28 px-6 border-t border-neutral-900">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight max-w-lg">
              Everything you need in one room
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 rounded-xl overflow-hidden border border-neutral-800">
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group bg-black p-6 transition hover:bg-neutral-950"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 group-hover:border-neutral-600 group-hover:text-white transition">
                  {icon}
                </div>
                <h3 className="mb-2 text-sm font-semibold text-white">{title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-28 px-6 border-t border-neutral-900">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">How it works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Up and running in seconds
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col gap-4">
                <span className="text-xs font-mono text-neutral-600">{step}</span>
                <div className="w-8 h-px bg-neutral-700" />
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-28 px-6 border-t border-neutral-900">
        <div className="mx-auto max-w-3xl rounded-xl border border-neutral-800 bg-neutral-950 p-12 sm:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to connect?
          </h2>
          <p className="mt-4 text-neutral-400 max-w-sm mx-auto text-sm leading-relaxed">
            Start a private video call in seconds. No sign-up, no download.
          </p>
          <button
            onClick={() => navigate("/join")}
            className="mt-8 rounded-md bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 active:scale-95 cursor-pointer"
          >
            Start a Free Call →
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-neutral-900 py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-white">
              <VideoIcon className="w-3 h-3 text-black" />
            </span>
            <span className="text-sm font-medium text-neutral-400">ZegoMeet</span>
          </div>
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} ZegoMeet · Powered by ZegoCloud
          </p>
        </div>
      </footer>
    </div>
  );
}
