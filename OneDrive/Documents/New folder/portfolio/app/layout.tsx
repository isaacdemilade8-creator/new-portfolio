import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Oyenuga Demilade Isaac | AI & Full-Stack Engineer",
  description:
    "Personal portfolio of Oyenuga Demilade Isaac — AI Engineer, Full-Stack Software Engineer & Frontend Developer. Building intelligent software and beautiful user experiences.",
  keywords: [
    "AI Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Nigeria",
    "Software Engineer",
  ],
  authors: [{ name: "Oyenuga Demilade Isaac" }],
  openGraph: {
    title: "Oyenuga Demilade Isaac | AI & Full-Stack Engineer",
    description:
      "AI Engineer, Full-Stack Software Engineer & Frontend Developer based in Nigeria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased bg-[#050816] text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
