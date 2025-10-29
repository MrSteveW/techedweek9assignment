// LOOK AT ALL CHATS
import { db } from "@/utils/connect";
import Link from "next/link";

type paramsType = {
  searchParams: {
    query: string;
    sort: string;
  };
};

export default async function AllChats({ searchParams }: paramsType) {
  const query = await searchParams;

  const chats = (await db.query(`SELECT * FROM chats`)).rows;
  let sortedChats = chats ? [...chats] : [];

  if (query.sort === "asc") {
    sortedChats = sortedChats.sort((a, b) => a.title.localeCompare(b.title));
  } else if (query.sort === "desc") {
    sortedChats = sortedChats.sort((a, b) => b.title.localeCompare(a.title));
  }

  console.log(chats);
  return (
    <div className="h-screen">
      <div className="text-center m-4 text-xl text-black">
        <div className="bg-chat-light rounded-2xl p-1">
          <Link href="/chats/?sort=asc" className="hover:text-chat-dark">
            ascending
          </Link>{" "}
          or{" "}
          <Link href="/chats/?sort=desc" className="hover:text-chat-dark">
            descending
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap">
        {sortedChats.map((chat) => (
          <div key={chat.id} className="w-1/4 m-4">
            <Link href={`/chats/${chat.id}`}>
              <p>{chat.title}</p>
              <p>{chat.content}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
