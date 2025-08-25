"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const education = [
  {
    school: "University of Maryland, College Park, MD",
    period: "Aug 2020 – Jan 2025",
    degree:
      "Bachelor of Science in Computer Science, Minor in Technology Entrepreneurship (MTECH)",
    coursework: [
      "Artificial Intelligence",
      "Databases",
      "Software Engineering",
      "Systems Programming",
      "Data Structures and Algorithms",
      "Web Development",
      "Programming Handheld Systems",
    ],
  },
];

export function EducationSection() {
  return (
    <section
      id="education"
      className="flex items-center justify-center bg-muted/50 py-20"
    >
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center">
        {/* Section Heading */}
        <div className="flex flex-col items-center space-y-4 mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Education
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My academic background and relevant coursework.
          </motion.p>
        </div>

        {/* Education Cards */}
        <div className="flex justify-center w-full">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full max-w-lg"
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{edu.school}</CardTitle>
                  <CardDescription>{edu.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">{edu.degree}</p>
                  {edu.coursework.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold mb-1">
                        Relevant Coursework:
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 text-left">
                        {edu.coursework.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
