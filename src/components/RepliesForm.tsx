import { revalidatePath } from "next/cache";
import { db } from "@/utils/connect";
import styles from "./addchat.module.css";

interface ReplyProps {
  handleSubmit: (formData: FormData) => void | Promise<void>;
}

export default async function RepliesForm({ handleSubmit }: ReplyProps) {
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
