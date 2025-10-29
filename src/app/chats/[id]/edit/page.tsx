// EDIT INDIVIDUAL POST - SECURED
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/utils/connect";
import ChatForm from "@/components/ChatForm";

export default async function EditPost({ params }) {
  const user = await currentUser();
  const { id } = await params;
  const post = (await db.query(`SELECT * FROM posts WHERE id = $1`, [id]))
    .rows[0];

  if (post.username != user.username) {
    return (
      <div className="w-full fixed top-30 bg-sliced-blue text-white p-4 text-2xl text-center">
        You may only edit your posts
      </div>
    );
  }

  async function handleSubmit(formData) {
    "use server";

    const { title, content, img } = Object.fromEntries(formData);
    await db.query(
      `UPDATE posts SET username = $1, title = $2, content = $3, img = $4 WHERE id = $5`,
      [user.username, title, content, img, id]
    );
    revalidatePath("/posts");
    redirect("/posts");
  }

  return <ChatForm handleSubmit={handleSubmit} post={post} />;
}
