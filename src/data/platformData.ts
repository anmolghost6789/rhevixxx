export interface Expert {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  expertise: string;
  shortDescription: string;
  photo: string;
  rating: number;
  studentsCount: number;
  featuredTopic: string;
}

export interface Course {
  id: string;
  title: string;
  expertName: string;
  expertRole: string;
  expertPhoto: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessonsCount: number;
  image: string;
  description: string;
  badge?: string;
}

export interface OpportunityItem {
  id: string;
  role: string;
  title: string;
  company: string;
  clientName?: string;
  clientType?: string;
  skills: string[];
  tags: string[];
  tag?: string;
  remote: string;
  location?: string;
  compensation: string;
  rateType: string;
  category?: string;
  summary: string;
  description?: string;
  responsibilities: string[];
  requirements: string[];
  matchScore?: number;
  applicantsCount?: number;
  isUrgent?: boolean;
}

export type Opportunity = OpportunityItem;

export interface EditorialLeader {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  expertise: string;
  quote: string;
  image: string;
  bio: string;
  verifiedBadges: string[];
}

export interface ExpertStory {
  id: string;
  name: string;
  profession: string;
  education: string;
  testimonial: string;
  duration: string;
  rate: string;
  avatar: string;
  specialty: string;
}

export interface ExpertiseCategory {
  id: string;
  title: string;
  opportunitiesCount: number;
  description: string;
  skills: string[];
  icon: string;
}

export const EXPERTS: Expert[] = [
  {
    id: "elena-vance",
    name: "Dr. Elena Vance",
    role: "Principal Alignment Researcher",
    affiliation: "MIT Ph.D. · ex-Frontier Safety",
    expertise: "RLHF & Interpretability",
    shortDescription: "Pioneering verifiable safety guarantees and chain-of-thought calibration for reasoning models.",
    photo: "/images/elena_vance.jpg",
    rating: 4.98,
    studentsCount: 1420,
    featuredTopic: "Reasoning Model Evaluation",
  },
  {
    id: "marcus-thorne",
    name: "Marcus Thorne",
    role: "Staff Distributed AI Architect",
    affiliation: "Stanford MS · Former Cluster Lead",
    expertise: "GPU Infrastructure & Slurm",
    shortDescription: "Architecting megawatt-scale training pipelines and fault-tolerant tensor parallelism across 100k+ clusters.",
    photo: "/images/marcus_thorne.jpg",
    rating: 4.96,
    studentsCount: 1890,
    featuredTopic: "Distributed Training at Scale",
  },
  {
    id: "sophia-chen",
    name: "Sophia Chen",
    role: "Lead Multimodal Perception Engineer",
    affiliation: "Carnegie Mellon AI Institute",
    expertise: "Vision-Language & Robotics",
    shortDescription: "Developing real-time continuous video representation and spatial intuition models for autonomous hardware.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
    rating: 4.95,
    studentsCount: 1150,
    featuredTopic: "Embodied Vision-Language Systems",
  },
  {
    id: "tariq-mansoor",
    name: "Dr. Tariq Al-Mansoor",
    role: "Cognitive Science & Reasoning Lead",
    affiliation: "Oxford Ph.D. · Cognitive Systems",
    expertise: "Formal Proofs & Logic",
    shortDescription: "Building mathematical verification frameworks and Lean-based automated proof systems for LLM outputs.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    rating: 4.99,
    studentsCount: 920,
    featuredTopic: "Mathematical Logic & Verification",
  },
  {
    id: "aris-thorne",
    name: "Dr. Aris Thorne",
    role: "Senior Formal Verification Specialist",
    affiliation: "ETH Zürich · Applied Mathematics",
    expertise: "Lean 4 & Theorem Proving",
    shortDescription: "Bridging formal mathematical proofs with automated model synthesis for high-assurance code generation.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    rating: 4.94,
    studentsCount: 840,
    featuredTopic: "Automated Theorem Proving",
  },
  {
    id: "alex-rivera",
    name: "Alex Rivera",
    role: "Autonomous Agent Systems Architect",
    affiliation: "ex-DeepMind · Robotics Fellow",
    expertise: "Multi-Agent Workflows",
    shortDescription: "Designing resilient state-machine coordination and human-in-the-loop steering for autonomous swarms.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
    rating: 4.97,
    studentsCount: 1670,
    featuredTopic: "Multi-Agent Swarm Architectures",
  },
];

export const COURSES: Course[] = [
  {
    id: "course-1",
    title: "Frontier LLM Post-Training: SFT, DPO & RLHF",
    expertName: "Dr. Elena Vance",
    expertRole: "Principal Alignment Researcher",
    expertPhoto: "/images/elena_vance.jpg",
    level: "Advanced",
    duration: "6 Weeks · 18h",
    lessonsCount: 24,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    description: "Deep dive into reward modeling, preference optimization, refusal vector calibration, and chain-of-thought verification.",
    badge: "Popular",
  },
  {
    id: "course-2",
    title: "Distributed GPU Systems & Slurm Orchestration",
    expertName: "Marcus Thorne",
    expertRole: "Staff Distributed AI Architect",
    expertPhoto: "/images/marcus_thorne.jpg",
    level: "Intermediate",
    duration: "4 Weeks · 14h",
    lessonsCount: 18,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    description: "Hands-on cluster configuration, InfiniBand topology debugging, vLLM inference tuning, and Slurm batch management.",
    badge: "Hands-on",
  },
  {
    id: "course-3",
    title: "Multimodal Vision & 3D Spatial Intelligence",
    expertName: "Sophia Chen",
    expertRole: "Lead Multimodal Perception Engineer",
    expertPhoto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
    level: "Advanced",
    duration: "5 Weeks · 16h",
    lessonsCount: 20,
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80",
    description: "Build 3D Gaussian splatting primitives, train spatial point-cloud representations, and integrate robotics sensor streams.",
    badge: "Frontier",
  },
  {
    id: "course-4",
    title: "Designing Steerable AI Interfaces & Agent UX",
    expertName: "Alex Rivera",
    expertRole: "Autonomous Agent Architect",
    expertPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
    level: "Intermediate",
    duration: "4 Weeks · 12h",
    lessonsCount: 16,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
    description: "UX design patterns for probabilistic systems, token streaming states, diff inspectors, and multi-agent supervisory canvases.",
    badge: "Design",
  },
  {
    id: "course-5",
    title: "Formal Verification & Lean 4 for AI Reasoning",
    expertName: "Dr. Tariq Al-Mansoor",
    expertRole: "Cognitive Science & Reasoning Lead",
    expertPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    level: "Advanced",
    duration: "6 Weeks · 20h",
    lessonsCount: 26,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80",
    description: "Construct interactive theorem proving pipelines in Lean 4 to formally verify reasoning model correctness and mathematical proofs.",
    badge: "Math & Logic",
  },
  {
    id: "course-6",
    title: "Autonomous Multi-Agent Systems in Production",
    expertName: "Dr. Aris Thorne",
    expertRole: "Formal Verification Specialist",
    expertPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    level: "Advanced",
    duration: "5 Weeks · 15h",
    lessonsCount: 22,
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=80",
    description: "Architecting self-healing agent swarms with memory persistence, deterministic guardrails, and automated recovery loops.",
    badge: "Production",
  },
];

export const OPPORTUNITIES: OpportunityItem[] = [
  {
    id: "opp-1",
    role: "Senior AI Alignment & Evaluation Lead",
    title: "Senior AI Alignment & Evaluation Lead",
    company: "Frontier Scale AI",
    clientName: "Frontier Scale AI",
    clientType: "Frontier Lab",
    skills: ["Python", "RLHF", "Transformers", "Reasoning CoT"],
    tags: ["Python", "RLHF", "Transformers", "Reasoning CoT"],
    remote: "Remote (Global)",
    location: "Remote (Global)",
    compensation: "$250",
    rateType: "/ task",
    category: "AI",
    summary: "Evaluate and improve next-generation reasoning and chain-of-thought outputs.",
    description: "Collaborate directly with our Post-Training Alignment Research group.",
    responsibilities: ["Critique reasoning chains", "Author adversarial test cases"],
    requirements: ["MS/Ph.D. in CS or Math", "Proficiency in Python"],
    matchScore: 98,
    applicantsCount: 14,
    tag: "High Priority",
    isUrgent: true,
  },
  {
    id: "opp-2",
    role: "Multimodal Video Perception Specialist",
    title: "Multimodal Video Perception Specialist",
    company: "Cognition Alpha",
    clientName: "Cognition Alpha",
    clientType: "DeepTech Research",
    skills: ["PyTorch", "Vision Transformers", "3D Gaussian"],
    tags: ["PyTorch", "Vision Transformers", "3D Gaussian"],
    remote: "Remote (US/EU)",
    location: "Remote (US/EU)",
    compensation: "$320",
    rateType: "/ hr",
    category: "Research",
    summary: "Develop video-token representation benchmarks for unified architectures.",
    description: "Design evaluation suites that measure temporal reasoning and spatial understanding.",
    responsibilities: ["Design consistency metrics", "Curate corner-case datasets"],
    requirements: ["Strong background in PyTorch & ViT"],
    matchScore: 95,
    applicantsCount: 8,
    tag: "Tier 1 Lab",
    isUrgent: true,
  },
  {
    id: "opp-3",
    role: "Slurm & Large GPU Cluster Engineer",
    title: "Slurm & Large GPU Cluster Engineer",
    company: "ScaleMatrix Labs",
    clientName: "ScaleMatrix Labs",
    clientType: "Tier 1 AI Unicorn",
    skills: ["Slurm", "CUDA", "InfiniBand", "Linux Kernel"],
    tags: ["Slurm", "CUDA", "InfiniBand", "Linux Kernel"],
    remote: "Remote (Global)",
    location: "Remote (Global)",
    compensation: "$275",
    rateType: "/ hr",
    category: "Engineering",
    summary: "Optimize real-time neural radiance and cluster throughput.",
    description: "Join a fast-moving team building physical foundation models.",
    responsibilities: ["Port and benchmark novel primitives", "InfiniBand tuning"],
    requirements: ["5+ years with C++, CUDA, Linux kernel"],
    matchScore: 92,
    applicantsCount: 11,
    tag: "Immediate Seat",
  },
  {
    id: "opp-4",
    role: "Lean 4 Theorem Proving Benchmark Designer",
    title: "Lean 4 Theorem Proving Benchmark Designer",
    company: "Nexus Frontier",
    clientName: "Nexus Frontier",
    clientType: "Frontier Lab",
    skills: ["Lean 4", "Formal Logic", "Olympiad Math"],
    tags: ["Lean 4", "Formal Logic", "Olympiad Math"],
    remote: "Remote (Global)",
    location: "Remote (Global)",
    compensation: "$340",
    rateType: "/ hr",
    category: "Science",
    summary: "Create Olympiad-level mathematics and formal logic problems to test automated proof engines.",
    description: "Design provably novel mathematical problems with step-by-step verification proofs in Lean 4.",
    responsibilities: ["Author mathematical problem statements", "Evaluate frontier model proofs"],
    requirements: ["Ph.D. in Pure Mathematics or Theoretical CS"],
    matchScore: 97,
    applicantsCount: 6,
    tag: "Pre-Funded",
  },
  {
    id: "opp-5",
    role: "Synthetic Data Curation Architect",
    title: "Synthetic Data Curation Architect",
    company: "Synthetix AI",
    clientName: "Synthetix Labs",
    clientType: "Enterprise AI",
    skills: ["Python", "Polars", "Data Curation", "Entropy"],
    tags: ["Python", "Polars", "Data Curation", "Entropy"],
    remote: "Remote (Global)",
    location: "Remote (Global)",
    compensation: "$180",
    rateType: "/ task",
    category: "Data",
    summary: "Build high-throughput synthetic text generation workflows and validation heuristics.",
    description: "Formulate programmatic filtering pipelines to eliminate repetition in training datasets.",
    responsibilities: ["Engineer deduplication algorithms", "Monitor diversity metrics"],
    requirements: ["High proficiency in Python and DuckDB/Polars"],
    matchScore: 89,
    applicantsCount: 22,
    tag: "Active Pod",
  },
];

export const WHY_RHEVIX_BENEFITS = [
  {
    number: "01",
    title: "Learn from experts",
    description:
      "Direct masterclasses, code audits, and office hours with practitioners who have built and deployed frontier AI systems in production.",
    stat: "Top 1.5%",
    statLabel: "Vetted practitioner instructors",
  },
  {
    number: "02",
    title: "Build real skills",
    description:
      "No toy tutorials. Work on real benchmarks, production Slurm clusters, Lean mathematical proof systems, and verifiable alignment pipelines.",
    stat: "100%",
    statLabel: "Project-driven curriculum",
  },
  {
    number: "03",
    title: "Find better opportunities",
    description:
      "Get matched directly with funded frontier AI labs, deeptech startups, and tier-1 companies for high-value contracts and engineering roles.",
    stat: "$220+",
    statLabel: "Average hourly contract compensation",
  },
];

// Legacy Backward Compatible Arrays for unused components
export const TICKER_ITEMS = [
  { compensation: "$250", type: "/ task", title: "LLM Evaluation Engineer", category: "AI Alignment", client: "Frontier Lab" },
  { compensation: "$320", type: "/ hr", title: "Multimodal Research Specialist", category: "Deep Learning", client: "Cognition Alpha" },
];

export const TRUST_METRICS = [
  { value: "500K+", label: "Frontier Experts", detail: "Top 1.5% acceptance rate" },
  { value: "120+", label: "Countries Represented", detail: "Global talent mobility" },
];

export const EDITORIAL_LEADERS: EditorialLeader[] = [
  {
    id: "elena-vance",
    name: "Dr. Elena Vance",
    role: "Principal Alignment Researcher",
    affiliation: "MIT Ph.D. · ex-Frontier Safety",
    expertise: "Mechanistic Interpretability & RLHF",
    quote: "Great AI systems are built by people who understand both technology and the nuanced human context around it.",
    image: "/images/elena_vance.jpg",
    bio: "Pioneering verifiable safety guarantees.",
    verifiedBadges: ["Peer Reviewed"],
  },
];

export const VALUE_PROPOSITIONS = [
  {
    number: "01",
    tagline: "HIGH-VALUE WORK",
    headline: "Tackle projects that demand authentic frontier intellect.",
    description: "Work on foundational LLM post-training and AI safety systems.",
    metrics: "Average $220/hr",
    badge: "Vetted Tier 1 Projects",
  },
];

export const EXPERT_STORIES: ExpertStory[] = [
  {
    id: "story-1",
    name: "Dr. Aris Thorne",
    profession: "Post-Doctoral Fellow in Formal Verification",
    education: "ETH Zürich · Mathematics",
    testimonial: "Rhevix connected me to a Tier 1 lab working on theorem proving.",
    duration: "2:40 Min Story",
    rate: "$280/hr",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    specialty: "Mathematical Logic & Lean 4",
  },
];

export const EXPERTISE_CATEGORIES: ExpertiseCategory[] = [
  {
    id: "software-eng",
    title: "Software Engineering",
    opportunitiesCount: 1420,
    description: "High-concurrency systems, low-latency APIs, and distributed scalable architectures.",
    skills: ["Rust", "Go"],
    icon: "Code",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Create your profile",
    headline: "Map your true domain depth",
    description: "Highlight your verified papers and contributions.",
    detailTag: "Decentralized Credentialing",
    action: "Takes < 3 minutes",
  },
];
