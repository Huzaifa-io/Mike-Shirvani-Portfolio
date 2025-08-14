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
    keywords: [
      "Mike Shirvani",
      "Mike Shirvani Portfolio",
      "Mike Portfolio",
      "Mike Shirvani Personal Website",
      "Developer Portfolio",
      "Full Stack Web Developer Portfolio",
      "Full Stack Developer",
      "Software Developer Portfolio",
      "Web Developer Portfolio",
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
    twitter: {
      card: "summary_large_image",
      site: "@MikeShirvani", // update if there's an actual handle
      creator: "@MikeShirvani",
      title: "Mike Shirvani | Full Stack Developer",
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
    category: "technology",
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

  // ✅ Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mike Shirvani",
    givenName: "Mike",
    familyName: "Shirvani",
    alternateName: ["Mike", "Mike Shirvani"],
    url: "https://mike-shirvani-portfolio.vercel.app",
    image: {
      "@type": "ImageObject",
      url: "https://mike-shirvani-portfolio.vercel.app/og-image.jpg",
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
      "https://github.com/huzaifa-io/", // update if Mike's GitHub is different
      "https://www.linkedin.com/in/mike-shirvani/",
      "https://x.com/MikeShirvani", // update handle if needed
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://mike-shirvani-portfolio.vercel.app",
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    about: {
      "@type": "Person",
      name: "Mike Shirvani",
    },
    url: "https://mike-shirvani-portfolio.vercel.app",
    name: "Mike Shirvani - Full Stack Developer Portfolio",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
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
