"use client";

const ProgressBar = ({ totalSteps, currentStep }) => {
  return (
    <div className="flex gap-2 w-full max-w-md mx-auto my-4">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`h-1 flex-1 rounded-full ${
            index < currentStep ? "bg-[#5B49EF]" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
