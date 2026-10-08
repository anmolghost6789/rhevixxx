export interface Opportunity {
  id: string;
  title: string;
  compensation: string;
  rateType: "/ hr" | "/ task" | "/ month";
  category: "AI" | "Engineering" | "Data" | "Research" | "Design" | "Science";
  clientType: "Frontier Lab" | "Tier 1 AI Unicorn" | "DeepTech Research" | "Enterprise AI";
  clientName: string;
  location: "Remote (Global)" | "Remote (US/EU)" | "Hybrid / Flexible";
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  tags: string[];
  matchScore: number;
  applicantsCount: number;
  isUrgent?: boolean;
}

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

export const TICKER_ITEMS = [
  { compensation: "$250", type: "/ task", title: "LLM Evaluation Engineer", category: "AI Alignment", client: "Frontier Lab" },
  { compensation: "$320", type: "/ hr", title: "Multimodal Research Specialist", category: "Deep Learning", client: "Cognition Alpha" },
  { compensation: "$210", type: "/ hr", title: "Computer Vision & 3D Gaussian Lead", category: "Spatial AI", client: "Synthetix" },
  { compensation: "$180", type: "/ task", title: "Synthetic Data Curation Architect", category: "Data Science", client: "Nexus Foundation" },
  { compensation: "$340", type: "/ hr", title: "Mathematical Reasoning Benchmark Lead", category: "Research", client: "Apex Labs" },
  { compensation: "$275", type: "/ hr", title: "Distributed GPU Infra Engineer", category: "Engineering", client: "ScaleMatrix" },
  { compensation: "$195", type: "/ task", title: "RLHF Post-Training Evaluator", category: "AI Safety", client: "OmniAI" },
  { compensation: "$230", type: "/ hr", title: "AI Product & Agentic UX Designer", category: "Design", client: "Verve Intelligence" },
];

export const TRUST_METRICS = [
  { value: "500K+", label: "Frontier Experts", detail: "Top 1.5% acceptance rate" },
  { value: "120+", label: "Countries Represented", detail: "Global talent mobility" },
  { value: "10K+", label: "Frontier Opportunities", detail: "Funded by top AI enterprises" },
  { value: "98%", label: "Expert Satisfaction", detail: "Direct automated weekly payouts" },
];

export const EDITORIAL_LEADERS: EditorialLeader[] = [
  {
    id: "elena-vance",
    name: "Dr. Elena Vance",
    role: "Principal Alignment Researcher",
    affiliation: "ex-Frontier Safety Initiative · MIT Ph.D.",
    expertise: "Mechanistic Interpretability & RLHF",
    quote: "Great AI systems are built by people who understand both technology and the nuanced human context around it.",
    image: "/images/elena_vance.jpg",
    bio: "Pioneering verifiable safety guarantees and human alignment benchmarks for reasoning models exceeding human baselines.",
    verifiedBadges: ["Peer Reviewed", "Top 0.5% Evaluator", "Enterprise Mentor"],
  },
  {
    id: "marcus-thorne",
    name: "Marcus Thorne",
    role: "Staff Distributed AI Systems Architect",
    affiliation: "Former Cluster Lead · Stanford MS",
    expertise: "Megawatt-Scale Training Clusters",
    quote: "The bottleneck isn't compute anymore—it's having the right domain minds framing the architecture and training pipelines.",
    image: "/images/marcus_thorne.jpg",
    bio: "Architecting fault-tolerant distributed tensor parallelism for 100k+ GPU clusters across federated research environments.",
    verifiedBadges: ["Cluster Lead", "Top Contributor", "Vetted Specialist"],
  },
  {
    id: "sophia-chen",
    name: "Sophia Chen",
    role: "Lead Multimodal Perception Engineer",
    affiliation: "Carnegie Mellon AI Institute",
    expertise: "Vision-Language Grounding & Robotics",
    quote: "On rhevix, I work directly with frontier labs solving foundational problems without bureaucratic friction or geographic limits.",
    image: "/images/elena_vance.jpg", // high quality fallback
    bio: "Developing real-time continuous video understanding and embodied physical intuition models for humanoid robotics.",
    verifiedBadges: ["Robotics Fellow", "Frontier Lab Partner"],
  },
  {
    id: "tariq-mansoor",
    name: "Dr. Tariq Al-Mansoor",
    role: "Cognitive Science & Reasoning Specialist",
    affiliation: "Oxford Cognitive Lab Ph.D.",
    expertise: "Neuro-Symbolic Logic & Proof Verification",
    quote: "Evaluation of next-generation reasoning demands deep mathematical rigor that generic automated benchmarks completely miss.",
    image: "/images/marcus_thorne.jpg", // high quality fallback
    bio: "Formulating formal verification pipelines and Lean-based automated theorem proving evaluation rubrics for frontier models.",
    verifiedBadges: ["Math Olympian", "Core Reviewer"],
  },
];

export const VALUE_PROPOSITIONS = [
  {
    number: "01",
    tagline: "HIGH-VALUE WORK",
    headline: "Tackle projects that demand authentic frontier intellect.",
    description: "Work on foundational LLM post-training, complex architectural design, automated scientific discovery, and high-impact AI safety systems.",
    metrics: "Average $220/hr · 100% IP Protected",
    badge: "Vetted Tier 1 Projects",
  },
  {
    number: "02",
    tagline: "GLOBAL FLEXIBILITY",
    headline: "Choose remote opportunities from anywhere on the planet.",
    description: "Complete autonomy over your hours, timezone commitments, and project selection. Work asynchronously with world-class peers from 120+ nations.",
    metrics: "Instant Cross-Border Payouts · USD / USDC",
    badge: "Global Freedom",
  },
  {
    number: "03",
    tagline: "EXCEPTIONAL NETWORK",
    headline: "Collaborate alongside minds operating at the edge of tech.",
    description: "Connect with doctoral researchers, systems wizards, and technical leaders who challenge and elevate your frontier capabilities daily.",
    metrics: "Exclusive Salon Discussions · Co-Authored Works",
    badge: "Curated 1.5% Community",
  },
];

export const EXPERT_STORIES: ExpertStory[] = [
  {
    id: "story-1",
    name: "Dr. Aris Thorne",
    profession: "Post-Doctoral Fellow in Formal Verification",
    education: "ETH Zürich · Mathematics",
    testimonial: "rhevix connected me to a Tier 1 lab working on theorem proving. I earned $42,000 in two months while maintaining my academic research sabbatical.",
    duration: "2:40 Min Story",
    rate: "$280/hr",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    specialty: "Mathematical Logic & Lean 4",
  },
  {
    id: "story-2",
    name: "Kavita Rao",
    profession: "Senior Distributed ML Systems Engineer",
    education: "UC Berkeley · Computer Science",
    testimonial: "The project transparency on rhevix is unmatched. Clear deliverables, immediate access to bleeding-edge weights, and zero time-tracking surveillance.",
    duration: "3:15 Min Story",
    rate: "$240/hr",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
    specialty: "vLLM & CUDA Kernel Tuning",
  },
  {
    id: "story-3",
    name: "Dr. Julian Mercer",
    profession: "Principal Computational Linguist",
    education: "Cambridge University · Linguistics",
    testimonial: "I evaluate multimodal semantic coherence for conversational agents. The compensation is higher than institutional consulting, with total schedule control.",
    duration: "1:55 Min Story",
    rate: "$220/task",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    specialty: "Pragmatics & Multilingual Alignment",
  },
  {
    id: "story-4",
    name: "Amara Okonkwo",
    profession: "Synthetic Data & Vision Research Lead",
    education: "Imperial College London",
    testimonial: "I went from standard software consulting to shaping autonomous robotics foundation datasets. The caliber of teams hiring through rhevix is extraordinary.",
    duration: "2:10 Min Story",
    rate: "$260/hr",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    specialty: "Diffusion Geometry & 3D Assets",
  },
];

export const EXPERTISE_CATEGORIES: ExpertiseCategory[] = [
  {
    id: "software-eng",
    title: "Software Engineering",
    opportunitiesCount: 1420,
    description: "High-concurrency systems, low-latency APIs, and distributed scalable architectures.",
    skills: ["Rust", "Go", "C++", "Distributed Systems", "Kubernetes"],
    icon: "Code",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    opportunitiesCount: 2840,
    description: "Foundation models, LLM alignment, agentic workflows, and reasoning systems.",
    skills: ["Transformers", "RLHF", "DSPy", "LangGraph", "Fine-Tuning"],
    icon: "Brain",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    opportunitiesCount: 1960,
    description: "Deep neural networks, PyTorch model training, optimization, and quantization.",
    skills: ["PyTorch", "JAX", "Triton", "Quantization", "Model Pruning"],
    icon: "Cpu",
  },
  {
    id: "data-science",
    title: "Data Science",
    opportunitiesCount: 880,
    description: "Synthetic data generation, curation pipelines, benchmark design, and analytics.",
    skills: ["Pandas", "Spark", "Data Curation", "Statistical Testing", "SQL"],
    icon: "Database",
  },
  {
    id: "research",
    title: "Research",
    opportunitiesCount: 650,
    description: "Scientific paper evaluation, novel theorem discovery, and benchmark development.",
    skills: ["Literature Review", "Hypothesis Testing", "LaTeX", "ArXiv Peer Review"],
    icon: "Sparkles",
  },
  {
    id: "mathematics",
    title: "Mathematics",
    opportunitiesCount: 420,
    description: "Formal logic, proof checking in Lean 4, linear algebra, and topology.",
    skills: ["Lean 4", "Combinatorics", "Abstract Algebra", "Optimization Theory"],
    icon: "Sigma",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    opportunitiesCount: 390,
    description: "AI red-teaming, prompt injection defense, sandboxing, and adversarial robustness.",
    skills: ["Red Teaming", "Jailbreak Testing", "Zero-Knowledge", "Binary Auditing"],
    icon: "Shield",
  },
  {
    id: "cloud-eng",
    title: "Cloud Engineering",
    opportunitiesCount: 710,
    description: "GPU cluster orchestration, Slurm workload managers, and cloud networking.",
    skills: ["AWS", "GCP", "Slurm", "Terraform", "InfiniBand Networking"],
    icon: "Cloud",
  },
  {
    id: "design",
    title: "Design",
    opportunitiesCount: 290,
    description: "Human-AI interfaces, steerability controls, generative canvas UX, and systems.",
    skills: ["Design Systems", "Figma", "Human-AI Interaction", "Micro-Interactions"],
    icon: "Palette",
  },
  {
    id: "product",
    title: "Product",
    opportunitiesCount: 340,
    description: "Agentic product strategy, evaluation metric design, and frontier roadmapping.",
    skills: ["AI Product Strategy", "User Studies", "Eval Metrics", "Go-To-Market"],
    icon: "Layers",
  },
  {
    id: "science",
    title: "Science",
    opportunitiesCount: 210,
    description: "Computational biology, molecular docking, materials discovery, and physics simulations.",
    skills: ["AlphaFold", "Molecular Dynamics", "Bioinformatics", "Quantum Sim"],
    icon: "Atom",
  },
  {
    id: "writing",
    title: "Writing & Reasoning",
    opportunitiesCount: 470,
    description: "High-depth technical writing, pedagogical explanation, and golden dataset authoring.",
    skills: ["Technical Writing", "Curriculum Design", "Fact Verification", "Epistemic Rigor"],
    icon: "PenTool",
  },
];

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: "opp-1",
    title: "Senior AI Engineer — LLM Evaluation & Alignment",
    compensation: "$250",
    rateType: "/ task",
    category: "AI",
    clientType: "Frontier Lab",
    clientName: "Frontier Scale AI",
    location: "Remote (Global)",
    summary: "Evaluate and improve next-generation reasoning and chain-of-thought outputs for an unreleased frontier LLM.",
    description: "You will collaborate directly with our Post-Training Alignment Research group to construct high-difficulty grading rubrics, critique subtle reasoning flaws, and supervise fine-tuning datasets.",
    responsibilities: [
      "Critique and annotate step-by-step mathematical and code reasoning outputs",
      "Author rigorous adversarial test cases to provoke hallucinations",
      "Benchmark model outputs against state-of-the-art frontier releases",
      "Contribute directly to automated preference learning pipelines",
    ],
    requirements: [
      "MS or Ph.D. in Computer Science, Mathematics, or equivalent applied experience",
      "Proficiency in Python and transformer architectures",
      "Proven ability to articulate complex logical fallacies with high clarity",
      "Prior experience in RLHF or post-training data annotation is a plus",
    ],
    tags: ["Python", "LLM", "Machine Learning", "RLHF", "Reasoning"],
    matchScore: 98,
    applicantsCount: 14,
    isUrgent: true,
  },
  {
    id: "opp-2",
    title: "Senior AI Research Specialist — Multimodal Perception",
    compensation: "$320",
    rateType: "/ hr",
    category: "Research",
    clientType: "DeepTech Research",
    clientName: "Cognition Alpha",
    location: "Remote (Global)",
    summary: "Develop video-token representation benchmarks for unified vision-audio-text foundation architectures.",
    description: "Lead the design of evaluation suites that measure temporal reasoning and spatial understanding across long-form video and high-resolution sensor feeds.",
    responsibilities: [
      "Design spatial-temporal consistency metrics for multimodal models",
      "Curate challenging corner-case datasets (occlusion, dynamic lighting, reflection)",
      "Co-author technical documentation and benchmark publication reports",
    ],
    requirements: [
      "Strong background in PyTorch, Vision Transformers, and 3D perception",
      "Track record of publishing in CVPR, ICCV, NeurIPS, or equivalent frontier work",
      "Fluency in CUDA profiling and memory-efficient attention kernels",
    ],
    tags: ["Vision Transformers", "PyTorch", "Multimodal", "Video AI", "Research"],
    matchScore: 95,
    applicantsCount: 8,
    isUrgent: true,
  },
  {
    id: "opp-3",
    title: "Computer Vision Expert — 3D Gaussian Splatting & Robotics",
    compensation: "$210",
    rateType: "/ hr",
    category: "Engineering",
    clientType: "Tier 1 AI Unicorn",
    clientName: "Spatial Intelligence Co",
    location: "Remote (US/EU)",
    summary: "Optimize real-time neural radiance and 3D Gaussian scene reconstruction for autonomous robot manipulation.",
    description: "Join a fast-moving team building physical foundation models. You will implement fast rasterization and point cloud integration routines.",
    responsibilities: [
      "Port and benchmark novel Gaussian splatting primitives in C++ and CUDA",
      "Integrate RGB-D camera feeds with latency under 15ms",
      "Ensure robust reconstruction under partial sensor failure",
    ],
    requirements: [
      "5+ years with C++, CUDA, OpenCV, and modern 3D graphics pipelines",
      "Familiarity with ROS2, Isaac Sim, or robotics simulation environments",
    ],
    tags: ["C++", "CUDA", "3D Gaussian", "Robotics", "Computer Vision"],
    matchScore: 92,
    applicantsCount: 11,
  },
  {
    id: "opp-4",
    title: "Data Analyst & Synthetic Pipeline Architect",
    compensation: "$150",
    rateType: "/ task",
    category: "Data",
    clientType: "Enterprise AI",
    clientName: "Synthetix Labs",
    location: "Remote (Global)",
    summary: "Build high-throughput synthetic text generation workflows and validation heuristics for domain specialization.",
    description: "Formulate programmatic filtering pipelines to eliminate contamination and repetition in multimillion-token pre-training and fine-tuning datasets.",
    responsibilities: [
      "Engineer deduplication algorithms using MinHash and embeddings",
      "Monitor linguistic diversity metrics and semantic drift across batches",
      "Produce executive quality health reports on training corpora",
    ],
    requirements: [
      "High proficiency in Python, DuckDB, Polars, and HuggingFace datasets",
      "Deep understanding of n-gram statistics and entropy scoring",
    ],
    tags: ["Python", "Polars", "Synthetic Data", "Data Curation", "Statistics"],
    matchScore: 89,
    applicantsCount: 22,
  },
  {
    id: "opp-5",
    title: "Neural Architecture & Reasoning Benchmark Designer",
    compensation: "$340",
    rateType: "/ hr",
    category: "Science",
    clientType: "Frontier Lab",
    clientName: "Nexus Frontier",
    location: "Remote (Global)",
    summary: "Create Olympiad-level mathematics and formal logic problems to test automated proof engines.",
    description: "Design provably novel mathematical problems with step-by-step verification proofs in Lean 4 or Isabelle/HOL.",
    responsibilities: [
      "Author rigorous mathematical problem statements with formal certificates",
      "Evaluate frontier model proofs for subtle gaps and non-sequiturs",
      "Contribute to international reasoning competitions and AI milestones",
    ],
    requirements: [
      "Ph.D. in Pure Mathematics, Mathematical Logic, or Theoretical CS",
      "Demonstrated ability with interactive theorem provers (Lean 4 preferred)",
    ],
    tags: ["Lean 4", "Formal Logic", "Olympiad Math", "Proof Verification", "Mathematics"],
    matchScore: 97,
    applicantsCount: 6,
    isUrgent: true,
  },
  {
    id: "opp-6",
    title: "Staff AI Product Designer — Autonomous Agent Interfaces",
    compensation: "$220",
    rateType: "/ hr",
    category: "Design",
    clientType: "Tier 1 AI Unicorn",
    clientName: "Aether Dynamics",
    location: "Remote (Global)",
    summary: "Define UX patterns for steering multi-agent swarms with human oversight and transparent causality graphs.",
    description: "Design editorial-grade interactive canvases, diff inspectors, and approval interfaces that empower professionals to orchestrate dozens of autonomous subagents.",
    responsibilities: [
      "Design interactive state-machine visualizations and rewind controls",
      "Prototype micro-interactions with high visual fidelity in React & Framer Motion",
      "Conduct user research with top tier AI engineering teams",
    ],
    requirements: [
      "Exceptional design portfolio showcasing complex enterprise or developer tools",
      "Deep understanding of AI latency, streaming tokens, and probabilistic UX",
      "Ability to write clean CSS and interactive prototypes",
    ],
    tags: ["Figma", "UI/UX", "Agent Systems", "Design Systems", "Prototyping"],
    matchScore: 94,
    applicantsCount: 9,
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Create your profile",
    headline: "Map your true domain depth",
    description: "Highlight your verified papers, GitHub contributions, core algorithms, and specialized frontier disciplines in minutes.",
    detailTag: "Decentralized Credentialing",
    action: "Takes < 3 minutes",
  },
  {
    step: "02",
    title: "Show your expertise",
    headline: "Fast-track technical calibration",
    description: "Demonstrate your intuition through focused sandbox challenges, code critiques, or reasoning audits designed by frontier peers.",
    detailTag: "No Generic Leetcode",
    action: "Self-Paced Sandbox",
  },
  {
    step: "03",
    title: "Get matched",
    headline: "Autonomous intelligent routing",
    description: "Our neural matchmaking algorithm pairs your exact expertise with pre-funded lab initiatives and enterprise AI contracts that fit your terms.",
    detailTag: "Exact Skill Alignment",
    action: "Avg. Match in 24 hrs",
  },
  {
    step: "04",
    title: "Start working",
    headline: "Execute directly & get paid weekly",
    description: "Enjoy friction-free collaboration with frontier researchers, automated IP escrow, and direct weekly USD/USDC payouts.",
    detailTag: "Weekly Automated Payouts",
    action: "Global Wire / Crypto",
  },
];
