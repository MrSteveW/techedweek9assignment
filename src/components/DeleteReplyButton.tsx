"use client";

interface DeleteProps {
  handleDelete: (replyId: number, chatId: number) => void | Promise<void>;
  replyId: number;
  chatId: number;
}

export default function DelReplyButton({
  replyId,
  chatId,
  handleDelete,
}: DeleteProps) {
  return (
    <button
      onClick={() => {
        handleDelete(replyId, chatId);
      }}
    >
      Delete comment
    </button>
  );
}
