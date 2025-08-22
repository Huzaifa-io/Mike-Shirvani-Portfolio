"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Car Source, Gaithersburg, MD",
    period: "May 2024 – Oct 2024",
    description:
      "Built and deployed scalable full-stack applications, optimized backend processes, and collaborated with stakeholders for smooth feature delivery.",
    achievements: [
      "Developed and deployed a React + Node.js web platform with secure JWT authentication and role-based access.",
      "Integrated QuickBooks API to streamline invoicing, reducing processing time by 50%.",
      "Built REST APIs and backend logic using FastAPI-inspired architecture with MongoDB.",
      "Containerized app with Docker and deployed via AWS EC2 and NGINX, using GitHub Actions for CI/CD.",
      "Collaborated with designers and stakeholders in Agile sprints, ensuring delivery of tested, scalable features.",
      "Focused on data integrity, responsive UI/UX, and clear communication between frontend/backend layers.",
    ],
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "QuickBooks API",
      "REST APIs",
      "Docker",
      "AWS EC2",
      "NGINX",
      "CI/CD",
      "Agile",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "BrightApps Technologies, Walnut Creek, CA",
    period: "May 2023 – Aug 2023",
    description:
      "Gained hands-on experience in web development, backend systems, and Agile processes while contributing to production-ready applications.",
    achievements: [
      "Assisted in developing web applications using JavaScript, JavaFX, and Spring Boot for internal tools and client projects.",
      "Contributed to frontend enhancements using Bootstrap for better user experience.",
      "Built REST APIs and backend logic using FastAPI-inspired architecture with MongoDB.",
      "Participated in Agile standups, sprint planning, and backlog grooming.",
      "Collaborated with QA teams to debug and resolve issues before production release.",
      "Focused on data integrity, responsive UI/UX, and clear communication between frontend/backend layers.",
    ],
    skills: [
      "JavaScript",
      "JavaFX",
      "Spring Boot",
      "Bootstrap",
      "MongoDB",
      "REST APIs",
      "Agile",
      "QA/Testing",
    ],
  },
];

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const skillVariants = {
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
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional Experience
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My journey as a developer and the companies I've had the pleasure to
            work with.
          </motion.p>
        </div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover">
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl">
                        {experience.title}
                      </CardTitle>
                      <CardDescription className="flex items-center mt-2">
                        <Building className="h-4 w-4 mr-2" />
                        {experience.company}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="flex items-center self-start md:self-center"
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      {experience.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {experience.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-medium">Key Achievements:</h4>
                    <ul className="space-y-1 ml-5 list-disc">
                      {experience.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          variants={achievementVariants}
                          custom={i}
                          className="text-sm text-muted-foreground"
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          variants={skillVariants}
                          whileHover="hover"
                          custom={i}
                        >
                          <Badge variant="secondary">{skill}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
