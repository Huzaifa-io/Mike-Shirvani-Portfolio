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
  // ✅ WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mike Shirvani Portfolio",
    alternateName: ["Mike Shirvani", "Mike"],
    url: "https://mike-shirvani-portfolio.vercel.app",
    description:
      "Personal portfolio website of Mike Shirvani - Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web applications",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    author: {
      "@type": "Person",
      name: "Mike Shirvani",
    },
  };

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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main id="main-content">{children}</main>
        </ThemeProvider>

        <noscript>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              background: "#ef4444",
              color: "white",
              padding: "1rem",
              textAlign: "center",
              zIndex: 9999,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            JavaScript is required to view this portfolio properly.
          </div>
        </noscript>
      </body>
    </html>
  );
}
