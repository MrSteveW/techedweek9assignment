// LOOK AT ALL CHATS
import { db } from "@/utils/connect";
import Link from "next/link";
import Image from "next/image";

export default async function AllChats() {
  const chats = (
    await db.query(`SELECT 
      chats.id,
      chats.title,
      chats.content,
      chats.created_at,
      users.username AS username,
      users.avatar AS avatar
    FROM chats
    JOIN users ON chats.user_id = users.id
     ORDER BY chats.created_at DESC
  `)
  ).rows;

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
        <div className="w-4/5 bg-white">
          {chats.map((chat) => (
            <Link href={`/chats/${chat.id}`} key={chat.id}>
              <div className="border border-gray-300 flex m-4 p-2">
                <div className="w-1/6">
                  {chat.avatar ? (
                    <div className="w-10 h-10 relative">
                      <Image src={chat.avatar} alt="" fill={true} unoptimized />
                    </div>
                  ) : (
                    <div className="w-50 h-50 relative">IMAGE TBD</div>
                  )}
                  <div>{chat.username}</div>
                </div>
                <div className="w-5/6">
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
