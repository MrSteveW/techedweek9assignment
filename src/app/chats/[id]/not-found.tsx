import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex justify-center m-4">
      <div className="text-2xl px-10 py-2 text-center ">
        <div className="px-10">Ooops. No chats at this URL.</div>
        <div className="p-6">
          <Link href="/chats">
            <Button variant="default" size="xl">
              Back to chats
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
