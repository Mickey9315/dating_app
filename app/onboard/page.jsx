import Image from "next/image";

function Reset() {

    return (
        <div className="relative flex-grow flex flex-col animate-slide-in-right">
            <div className="flex overflow-hidden flex-col justify-center px-16 py-96 mx-auto w-full bg-indigo-600 max-w-[480px]">
                <Image
                    loading="lazy"
                    src="/assets/images/ballpitt.svg"
                    alt="Hero section decorative image"
                    className="object-contain w-full aspect-[5.75]"
                    width="270" 
                    height="48"
                />
            </div>
        </div>
    );
}

export default Reset;
