import React, { useState, cloneElement, ReactNode, ReactElement } from "react";

export function Dialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    if (child.type === DialogTrigger) {
      return cloneElement(child as ReactElement, { onClick: () => setOpen(true) });
    }
    if (child.type === DialogContent && open) {
      return cloneElement(child as ReactElement, { onClose: () => setOpen(false) });
    }
    return child;
  });
}

export function DialogTrigger({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return <span onClick={onClick} style={{ cursor: "pointer" }}>{children}</span>;
}

export function DialogContent({ children, onClose }: { children: ReactNode; onClose?: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-2xl min-w-[300px] max-w-[90vw]">
        {children}
        <button className="mt-6 px-4 py-2 rounded bg-zinc-700 text-white hover:bg-zinc-600" onClick={onClose}>Close</button>
      </div>
    </div>
  );
} 