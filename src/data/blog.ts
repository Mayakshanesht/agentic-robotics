import { ExternalLink, Calendar, Trophy, Rocket, Target, Award, Cpu } from "lucide-react";

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
    icon: Cpu,
    title: "CloudBee Robotics Secures WestAI Compute Grant",
    date: "June 2026",
    description:
      "We're thrilled to announce that CloudBee Robotics has secured a compute grant from the WestAI AI Service Center. This compute will power the training of our multimodal synthetic experience and physical-AI-grounded real-world data, our multimodal AI models, and the Agentic OS — accelerating safety-validated capabilities for industrial robots, humanoids and mobile platforms. A huge thank you to the WestAI team for backing our research.",
    link: "/research",
    highlight: "WestAI Grant",
  },
  {
    icon: Award,
    title: "CloudBee Robotics Awarded EXIST Funding",
    date: "May 2026 — Present",
    description:
      "We're excited to share that CloudBee Robotics has been awarded EXIST funding from the German Federal Government — a major milestone as we continue building in the agentic physical AI space, bringing state-of-the-art AI models into industrial robotics, robotic arms, humanoids, AGVs, healthcare, home care, and agriculture. Huge thanks to RWTH Collective Incubator, RWTH Innovation, Therese Liegmann, Hanna, Dr. Tobias Recker, and our academic mentor Dr. Bastian Leibe.",
    link: "https://www.linkedin.com/posts/mayur-waghchoure-a5aba5ab_cloudbeerobotics-existfunding-startupfunding-share-7454759287098191872-71IS",
    highlight: "EXIST Grant",
  },
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
    title: "RWTH Innovation Ideation Program Completed",
    date: "March 2026",
    description: "Successfully completed the RWTH Innovation Ideation Program with strong validation of our market positioning and go-to-market strategy.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7422690213560229888",
    highlight: "Completed",
    credit: "© RWTH Innovation GmbH",
  },
];

export { ExternalLink, Calendar };
