import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { db } from "@/utils/connect";
import styles from "./addchat.module.css";

type idType = {
  id: number;
};

export default async function RepliesForm({ id }: idType) {
  const user = await currentUser();

  async function handleSubmit(formData: FormData) {
    "use server";
    const { content } = Object.fromEntries(formData);

    const newReply = db.query(
      `INSERT INTO replies (chat_id, user_id, content) VALUES ($1, $2, $3)`,
      [id, "1", content]
    );
    revalidatePath(`chats/${id}`);
  }
  return (
    <div className="w-1/2 bg-white m-4 p-4 rounded-2xl">
      <form action={handleSubmit}>
        <label className="block text-gray-700 text-bg font-bold mb-2">
          Reply:
        </label>
        <textarea
          className={styles.commentInput}
          name="content"
          id="content"
          required
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
