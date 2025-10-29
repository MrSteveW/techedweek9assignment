"use client";

type ChatType = {
  replyId: number;
  chatId: number;
};

interface ChatProps {
  handleSubmit: (formData: FormData) => void | Promise<void>;
  chat?: ChatType; // Optional - undefined when creating new chat
}

export default function DelReplyButton({ replyId, chatId, handleDelete }) {
  return (
    <button
      onClick={() => {
        handleDelete(replyId, chatId);
      }}
      className="delete-button"
    >
      Delete comment
    </button>
  );
}
