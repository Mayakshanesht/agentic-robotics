import { ExternalLink, Calendar, Trophy, Rocket, Target, Award, Cpu } from "lucide-react";

/**
 * ============================================================
 * BLOG POSTS  -  add new entries by pushing to this array
 * ============================================================
 * Review all public copy for proprietary technology and customer confidentiality.
 * Each post needs: slug (route after /blog/), title, excerpt,
 * date, category. Full article lives in src/pages/BlogPost*.tsx
 * For new posts, duplicate one of those files and add a Route.
 */
export const blogPosts = [
  {
    title: "The Last Mile of Automation Is Dependable Work",
    excerpt:
      "Useful automation starts with the people and priorities on the production floor. Our focus is practical value, everyday usability, and a clear conversation about your needs.",
    date: "Oct 6, 2026",
    category: "Industry",
    slug: "/blog/the-last-mile-is-touch",
  },
  {
    title: "Helping Robots Become Useful at Work",
    excerpt:
      "Our ambition is to make industrial automation more accessible, with customer needs and clear business priorities at the center.",
    date: "Jan 15, 2026",
    category: "Company",
    slug: "/blog/why-physical-ai-needs-4d-synthetic-data",
  },
  {
    title: "Building Confidence in Industrial Automation",
    excerpt:
      "A useful robotics conversation starts with your business goals. Here is what we want industrial partners to expect from working with CloudBee.",
    date: "Jan 10, 2026",
    category: "Partnerships",
    slug: "/blog/sim-to-real-gap-solved",
  },
  {
    title: "Introducing CloudBee Robotics",
    excerpt:
      "Meet the RWTH Aachen spin-off working to make industrial robots more useful for the people and businesses that depend on them.",
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
      "CloudBee Robotics has secured a compute grant from the WestAI AI Service Center. We thank the WestAI team for supporting our company and our ambition to bring more useful robotics to industry.",
    link: "/research",
    highlight: "WestAI Grant",
  },
  {
    icon: Award,
    title: "CloudBee Robotics Awarded EXIST Funding",
    date: "May 2026 - Present",
    description:
      "CloudBee Robotics has been awarded EXIST funding from the German Federal Government, a milestone in our journey to make robotics more accessible to industry. We thank RWTH Collective Incubator, RWTH Innovation, Therese Liegmann, Hanna, Dr. Tobias Recker, and our academic mentor Dr. Bastian Leibe for their support.",
    link: "https://www.linkedin.com/posts/mayur-waghchoure-a5aba5ab_cloudbeerobotics-existfunding-startupfunding-share-7454759287098191872-71IS",
    highlight: "EXIST Grant",
  },
  {
    icon: Rocket,
    title: "Deloitte Problem-Solution Fit Program Begins",
    date: "September 2025",
    description: "CloudBee Robotics was selected for the Deloitte Problem-Solution Fit program to explore customer needs and strengthen our business proposition.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7386834347191848960",
    highlight: "Program Start",
  },
  {
    icon: Trophy,
    title: "Successfully Completed Deloitte Program",
    date: "December 2025",
    description: "CloudBee Robotics completed the Deloitte Problem-Solution Fit program, bringing fresh perspective to our customer focus and business direction.",
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
