// ADD A NEW POST - SECURED
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/utils/connect";
import PostForm from "@/components/PostForm";

export default async function AddChatPage() {
  const user = await currentUser();

  async function handleSubmit(formData) {
    "use server";

    const { title, content, img } = Object.fromEntries(formData);

    const newPost = db.query(
      `INSERT INTO posts (username, title, content, img) VALUES ($1, $2, $3, $4)`,
      [user.username, title, content, img]
    );
    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <div className="h-screen">
      <div className="w-full  bg-sliced-blue text-white p-4 text-2xl text-center">
        Let`s talk
      </div>
      <PostForm handleSubmit={handleSubmit} />
    </div>
  );
}
