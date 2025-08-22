"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import Typed from "typed.js";

export function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);
  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: [
          "Full Stack Developer",
          "React Specialist",
          "Next.js Expert",
          "Problem Solver",
          "Senior Full Stack Developer",
          "React Expert",
          "Node.js Developer",
          "TypeScript Engineer",
          "MERN Stack Developer",
          "Frontend Architect",
          "Backend Engineer",
          "Web Application Developer",
          "REST API Specialist",
          "Database Architect",
          "UI/UX Implementation",
          "Performance Optimization",
          "Web Security Specialist",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        smartBackspace: true,
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center py-20 md:py-0">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Mike Shirvani
            </h1>

            <div className="flex h-12 items-center justify-center">
              <span className="text-xl text-muted-foreground md:text-2xl">
                I'm a
              </span>
              <span
                ref={typedRef}
                className="ml-2 text-xl font-medium text-primary md:text-2xl"
              />
            </div>
          </motion.div>

          <motion.p
            className="max-w-4xl text-lg text-muted-foreground md:text-xl"
            variants={itemVariants}
          >
            Full Stack Developer with 3+ years of experience building scalable
            web applications using Java, Spring Boot, React, Node.js, and AWS.
            Skilled in creating responsive UIs, secure backends, and efficient
            APIs. Experienced in Agile workflows, CI/CD pipelines, and cloud
            deployment. Passionate about clean code, performance optimization,
            and delivering production-ready solutions.{" "}
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 pt-6 sm:flex-row"
            variants={itemVariants}
          >
            <Button asChild size="lg" className="group">
              <Link href="#contact" className="flex items-center">
                Get in Touch
                <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="group">
              <Link href="#projects" className="flex items-center">
                View Projects
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Conditionally render social and resume links */}
          <motion.div className="flex gap-4 pt-8" variants={itemVariants}>
            <Link
              href="https://github.com/mshirvan2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                aria-label="GitHub"
                className="rounded-full transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/michaelshirvani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                aria-label="LinkedIn"
                className="rounded-full transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Resume"
                className="rounded-full transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <FileText className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
