import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Geist } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brew",
  description: "Make a brew, start a chat",
  openGraph: {
    title: "Brew",
    description: "Make a brew, start a chat",
    url: "https://techedweek9assignment.vercel.app/",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} antialiased`}>
          {/* {isAuthenticated && <NavBar />} */}
          <NavBar />
          <div className="fixed top-2 right-15 text-center text-white">
            <SignedOut>
              <SignInButton>
                <button className="bg-sliced-cyan text-black rounded-full text-sm  h-10 sm:h-12 px-3 mr-4 cursor-pointer hover:text-white hover:bg-sliced-purple">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-sliced-cyan text-black rounded-full text-sm  h-10 sm:h-12 px-3 mr-4 cursor-pointer hover:text-white hover:bg-sliced-purple">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {children}
          <footer className="w-full p-2 fixed bottom-0 bg-sliced-blue text-center text-white">
            Made by Steve
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
