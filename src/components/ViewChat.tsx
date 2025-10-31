import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";

type chatType = {
  chat: {
    id: number;
    title: string;
    user_id: string;
    username: string;
    content: string;
  };
};

export default async function ViewChat({ chat }: chatType) {
  const user = await currentUser();
  return (
    <div className="bg-amber-200 flex flex-row w-1/2 p-4 m-4 mb-4 rounded-2xl">
      <div>
        <div className="m-2">{chat.username}</div>
        <div className="w-10 h-10 relative">
          <Image
            src="https://api.dicebear.com/9.x/open-peeps/svg?face=smile"
            alt=""
            fill={true}
            unoptimized
          />
        </div>
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
