/**
 * Single source of truth for investor/partner-facing facts shown on the homepage and
 * product page. Keep this public-safe: outcomes and deliverables only — methods,
 * architecture, datasets, benchmarks and customer names stay under NDA.
 */

export const CONTACT_EMAIL = "mayur.waghchoure@cloudbeerobotics.de";

export type ProductKey = "dataforge" | "modellab" | "agenticos" | "kinebridge";

export type Product = {
  key: ProductKey;
  name: string;
  tagline: string;
  summary: string;
  youGet: string[];
};

export const products: Product[] = [
  {
    key: "dataforge",
    name: "DataForge",
    tagline: "4D multimodal manipulation data",
    summary:
      "From a task description, a video of your scene and a few video demonstrations, DataForge builds a simulation of your work cell and generates contact-rich training data — vision, depth, force and touch, over time.",
    youGet: [
      "A simulation-ready replica of your work cell",
      "Synthetic 4D datasets with force and tactile channels",
      "Human video demonstrations turned into robot motion",
    ],
  },
  {
    key: "modellab",
    name: "ModelLab",
    tagline: "Frontier models, adapted to your robot",
    summary:
      "ModelLab adapts frontier robot foundation models to your sensors, actuators, compute and task. Its Copilot guides adaptation and training, so every deployment doesn't start from scratch.",
    youGet: [
      "A model fitted to your robot's sensors, actuators and modalities",
      "Adaptation and training guided by the ModelLab Copilot",
      "A model sized for the compute on your robot",
    ],
  },
  {
    key: "agenticos",
    name: "AgenticOS",
    tagline: "Execution that recovers on its own",
    summary:
      "AgenticOS runs long-horizon tasks, detects when a step fails and recovers in closed loop — instead of stopping the cell and waiting for an engineer.",
    youGet: [
      "Closed-loop self-recovery when a step fails",
      "Long-horizon, multi-step task execution",
      "Coordination across multiple robots",
    ],
  },
  {
    key: "kinebridge",
    name: "KineBridge",
    tagline: "One hardware standard for any robot",
    summary:
      "KineBridge is our hardware standard for talking to robots and sensors. Connect an arm, humanoid or sensor once, then deploy validated capabilities to it with one click.",
    youGet: [
      "One interface across robots and sensors",
      "One-click deployment of validated capabilities",
      "No bespoke integration for every new robot",
    ],
  },
];

export const safetyLayer = {
  name: "Safety & validation",
  summary:
    "Before anything reaches real hardware, every capability goes through safety analysis, generated validation test cases and verification in simulation.",
  items: ["Safety analysis", "Validation test cases", "Verification in simulation"],
};

/** Robot platforms in pilots and in our lab. Drop real photos at `photo` — cards fall back to an illustration. */
export type RobotShape = "humanoid" | "bimanual" | "arm";

export const pilotRobots: { name: string; kind: string; shape: RobotShape; photo: string }[] = [
  { name: "Unitree G1", kind: "Humanoid", shape: "humanoid", photo: "/lab/unitree-g1.jpg" },
  { name: "Unitree H2", kind: "Full-size humanoid", shape: "humanoid", photo: "/lab/unitree-h2.jpg" },
  { name: "OpenArm 2", kind: "Bimanual 7-DoF arms", shape: "bimanual", photo: "/lab/openarm-2.jpg" },
  { name: "SO-101", kind: "Robotic arms", shape: "arm", photo: "/lab/so-101.jpg" },
];

export const LAB_PHOTO = "/lab/collective-incubator-lab.jpg";

/** Dated milestones — every entry is already public on this site (news, grants). */
export const milestones = [
  { date: "Sep 2025", title: "Selected for the Deloitte Problem-Solution Fit program" },
  { date: "Dec 2025", title: "Deloitte program completed" },
  { date: "Mar 2026", title: "RWTH Innovation Ideation program completed" },
  { date: "May 2026", title: "EXIST funding awarded" },
  { date: "Jun 2026", title: "WestAI compute grant secured" },
  { date: "Now", title: "Own hardware lab at the Collective Incubator, Aachen" },
  { date: "Now", title: "Pilots running with industrial customers" },
];

export const factsToday = [
  { big: "4", small: "robot platforms in active pilots" },
  { big: "Own lab", small: "hardware lab at the Collective Incubator, Aachen" },
  { big: "2", small: "public grants — EXIST and WestAI compute" },
];

/** Forward-looking goals, always labelled as targets on the page — not achieved results. */
export const targets = [
  { big: "5×", small: "lower cost than teleoperation-only data collection" },
  { big: "3–4 wks", small: "from task description to deployed capability" },
  { big: "1", small: "engineer on your side — no in-house robotics team" },
];

export const preSeedUseOfFunds = [
  {
    title: "Convert pilots into paid deployments",
    body: "Take the pilots running today on Unitree G1, Unitree H2, OpenArm 2 and SO-101 to paid work-cell deployments.",
  },
  {
    title: "Harden the four products",
    body: "Move DataForge, ModelLab, AgenticOS and KineBridge from pilot-grade to production-grade, including safety and validation tooling.",
  },
  {
    title: "Grow the core engineering team",
    body: "Hire in robot learning, simulation and robot integration.",
  },
  {
    title: "Expand the hardware lab",
    body: "More robots and sensors at our Collective Incubator lab, so data collection and validation run in parallel.",
  },
];

export const preSeedMilestones = [
  "First paid work-cell deployments",
  "KineBridge support for additional robot platforms",
  "A repeatable path from task and video to deployed capability",
  "The traction to raise a seed round",
];
