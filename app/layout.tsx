import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://mike-shirvani-portfolio.vercel.app";

  return {
    title: {
      default: "Mike Shirvani | Full Stack Developer",
      template: "%s | Mike Shirvani",
    },
    description:
      "Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web applications. View projects, skills, and contact information.",
    authors: [{ name: "Mike Shirvani", url }],
    creator: "Mike Shirvani",
    publisher: "Mike Shirvani",
    applicationName: "Mike Shirvani Portfolio",
    openGraph: {
      type: "profile",
      locale: "en_US",
      url,
      title: "Mike Shirvani | Full Stack Developer",
      description:
        "Personal portfolio of Mike Shirvani. Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
      siteName: "Mike Shirvani Portfolio",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Mike Shirvani - Full Stack Developer Portfolio",
          type: "image/jpeg",
        },
      ],
    },
    icons: {
      icon: "/og-image.jpg",
    },
    metadataBase: new URL(url),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main id="main-content">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
