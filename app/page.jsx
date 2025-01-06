import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div>Onboard</div>
      <div className="flex flex-col gap-4 ml-4">
        <Link className="hover:text-blue-500" href={"/auth/login"}>
          Login
        </Link>
        <Link className="hover:text-blue-500" href={"/auth/reset1"}>
          Reset1
        </Link>
        <Link className="hover:text-blue-500" href={"/auth/reset1"}>
          Reset1
        </Link>
        <Link className="hover:text-blue-500" href={"/setup/1"}>
          setA1
        </Link>
        <Link className="hover:text-blue-500" href={"/setup/2"}>
          setA2
        </Link>
        <Link className="hover:text-blue-500" href={"/setup/3"}>
          setA3
        </Link>
        <Link className="hover:text-blue-500" href={"/setup/6"}>
          setA6
        </Link>
        <Link className="hover:text-blue-500" href={"/setup/7"}>
          setA7
        </Link>
        <Link className="hover:text-blue-500" href={"/setup/9"}>
          setA9
        </Link>
        <Link className="hover:text-blue-500" href={"/onboard"}>
          Onboard
        </Link>
        <Link className="hover:text-blue-500" href={"/profile"}>
          Profile
        </Link>
        <Link className="hover:text-blue-500" href={"/profile/policy"}>
          Policy
        </Link>
      </div>
    </div>
  );
}
