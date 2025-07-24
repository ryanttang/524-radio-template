export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">Contact Us</h1>
      <p className="text-zinc-300 mb-8 text-lg">
        Have a question, want to collaborate, or just want to say hi? Fill out the form below and we’ll get back to you soon!
      </p>
      <form className="bg-black/40 rounded-2xl p-6 border border-zinc-700 flex flex-col gap-4">
        <label className="text-zinc-400 font-semibold">Name
          <input type="text" className="mt-1 w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white" placeholder="Your name" required />
        </label>
        <label className="text-zinc-400 font-semibold">Email
          <input type="email" className="mt-1 w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white" placeholder="you@email.com" required />
        </label>
        <label className="text-zinc-400 font-semibold">Message
          <textarea className="mt-1 w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white" rows={5} placeholder="Your message..." required />
        </label>
        <button type="submit" className="mt-4 px-6 py-2 rounded-lg font-semibold transition bg-pink-500 hover:bg-pink-400 text-white">Send Message</button>
      </form>
    </div>
  );
} 