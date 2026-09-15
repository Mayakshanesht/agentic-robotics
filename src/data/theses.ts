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
  applicationsClose: "30 September 2026",
  registration: "October 2026",
  start: "1 November 2026",
  end: "30 April 2027",
};

/** Role value stored with each application — keeps the three topics separate in /admin. */
export const thesisRole = (t: Thesis) => `Master's Thesis ${t.number} — ${t.title}`;

export const theses: Thesis[] = [
  {
    slug: "thesis-video-to-part-level-3d-scenes",
    number: 1,
    title: "From Video to Part-Level 3D Scenes",
    focus: "3D computer vision · part-level perception · simulation-ready scenes",
    intro: [
      "A robot does not grasp an object. It grasps a part — the handle, the rim, the socket. Perception today stops at object level, which is enough to move something from A to B and not enough for contact-precise work.",
      "The same gap appears when 3D scenes are generated from video for simulation. Those scenes are judged either by whether renders look photographic, or by whether the physics fails to fall over. The first says nothing about whether the geometry is right; the second is a floor, not a standard. Neither answers the question that matters — can this scene support the task it was built for?",
    ],
    question:
      "Can object parts be identified from video and placed in 3D well enough to build a simulation-ready scene — and can that part-level view give us a real measure of whether a generated scene is visually and physically correct?",
    bring: [
      "3D computer vision — multi-view geometry, calibration, point-cloud processing",
      "Deep learning in 2D and 3D — semantic and instance segmentation, point-cloud networks",
      "Experience fine-tuning pretrained vision models when labels are scarce",
      "Strong Python and PyTorch",
      "Experimental discipline",
    ],
    alsoUseful: [
      "Label-efficient learning",
      "6-DoF pose estimation",
      "Neural reconstruction or Gaussian splatting",
      "Mesh and geometry processing",
      "Physics simulation and scene formats",
      "Evaluation metrics for generative models",
    ],
  },
  {
    slug: "thesis-contact-rich-manipulation-data",
    number: 2,
    title: "Contact-Rich Robot Data from Human Video",
    focus: "Video understanding · physics simulation · force and tactile data",
    intro: [
      "Robot policies are trained on teleoperated demonstrations, which scale linearly with human hours and are the dominant cost in robot learning. Video is far cheaper — but it carries only motion, and the manipulation that matters industrially is decided by force. So the force has to be generated, by replaying the recovered motion in simulation with the contact instrumented.",
    ],
    question:
      "How reliably can a manipulation task be recovered from ordinary third-person video — what happened, when each phase began and ended, along what trajectory — and does replaying it in simulation produce force and tactile data good enough to train on?",
    bring: [
      "Computer vision for manipulation — 6-DoF object tracking, video understanding, or hand–object interaction",
      "Robot kinematics and rigid-body dynamics",
      "Hands-on physics simulation — working inside Isaac Sim or MuJoCo and extending it, because you will be writing sensor models",
      "Signal processing for time series",
      "Strong Python and PyTorch",
      "Experimental discipline",
    ],
    alsoUseful: [
      "Temporal action segmentation",
      "Force/torque or tactile sensing",
      "Force-controlled assembly",
      "Grasp planning and trajectory optimisation",
      "Imitation learning",
      "Hands-on rig building and sensor calibration",
      "ROS",
    ],
  },
  {
    slug: "thesis-multimodal-foundation-model-adaptation",
    number: 3,
    title: "Multimodal Foundation Model Adaptation",
    focus: "Robot foundation models · 3D, force and pressure inputs · real-arm evaluation",
    intro: [
      "Open robot foundation models see camera and language — not geometry, not force. Adapting one to consume them is a search over a large design space, run today on expert intuition, re-done by hand at every deployment, leaving nothing transferable behind.",
    ],
    question:
      "Can an open pretrained model be extended to consume 3D geometry, force and contact pressure well enough to work on a real arm — and did the assisted procedure that chose the configuration beat an expert on the same compute budget?",
    bring: [
      "Real projects on robotic arms or humanoids using robot foundation models — a policy you trained, deployed on hardware and debugged when it failed, not coursework",
      "Hands-on experience with the LeRobot ecosystem and SO-101-class arms",
      "Strong Python and PyTorch, including fine-tuning large models",
      "Transformer and vision-language model familiarity",
      "The ability to design and train new input modules",
      "Experimental design for expensive experiments",
    ],
    alsoUseful: [
      "Point-cloud networks and time-series encoders",
      "Parameter-efficient fine-tuning",
      "Force-conditioned manipulation",
      "LLM tooling used with appropriate scepticism",
      "Edge inference and latency measurement",
      "Diffusion or flow-based policies",
      "ROS",
    ],
  },
];
