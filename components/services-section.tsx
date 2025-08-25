"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  Layout,
  Code,
  Server,
  RefreshCw,
  Smartphone,
  Webhook,
  Database,
} from "lucide-react";

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end development of scalable web applications using modern frameworks and best practices. Expertise in both frontend and backend technologies to deliver robust solutions.",
    icon: <Globe className="h-10 w-10 text-primary" />,
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Cloud & DevOps Solutions",
    description:
      "Deployment, automation, and management of cloud infrastructure. Implementation of CI/CD pipelines and container orchestration for efficient software delivery.",
    icon: <Server className="h-10 w-10 text-primary" />,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
  },
  {
    title: "API Design & Integration",
    description:
      "Design and integration of secure, scalable RESTful APIs for seamless communication between services and third-party platforms.",
    icon: <Webhook className="h-10 w-10 text-primary" />,
    skills: ["REST APIs", "OAuth2", "API Security", "Postman"],
  },
  {
    title: "UI/UX Consulting",
    description:
      "Consultation and implementation of user-centric interfaces to enhance usability and accessibility across devices.",
    icon: <Layout className="h-10 w-10 text-primary" />,
    skills: ["UI/UX", "Accessibility", "Responsive Design", "Material UI"],
  },
  {
    title: "Project Management & Agile Coaching",
    description:
      "Guidance on agile methodologies, project planning, and team collaboration to ensure successful project delivery.",
    icon: <RefreshCw className="h-10 w-10 text-primary" />,
    skills: ["Agile", "Scrum", "Jira", "Mentoring"],
  },
];

export function ServicesSection() {
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
    <section id="services" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Services I Offer
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Professional web development solutions tailored to your specific
            needs
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="h-full"
            >
              <motion.div variants={cardHoverVariants} className="h-full">
                <Card className="h-full flex flex-col transition-all">
                  <CardHeader className="pb-2 flex-shrink-0">
                    <div className="flex items-center gap-4 mb-2">
                      <motion.div
                        variants={iconVariants}
                        className="p-2 rounded-full bg-primary/10 flex-shrink-0"
                      >
                        {service.icon}
                      </motion.div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm line-clamp-4">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mt-2">
                      {service.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                          variants={tagVariants}
                          whileHover="hover"
                          custom={i}
                          transition={{ delay: i * 0.05 }}
                        >
                          {skill}
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
