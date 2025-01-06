import * as React from "react";
import Header from "./Header";
import PrivacyContent from "./PrivacyContent";

function PrivacyLayout() {
  return (
    <div className="flex overflow-hidden animate-slide-in-right relative flex-col mx-auto w-full bg-white max-w-[480px] min-h-[896px]">
      <Header title="Privacy Policy" />
      <PrivacyContent />
    </div>
  );
}

export default PrivacyLayout;