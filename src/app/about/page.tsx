export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">About RETROFUTURE RADIO</h1>
      <p className="text-zinc-300 mb-8 text-lg">
        RETROFUTURE RADIO is a digital station broadcasting the future from a vintage dial. We blend synthwave, retro-electronica, and future beats, curating a unique soundscape for tomorrow's dreamers.
      </p>
      <div className="bg-black/40 rounded-2xl p-6 mb-8 border border-zinc-700">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-zinc-400">
          To connect listeners with the best in retro-inspired and futuristic music, while building a community of artists, fans, and creators who love the sound of tomorrow.
        </p>
      </div>
      <div className="bg-black/30 rounded-2xl p-6 border border-zinc-700">
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <ul className="space-y-2">
          <li><span className="font-bold text-pink-400">DJ Nova</span> – Founder & Host</li>
          <li><span className="font-bold text-pink-400">Echo</span> – Producer</li>
          <li><span className="font-bold text-pink-400">Pulse</span> – Community Manager</li>
        </ul>
      </div>
    </div>
  );
} 