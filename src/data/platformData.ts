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
    title: "Frontier Collaboration",
    description:
      "Collaborate directly with researchers, builders, and deeptech initiatives pushing the boundaries of autonomous systems.",
    stat: "120+",
    statLabel: "Global research hubs represented",
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
