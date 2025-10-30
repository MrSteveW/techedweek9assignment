// LOOK AT ALL CHATS
import { db } from "@/utils/connect";
import Link from "next/link";

type paramsType = {
  searchParams: {
    query: string;
    sort: string;
  };
};

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
        <div className="w-1/4 text-2xl bg-chat-dark rounded-2xl p-4 text-center">
          <Link href="/chats/add" className="m-4  hover:text-sliced-cyan">
            Add new chat
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap">
        {chats.map((chat) => (
          <div key={chat.id} className="w-1/4 m-4">
            <Link href={`/chats/${chat.id}`}>
              <p>{chat.title}</p>
              <p>{chat.content}</p>
              <p>{chat.username}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
