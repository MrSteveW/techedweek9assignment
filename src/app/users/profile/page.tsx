// VIEW YOUR PROFILE
import UserProfile from "@/components/UserProfile";

export default async function UserProfilePage() {
  return (
    <div className="h-screen">
      <div className="flex justify-center m-4">
        <div className="text-2xl px-10 text-center ">Hello you</div>
      </div>
      <UserProfile user={user} />
    </div>
  );
}
