// INDIVIDUAL CHAT PAGE
import { db } from "@/utils/connect";
import RepliesForm from "@/components/RepliesForm";
import ViewReplies from "@/components/ViewReplies";
import ViewChat from "@/components/ViewChat";

type paramsType = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: paramsType) {
  const { id } = await params;
  const chat = (await db.query(`SELECT * FROM chats WHERE id = ${id}`)).rows[0];
  return {
    title: `${chat.title}`,
    description: `Make a brew, start a chat`,
    openGraph: {
      description: `${chat.title}`,
      url: `https://techedweek9assignment.vercel.app/chats/${chat.id}}`,
    },
  };
}

export default async function IndividualChat({ params }: paramsType) {
  const { id } = await params;
  const chat = (await db.query(`SELECT * FROM chats WHERE id = ${id}`)).rows[0];

  return (
    <div className="justify-items-center">
      <ViewChat chat={chat} />
      <RepliesForm id={chat.id} />
      <ViewReplies id={chat.id} />
    </div>
  );
}
