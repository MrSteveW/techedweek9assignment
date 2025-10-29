/* eslint-disable @typescript-eslint/no-unused-vars */
import { db } from "@/utils/connect";
import DelReplyButton from "./DeleteReplyButton";
import { revalidatePath } from "next/cache";

type idType = {
  id: number;
};

async function handleDelete(id: number, chatId: number) {
  "use server";
  const result = db.query("DELETE FROM replies WHERE id = $1 RETURNING *", [
    id,
  ]);
  revalidatePath(`chats/${chatId}`);
}

export default async function ViewReplies({ id }: idType) {
  const replies = (
    await db.query(`SELECT * FROM replies WHERE chat_id = ${id}`)
  ).rows;
  return (
    <div className="w-full justify-items-center">
      <div className="w-1/2 flex flex-col ">
        {replies.map((reply) => (
          <div key={reply.id} className=" bg-green-300 p-4 mb-4 rounded-2xl">
            <p className="font-bold">
              {reply.username} on{" "}
              {new Date(reply.created_at).toLocaleDateString("en-GB")}
            </p>
            <p>{reply.content}</p>
            <DelReplyButton
              replyId={reply.id}
              chatId={id}
              handleDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
