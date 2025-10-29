import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
type chatType = {
  chat: {
    id: number;
    title: string;
    user_id: string;
    content: string;
  };
};

export default async function ViewPost({ chat }: chatType) {
  const user = await currentUser();
  return (
    <div className="bg-amber-200 flex flex-row w-1/2 p-4 mb-4 rounded-2xl">
      <div>
        <div className="m-2">{chat.title}</div>
        <div className="m-2">By {chat.user_id}</div>
        <div className="m-2">{chat.content}</div>
        {user?.username == chat?.user_id && (
          <Link
            href={`/posts/${chat.id}/edit`}
            className="italic  rounded-lg p-1.5 bg-sliced-cyan hover:bg-sliced-blue hover:text-white"
          >
            Edit post
          </Link>
        )}
      </div>
    </div>
  );
}
