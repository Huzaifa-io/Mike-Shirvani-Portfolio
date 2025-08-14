"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Mail, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name || !email || !message) return

    setIsSubmitting(true)

    try {
      // Get current date and time
      const currentDate = new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      })

      await emailjs.send(
        "service_yd2cy9h",
        "template_a6ivmy9",
        {
          from_name: name,
          reply_to: email,
          message: message,
          current_date: currentDate,
          // Additional variables for better email content
          sender_name: name,
          sender_email: email,
          contact_message: message
        },
        "BoDBNXffcSFVbAIUg"
      )

      setIsSuccess(true)
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error("EmailJS Error:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setIsSuccess(false), 3000)
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  }

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
  }

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind or want to collaborate? Let's chat.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Contact Info Card */}
          <motion.div variants={cardVariants}>
            <Card className="h-full overflow-hidden">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div className="flex items-center gap-4" variants={itemVariants}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+92 315 6565 918</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-center gap-4" variants={itemVariants}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">huzaifa.pro.dev@gmail.com</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-center gap-4" variants={itemVariants}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Karachi, Pakistan</p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Email Form */}
          <motion.div variants={cardVariants}>
            <Card className="h-full overflow-hidden">
              <CardHeader>
                <CardTitle>Send an Email</CardTitle>
                <CardDescription>Fill out the form to email me directly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div className="space-y-2" variants={itemVariants}>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </motion.div>
                  <motion.div className="space-y-2" variants={itemVariants}>
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </motion.div>
                  <motion.div className="space-y-2" variants={itemVariants}>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here"
                      className="min-h-[120px]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"
                        />
                      ) : (
                        <Send className="h-4 w-4 mr-2" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Email"}
                    </Button>
                  </motion.div>

                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md text-sm text-center"
                        variants={successVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        Email sent successfully! I'll get back to you soon.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}