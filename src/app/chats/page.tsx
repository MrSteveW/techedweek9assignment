// LOOK AT ALL CHATS
import { db } from "@/utils/connect";
import Link from "next/link";
import Image from "next/image";
import brewiconsm from "../../../public/brewiconsm.webp";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import EnterAnimation from "@/components/Enteranimation";

export default async function AllChats() {
  const chats = (
    await db.query(`SELECT 
      chats.id,
      chats.title,
      chats.content,
      chats.created_at,
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
          <Link href="/chats/add" className="hover:text-white">
            <div className="flex text-2xl bg-chat-dark rounded-2xl px-10 py-2 text-white text-center bg-brew-orange hover:bg-brew-navy">
              <Image src={brewiconsm} alt="" height={40} />
              <div className="ml-4">Add new chat</div>
            </div>
          </Link>
        </div>
      </EnterAnimation>

      <div className="flex justify-center">
        <div className="w-4/5 bg-white">
          {chats.map((chat) => (
            <div className="border border-gray-300 flex m-4 p-2" key={chat.id}>
              <div className="w-1/6">
                <HoverCard>
                  <HoverCardTrigger>
                    {chat.avatar ? (
                      <div className="w-10 h-10 relative">
                        <Image
                          src={chat.avatar}
                          alt=""
                          fill={true}
                          unoptimized
                        />
                      </div>
                    ) : (
                      <div className="w-50 h-50 relative">IMAGE TBD</div>
                    )}
                    <div>{chat.username}</div>
                    <HoverCardContent>
                      <div>Drinks {chat.drink}</div>
                      <div>
                        Joined{" "}
                        {chat.membersince.toLocaleString("en-GB", {
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                    </HoverCardContent>
                  </HoverCardTrigger>
                </HoverCard>
              </div>
              <div className="w-5/6">
                <Link href={`/chats/${chat.id}`}>
                  <div className="font-bold">{chat.title}</div>
                  <div>{chat.content}</div>
                  <div className="text-gray-700 text-sm">
                    {new Date(chat.created_at).toLocaleDateString("en-GB", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    })}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
