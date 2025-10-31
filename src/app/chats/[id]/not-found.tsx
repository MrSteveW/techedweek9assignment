import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex justify-center m-4">
      <div className="text-2xl px-10 py-2 text-center ">
        <div className="px-10">Ooops. Not a chat at this URL.</div>
        <div className="px-10">
          <Link href="/chats">Back to chats</Link>
        </div>
      </div>
    </div>
  );
}
