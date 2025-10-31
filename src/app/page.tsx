import Image from "next/image";
import brewiconbig from "../../public/brewiconbig.webp";
import WelcomeAccordian from "@/components/WelcomeAccordian";
import Link from "next/link";
import EnterAnimation from "@/components/Enteranimation";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center">
        <div className="px-8">
          <Image src={brewiconbig} alt="" height={200} />
        </div>

        <EnterAnimation>
          <div className="text-6xl bg-brew-orange p-3 font-kalam rounded-2xl  text-white">
            Brew
          </div>
        </EnterAnimation>
      </div>

      <div className="flex flex-col items-center text-2xl">
        <div className="m-4 bg-brew-orange p-2 rounded-2xl text-white hover:bg-brew-navy">
          <Link href="/chats" className="m-4">
            Make a brew, start a chat
          </Link>
        </div>
        <div className="w-100">
          <WelcomeAccordian />
        </div>
      </div>
      <div></div>
    </div>
  );
}
