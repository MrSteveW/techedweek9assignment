// SIGN UP PAGE
import { db } from "@/utils/connect";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import UserForm from "@/components/UserForm";
import { getUserInfo } from "@/utils/userInfo";

export default async function UserSignUpPage() {
  const { userId } = await auth();
  const user = await getUserInfo();
  // check if user's details aready exist and pass into Users details
  //  const user = (await db.query(`SELECT * FROM posts WHERE id = $1`, [id]))
  //   .rows[0];

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
    <div className="h-screen">
      <div className="flex justify-center m-4">
        <div className="text-2xl px-10 text-center ">Welcome to Brew!</div>
      </div>
      <UserForm handleSubmit={handleSubmit} user={user} />
    </div>
  );
}
