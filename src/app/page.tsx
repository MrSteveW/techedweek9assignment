import Image from "next/image";
import brewiconbig from "../../public/brewiconbig.webp";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center">
        <Image src={brewiconbig} alt="" height={200} />
        <div className="text-6xl bg-chat-dark p-4 rounded-2xl  text-white">
          Brew
        </div>
      </div>

      <div className="flex flex-col items-center text-2xl">
        <div className="m-4 bg-chat-dark p-2 rounded-2xl text-white">
          Make a brew, start a chat
        </div>
      </div>
    </div>
  );
}
