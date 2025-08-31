import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexander L | Full Stack Developer | Remote Software Engineer",
  description: "Portfolio of Alexander L – Full Stack Engineer specializing in AI-integrated solutions, scalable apps, and real-time communication tools. Available for remote roles.",
  keywords: ["Alexander L", "Full Stack Developer", "Software Engineer", "AI Developer", "Next.js", "React", "Node.js", "TypeScript", "Remote Work", "AI Integration", "Web Development"],
  authors: [{ name: "Alexander L" }],
  openGraph: {
    title: "Alexander L | Full Stack Developer",
    description: "Full Stack Engineer specializing in AI-integrated solutions, scalable apps, and real-time communication tools.",
    url: "https://alexanderl-portfolio.com",
    siteName: "Alexander L Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander L | Full Stack Developer",
    description: "Full Stack Engineer specializing in AI-integrated solutions, scalable apps, and real-time communication tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
