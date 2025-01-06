import * as React from "react";
import { Empty } from "./Empty";
import Unread from "./Unread";
import Read from "./Read";

export function NotificationTabs() {
  const tabs = [
    { id: 'unread', label: 'Unread', isActive: true },
    { id: 'read', label: 'Read', isActive: false }
  ];
  const [activeTab, setActiveTab] = React.useState("unread");
  return (
    <>
      <div className="flex gap-4 px-4 pt-5 w-full text-base font-medium tracking-normal leading-none text-center whitespace-nowrap bg-white border-b border-zinc-200 min-h-[56px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            tabIndex={0}
            className={`flex-1 shrink self-stretch h-full ${activeTab == tab.id
              ? 'border-b-2 border-black text-zinc-950'
              : 'text-zinc-400'
              }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab == "unread" && (
        <>
          <Unread />
          <div className="flex flex-col mt-2 w-full text-base font-medium tracking-normal leading-none text-white border border-solid border-zinc-200">
            <button
              className="gap-2.5 self-stretch px-6 w-full bg-indigo-600 rounded-full min-h-[64px]"
              aria-label="Mark all notifications as read"
            onClick={() => setActiveTab("empty")}
            >
              Mark All as Read
            </button>
          </div>
        </>
      )}
      {activeTab == "read" && (
        <Read />
      )}
      {activeTab == "empty" && (
        <Empty />
      )}
    </>
  );
}