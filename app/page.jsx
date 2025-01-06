import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div>Onboard</div>
      <div className="flex flex-col gap-4 ml-4">
        <Link className="hover:text-blue-500" href={"/login"}>
          Login
        </Link>
        <Link className="hover:text-blue-500" href={"/reset1"}>
          Reset1
        </Link>
        <Link className="hover:text-blue-500" href={"/reset1"}>
          Reset1
        </Link>
        <Link className="hover:text-blue-500" href={"/setA1"}>
          setA1
        </Link>
        <Link className="hover:text-blue-500" href={"/setA2"}>
          setA2
        </Link>
        <Link className="hover:text-blue-500" href={"/setA3"}>
          setA3
        </Link>
        <Link className="hover:text-blue-500" href={"/setA6"}>
          setA6
        </Link>
        <Link className="hover:text-blue-500" href={"/setA7"}>
          setA7
        </Link>
        <Link className="hover:text-blue-500" href={"/setA9"}>
          setA9
        </Link>
      </div>
    </div>
  );
}
