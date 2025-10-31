import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex justify-center m-4">
      <div className="text-2xl px-10 py-2 text-center ">
        <div className="px-10">Ooops. Not user at this URL.</div>
        <div className="px-10">
          <Link href="/users">Back to users</Link>
        </div>
      </div>
    </div>
  );
}
