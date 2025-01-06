import * as React from "react";
import { MenuItem } from "./MenuItem";

const menuItems = [
  {
    icon: "/assets/images/profile_setting.svg",
    title: "Profile Settings",
    description: "Manage how you are seen publicly",
    order: 1,
    hasArrow: true
  },
  {
    icon: "/assets/images/coin_balance.svg",
    title: "Coin Balance",
    description: "View & Top-up your coin balance",
    order: 2,
    hasArrow: true
  },
  {
    icon: "/assets/images/policy.svg",
    title: "Privacy Policy",
    description: "Read our Privacy Policy",
    order: 3,
    hasArrow: true
  },
  {
    icon: "/assets/images/logout.svg",
    title: "Log Out",
    description: "Sign out from this device",
    order: 4,
    titleColor: "text-orange-400"
  },
  {
    icon: "/assets/images/delete.svg",
    title: "Delete Account",
    description: "Delete your Ballpitt Account",
    order: 5,
    titleColor: "text-red-500"
  }
];

export function SettingsMenu() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-6 pt-8 pb-8 w-full bg-white">
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              hasArrow={item.hasArrow}
              titleColor={item.titleColor}
              className={index > 0 ? "mt-8" : ""}
              order={item.order}
            />
          ))}
        </div>
      </div>
    </div>
  );
}