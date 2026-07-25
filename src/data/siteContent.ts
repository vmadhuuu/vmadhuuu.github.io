import profilePic from "@/assets/Professional.jpeg";
import type {
  CvEntry,
  MiscSection,
  NavItem,
  NewsItem,
  ProjectItem,
  PublicationItem,
  SkillGroup,
  SocialLink,
  TimelineItem,
} from "@/types/content";

import ucdLogo from "@/assets/logos/ucdavis.png";
import viaLogo from "@/assets/logos/via.png";
import boschLogo from "@/assets/logos/bosch.png";
import VTbench_image from "@/assets/VTbench_image.png";
import VEIL_image from "@/assets/VEIL.png";
import Plover_image from "@/assets/Plover.png";
import iot_image from "@/assets/iot_image.png";
import yolo_image from "@/assets/yolo_image.png";

const navigation: NavItem[] = [
  { label: "Home", path: "/" },
  // { label: "Projects", path: "/projects" },
  { label: "Publications", path: "/publications" },
  { label: "Misc", path: "/misc" },
];

const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:mvenkat@ucdavis.edu", icon: "mail" },
  {
    label: "Scholar",
    href: "https://scholar.google.com/citations?user=NCSx4yQAAAAJ&hl=en",
    icon: "scholar",
  },
  { label: "GitHub", href: "https://github.com/vmadhuuu", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vmadhuuu/",
    icon: "linkedin",
  },
];

const news: NewsItem[] = [
  {
    date: "July 2026",
    title: "Plover in collaboration with Bosch Research is now up on ArXiv!",
  },
  {
    date: "June 2026",
    title: "VEIL has been accepted in IEEE VIS 2026 (Short Papers)!",
  },
  {
    date: "May 2026",
    title: "VTBench is up on ArXiv!",
  },
  {
    date: "Jan 2026",
    title: "Started working as a TA for ECS273: Visual Analytics!",
  },
  {
    date: "June 2025",
    title:
      "Started collaborating with Bosch Research on intelligent interfaces!",
  },
  {
    date: "April 2025",
    title: "Continuing to work at VIA Lab as a PhD student!",
  },
  {
    date: "Apr 2024",
    title:
      "Joined VIA Lab to work on a benchmark on multimodal time-series chart classification under Prof. Dongyu Liu!",
  },
];

const projects: ProjectItem[] = [
  {
    id: "adaptive-research-agents",
    title:
      "VTBench: A Multimodal Framework for Time-Series Classification with Chart-Based Representations",
    summary:
      "Interactive AI systems that help scholars explore literature, plan experiments, and stay grounded in evidence.",
    description:
      "This project investigates how language agents can assist academic workflows while remaining transparent, steerable, and trustworthy in high-stakes research contexts.",
    topic: "AI Systems",
    tags: ["LLMs", "Human-AI Collaboration", "Research Tools"],
    featured: true,
    links: [
      { label: "Project Page", href: "#" },
      { label: "Code", href: "#" },
    ],
  },
  {
    id: "multimodal-benchmarks",
    title: "Robust Multimodal Benchmarks",
    summary:
      "Evaluation suites for reasoning over text, diagrams, and structured scientific evidence.",
    description:
      "A benchmark-driven effort focused on stress-testing multimodal models under distribution shifts, ambiguous evidence, and domain-specific scientific tasks.",
    topic: "Machine Learning",
    tags: ["Evaluation", "Multimodal Models", "Reliability"],
    featured: true,
    links: [
      { label: "Paper", href: "#" },
      { label: "Dataset", href: "#" },
    ],
  },
  {
    id: "continual-learning-robots",
    title: "Efficient Continual Learning for Edge Robots",
    summary:
      "Lightweight adaptation methods for embodied systems with constrained compute and memory budgets.",
    description:
      "This work explores how continual learning algorithms can retain useful knowledge on-device while supporting real-time robotic decision making.",
    topic: "Robotics",
    tags: ["Continual Learning", "Edge AI", "Embodied Systems"],
    links: [
      { label: "Demo", href: "#" },
      { label: "Slides", href: "#" },
    ],
  },
  {
    id: "privacy-aware-interfaces",
    title: "Privacy-Aware Collaboration Interfaces",
    summary:
      "Designing interfaces for shared AI systems that surface privacy and provenance constraints to end users.",
    description:
      "The project combines systems thinking and HCI methods to study how collaboration tools can communicate sensitive data boundaries more clearly.",
    topic: "Human-Computer Interaction",
    tags: ["Privacy", "Interfaces", "Collaboration"],
    links: [
      { label: "Prototype", href: "#" },
      { label: "Case Study", href: "#" },
    ],
  },
  {
    id: "graph-learning-science",
    title: "Interpretable Graph Learning for Scientific Discovery",
    summary:
      "Modeling relational scientific data with graph methods that produce legible, actionable explanations.",
    description:
      "A line of work on interpretable graph learning pipelines for scientific applications where understanding model behavior matters as much as accuracy.",
    topic: "Scientific ML",
    tags: ["Graphs", "Interpretability", "Scientific Discovery"],
    featured: true,
    links: [
      { label: "Manuscript", href: "#" },
      { label: "Poster", href: "#" },
    ],
  },
];

// Keep publications newest-first: add each new paper at the top of this list.
const publications: PublicationItem[] = [
  {
    title: "Plover: Steering GUI Agents through Plan-Centric Interaction",
    authors: [
      { name: "Madhumitha Venkatesan", highlight: true },
      { name: "Shicheng Wen" },
      { name: "Jiajing Guo" },
      { name: "Jorge Piazentin One" },
      { name: "Liu Ren" },
      { name: "Dongyu Liu" },
    ],
    venue: "ArXiv",
    year: 2026,
    category: "ArXiv",
    image: Plover_image,
    imageAlt: "Preview image for Plover",
    featured: true,
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2607.15193" },
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=Rh90z_2h8l8",
      },
    ],
  },
  {
    title: "VEIL: How Visual Encoding Hijacking Induces Bias In Vision Models",
    authors: [
      { name: "Suranjana Sooraj" },
      { name: "Xuyang Chen" },
      { name: "Madhumitha Venkatesan", highlight: true },
      { name: "Dongyu Liu" },
    ],
    venue: "IEEE VIS 2026 — Short Papers",
    year: 2026,
    category: "VIS",
    image: VEIL_image,
    imageAlt: "Preview image for VEIL",
    featured: true,
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2607.05641" },
      {
        label: "Code",
        href: "https://github.com/via-cs/vtbench/tree/suranjana-code",
      },
    ],
  },
  {
    title:
      "VTBench: A Multimodal Framework for Time-Series Classification with Chart-Based Representations",
    authors: [
      { name: "Madhumitha Venkatesan", highlight: true },
      { name: "Xuyang Chen" },
      { name: "Dongyu Liu" },
    ],
    venue: "ArXiv",
    year: 2026,
    category: "ArXiv",
    image: VTbench_image,
    imageAlt: "Preview image for VTBench",
    featured: true,
    links: [
      { label: "Paper", href: "https://arxiv.org/pdf/2604.27259" },
      { label: "Code", href: "https://github.com/via-cs/vtbench" },
      // { label: "Slides", href: "#" },
    ],
  },
  {
    title:
      "IoT based Smart and Efficient Waste Collection System for College Campuses",
    authors: [
      { name: "Madhumitha Venkatesan", highlight: true },
      { name: "Aditi Aatmaja" },
      { name: "A Jackuline Mahariba" },
    ],
    venue: "AIP Conference Proceedings",
    year: 2024,
    category: "Conference",
    image: iot_image,
    imageAlt: "Preview image for IoT",
    // featured: true,
    links: [{ label: "Paper", href: "https://doi.org/10.1063/5.0217056" }],
  },
  {
    title:
      "Comparative Study on Various Architectures of YOLO models used in Object Detection",
    authors: [
      { name: "Baranidharan Balakrishnan" },
      { name: "Rashmi Chelliah" },
      { name: "Madhumitha Venkatesan", highlight: true },
      { name: "Chetan Sah" },
    ],
    venue:
      "International Conference on Computing, Communication, and Intelligent Systems (ICCCIS)",
    year: 2022,
    category: "Conference",
    image: yolo_image,
    imageAlt: "Preview image for YOLO",
    links: [
      {
        label: "Paper",
        href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10037635",
      },
    ],
  },
];

const education: TimelineItem[] = [
  {
    title: "PhD in Computer Science",
    subtitle: "Placeholder University",
    period: "2023 - Present",
    description:
      "Research focus on trustworthy AI systems, human-AI collaboration, and evaluation for scientific workflows.",
  },
  {
    title: "MS in Computer Science",
    subtitle: "Example Institute of Technology",
    period: "2021 - 2023",
    description:
      "Specialized in machine learning systems, applied statistics, and computational methods for large-scale data.",
  },
  {
    title: "BS in Computer Science and Mathematics",
    subtitle: "Sample State University",
    period: "2017 - 2021",
    description:
      "Built a strong foundation in algorithms, systems, optimization, and quantitative research.",
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Research Areas",
    items: [
      "Trustworthy AI",
      "Multimodal Machine Learning",
      "Human-AI Collaboration",
      "Scientific ML",
    ],
  },
  {
    title: "Methods",
    items: [
      "Evaluation Design",
      "Representation Learning",
      "Experimentation",
      "Qualitative + Quantitative Analysis",
    ],
  },
  {
    title: "Engineering",
    items: [
      "PyTorch",
      "Python",
      "TypeScript",
      "React",
      "Data Pipelines",
      "Cloud Compute",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "LaTeX", "Weights & Biases", "Figma", "Linux"],
  },
];

const cvSections: Record<string, CvEntry[]> = {
  education: [
    {
      title: "PhD in Computer Science",
      subtitle: "University of California, Davis",
      period: "2025 - Present",
      bullets: [
        "Advisor: Prof. Dongyu Liu",
        "VIA Lab, Department of Computer Science",
        "Research emphasis in multimodal systems with human AI interaction",
      ],
    },
    {
      title: "MS in Computer Science",
      subtitle: "University of California, Davis",
      period: "2023 - 2025",
      bullets: [
        "Graduate coursework in optimization, statistics, and distributed systems",
      ],
    },
  ],
  research: [
    {
      title: "Graduate Researcher",
      subtitle: "VIA Lab",
      period: "2024 - Present",
      bullets: ["Developed VTbench", "Plover, Bosch collaboration"],
    },
    {
      title: "Research Intern",
      subtitle: "Example Research Group",
      period: "Summer 2025",
      bullets: [
        "Built prototypes for scientific information retrieval",
        "Collaborated across research and engineering teams on benchmark design",
      ],
    },
  ],
  teaching: [
    {
      title: "Teaching Assistant, Advanced Machine Learning",
      subtitle: "Placeholder University",
      period: "Fall 2025",
      bullets: [
        "Led discussion sections and office hours",
        "Designed programming assignments and grading rubrics",
      ],
    },
    {
      title: "Teaching Assistant, Data Structures",
      subtitle: "Example Institute of Technology",
      period: "Spring 2023",
      bullets: [
        "Mentored students on algorithmic problem solving",
        "Supported labs and exam review sessions",
      ],
    },
  ],
  awards: [
    {
      title: "Graduate Research Fellowship",
      subtitle: "Placeholder University",
      period: "2025",
      bullets: ["Competitive fellowship supporting doctoral research"],
    },
    {
      title: "Student Travel Grant",
      subtitle: "Major AI Conference",
      period: "2025",
      bullets: [
        "Awarded for presenting accepted work at an international venue",
      ],
    },
  ],
  service: [
    {
      title: "Student Volunteer",
      subtitle: "Top-Tier CS Conference",
      period: "2024 - 2025",
      bullets: ["Supported conference operations and attendee coordination"],
    },
    {
      title: "Mentor",
      subtitle: "Undergraduate Research Program",
      period: "2024 - Present",
      bullets: [
        "Mentored junior students on research process, writing, and experimentation",
      ],
    },
  ],
};

const miscSections: MiscSection[] = [
  {
    title: "Writing & Notes",
    description:
      "A flexible section for informal essays, research notes, or reading reflections.",
    items: [
      {
        title: "On Building Better Research Tools",
        meta: "Essay placeholder",
        description:
          "Replace with a short summary of a blog post, note, or perspective piece.",
      },
      {
        title: "Reading Notes on Evaluation in AI",
        meta: "Working notes",
        description:
          "A useful space for sharing annotated bibliographies or evolving ideas.",
      },
    ],
  },
  {
    title: "Teaching & Talks",
    description:
      "A simple area for invited talks, tutorials, or teaching materials.",
    items: [
      {
        title: "Guest Lecture: Human-Centered AI",
        meta: "Talk placeholder",
        description:
          "Use this for slides, recordings, and short summaries of presentations.",
      },
      {
        title: "Workshop: Reproducible ML Research",
        meta: "Teaching material",
        description:
          "A clean way to share resources from seminars, tutorials, or mentoring sessions.",
      },
    ],
  },
  {
    title: "Life Beyond Research",
    description: "For travel, hobbies, photography, or a small human touch.",
    items: [
      {
        title: "Field Notes from Conference Travel",
        meta: "Travel placeholder",
        description:
          "A great place for conference diaries, lab retreats, or personal reflections.",
      },
      {
        title: "Favorite Side Projects",
        meta: "Personal",
        description:
          "You can keep this light and elegant while still feeling personal and genuine.",
      },
    ],
  },
];

// Replace the values in this file with your own information to personalize the site.
export const siteContent = {
  navigation,
  profile: {
    name: "Madhumitha Venkatesan",
    title: "PhD Student in Computer Science",
    university: "University of California Davis",
    department: "Department of Computer Science",
    advisor: "Prof. Dongyu Liu",
    location: "Davis, CA",
    email: "mvenkat@ucdavis.edu",

    photo: profilePic,
    intro:
      "Hi! I’m a PhD student in Computer Science at [ucd] University of California Davis, where I explore the intersection of humans, AI, and interactive systems.\n\nI conduct research in the [via] VIA Lab under Prof. Dongyu Liu. My work focuses on visual analytics, multimodal AI, and intelligent interfaces that make AI systems more collaborative, transparent, and adaptable to people.\n\nI’m interested in designing human-in-the-loop systems and interactive interfaces that help users better interact with data and AI. My work also includes real-world industrial collaborations with Bosch Research [bosch].\n\nOutside of research, I’m trained in Indian classical dance forms, and I love spending time outdoors hiking in nature. I also deeply enjoy music, singing, cinema, and choreographing dance pieces to songs as a way to keep my creative side alive!",
    introLogos: {
      ucd: {
        src: ucdLogo,
        alt: "UC Davis logo",
      },
      via: {
        src: viaLogo,
        alt: "VIA Lab logo",
      },
      bosch: {
        src: boschLogo,
        alt: "Bosch logo",
      },
    },
    longBio: [
      "Your Name is a PhD student in the Department of Computer Science at Placeholder University, where they are advised by Prof. Advisor Name. Their research explores how AI systems can better support human reasoning in scientific and high-stakes environments.",
      "More specifically, they build and evaluate interactive machine learning systems with an emphasis on reliability, human oversight, and evidence-grounded decision making. They are excited by questions that connect model design, system behavior, and user experience.",
      "Before starting the PhD, they completed graduate and undergraduate training in computer science and quantitative methods, and worked on a mix of machine learning, systems, and HCI-inspired research projects.",
    ],
    interests: [
      "Trustworthy AI",
      "Human-AI Collaboration",
      "Multimodal ML",
      "Evaluation",
      "Scientific ML",
    ],
  },
  socialLinks,
  news,
  projects,
  publications,
  education,
  skillGroups,
  teachingService: {
    teaching: [
      "Teaching Assistant, Advanced Machine Learning",
      "Teaching Assistant, Data Structures",
      "Mentor for undergraduate research students",
    ],
    service: [
      "Student volunteer at major CS conferences",
      "Reviewer for workshops and student research symposia",
      "Organizer for lab reading group and mentoring sessions",
    ],
  },
  cvSections,
  miscSections,
  footer: {
    copyrightName: "Madhumitha",
  },
};
