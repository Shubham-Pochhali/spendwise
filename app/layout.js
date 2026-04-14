import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "SpendWise",
  description: "Track your expenses effortlessly with SpendWise.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={'${inter.className}'}
      >
        {/*header*/}
        <header>
          <Header />
           </header>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        {/*footer*/}
        <footer>
          <p className="text-center p-4 text-sm text-gray-500">
            &copy; 2026 SpendWise. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
