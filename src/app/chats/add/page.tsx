// ADD A NEW POST
import { getUserInfo } from "@/utils/userInfo";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/utils/connect";
import ChatForm from "@/components/ChatForm";
import EnterAnimation from "@/components/Enteranimation";

export default async function AddChatPage() {
  const user = await getUserInfo();
  async function handleSubmit(formData: FormData) {
    "use server";

    const { title, content } = Object.fromEntries(formData);

    const newChat = db.query(
      `INSERT INTO chats (user_id, title, content) VALUES ($1, $2, $3)`,
      [user?.id, title, content]
    );
    revalidatePath("/chats");
    redirect("/chats");
  }

  return (
    <div className="h-screen">
      <EnterAnimation>
        <div className="flex justify-center m-4">
          <div className="flex text-2xl bg-chat-dark rounded-2xl px-10 py-2 text-brew-navy text-center bg-white">
            <div className="ml-4">Let`s talk</div>
          </div>
        </div>
      </EnterAnimation>
      <ChatForm handleSubmit={handleSubmit} />
    </div>
  );
}
