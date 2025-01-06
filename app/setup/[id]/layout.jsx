"use client";

import { useParams, useRouter } from "next/navigation";
import ProgressBar from "../../components/ProgressBar";

const SetupLayout = (props) => {
  const router = useRouter();
  const params = useParams();
  return (
    <div className="relative flex flex-col flex-grow">
      <div className="max-w-2xl w-full mx-auto pt-8 h-full flex flex-col flex-grow">
        <button
          className="w-7 h-8 rounded-full hover:bg-gray-100"
          onClick={() => router.back()}
        >
          <img alt="Frame" src="/assets/images/backbutton.svg" />
        </button>

        <ProgressBar totalSteps={9} currentStep={parseInt(params.id) || 0} />

        <div className="mt-8 h-full space-y-6 flex flex-col flex-grow animate-slide-in-right">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default SetupLayout;
