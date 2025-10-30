// EDIT INDIVIDUAL CHAT
import { getUserInfo } from "@/utils/userInfo";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/utils/connect";
import ChatForm from "@/components/ChatForm";

type paramsType = {
  params: {
    id: string;
  };
};

export default async function EditChat({ params }: paramsType) {
  const user = await getUserInfo();
  const { id } = await params;
  const chat = (await db.query(`SELECT * FROM chats WHERE id = $1`, [id]))
    .rows[0];

  if (chat.user_id != user?.id) {
    return (
      <div className="w-full fixed top-30 bg-dark-blue text-white p-4 text-2xl text-center">
        You may only edit your own chats
      </div>
    );
  }

  async function handleSubmit(formData: FormData) {
    "use server";

    const { title, content } = Object.fromEntries(formData);
    await db.query(
      `UPDATE chats SET user_id = $1, title = $2, content = $3 WHERE id = $4`,
      [user?.id, title, content, id]
    );
    revalidatePath("/chats");
    redirect("/chats");
  }

  return <ChatForm handleSubmit={handleSubmit} chat={chat} />;
}
