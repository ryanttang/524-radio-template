"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React from "react";

interface Ticket {
  id: number;
  show: string;
  date: string;
  image: string;
  details: string;
}

interface TicketModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ticket: Ticket;
}

export default function TicketModal({ open, onOpenChange, ticket }: TicketModalProps) {
  if (!ticket) return null;
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-neumorphic p-8 w-full max-w-md z-50">
          <Dialog.Title className="font-bold text-xl mb-2 text-white">{ticket.show}</Dialog.Title>
          <img src={ticket.image} alt={ticket.show} className="w-32 h-32 object-cover rounded-2xl mb-4 mx-auto" />
          <div className="text-pink-400 text-center mb-2">{ticket.date}</div>
          <div className="text-zinc-200 text-center mb-4">{ticket.details}</div>
          <button className="w-full bg-pink-500 hover:bg-pink-400 text-white py-3 rounded-xl font-bold transition">Get Ticket</button>
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4 text-zinc-300 hover:text-white text-2xl">×</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 