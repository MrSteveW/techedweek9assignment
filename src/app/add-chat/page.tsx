// ADD A NEW POST - SECURED
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/utils/connect";
import ChatForm from "@/components/ChatForm";

export default async function AddChatPage() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const { title, content } = Object.fromEntries(formData);

    const newChat = db.query(
      `INSERT INTO chats (user_id, title, content) VALUES ($1, $2, $3)`,
      [userInfo.id, title, content]
    );
    revalidatePath("/chats");
    redirect("/chats");
  }

  return (
    <div className="h-screen">
      <div className="w-full  bg-dark-blue text-white p-4 text-2xl text-center">
        Let`s talk
      </div>
      <ChatForm handleSubmit={handleSubmit} />
    </div>
  );
}
