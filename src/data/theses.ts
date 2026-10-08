export type Thesis = {
  slug: string;
  number: number;
  title: string;
  focus: string;
  intro: string[];
  question: string;
  bring: string[];
  alsoUseful: string[];
};

export const THESIS_CONTACT_EMAIL = "mayur.waghchoure@cloudbeerobotics.de";

export const thesisDates = {
  // Shared by the careers overview, topic pages and application form.
  applicationsClose: "30 October 2026",
  registration: "November 2026",
  start: "1 December 2026",
  end: "31 May 2027",
};

/** Role value stored with each application - keeps the three topics separate in /admin. */
export const thesisRole = (t: Thesis) => `Master's Thesis ${t.number} - ${t.title}`;

export const theses: Thesis[] = [
  {
    slug: "thesis-video-to-part-level-3d-scenes",
    number: 1,
    title: "Robot Perception for Industrial Tasks",
    focus: "Computer vision · robotics · industrial applications",
    intro: [
      "Help make industrial robots more useful in everyday work. This thesis offers a chance to explore robot perception alongside our team in Aachen, with a focus on practical applications.",
      "You will develop your research skills in an industrial setting. A detailed academic proposal is available to suitable applicants and their supervising professors through a confidential discussion.",
    ],
    question:
      "How can robot perception help industrial teams handle everyday tasks more reliably?",
    bring: [
      "A background in computer vision, robotics or a related field",
      "Strong programming skills and experience with practical projects",
      "An interest in industrial applications",
      "Careful experimentation and clear research communication",
    ],
    alsoUseful: [
      "Experience working with robots",
      "Independent research or a substantial university project",
      "Experience collaborating across disciplines",
    ],
  },
  {
    slug: "thesis-contact-rich-manipulation-data",
    number: 2,
    title: "Reliable Robotic Manipulation",
    focus: "Robotics · practical research · industrial automation",
    intro: [
      "Industrial teams need robots that can handle useful tasks consistently. Join us in exploring practical robotics challenges, with access to our team and hardware lab in Aachen.",
      "The project scope and academic objectives are agreed with the selected student and their university supervisor in a confidential discussion.",
    ],
    question:
      "How can robotic manipulation become more dependable for everyday industrial work?",
    bring: [
      "A background in robotics, engineering or a related field",
      "Hands-on programming and practical problem-solving experience",
      "An interest in working with robot hardware",
      "Careful experimentation and clear research communication",
    ],
    alsoUseful: [
      "Previous robotics projects",
      "Experience in a laboratory or industrial setting",
      "Experience collaborating across disciplines",
    ],
  },
  {
    slug: "thesis-multimodal-foundation-model-adaptation",
    number: 3,
    title: "Robot Intelligence for Industrial Applications",
    focus: "Artificial intelligence · robotics · practical evaluation",
    intro: [
      "Explore how intelligent robots can become useful tools for industrial teams. This thesis combines independent research with practical experience alongside our founders in Aachen.",
      "Suitable applicants receive a detailed proposal for discussion with their university supervisor. Internal methods and customer-specific information are covered through confidential collaboration.",
    ],
    question:
      "How can robot intelligence support useful, reliable industrial applications?",
    bring: [
      "A background in artificial intelligence, robotics or a related field",
      "Strong programming skills and experience with practical projects",
      "An interest in evaluating robots in real-world settings",
      "Independent thinking and clear research communication",
    ],
    alsoUseful: [
      "Previous robotics or AI research",
      "Hands-on experience with robot hardware",
      "Experience collaborating across disciplines",
    ],
  },
];
