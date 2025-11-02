// LOOK AT ALL CHATS
import { db } from "@/utils/connect";
import Link from "next/link";
import Image from "next/image";
import brewiconsm from "../../../public/brewiconsm.webp";
import EnterAnimation from "@/components/Enteranimation";
import Gestures from "@/components/Gestures";
import ChatCard from "@/components/ChatCard";

export default async function AllChats() {
  const chats = (
    await db.query(`SELECT 
      chats.id,
      chats.title,
      chats.content,
      chats.created_at,
      users.id AS userid,
      users.username AS username,
      users.avatar AS avatar,
      users.created_at AS memberSince,
      users.drink as drink
    FROM chats
    JOIN users ON chats.user_id = users.id
     ORDER BY chats.created_at DESC
  `)
  ).rows;

  return (
    <div className="h-screen">
      <EnterAnimation>
        <div className="flex justify-center m-4">
          <Gestures>
            <Link href="/chats/add" className="hover:text-white">
              <div className="flex text-2xl bg-chat-dark rounded-2xl px-10 py-2 text-white text-center bg-brew-orange hover:bg-brew-navy">
                <Image src={brewiconsm} alt="" height={40} />
                <div className="ml-4">Add new chat</div>
              </div>
            </Link>
          </Gestures>
        </div>
      </EnterAnimation>

      <div className="flex justify-center">
        <div className="w-4/5 bg-white">
          {chats.map((chat) => (
            <ChatCard chat={chat} key={chat.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
