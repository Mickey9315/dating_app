"use client";
import { useParams } from "next/navigation";
import Page1 from "./1/page.jsx";
import Page2 from "./2/page.jsx";
import Page3 from "./3/page.jsx";
import Page6 from "./6/page.jsx";
import Page7 from "./7/page.jsx";
import Page9 from "./9/page.jsx";

const SetupStep = () => {
  const params = useParams();
  switch (params.id) {
    case "1":
      return <Page1 />;
    case "2":
      return <Page2 />;
    case "3":
      return <Page3 />;
    case "6":
      return <Page6 />;
    case "7":
      return <Page7 />;
    case "9":
      return <Page9 />;
    default:
      return <></>;
  }
};

export default SetupStep;
