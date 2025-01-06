import * as React from "react";

export function DeleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex-1 shrink gap-2.5 self-stretch px-6 text-white bg-red-500 rounded-full min-h-[64px]"
      aria-label="Confirm account deletion"
    >
      Yes Delete
    </button>
  );
}

export function CancelButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex-1 shrink gap-2.5 self-stretch px-6 text-black rounded-full bg-zinc-100 min-h-[64px]"
      aria-label="Cancel account deletion"
    >
      No, Cancel
    </button>
  );
}