import * as React from "react";

function PrivacyContent() {
  return (
    <div className="flex overflow-hidden z-0 flex-col flex-1 px-6 pt-10 pb-6 w-full">
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-semibold tracking-tighter leading-none text-black">
          Privacy Policy
        </h1>
        <div className="mt-2 mb-24 text-l tracking-tight leading-7 text-gray-600">
          At our company, we prioritize your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines
          how we collect, use, and safeguard your data. We gather information
          when you interact with our services, including but not limited to
          your name, email address, and usage data. This information helps us
          enhance your experience and provide tailored services. <br />
          <br />
          We may use your data for various purposes, such as improving our
          website, sending you updates, and analyzing usage trends. We ensure
          that your information is stored securely and only accessible to
          authorized personnel. <br />
          <br />
          You have the right to access, modify, or delete your personal
          information at any time. We also encourage you to review our policy
          regularly, as we may update it to reflect changes in our practices
          or applicable laws. <br />
          <br />
          If you have any questions or concerns about our Privacy Policy,
          please do not hesitate to contact us. Your trust is important to us,
          and we are dedicated to maintaining the confidentiality of your
          information.
        </div>
      </div>
    </div>
  );
}

export default PrivacyContent;