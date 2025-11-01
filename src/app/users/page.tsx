import { db } from "@/utils/connect";
import EnterAnimation from "@/components/Enteranimation";
import UserCard from "@/components/UserCard";
import { Suspense } from "react";
import LoadingThreeDotsPulse from "@/components/ui/LoadingThreeDotsPulse";

export default async function AllUsersPage() {
  const users = (await db.query(`SELECT * FROM users`)).rows;
  return (
    <div className="h-screen">
      <div className="flex justify-center m-4">
        <EnterAnimation>
          <div className="text-brew-navy text-2xl px-10 py-2 text-center bg-white rounded-2xl">
            Hello people!
          </div>
        </EnterAnimation>
      </div>
      <div className="flex justify-center">
        <Suspense fallback={<LoadingThreeDotsPulse />}>
          <div className="w-4/5 bg-white p-4 flex flex-wrap">
            {users.map((user) => (
              <UserCard user={user} key={user.id} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
