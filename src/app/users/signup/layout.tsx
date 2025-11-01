import NavBarNewUser from "@/components/NavBarNewUser";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBarNewUser />
      <main>{children}</main>
    </>
  );
}
