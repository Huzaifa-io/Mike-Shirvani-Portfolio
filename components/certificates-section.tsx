"use client"

import Image from "next/image"
import { Award, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"

interface Certificate {
  title: string
  issuer: string
  date: string
  description: string
  image: string
  skills: string[]
}

const certificates: Certificate[] = [
  {
    title: "SCRUM Fundamental Certification",
    issuer: "SCRUMstudy",
    date: "Oct - 2024",
    description:
      "Certified understanding of Scrum principles and Agile methodologies for collaborative project management.",
    image: "/scrum-fundamentals-certified.jpg",
    skills: ["Scrum", "Agile", "Project Management"],
  },
  // {
  //   title: "AWS Certified Cloud Practitioner (Enrolled)",
  //   issuer: "Amazon Web Services",
  //   date: "In Progress",
  //   description:
  //     "Currently preparing for the foundational AWS certification covering core cloud concepts, services, billing, and security.",
  //   image: "/placeholder.svg",
  //   skills: ["AWS", "Cloud Computing", "Cloud Fundamentals"],
  // },
  // {
  //   title: "AWS Certified Developer – Associate (Enrolled)",
  //   issuer: "Amazon Web Services",
  //   date: "In Progress",
  //   description:
  //     "Enrolled in certification track focusing on developing and maintaining applications on AWS using best practices.",
  //   image: "/placeholder.svg",
  //   skills: ["AWS", "Cloud Development", "Serverless", "DevOps"],
  // },
]

export function CertificatesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const scroll = (direction: "left" | "right"): void => {
    if (scrollRef.current) {
      const scrollAmount = 380 // card width + margin
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const cardHoverVariants = {
    hover: {
      y: -5,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  }

  const iconVariants = {
    hover: {
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="certificates" className="py-20 overflow-hidden" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Professional Certificates
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Continuous learning and professional development through industry-recognized certifications.
          </p>
        </motion.div>

        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-x-autoscroll-smooth px-2"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {certificates.map((certificate: Certificate, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex-shrink-0 m-auto w-[350px] scroll-snap-align-start"
            >
              <motion.div variants={cardHoverVariants}>
                <Card className="h-full flex flex-col overflow-hidden">
                  <div className="relative h-60">
                    <Image
                      src={certificate.image || "/placeholder.svg"}
                      alt={certificate.title}
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-black/40 text-white backdrop-blur-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        {certificate.date}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <CardHeader className="p-0 pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <motion.div variants={iconVariants} whileHover="hover">
                          <Award className="h-4 w-4 text-primary" />
                        </motion.div>
                        <CardTitle className="text-base">{certificate.title}</CardTitle>
                      </div>
                      <CardDescription className="text-xs">
                        Issued by {certificate.issuer}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 space-y-2 flex-grow">
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {certificate.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {certificate.skills.map((skill: string, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ delay: 0.1 * i }}
                          >
                            <Badge variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={() => scroll("left")}
            className="p-2 rounded-full shadow-md bg-black/40 hover:bg-black/60 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </motion.button>
          <motion.button
            onClick={() => scroll("right")}
            className="p-2 rounded-full shadow-md bg-black/40 hover:bg-black/60 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
