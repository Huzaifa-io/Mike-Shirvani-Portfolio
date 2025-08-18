"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const projects = [
  {
    title: "QR Code Generator",
    description:
      "A lightweight web app that allows users to generate custom QR codes from URLs or text inputs.",
    image: "/k.png",
    tags: ["JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://qr-seven-zeta.vercel.app/",
    category: "frontend",
  },
  {
    title: "E-Commerce App",
    description:
      "A fully responsive e-commerce platform with user authentication and shopping cart functionality.",
    image: "/j.png",
    tags: ["React", "Tailwind CSS", "Api"],
    liveUrl: "https://fakesstore.vercel.app/",
    category: "frontend",
  },

  {
    title: "Ticket Booking",
    description:
      "A ticket booking app with a seamless user experience for selecting and reserving seats.",
    image: "/i.png",
    tags: ["React.js", "Tailwind CSS"],
    liveUrl: "https://ticket-booking-lac.vercel.app/",
    category: "frontend",
  },
  {
    title: "Micro Finance App",
    description:
      "A full-stack microfinance system with dashboards, loan management, and transaction logs.",
    image: "/e.png",
    tags: ["React", "MongoDB", "Node.js"],
    liveUrl: "https://frontend-hackathon-microfinanaceapp.vercel.app/",
    category: "fullstack",
  },
  {
    title: "Welfare Management",
    description:
      "A welfare system providing food, wedding support, emergency aid, and medical help.",
    image: "/a.png",
    tags: ["React", "MongoDB", "Tailwind CSS", "Ant design"],
    liveUrl: "https://ameerhamzasaadatwelfare.vercel.app/",
    category: "fullstack",
  },
];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Reset to page 1 when changing tabs
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(1);
  };

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
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const cardVariants = {
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

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Generate pagination items
  const renderPaginationItems = () => {
    const items = [];

    // Always show first page
    items.push(
      <PaginationItem key="first">
        <PaginationLink
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage(1);
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Show ellipsis if needed
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="ellipsis-1">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Show current page and neighbors
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i === 1 || i === totalPages) continue; // Skip first and last as they're always shown
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(i);
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
      items.push(
        <PaginationItem key="ellipsis-2">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
      items.push(
        <PaginationItem key="last">
          <PaginationLink
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(totalPages);
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A selection of my recent work showcasing my skills and expertise.
          </motion.p>
        </div>

        <Tabs
          defaultValue="all"
          className="w-full mb-8"
          onValueChange={handleTabChange}
        >
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
            </TabsList>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value={activeTab} className="mt-6">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {currentProjects.map((project, index) => (
                    <motion.div
                      className="h-full"
                      key={indexOfFirstProject + index}
                      layoutId={`project-${indexOfFirstProject + index}`}
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <motion.div
                        variants={cardVariants}
                        className="h-full"
                        whileHover="hover"
                      >
                        <Card className="overflow-hidden h-full flex flex-col transition-all">
                          <div className="relative aspect-video overflow-hidden">
                            <motion.div
                              variants={imageVariants}
                              whileHover="hover"
                              className="h-full w-full"
                            >
                              <Image
                                src={
                                  project.image ||
                                  "/placeholder.svg?height=300&width=500"
                                }
                                alt={project.title}
                                fill
                                loading="lazy"
                                className="object-cover transition-transform"
                              />
                            </motion.div>
                          </div>
                          <CardHeader className="p-4">
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>
                              {project.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="p-4 pt-0 flex-grow">
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, i) => (
                                <Badge key={i} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="p-4 pt-0 flex justify-between mt-auto">
                            {project.liveUrl && (
                              <Button asChild size="sm">
                                <Link
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Live Demo
                                </Link>
                              </Button>
                            )}
                          </CardFooter>
                        </Card>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            href="#projects"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage > 1) {
                                setCurrentPage(currentPage - 1);
                                document
                                  .getElementById("projects")
                                  ?.scrollIntoView({ behavior: "smooth" });
                              }
                            }}
                            className={
                              currentPage === 1
                                ? "pointer-events-none opacity-50"
                                : ""
                            }
                          />
                        </PaginationItem>

                        {renderPaginationItems()}

                        <PaginationItem>
                          <PaginationNext
                            href="#projects"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage < totalPages) {
                                setCurrentPage(currentPage + 1);
                                document
                                  .getElementById("projects")
                                  ?.scrollIntoView({ behavior: "smooth" });
                              }
                            }}
                            className={
                              currentPage === totalPages
                                ? "pointer-events-none opacity-50"
                                : ""
                            }
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </motion.div>
                )}
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
