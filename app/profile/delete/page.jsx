"use client"
import * as React from "react";
import { DeleteButton, CancelButton } from "./ActionButtons";
import { useRouter } from "next/navigation";

function DeleteAccountModal() {

    const router = useRouter();
    const handleDelete = () => {
        router.push("/onboard");
    };

    const handleCancel = () => {
        router.push("/profile");
    };

    return (
        <div className="flex flex-col animate-slide-in-right items-center pt-56 mx-auto w-full bg-black bg-opacity-80 max-w-[480px]" role="dialog" aria-labelledby="delete-account-title" aria-describedby="delete-account-description">
            <div className="flex overflow-hidden flex-col mt-52 pt-20 w-full bg-white rounded-[32px_32px_0px_0px]">
                <div className="flex flex-col px-6 w-full">
                    <img
                        loading="lazy"
                        src="/assets/images/valentine_broken_heart.webp"
                        className="object-contain w-20 aspect-square"
                        alt=""
                    />
                    <div className="flex flex-col mt-6 w-full">
                        <h2 id="delete-account-title" className="text-3xl font-semibold tracking-tighter leading-none text-black">
                            Delete your account?
                        </h2>
                        <p id="delete-account-description" className="mt-2 text-lg tracking-normal leading-6 text-gray-600">
                            Are you sure you want to delete your account? This action is
                            permanent and cannot be undone. If you're certain, please confirm
                            your decision.
                        </p>
                    </div>
                    <div className="flex gap-4 items-start mt-6 w-full text-base font-medium tracking-normal leading-none">
                        <DeleteButton onClick={handleDelete} />
                        <CancelButton onClick={handleCancel} />
                    </div>
                </div>
                <div className="flex pb-10 w-full bg-white min-h-[40px]" />
            </div>
        </div>
    );
}

export default DeleteAccountModal;