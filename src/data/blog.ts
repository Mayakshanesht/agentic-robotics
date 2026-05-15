import { ExternalLink, Calendar, Trophy, Rocket, Target } from "lucide-react";

/**
 * ============================================================
 * BLOG POSTS  —  add new entries by pushing to this array
 * ============================================================
 * Each post needs: slug (route after /blog/), title, excerpt,
 * date, category. Full article lives in src/pages/BlogPost*.tsx
 * For new posts, duplicate one of those files and add a Route.
 */
export const blogPosts = [
  {
    title: "Why Physical AI Needs 4D Synthetic Data",
    excerpt: "Traditional approaches to robot training are hitting a wall. Here's why 4D world generation is the key to scalable robot intelligence.",
    date: "Jan 15, 2026",
    category: "Technology",
    slug: "/blog/why-physical-ai-needs-4d-synthetic-data",
  },
  {
    title: "The Sim-to-Real Gap: Solved",
    excerpt: "How world-aware AI models bridge the gap between simulation and real-world deployment.",
    date: "Jan 10, 2026",
    category: "Research",
    slug: "/blog/sim-to-real-gap-solved",
  },
  {
    title: "Introducing CloudBee Robotics Platform",
    excerpt: "We're building the infrastructure for agentic physical AI. Here's our vision for the future of robotics.",
    date: "Jan 5, 2026",
    category: "Announcement",
    slug: "/blog/introducing-cloudbee-robotics",
  },
];

/**
 * ============================================================
 * ANNOUNCEMENTS / NEWS  —  add new entries by pushing here
 * ============================================================
 */
export const news = [
  {
    icon: Rocket,
    title: "Deloitte Problem-Solution Fit Program Begins",
    date: "September 2025",
    description: "CloudBee Robotics selected for the Deloitte Problem-Solution Fit program to validate our agentic physical AI infrastructure.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7386834347191848960",
    highlight: "Program Start",
  },
  {
    icon: Trophy,
    title: "Successfully Completed Deloitte Program",
    date: "December 2025",
    description: "Strong validation of our problem definition and solution direction for physical AI infrastructure.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7418516640637624320",
    highlight: "Milestone",
  },
  {
    icon: Target,
    title: "RWTH Ideation Program Halftime Pitch",
    date: "January 2026",
    description: "Delivered our halftime pitch at the RWTH Innovation Ideation Program with great feedback on market positioning.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7422690213560229888",
    highlight: "In Progress",
    credit: "© RWTH Innovation GmbH",
  },
];

export { ExternalLink, Calendar };
