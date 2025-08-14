"use client";

import { motion } from "framer-motion";
import {
  Database,
  Globe,
  Layout,
  Palette,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-8 w-8 text-primary" />,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Framer Motion",
      "SEO (Search Engine Optimization)",
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 text-primary" />,
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
      "Authentication",
      "Postman",
      "Socket.IO",
      "jsPDF",
    ],
  },
  {
    category: "Database",
    icon: <Database className="h-8 w-8 text-primary" />,
    items: ["MongoDB", "Firebase", "Redis", "Supabase"],
  },
  {
    category: "UI/UX",
    icon: <Palette className="h-8 w-8 text-primary" />,
    items: [
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "ShadCn",
      "BootStrap",
      "Hero UI",
      "Framer Motion",
    ],
  },
  {
    category: "DevOps",
    icon: <Workflow className="h-8 w-8 text-primary" />,
    items: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify"],
  },
  {
    category: "Tools",
    icon: <Terminal className="h-8 w-8 text-primary" />,
    items: ["VS Code", "Postman", "npm/yarn", "MongoDB Compass", "EmailJS"],
  },
  {
    category: "Other",
    icon: <Globe className="h-8 w-8 text-primary" />,
    items: ["SEO", "Performance Optimization", "Accessibility", "Web Security"],
  },
];

export function SkillsSection() {
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

  const cardHoverVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      rotate: 15,
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="skills" className="py-10 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A comprehensive toolkit for building modern web applications from
            concept to deployment.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="h-full"
            >
              <motion.div variants={cardHoverVariants} className="h-full">
                <Card className="h-full flex flex-col justify-between transition-all">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <motion.div variants={iconVariants}>
                      {skill.icon}
                    </motion.div>
                    <CardTitle>{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <motion.span
                          key={i}
                          className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                          variants={tagVariants}
                          whileHover="hover"
                          custom={i}
                          transition={{ delay: i * 0.05 }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
