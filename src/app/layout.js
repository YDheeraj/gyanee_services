import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata = {
  title: "Gyanee Services",
  description: "Expert home appliance repair services at your door",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <FloatingActions></FloatingActions>
        <Footer />
      </body>
    </html>
  );
}
