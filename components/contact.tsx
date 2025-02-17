"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Instagram, Linkedin, Github, AtSign, Copy, Send } from 'lucide-react'
import { useState } from "react"
import emailjs from "emailjs-com"

export function Contact() {
  const [isCopied, setIsCopied] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "Github",
      username: "jrPiyush",
      href: "https://github.com/PiyuSX",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "X",
      username: "jrDevPiyush",
      href: "https://www.instagram.com/jr.devpiyusx/",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      username: "Piyush Rajbanshi",
      href: "#",
    },
  ]

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I specialize in full-stack web development using the MERN stack, with expertise in Next.js, React, Node.js, and MongoDB. I also offer cloud deployment services using AWS and Docker."
    },
    {
      question: "Do you work on freelance projects?",
      answer: "Yes, I'm available for freelance projects! I enjoy working with clients to bring their ideas to life and create impactful web solutions."
    },
    {
      question: "What is your preferred method of communication?",
      answer: "I prefer communication through email for initial contact. For ongoing projects, I'm flexible with using project management tools or chat platforms based on client preferences."
    },
    {
      question: "Can you help with ongoing projects?",
      answer: "I'm experienced in joining existing projects and can quickly adapt to established codebases and workflows."
    },
    {
      question: "Do you offer remote work?",
      answer: "Yes, I work remotely and have experience collaborating with teams and clients from different time zones."
    }
  ]

  const copyEmail = async () => {
    await navigator.clipboard.writeText("iam@jrpiyush.me")
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const result = await emailjs.send(
        "service_0u01pyp", // Service ID
        "template_7pzqdkk", // Template ID
        form,
        "aeuh82MRqpDVYtHcA" // Public Key
      )
      alert("Message sent successfully!")
      setForm({ name: "", email: "", subject: "", message: "" }) // Reset form
    } catch (error) {
      console.error("Error sending email:", error)
      alert("Failed to send message. Please try again later.")
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-16">
      <div className="container mx-auto px-4 md:px-6 pt-8 max-w-6xl">
        <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start max-w-5xl mx-auto">
          {/* Social Links Section */}
          <div className="space-y-6">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="/avatar.webp"
                alt="Profile"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-center">Piyush Rajbanshi</h2>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors"
                >
                  {link.icon}
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{link.label}</div>
                    <div className="font-medium text-gray-900 dark:text-white">{link.username}</div>
                  </div>
                </a>
              ))}
              <div className="relative">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-900">
                  <AtSign className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Mail</div>
                    <div className="font-medium text-gray-900 dark:text-white">iam@jrpiyush.me</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400"
                  onClick={copyEmail}
                >
                  <Copy className="h-4 w-4" />
                  {isCopied && (
                    <span className="absolute -top-8 right-0 text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-gray-900 dark:text-white">
                      Copied!
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Let's 👋 Work Together</h1>
              <p className="text-gray-600 dark:text-gray-400">
                I'd love to hear from you! Whether you have a question, want to discuss a project, or just want to connect, feel free to reach out through any of the following channels:
              </p>
            </div>

            <Card className="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <form className="p-6 space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-600 dark:text-gray-400">Name</label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Eg: Johnny Sing"
                      className="bg-white dark:bg-black border-gray-300 dark:border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-600 dark:text-gray-400">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Eg: contact@example.com"
                      className="bg-white dark:bg-black border-gray-300 dark:border-gray-700"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600 dark:text-gray-400">Subject</label>
                  <Input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="I am planning to..."
                    className="bg-white dark:bg-black border-gray-300 dark:border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600 dark:text-gray-400">Message</label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="I am glad to..."
                    className="bg-white dark:bg-black border-gray-300 dark:border-gray-700 min-h-[150px]"
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <Button variant="ghost">
                    Cancel
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700" type="submit">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Card>

            {/* FAQs Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">FAQs</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-800">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
