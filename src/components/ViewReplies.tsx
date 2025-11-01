/* eslint-disable @typescript-eslint/no-unused-vars */
import { db } from "@/utils/connect";
import DelReplyButton from "./DeleteReplyButton";
import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";

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
    await db.query(
      `SELECT 
        replies.id,
        replies.chat_id, 
        replies.user_id, 
        replies.content,
        replies.created_at,
        users.username AS username
      FROM replies 
      JOIN users ON replies.user_id = users.id 
      WHERE replies.chat_id = $1
      ORDER BY replies.created_at ASC`,
      [id]
    )
  ).rows;
  return (
    <div className="w-full justify-items-center">
      <div className="w-1/2 flex flex-col ">
        {replies.map((reply) => (
          <div
            key={reply.id}
            className=" bg-brew-lightblue p-4 mb-4 rounded-2xl"
          >
            <p className="font-bold">
              {reply.username} on{" "}
              {new Date(reply.created_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
              })}
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
