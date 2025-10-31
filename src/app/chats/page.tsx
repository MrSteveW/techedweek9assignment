// LOOK AT ALL CHATS
import { db } from "@/utils/connect";
import Link from "next/link";

export default async function AllChats() {
  const chats = (
    await db.query(`SELECT chats.id,
  chats.title,
  chats.content,
  chats.created_at,
  users.username AS username FROM chats
    JOIN users ON chats.user_id = users.id`)
  ).rows;
  console.log(chats);
  return (
    <div className="h-screen">
      <div className="flex justify-center m-4">
        <Link href="/chats/add" className="hover:text-white">
          <div className="text-2xl bg-chat-dark rounded-2xl px-10 py-2 text-center bg-brew-orange ">
            Add new chat
          </div>
        </Link>
      </div>

      <div className="flex justify-center">
        <div className="w-3/5 bg-white">
          {chats.map((chat) => (
            <Link href={`/chats/${chat.id}`} key={chat.id}>
              <div className="border border-gray-300 flex m-4 p-2">
                <div className="w-1/5">{chat.username}</div>
                <div className="w-4/5">
                  <div className="font-bold">{chat.title}</div>
                  <div>{chat.content}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
