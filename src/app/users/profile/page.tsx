// VIEW YOUR PROFILE
import UserProfile from "@/components/UserProfile";
import { getUserInfo } from "@/utils/userInfo";

export default async function UserProfilePage() {
  const user = await getUserInfo();

  return (
    <div className="h-screen">
      <div className="flex justify-center m-4">
        <div className="text-2xl px-10 text-center ">Hello you</div>
      </div>
      <UserProfile user={user} />
    </div>
  );
}
