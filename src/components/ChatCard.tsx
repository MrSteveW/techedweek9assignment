import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import Image from "next/image";

type ChatType = {
  chat: {
    id: number;
    userid: number;
    username: number;
    title: string;
    content: string;
    avatar: string;
    drink: string;
    membersince: Date;
    created_at: Date;
  };
};

export default function ChatCard({ chat }: ChatType) {
  return (
    <div className="border border-gray-300 flex m-4 p-2" key={chat.id}>
      <div className="w-1/6">
        <HoverCard>
          <HoverCardTrigger asChild>
            <div>
              {chat.avatar ? (
                <Link href={`/users/${chat.userid}`} className="block">
                  <div className="w-10 h-10 relative">
                    <Image src={chat.avatar} alt="" fill={true} unoptimized />
                  </div>
                </Link>
              ) : (
                <div className="w-50 h-50 relative">IMAGE TBD</div>
              )}
              <Link href={`/users/${chat.userid}`} className="block">
                {chat.username}
              </Link>
            </div>
          </HoverCardTrigger>
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
  );
}
