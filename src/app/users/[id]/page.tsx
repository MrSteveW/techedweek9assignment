// VIEW INDIVIDUAL USER PAGE
import { db } from "@/utils/connect";
import { notFound } from "next/navigation";
import UserProfile from "@/components/UserProfile";

type paramsType = {
  params: {
    id: string;
  };
};

export default async function IndividualUserPage({ params }: paramsType) {
  const { id } = await params;
  const user = (await db.query(`SELECT * FROM users WHERE id = ${id}`)).rows[0];

  if (!user) {
    notFound();
  }

  return (
    <div className="h-screen">
      <UserProfile user={user} />
    </div>
  );
}
