import * as React from "react";

export function LogoutButton({ text, variant, onClick }) {
  const baseClasses = "flex-1 shrink gap-2.5 self-stretch px-6 min-h-[64px] rounded-full";
  const variantClasses = variant === "primary" 
    ? "text-white bg-orange-400" 
    : "text-black bg-zinc-100";

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
      tabIndex={0}
      role="button"
    >
      {text}
    </button>
  );
}