import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-pink-500 mb-4 drop-shadow-lg">404</h1>
      <p className="text-2xl text-zinc-300 mb-6">Lost in the static. This page does not exist.</p>
      <Link href="/" className="px-6 py-2 rounded-lg font-semibold transition bg-pink-500 hover:bg-pink-400 text-white">Return Home</Link>
    </div>
  );
} 