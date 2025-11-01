// SIGN UP / PROFILE PAGE
import { db } from "@/utils/connect";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import UserForm from "@/components/UserForm";
import { getUserInfo } from "@/utils/userInfo";

export default async function UserSignUpPage() {
  const { userId } = await auth();
  const user = await getUserInfo();

  async function handleSubmit(formData: FormData) {
    "use server";
    const data = Object.fromEntries(formData);

    await db.query(
      `INSERT INTO users (username, bio, drink, avatar, clerk_id) VALUES ($1, $2, $3, $4, $5)`,
      [data.username, data.bio, data.drink, data.avatar, userId]
    );
    redirect("/users/profile");
  }

  return (
    <div className="h-screen">
      <div className="flex justify-center m-4">
        <div className="text-2xl text-center">Hello you</div>
      </div>
      <UserForm handleSubmit={handleSubmit} user={user} />
    </div>
  );
}
