"use client";

import React from "react";

interface Track {
  title: string;
  artist: string;
  cover: string;
}

interface PlaylistGridProps {
  playlist?: Track[];
  onSelect?: (idx: number) => void;
}

const samplePlaylist: Track[] = [
  {
    title: "Sample Track 1",
    artist: "Artist 1",
    cover: "/ep1.jpg",
  },
  {
    title: "Sample Track 2",
    artist: "Artist 2",
    cover: "/ep2.jpg",
  },
];

export default function PlaylistGrid({ playlist = samplePlaylist, onSelect }: PlaylistGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {playlist.map((track, idx) => (
        <button
          key={idx}
          onClick={() => onSelect && onSelect(idx)}
          className="rounded-2xl glassy shadow-neumorphic p-2 flex flex-col items-center hover:scale-105 transition"
        >
          <img
            src={track.cover}
            alt={track.title}
            className="w-20 h-20 rounded-xl object-cover mb-2"
          />
          <div className="font-medium text-sm text-center">{track.title}</div>
          <div className="text-xs text-zinc-400">{track.artist}</div>
        </button>
      ))}
    </div>
  );
} 