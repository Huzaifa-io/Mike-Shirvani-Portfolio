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
    title: "Senior Software Engineer",
    company: "TechNova Solutions",
    period: "Jan 2023 – Present",
    description:
      "Lead the design and development of scalable web applications for enterprise clients. Collaborated with cross-functional teams to deliver high-quality software solutions on time and within budget.",
    achievements: [
      "Architected and implemented a microservices-based platform that improved system reliability and scalability by 40%.",
      "Mentored junior developers, fostering a culture of continuous learning and code quality.",
      "Integrated CI/CD pipelines, reducing deployment times by 60%."
    ],
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "Microservices",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "Agile",
    ],
  },
  {
    title: "Software Engineer",
    company: "InnoTech Labs",
    period: "Jul 2020 – Dec 2022",
    description:
      "Developed and maintained web applications for various clients, focusing on performance, security, and user experience. Participated in all phases of the software development lifecycle.",
    achievements: [
      "Developed a real-time analytics dashboard used by over 10,000 users.",
      "Enhanced application security by implementing OAuth2 and best practices.",
      "Collaborated with UI/UX designers to improve customer satisfaction scores by 25%."
    ],
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OAuth2",
      "UI/UX",
      "REST APIs",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Bright Future Tech",
    period: "Jan 2020 – Jun 2020",
    description:
      "Assisted in the development of internal tools and automation scripts. Gained hands-on experience with modern web technologies and agile methodologies.",
    achievements: [
      "Automated data processing tasks, reducing manual effort by 30%.",
      "Contributed to the development of a customer support ticketing system.",
      "Participated in code reviews and team meetings, improving communication skills."
    ],
    skills: [
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "Agile",
      "Git",
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
    <section id="experience" className="py-20 bg-muted/50">
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
