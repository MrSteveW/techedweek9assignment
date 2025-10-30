// export default function ChatForm({ handleSubmit, chat })
import React from "react";
import styles from "./addchat.module.css";

type ChatType = {
  title: string;
  content: string;
};

interface ChatProps {
  handleSubmit: (formData: FormData) => void | Promise<void>;
  chat?: ChatType;
}

export default function ChatForm({ chat, handleSubmit }: ChatProps) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/2 rounded-2xl bg-white">
        <form action={handleSubmit}>
          {/* TITLE */}
          <div className="m-4">
            <label className="block text-gray-700 text-bg font-bold mb-2">
              Title
            </label>
            <input
              className={styles.input}
              name="title"
              id="title"
              type="text"
              defaultValue={chat?.title || ""}
              required
            />
          </div>

          {/* CONTENT */}
          <div className="m-4">
            <label className="block text-gray-700 text-bg font-bold mb-2">
              Chat
            </label>
            <textarea
              className={styles.input}
              name="content"
              id="content"
              defaultValue={chat?.content || ""}
              required
            />
          </div>
          <div className="text-center m-4">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
