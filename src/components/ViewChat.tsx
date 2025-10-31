import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";

type chatType = {
  chat: {
    id: number;
    title: string;
    user_id: string;
    avatar: string;
    username: string;
    content: string;
  };
};

export default async function ViewChat({ chat }: chatType) {
  const user = await currentUser();
  return (
    <div className="bg-white border border-gray-300 flex flex-row w-1/2 p-4 m-4 mb-4 rounded-2xl">
      <div className="p-2">
        <div className="w-15 h-15 relative">
          <Image src={chat?.avatar} alt="" fill={true} unoptimized />
        </div>
        <div className="mt-1">{chat.username}</div>
      </div>
      <div>
        <div className="m-2 font-bold">{chat.title}</div>

        <div className="m-2">{chat.content}</div>
        {user?.id == chat?.user_id && (
          <Link
            href={`/chats/${chat.id}/edit`}
            className="italic  rounded-lg p-1.5 bg-sliced-cyan hover:bg-sliced-blue hover:text-white"
          >
            Edit chat
          </Link>
        )}
      </div>
    </div>
  );
}
