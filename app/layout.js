import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import Link from "next/link";
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
          <footer className="bg-white border-t py-12 px-4 md:px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">SpendWise</h3>
                <p className="text-gray-600 text-sm">
                  Your intelligent financial copilot. Manage your money with confidence and clarity.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link></li>
                  <li><Link href="/pricing" className="hover:text-blue-600">Pricing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t pt-8 text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} SpendWise. All rights reserved.
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
