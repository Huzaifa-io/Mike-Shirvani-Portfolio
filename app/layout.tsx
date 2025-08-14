import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

// ✅ SEO Optimized Metadata
export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.muhammad-huzaifa.me";

  return {
    title: {
      default: "Muhammad Huzaifa | Full Stack Developer",
      template: "%s | Muhammad Huzaifa",
    },
    description:
      "Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web applications. View projects, skills, and contact information.",
    keywords: [
      "Muhammad Huzaifa",
      "Muhammad Huzaifa Portfolio",
      "Huzaifa Portfolio",
      "Muhammad Huzaifa Personal Website",
      "Developer Portfolio",
      "Full Stack Web Developer Portfolio",
      "Full Stack Developer",
      "Software Developer Portfolio",
      "Web Developer Portfolio",
      "Portfolio Website",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "Node.js Developer",
      "Express.js",
      "Tailwind CSS",
      "JavaScript",
      "Frontend Developer",
      "Backend Developer",
      "MERN Stack Developer",
      "Freelance Developer",
      "Modern Web Development",
      "Software Engineer",
    ],
    authors: [
      { name: "Muhammad Huzaifa", url: "https://www.muhammad-huzaifa.me" },
    ],
    creator: "Muhammad Huzaifa",
    publisher: "Muhammad Huzaifa",
    applicationName: "Muhammad Huzaifa Portfolio",
    openGraph: {
      type: "profile",
      locale: "en_US",
      url,
      title: "Muhammad Huzaifa | Full Stack Developer",
      description:
        "Personal portfolio of Muhammad Huzaifa. Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
      siteName: "Muhammad Huzaifa Portfolio",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Muhammad Huzaifa - Full Stack Developer Portfolio",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@HuzaifaDevz",
      creator: "@HuzaifaDevz",
      title: "Muhammad Huzaifa | Full Stack Developer",
      description:
        "Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web applications.",
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/og-image.jpg",
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
        "x-default": url,
      },
    },
    verification: {
      google: "KKoVDIut7ITjeBEgqkm8I1gPGW9iIRqmU5lbPow-eHE",
    },
    category: "technology",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ✅ WebSite Schema - Primary for Site Name Display
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Huzaifa Portfolio",
    alternateName: [
      "Muhammad Huzaifa",
      "Huzaifa",
    ],
    url: "https://www.muhammad-huzaifa.me",
    description:
      "Personal portfolio website of Muhammad Huzaifa - Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web applications",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    author: {
      "@type": "Person",
      name: "Muhammad Huzaifa",
    },
  };

  // ✅ Person Schema - Individual Portfolio Focus
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Huzaifa",
    givenName: "Muhammad",
    familyName: "Huzaifa",
    alternateName: ["Huzaifa", "Muhammad Huzaifa"],
    url: "https://www.muhammad-huzaifa.me",
    image: {
      "@type": "ImageObject",
      url: "https://www.muhammad-huzaifa.me/og-image.jpg",
      width: 1200,
      height: 630,
    },
    jobTitle: "Full Stack Developer",
    description:
      "Passionate Full Stack Developer with expertise in modern web technologies including React, Next.js, TypeScript, and Node.js. Building scalable web applications and user experiences.",
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      description:
        "Develops both frontend and backend web applications using modern technologies",
      occupationalCategory: "Software Developer",
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Full Stack Development",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Responsive Web Design",
      "API Development",
    ],
    sameAs: [
      "https://github.com/huzaifa-io/",
      "https://www.linkedin.com/in/muhammad~huzaifa/",
      "https://x.com/HuzaifaDevz",
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.muhammad-huzaifa.me",
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    about: {
      "@type": "Person",
      name: "Muhammad Huzaifa",
    },
    url: "https://www.muhammad-huzaifa.me",
    name: "Muhammad Huzaifa - Full Stack Developer Portfolio",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* ✅ WebSite Structured Data - MOST IMPORTANT for Site Name */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* ✅ Person Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {/* ✅ ProfilePage Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        {/* Skip navigation for accessibility */}
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

        {/* Minimal NoScript fallback */}
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
