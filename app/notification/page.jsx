"use client";
import * as React from "react";
import { NotificationHeader } from "./NotificationHeader";
import { NotificationTabs } from "./NotificationTabs";

export default function NotificationsView() {
    
    return (
        <div className="flex flex-col mx-auto mb-36 w-full bg-white max-w-[480px]">
            <NotificationHeader />
            <NotificationTabs />            
        </div>
    );
}