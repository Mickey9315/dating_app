import * as React from "react";

function NotificationItem({ type, time, title, message, amount, price, recipient, read }) {
    let iconSrc, bgColor, textColor;

    if (read) {
        iconSrc = type === "refund" ? "/assets/images/refund_deactive.svg" : "/assets/images/purchase_deactive.svg";
        bgColor = "bg-zinc-100";
        textColor = "";
    }
    else {
        iconSrc = type === "refund" ? "/assets/images/refund.svg" : "/assets/images/purchase.svg";
        bgColor = type === "refund" ? "bg-violet-100" : "bg-emerald-50";
        textColor = type === "refund" ? "text-indigo-600" : "text-emerald-500";
    }

    return (
        <div className="flex gap-4 items-start mt-6 w-full">
            <div className={`flex overflow-hidden flex-col justify-center items-center px-2.5 w-14 h-14 ${bgColor} min-h-[56px] rounded-[900px]`}>
                <img
                    loading="lazy"
                    src={iconSrc}
                    alt={type === "refund" ? "Refund icon" : "Purchase icon"}
                    className="object-contain w-6 aspect-square"
                />
            </div>
            <div className="flex flex-col flex-1 shrink basis-5 min-w-[240px]">
                <div className="flex gap-3 items-center w-full font-medium">
                    <div className="flex-1 shrink self-stretch my-auto text-lg tracking-tight leading-none text-black basis-0">
                        {title}
                    </div>
                    <div className="self-stretch my-auto text-sm tracking-normal leading-none text-gray-600">
                        {time}
                    </div>
                </div>
                <div className={`flex-1 shrink gap-3 self-stretch mt-1 w-full text-base tracking-normal leading-6 ${textColor}`}>
                    {type === "refund" ? (
                        <>
                            Your gift of{" "}
                            <span className={`font-medium tracking-normal leading-5 ${textColor}`}>
                                {amount} coins
                            </span>{" "}
                            to {recipient} was refunded to your coin balance
                        </>
                    ) : (
                        <>
                            You purchased{" "}
                            <span className={`font-medium tracking-normal leading-5 ${textColor}`}>
                                {amount} coins
                            </span>{" "}
                            for{" "}
                            <span className={`font-medium tracking-normal leading-5 ${textColor}`}>
                                ${price}
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NotificationItem;