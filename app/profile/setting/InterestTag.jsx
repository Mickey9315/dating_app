import * as React from "react";

function InterestTag({ emoji, label }) {
  return (
    <div className="flex items-center px-3 py-2 text-white border border-white border-solid bg-white bg-opacity-30 min-h-[36px] rounded-[800px]">
      <div className="self-stretch my-auto leading-snug">{emoji}</div>
      <div className="gap-2.5 self-stretch px-2 my-auto font-medium leading-none">
        {label}
      </div>
    </div>
  );
}

export default InterestTag;