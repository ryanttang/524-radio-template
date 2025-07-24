"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TicketModal from "./TicketModal";

interface Ticket {
  id: number;
  show: string;
  date: string;
  image: string;
  details: string;
}

const sampleTickets: Ticket[] = [
  {
    id: 1,
    show: "Live Show 1",
    date: "2025-04-01",
    image: "/ep1.jpg",
    details: "Join us for an epic night!",
  },
  {
    id: 2,
    show: "Live Show 2",
    date: "2025-05-15",
    image: "/ep2.jpg",
    details: "Special guest appearance!",
  },
];

export default function TicketCarousel() {
  const [openId, setOpenId] = useState<number | null>(null);
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Swiper spaceBetween={16} slidesPerView={1.2} className="pb-8">
        {sampleTickets.map((ticket) => (
          <SwiperSlide key={ticket.id}>
            <div className="rounded-3xl glassy shadow-neumorphic p-4 flex flex-col items-center">
              <img src={ticket.image} alt={ticket.show} className="w-40 h-40 object-cover rounded-2xl mb-2" />
              <div className="font-bold text-lg mb-1">{ticket.show}</div>
              <div className="text-pink-400 text-sm mb-2">{ticket.date}</div>
              <button
                className="bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 rounded-full transition"
                onClick={() => setOpenId(ticket.id)}
              >
                View Ticket
              </button>
              <TicketModal
                open={openId === ticket.id}
                onOpenChange={(open: boolean) => setOpenId(open ? ticket.id : null)}
                ticket={ticket}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 