// SIGNUP PAGE
import { db } from "@/utils/connect";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import UserForm from "@/components/UserForm";
import EnterAnimation from "@/components/Enteranimation";

export default async function UserSignUpPage() {
  const { userId } = await auth();

  async function handleSubmit(formData: FormData) {
    "use server";
    const data = Object.fromEntries(formData);

    await db.query(
      `INSERT INTO users (username, bio, drink, avatar, clerk_id) VALUES ($1, $2, $3, $4, $5)`,
      [data.username, data.bio, data.drink, data.avatar, userId]
    );
    redirect("/chats");
  }

  return (
    <div className="h-screen">
      <div className="flex justify-center m-4">
        <EnterAnimation>
          <div className="text-brew-navy text-2xl px-10 py-2 text-center bg-white rounded-2xl">
            Tell us more!
          </div>
        </EnterAnimation>
      </div>
      <UserForm handleSubmit={handleSubmit} />
    </div>
  );
}
