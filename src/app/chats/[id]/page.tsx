// INDIVIDUAL CHAT PAGE
import { db } from "@/utils/connect";
import { getUserInfo } from "@/utils/userInfo";
import RepliesForm from "@/components/RepliesForm";
import ViewReplies from "@/components/ViewReplies";
import ViewChat from "@/components/ViewChat";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

type paramsType = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: paramsType) {
  const { id } = await params;
  const chat = (await db.query(`SELECT * FROM chats WHERE id = ${id}`)).rows[0];
  return {
    title: `Brew | ${chat.title}`,
    description: `Make a brew, start a chat`,
    openGraph: {
      description: `Brew | ${chat.title}`,
      url: `https://techedweek9assignment.vercel.app/chats/${chat.id}}`,
    },
  };
}

export default async function IndividualChatPage({ params }: paramsType) {
  const user = await getUserInfo();
  const { id } = await params;
  const chat = (
    await db.query(`SELECT chats.id,
  chats.title,
  chats.content,
  chats.created_at,
  users.avatar,
  users.id AS userId,
  users.username AS username FROM chats
   JOIN users ON chats.user_id = users.id WHERE chats.id = ${id}
    `)
  ).rows[0];

  if (!chat) {
    notFound();
  }

  async function handleSubmit(formData: FormData) {
    "use server";
    const { content } = Object.fromEntries(formData);

    const newReply = db.query(
      `INSERT INTO replies (chat_id, user_id, content) VALUES ($1, $2, $3)`,
      [id, user?.id, content]
    );
    revalidatePath(`chats/${id}`);
  }

  return (
    <div className="justify-items-center">
      <ViewChat chat={chat} />
      <RepliesForm handleSubmit={handleSubmit} />
      <ViewReplies id={chat.id} />
    </div>
  );
}
