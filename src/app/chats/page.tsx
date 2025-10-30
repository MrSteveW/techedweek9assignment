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
    await db.query(`SELECT * FROM chats
    JOIN users ON chats.user_id = users.id`)
  ).rows;
  console.log(chats);
  return (
    <div className="h-screen">
      <div className="text-center m-4 text-xl text-black"></div>
      <div className="flex flex-wrap">
        {chats.map((chat) => (
          <div key={chat.id} className="w-1/4 m-4">
            <Link href={`/chats/${chat.id}`}>
              <p>{chat.title}</p>
              <p>{chat.content}</p>
              <p>{chat.user_id}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
