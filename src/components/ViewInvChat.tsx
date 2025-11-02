import { db } from "@/utils/connect";
import { getUserInfo } from "@/utils/userInfo";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

type chatType = {
  chat: {
    id: number;
    title: string;
    userid: number;
    avatar: string;
    username: string;
    content: string;
    created_at: Date;
  };
};

export default async function ViewChat({ chat }: chatType) {
  async function handleDelete(formData: FormData) {
    "use server";
    const { chatid } = Object.fromEntries(formData);
    await db.query("DELETE FROM chats WHERE id = $1 RETURNING *", [chatid]);
    redirect(`/chats`);
  }
  const user = await getUserInfo();

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
        <div className="text-gray-700 text-sm">
          {new Date(chat.created_at).toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}
        </div>
        {user?.id == chat?.userid && (
          <div className="flex w-40 justify-between">
            <Link
              href={`/chats/${chat.id}/edit`}
              className="rounded-lg p-1.5 text-white bg-brew-orange hover:bg-brew-navy"
            >
              Edit chat
            </Link>
            <form action={handleDelete}>
              <input type="hidden" value={chat.id} name="chatid" />
              <button
                type="submit"
                className="rounded-lg p-1.5 text-white bg-brew-orange hover:bg-brew-navy"
              >
                Delete
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
