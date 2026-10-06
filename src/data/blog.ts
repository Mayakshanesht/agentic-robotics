import { ExternalLink, Calendar, Trophy, Rocket, Target, Award, Cpu } from "lucide-react";

/**
 * ============================================================
 * BLOG POSTS  -  add new entries by pushing to this array
 * ============================================================
 * Each post needs: slug (route after /blog/), title, excerpt,
 * date, category. Full article lives in src/pages/BlogPost*.tsx
 * For new posts, duplicate one of those files and add a Route.
 */
export const blogPosts = [
  {
    title: "The Last Mile Is Touch: Why Robots Need to Feel to Finish the Job",
    excerpt:
      "Vision gets a robot to the object. Touch is what lets it finish the job. Where tactile sensing is a requirement, why robot skin wears out, and what has to happen before touch reaches every production robot.",
    date: "Oct 6, 2026",
    category: "Research",
    slug: "/blog/the-last-mile-is-touch",
  },
  {
    title: "Why Physical AI Needs 4D Synthetic Data",
    excerpt:
      "Robot data is still collected one demonstration at a time, mostly vision only. The missing dimensions are time and contact, and both have to be generated.",
    date: "Jan 15, 2026",
    category: "Technology",
    slug: "/blog/why-physical-ai-needs-4d-synthetic-data",
  },
  {
    title: "Narrowing the Sim-to-Real Gap",
    excerpt:
      "Not a solved problem, but a narrower one: a twin built from the real cell, variation along what actually varies, contact in the data, and failures kept.",
    date: "Jan 10, 2026",
    category: "Research",
    slug: "/blog/sim-to-real-gap-solved",
  },
  {
    title: "Introducing CloudBee Robotics",
    excerpt:
      "An RWTH Aachen spin-off building the self-improving OS for robotics: contact-rich 4D synthetic data, and open robot models adapted to the cell they run in.",
    date: "Jan 5, 2026",
    category: "Announcement",
    slug: "/blog/introducing-cloudbee-robotics",
  },
];

/**
 * ============================================================
 * ANNOUNCEMENTS / NEWS  -  add new entries by pushing here
 * ============================================================
 */
export const news = [
  {
    icon: Cpu,
    title: "CloudBee Robotics Secures WestAI Compute Grant",
    date: "June 2026",
    description:
      "CloudBee Robotics has secured a compute grant from the WestAI AI Service Center. The compute goes into building and testing robot skills for industrial partners. A big thank you to the WestAI team for backing our work.",
    link: "/research",
    highlight: "WestAI Grant",
  },
  {
    icon: Award,
    title: "CloudBee Robotics Awarded EXIST Funding",
    date: "May 2026 - Present",
    description:
      "We're excited to share that CloudBee Robotics has been awarded EXIST funding from the German Federal Government - a major milestone as we continue building in the agentic physical AI space, bringing state-of-the-art AI models into industrial robotics, robotic arms, humanoids, AGVs, healthcare, home care, and agriculture. Huge thanks to RWTH Collective Incubator, RWTH Innovation, Therese Liegmann, Hanna, Dr. Tobias Recker, and our academic mentor Dr. Bastian Leibe.",
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
