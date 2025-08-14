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
    title: "Associate Software Engineer",
    company: "Saylani Welfare",
    period: "June 2025 – Present",
    description:
      "Contributed to the development of internal tools and web applications using Next.js and Node.js. Focused on enhancing user experience and optimizing performance for large datasets.",
    achievements: [
      "Optimized Admin Portal performance for 400K+ records using advanced MongoDB indexing and caching",
      "Introduced role-based access control with JWT and middleware guards",
      "Built internal dashboard to streamline task assignment and project tracking",
    ],
    skills: [
      "Node.js",
      "Next.js",
      "React",
      "MongoDB",
      "JWT",
      "Express.js",
      "GitHub",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    title: "Skill Accelerator Bootcamp",
    company: "Saylani Tech",
    period: "Feb 2025 – June 2025",
    description:
      "Completed an intensive full-time bootcamp covering frontend and backend development. Worked on real-world projects under the guidance of industry mentors and followed agile practices.",
    achievements: [
      "Built multiple mini projects in React.js and Node.js",
      "Developed a RESTful API with Express.js and MongoDB",
      "Collaborated with peers using GitHub, improving version control and PR workflows",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GitHub",
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
