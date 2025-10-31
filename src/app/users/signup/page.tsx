import { db } from "@/utils/connect";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import UserSignUpForm from "@/components/UserSignUpForm";

export default async function UserSignUpPage() {
  const { userId } = await auth();

  async function handleSubmit(formData: FormData) {
    "use server";
    const data = Object.fromEntries(formData);

    await db.query(
      `INSERT INTO users (username, bio, clerk_id) VALUES ($1, $2, $3)`,
      [data.username, data.bio, userId]
    );
    redirect("/users/profile");
  }

  return (
    <div>
      <UserSignUpForm handleSubmit={handleSubmit} />
    </div>
  );
}
