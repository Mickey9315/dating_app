import * as React from "react";
import { MenuBar } from "../components/MenuBar";
import { ProfileHeader } from "./ProfileHeader";
import { SettingsMenu } from "./SettingMenu";

export default function ProfileLayout() {
  return (
    <div className="flex flex-col animate-slide-in-right mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-4 pt-8 pb-4 w-full text-xl font-medium tracking-tight leading-tight text-center text-black whitespace-nowrap bg-white border-b border-zinc-200">
        <div className="flex gap-4 items-center w-full">
          <div className="flex shrink-0 gap-2.5 self-stretch my-auto w-10 h-10 bg-white" />
          <div className="flex-1 shrink self-stretch my-auto basis-0">Profile</div>
          <div className="flex shrink-0 gap-2.5 self-stretch my-auto w-10 h-10 bg-white" />
        </div>
      </div>
      <ProfileHeader />
      <SettingsMenu />
      <MenuBar />
    </div>
  );
}