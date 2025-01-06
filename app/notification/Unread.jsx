import * as React from "react";
import NotificationItem from "./Item";
import { notificationData } from "./Data";

function Unread() {
  return (
    <div className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
      <div className="flex overflow-hidden flex-col flex-1 justify-center w-full">
        <div className="flex flex-col w-full">
          {notificationData.map((notification, index) => (
            <NotificationItem
              key={index}
              type={notification.type}
              time={notification.time}
              title={notification.title}
              message={notification.message}
              amount={notification.amount}
              price={notification.price}
              recipient={notification.recipient}
              read={notification.read}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Unread;