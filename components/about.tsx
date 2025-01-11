"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail } from 'lucide-react';
import Link from "next/link";
import { Expertise } from "@/components/expertise";

export function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Work Experience Data
  const workExperience = [
    {
      role: "Developer / Technical Team",
      company: "Interact Club of Arniko College",
      period: "January 2025 - Present",
      status: "Ongoing",
    },
    {
      role: "Web Development Internship",
      company: "TechNova Solutions",
      period: "April 2024 - May 2024",
      duration: "(1 month)",
    },
  ];

  // Education Data
  const education = [
    {
      degree: "+2 Science",
      institution: "Arniko Awasiya H.S,Biratnagar",
      period: "2024 - Present",
      status: "Ongoing",
    },
    {
      degree: "SEE",
      institution: "Dhurvatara Sec.Eng.Sch",
      period: "2023 - 2024",
      status: "Completed",
    },
  ];

  // // Testimonials Data
  // const testimonials = [
  //   {
  //     name: "Hemanta Bhandari",
  //     role: "Freelance Associate",
  //     image: "/placeholder.svg",
  //     text: "I've had the pleasure of working with Tilak on a private project, and I can't say enough good things about him. His ability to take Figma designs and turn something special. It's like watching an art...",
  //     rating: 5,
  //   },
  //   {
  //     name: "Mustafa Can Güzük",
  //     role: "Freelance Associate",
  //     image: "/placeholder.svg",
  //     text: "He is really a good person, he responds very quickly and he really helped me a lot, the projects he has done are very nice, especially the Bumblebee - AI Powered Chatbot project...",
  //     rating: 5,
  //   },
  // ];

  // Certificates Data
  const certificates = [
    {
      title: "Front End Development",
      date: "Oct 1 2024",
      image: "https://i.postimg.cc/bNL6CQcr/scrimba.jpg",
    },

  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <div className="container mx-auto px-4 grid md:grid-cols-[300px_1fr] gap-8 mb-16">
        <div className="relative w-48 h-48 md:w-full md:h-auto md:aspect-square rounded-full md:rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-900 mx-auto md:mx-0">
          <Image
            src="/avatar.webp"
            alt="Piyush Rajbanshi - Developer Illustration"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            I'm Piyush Rajbanshi, a full-stack web developer.
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            I'm a curiosity-driven developer with over 1 years of experience in
            building robust web applications using the MERN stack and Next.js.
            🚀 My hands-on experience extends to Docker and cloud deployment on
            AWS, allowing me to create scalable solutions that meet diverse
            needs.
          </p>
          <Link href="/contact">
            <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white mt-4">
              Get in Touch <Mail className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Experience and Education */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 mb-16">
        {/* Work Experience */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            Work Experience <span className="text-red-500">✦</span>
          </h2>
          <div className="space-y-6">
            {workExperience.map((work, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                  🏢
                </div>
                <div>
                  <h3 className="font-medium">{work.role}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{work.company}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                    <span>{work.period}</span>
                    {work.duration && <span>{work.duration}</span>}
                    {work.status && (
                      <Badge className="bg-purple-600/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 hover:bg-purple-600/20 dark:hover:bg-purple-400/20">
                        {work.status}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            Education <span className="text-purple-500">📚</span>
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                  🎓
                </div>
                <div>
                  <h3 className="font-medium">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                    <span>{edu.period}</span>
                    {edu.duration && <span>{edu.duration}</span>}
                    {edu.status && (
                      <Badge className="bg-purple-600/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 hover:bg-purple-600/20 dark:hover:bg-purple-400/20">
                        {edu.status}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Expertise />
      {/* Certificates */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          Badges of Honor <span className="text-purple-600 dark:text-purple-400">🏆</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <CardContent className="p-4">
                <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
                  <h3 className="font-medium">{cert.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

