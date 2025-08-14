"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaEnvelope, FaUpwork, FaXTwitter } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import { BiLogoGithub } from "react-icons/bi";
import { Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };

  const socialLinks = [
    {
      href: "https://github.com/mshirvan2",
      icon: <BiLogoGithub className="h-4 w-4" />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/michaelshirvani",
      icon: <Linkedin className="h-4 w-4" />,
      label: "LinkedIn",
    },
  ];

  return (
    <motion.footer
      className="border-t bg-muted/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 md:pr-20">
        <motion.div
          className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"
          variants={itemVariants}
        >
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} Mike Shirvani. All rights reserved.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <nav aria-label="Social links" className="flex gap-4">
            {socialLinks.map(({ href, icon, label }) => (
              <motion.div key={label} variants={iconVariants} whileHover="hover">
                <Button asChild variant="ghost" size="icon">
                  <Link
                    href={href}
                    target="_blank"
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    aria-label={label}
                  >
                    {icon}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.footer>
  );
}
