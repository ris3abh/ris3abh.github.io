export const SITE = {
  url: "https://www.rishabhsharma.co",
  name: "Rishabh Sharma",
  title: "Rishabh Sharma — AI Lead Engineer at Spinutech, Tampa",
  description:
    "Rishabh Sharma, AI Lead Engineer at Spinutech in Tampa. Author of the Engram agent-memory paper; builds OmniHarness and Archimedes; paper reviewer.",
  email: "rishabh.sharma1103@gmail.com",
  location: "Tampa, FL",
  timezone: "America/New_York",
  roles: [
    "AI Lead Engineer",
    "Agent Systems Builder",
    "Paper Reviewer",
    "Published Researcher",
    "Data Platform Engineer",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/ris3abh" },
    { label: "archimedes.run", href: "https://www.archimedes.run" },
    { label: "Hugging Face", href: "https://huggingface.co/ris3abh-11" },
    { label: "arXiv", href: "https://arxiv.org/abs/2609.34227" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rishabh-sharma-06b4a3188/" },
  ],
};

export const MANIFESTO =
  "I build agent systems that close their own loops — harnesses that verify their own builds, research engines that leave a trace a human can audit, and memory that is measured, not vibed. I pre-register my experiments, I audit my own results, and when my first experiment is wrong I keep it on the record.";

export const STATS = [
  { value: 3061, suffix: "×", label: "cheaper memory writes — Engram, raw turns vs LLM extraction" },
  { value: 38, suffix: "", label: "research replications shipped autonomously by Archimedes" },
  { value: 778, suffix: "", label: "held-out LoCoMo questions in a pre-registered test" },
  { value: 775, suffix: "+", label: "downloads of the engram-eval dataset on Hugging Face" },
];

export type Project = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  name: string;
  kicker: string;
  tagline: string;
  year: string;
  shape: number;
  accent: string;
  stack: string[];
  facts: string[];
  links: { label: string; href: string }[];
  summary: string;
  body: { heading: string; text: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "engram",
    seoTitle: "Engram: Pre-Registered Agent Memory Study",
    seoDescription: "Engram, a pre-registered test of AI agent memory: raw turns picked by a typed decision model match LLM-extracted memory and are 3,061× cheaper to write.",
    name: "Engram",
    kicker: "Agent memory · Paper",
    tagline: "Does agent memory need LLM-extracted facts — or just the right raw turns?",
    year: "2026",
    shape: 0,
    accent: "#c6ff3d",
    stack: ["Python", "Jev", "LoCoMo", "LongMemEval", "LaTeX", "uv", "Docker"],
    facts: [
      "77.0% vs 77.5% on 778 held-out LoCoMo questions — non-inferior under a pre-registered −5pt margin",
      "Raw turns are 3,061× cheaper to write than LLM-extracted memory",
      "Reranking adds +17.4 pts (LoCoMo) and +9.1 pts (LongMemEval) at k=3",
      "`make reproduce-v3` rebuilds every number, table and the PDF with zero API calls",
    ],
    links: [
      { label: "arXiv 2609.34227", href: "https://arxiv.org/abs/2609.34227" },
      { label: "GitHub", href: "https://github.com/ris3abh/Engram" },
      { label: "Dataset", href: "https://huggingface.co/datasets/ris3abh-11/engram-eval" },
      { label: "DOI", href: "https://doi.org/10.5281/zenodo.22985242" },
    ],
    summary:
      "A pre-registered test of conversational memory for AI agents: raw turns selected by a typed decision model versus engram v2, an LLM-extraction memory, at matched context.",
    body: [
      {
        heading: "The question",
        text: "Published results disagree on whether conversational memory for agents needs LLM-extracted facts or whether selecting the right raw turns is enough. Engram tests that question under a pre-registered plan, on LoCoMo conversations never used during development and on LongMemEval.",
      },
      {
        heading: "What I found",
        text: "The context budget decides the answer. When the answer model reads few items, selection matters and raw turns hold their own: Turns + Jev at k=6 scored 77.0% against 77.5% for engram v2 at k=3 — non-inferior, with a one-sided 95% bound of −3.0 against a −5-point margin — while being 3,061× cheaper to write. When the model reads many items, extraction wins: engram v2 at k=20 is the most accurate system measured at 82.4%. The result held under blind human grading of discordant questions and with a second answer model (Llama 3.3 70B).",
      },
      {
        heading: "How it's built to be trusted",
        text: "Every number in the paper traces to a committed result file. `make reproduce-v3` rebuilds numbers.json, every table and figure, and the PDF, then runs a checker that fails on any number that doesn't trace back. Every result is labeled registered, exploratory or post-hoc. Along the way the study surfaced a real-world bug worth knowing: mem0 2.1.0 silently routes OpenAI calls to OpenRouter whenever an OpenRouter key is set.",
      },
      {
        heading: "Reception",
        text: "Co-authored with Rishika Lall and published on arXiv with a Zenodo DOI and a pre-registration DOI. It was listed on Hugging Face Daily Papers, picked up its first independent academic citation within weeks, and the open-source PRISM project built an experiment around it. The engram-eval dataset (33k rows) has passed 775 downloads.",
      },
    ],
  },
  {
    slug: "archimedes",
    seoTitle: "Archimedes: Autonomous AI Research Agent",
    seoDescription: "Archimedes is an open-source autonomous AI research agent that runs the research loop and leaves a trace you can verify: plan, code, metrics, failures.",
    name: "Archimedes",
    kicker: "Autonomous research · Open source",
    tagline: "Give it a prompt. It runs the research loop and hands you a trace you can verify.",
    year: "2026",
    shape: 2,
    accent: "#7b5cff",
    stack: ["Python", "Google ADK", "Claude Code", "FAISS", "Semantic Scholar", "arXiv", "LaTeX"],
    facts: [
      "Three modes: orchestrated novelty, simple replication, and AlphaEvolve-style evolve",
      "A graph of specialised agents: ideation → novelty gate → plan → implement → check → reflect → write",
      "Novelty scored against the citation graph via arXiv and Semantic Scholar",
      "38 research replications published autonomously to the archimedes-run org",
    ],
    links: [
      { label: "archimedes.run", href: "https://www.archimedes.run" },
      { label: "GitHub", href: "https://github.com/archimedes-run/ai-research-engineer" },
    ],
    summary:
      "An open-source autonomous AI research framework that produces reproducible traces — literature map, plan, code, metrics, failures and a draft — rather than finished papers.",
    body: [
      {
        heading: "Design principle",
        text: "Archimedes produces traces a human verifies, not finished papers. Transparency, steerability and trustworthiness come first. You give it a prompt and a mode; it runs a research loop end to end and leaves behind a literature map, an experiment plan, working code, metrics, the failures, and a manuscript draft.",
      },
      {
        heading: "Three modes",
        text: "Orchestrated mode generates a novel idea, gates it against the citation graph, then plans and implements experiments stage by stage, reflecting on results before drafting a LaTeX manuscript. Simple mode hands a narrow task or strict paper replication directly to a Claude Code agent. Evolve mode is AlphaEvolve/FunSearch-style search: it samples a FAISS archive of past code variants, mutates the best one, and keeps whatever improves the empirical metric.",
      },
      {
        heading: "Architecture",
        text: "Archimedes is a graph of specialised LLM agents — each with a narrow job, a strict prompt and a defined handoff — wired together to mirror how a research lab operates: ideation, novelty scoring, planning, Claude Code implementation, a success-criteria checker, a stage reflector and a writer. Long runs compress their event history so the loop can keep going for hours.",
      },
      {
        heading: "Proof of work",
        text: "The archimedes-run GitHub organisation holds 38 repositories created by the system itself, including full replications of simulation-based inference and circle-packing experiments. I started archimedes.run as an open-source home for it, and keep building it in the open after hours.",
      },
    ],
  },
  {
    slug: "omniharness",
    seoTitle: "OmniHarness: Self-Verifying Agent Harness",
    seoDescription: "OmniHarness is an open-source, self-verifying agent harness: sandboxes, subagents, memory, MCP, and a gate that blocks “done” while the build is broken.",
    name: "OmniHarness",
    kicker: "Agent harness · Open source",
    tagline: "A self-extending agent platform that builds, registers and verifies its own capabilities.",
    year: "2026",
    shape: 1,
    accent: "#ff2e88",
    stack: ["Python", "LangGraph", "LangChain", "Docker", "MCP + OAuth", "TypeScript", "Next.js"],
    facts: [
      "Long-horizon tasks that take minutes to hours, inside per-thread Docker sandboxes",
      "Self-verifying live preview: the agent can't declare victory while the build is broken",
      "Subagents, persistent memory, hot-loaded skills, MCP client with OAuth",
      "Multi-channel gateway: Slack, Telegram and the web UI",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/archimedes-run/omniHarness" },
      { label: "archimedes.run", href: "https://www.archimedes.run/omniHarness" },
    ],
    summary:
      "An open-source super-agent harness that orchestrates subagents, persistent memory and sandboxed execution — built on the bet that the agent should close its own loops.",
    body: [
      {
        heading: "The bet",
        text: "OmniHarness exists to remove the human from the inner loop. The agent doesn't just write code and stop — it runs the result, sees what breaks, fixes it, and confirms it's clean before handing anything back. And instead of you hand-wiring connectors and restarting the stack, the agent builds and registers new capabilities at runtime.",
      },
      {
        heading: "Self-verifying live preview",
        text: "When the agent produces a web artifact, a preview auto-starts inside the sandbox and the gateway proxies it straight to your browser. A verification gate stops the agent from declaring success while the build is broken: it reads the dev-server or build error, fixes its own code, and re-checks until it's clean.",
      },
      {
        heading: "Harness foundation",
        text: "Isolated Docker containers per thread for code, shell and file work; subagents for decomposing long-horizon tasks and running them in parallel; persistent memory across sessions; structured skills hot-loaded on demand; an MCP client with OAuth; and a gateway that lets you drive the agent from Slack, Telegram or the web.",
      },
      {
        heading: "Lineage, honestly",
        text: "OmniHarness began as a fork of ByteDance's DeerFlow 2.0 and credits it openly. It has since diverged into an independent project with a different goal — and its README says plainly when DeerFlow is the safer pick. Because the agent writes and runs code with your credentials, the guardrails are the product: sandboxed off the control plane, with secrets scoped per capability and never exposed back to the model.",
      },
    ],
  },
  {
    slug: "area-o1",
    seoTitle: "Area O1: Open-Source O-1A Evidence Tool",
    seoDescription: "Area O1 is a free, open-source, local-first workspace that turns papers, code, talks and judging into an O-1A / EB-1A evidence file traced to its sources.",
    name: "Area O1",
    kicker: "Local-first · Evidence engine",
    tagline: "An O-1A / EB-1A evidence file, built on your own computer — every claim traced to its source.",
    year: "2026",
    shape: 3,
    accent: "#3dd6ff",
    stack: ["Python", "TypeScript", "MCP", "OpenAlex", "Semantic Scholar", "arXiv", "Gmail (read-only)"],
    facts: [
      "Evidence inbox pulls from GitHub, Hugging Face, Semantic Scholar, OpenAlex, arXiv and ORCID",
      "Every fact is a claim quoting its source word for word",
      "Runs on 127.0.0.1 — no account, no server, no telemetry",
      "MCP server lets Claude Code or Codex read the case without changing it",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/ris3abh/areao1" },
      { label: "Docs", href: "https://ris3abh.github.io/areao1/docs/" },
    ],
    summary:
      "A free, open-source, local-first workspace that turns your papers, code, talks, press and judging into a living, source-traced evidence file.",
    body: [
      {
        heading: "What it does",
        text: "Area O1 turns your work into a living evidence file for an extraordinary-ability case. A criteria scoreboard marks each O-1A or EB-1A criterion as banked, building or a gap — and an invitation never counts as a completion. An evidence inbox proposes items from GitHub, Hugging Face, Semantic Scholar, OpenAlex, arXiv, ORCID and any web page; nothing counts until you accept it.",
      },
      {
        heading: "Memory you can trace",
        text: "Every fact is a claim quoting its source word for word, drawn as a sky you can click back to the raw page. Rule statements are checked against official sources that refresh when a rule actually changes, and letter drafts are built only from approved claims.",
      },
      {
        heading: "Private by construction",
        text: "The dashboard is served only to your own machine. Your case is a folder of plain files in its own git repo. Gmail access is read-only, and nothing sends without your approval. Claude Code and Codex can read the case over MCP, but they can't change your evidence.",
      },
    ],
  },
  {
    slug: "rallion",
    seoTitle: "Rallion: Human-Approved GTM Agent",
    seoDescription: "Rallion turns live market signals into evidence-cited campaign opportunities that a human approves before any outreach is sent.",
    name: "Rallion",
    kicker: "GTM engine · Human-in-the-loop",
    tagline: "Live market signals in. Evidence-cited, human-approved outreach out.",
    year: "2026",
    shape: 4,
    accent: "#ffb23d",
    stack: ["Django", "Python", "TypeScript", "Gaussian processes", "BALD", "FastEmbed"],
    facts: [
      "Signals → evidence-cited opportunities → human approval → end-to-end outreach",
      "Prospects qualified by an active-learning model: GP classifier with BALD acquisition",
      "Every prospect × channel is a thread with a guarded state machine — illegal jumps raise",
      "Nothing sends without an approval",
    ],
    links: [{ label: "rallion.co", href: "https://rallion.co" }],
    summary:
      "A marketing command center that watches the market for buying signals, turns them into evidence-cited campaign opportunities a human approves, then runs the approved outreach end to end.",
    body: [
      {
        heading: "Automation proposes; a person decides",
        text: "Rallion ingests hiring, funding, launch and personnel signals and normalises them. A war room turns those signals into evidence-cited opportunities and campaigns that a human approves. Human approval gates all execution.",
      },
      {
        heading: "The engine",
        text: "Approved campaigns run on an owned task queue and daemon: discover prospects, qualify them with an active-learning model — a Gaussian-process classifier with BALD acquisition over FastEmbed embeddings — draft an opener, sync replies and follow up, pacing itself within activity windows and per-channel caps.",
      },
      {
        heading: "Safety as structure",
        text: "Every prospect on every channel is a thread with a guarded state machine. Illegal transitions raise, and suppression can halt a thread from any state. It's a monorepo: a Django engine of record and the public rallion.co site.",
      },
    ],
  },
];

export const LAB = [
  { name: "DealFlow", note: "Framework for AI sales agents that hold natural sales conversations", tag: "CAMEL-AI", href: "https://github.com/ris3abh/DealFlow" },
  { name: "AML P2P Fraud", note: "Caught my own leak: AUPRC 0.988 → honest 0.380. 26.1% SAR conversion at 2% alert capacity", tag: "GNN · Imbalance", href: "https://github.com/ris3abh/aml-p2p-fraud-detection" },
  { name: "TAMC", note: "Persistent homology as a control signal for time-series test-time adaptation", tag: "TDA", href: "https://github.com/ris3abh/TAMC" },
  { name: "ResArch / Spinscribe", note: "Multi-agent content API: FastAPI, CrewAI, Cognito, S3", tag: "CrewAI", href: "https://github.com/ris3abh/ResArch-core" },
  { name: "ResumeForgeAI", note: "Agent that tailors a resume to a job description and the ATS that reads it", tag: "OpenAI Agents", href: "https://github.com/ris3abh/ResumeForgeAI" },
  { name: "WebWiseAgent", note: "Personal research assistant that works the web for you", tag: "Agents", href: "https://github.com/ris3abh/WebWiseAgent" },
  { name: "Home Credit Default", note: "LightGBM credit risk with a Jenkins CI/CD pipeline", tag: "MLOps", href: "https://github.com/ris3abh/Home-Credit-Default-Risk" },
];

export const TIMELINE = [
  { year: "2019", title: "SK Enterprises", text: "Data scientist. Demand forecasting and machine-downtime prediction." },
  { year: "2020", title: "Digital Pass", text: "Data scientist. Sentiment at scale, Azure warehousing, graph-based marketing." },
  { year: "2022", title: "Drexel University", text: "MS Data Science on a Dean's Fellowship. 3.80 GPA." },
  { year: "2023", title: "Dark Matter Technologies", text: "AI/ML Ops. SageMaker deployments and CI/CD for document intelligence." },
  { year: "2024", title: "AWS Data Engineer", text: "Certified. Graduated. Pivoted hard into agents." },
  { year: "2025", title: "Spinutech", text: "Data & AI platform work. Agentic GTM and SEO tooling over MCP." },
  { year: "2026", title: "archimedes.run", text: "Founded it. Shipped Engram on arXiv, OmniHarness, Area O1. Judged & mentored at HackMIT." },
];

export const HONORS = [
  "First-author arXiv paper · 2609.34227",
  "Hugging Face Daily Papers · Oct 2026",
  "Paper reviewer",
  "Judge & mentor · HackMIT 2026",
  "Invited judge · HackPrinceton Fall 2026",
  "MS Data Science · Drexel Dean's Fellow",
  "AWS Certified Data Engineer",
];

export const STACK = [
  "Claude Code", "Agent SDK", "Google ADK", "LangGraph", "MCP", "CrewAI", "CAMEL",
  "Python", "TypeScript", "PyTorch", "FAISS", "DuckDB", "Spark", "Airflow",
  "Docker", "AWS", "Bedrock", "SageMaker", "FastAPI", "Django", "Next.js",
  "React Three Fiber", "GSAP", "Pre-registration", "Non-inferiority tests", "LaTeX",
];

// Scroll-driven frames on /work and each case study (the "top" projects).
export const FRAMES = [
  { slug: "engram", mock: "terminal", label: "engram / terminal", note: "zero API calls — every number re-derived", noteAt: "right:-2%;top:62%" },
  { slug: "paper", mock: "paper", label: "engram / the paper", note: "the sentence I'm proudest of", noteAt: "left:-4%;top:28%" },
  { slug: "archimedes", mock: "graph", label: "archimedes / studio", note: "it keeps its failures", noteAt: "right:2%;top:-7%" },
  { slug: "omniharness", mock: "sandbox", label: "omniharness / sandbox", note: "can't say “done” while the build is red", noteAt: "right:-1%;top:-7%" },
  { slug: "area-o1", mock: "dashboard", label: "area-o1 / dashboard", note: "an invitation never counts as done", noteAt: "left:30%;bottom:-8%" },
  { slug: "rallion", mock: "warroom", label: "rallion / war room", note: "nothing sends without me", noteAt: "right:2%;bottom:-8%" },
];

export const PAPER = {
  slug: "engram",
  name: "The paper",
  kicker: "arXiv 2609.34227 · first author",
  tagline: "A pre-registered test of agent memory — and the sentence I'm proudest of.",
  facts: ["Listed on Hugging Face Daily Papers", "First independent citation within weeks", "Pre-registration DOI + Zenodo release"],
};

export type More = { name: string; year: string; tag: string; note: string; href: string };
export const MORE: { group: string; items: More[] }[] = [
  {
    group: "Agents & research",
    items: [
      { name: "DealFlow", year: "2025", tag: "CAMEL-AI", note: "A framework for AI sales agents that hold natural, multi-turn sales conversations.", href: "https://github.com/ris3abh/DealFlow" },
      { name: "TAMC", year: "2026", tag: "Topology · TTA", note: "Persistent homology as a control signal for time-series test-time adaptation.", href: "https://github.com/ris3abh/TAMC" },
      { name: "ResArch / Spinscribe", year: "2025", tag: "CrewAI · FastAPI", note: "Multi-agent content API with Cognito auth and S3 storage.", href: "https://github.com/ris3abh/ResArch-core" },
      { name: "ResumeForgeAI", year: "2025", tag: "OpenAI Agents", note: "Tailors a resume to a job description — and to the ATS that reads it.", href: "https://github.com/ris3abh/ResumeForgeAI" },
      { name: "WebWiseAgent", year: "2025", tag: "Agents", note: "A personal research assistant that works the web for you.", href: "https://github.com/ris3abh/WebWiseAgent" },
    ],
  },
  {
    group: "Machine learning",
    items: [
      { name: "AML P2P Fraud", year: "2025", tag: "GNN · imbalance", note: "Caught my own leak: AUPRC 0.988 → an honest 0.380. 26.1% SAR conversion at 2% alert capacity.", href: "https://github.com/ris3abh/aml-p2p-fraud-detection" },
      { name: "Home Credit Default Risk", year: "2025", tag: "LightGBM · CI/CD", note: "Credit-risk modelling for the unbanked, shipped behind a Jenkins pipeline.", href: "https://github.com/ris3abh/Home-Credit-Default-Risk" },
      { name: "Sentencing Prediction", year: "2022", tag: "Legal ML", note: "Predicting sentencing type from court docket data, used at Drexel's Kline School of Law.", href: "https://github.com/ris3abh/Sentencing-prediction-on-docket-data" },
      { name: "Wildfire Perimeters", year: "2023", tag: "Computer vision", note: "Wildfire and perimeter detection from GeoTIFF imagery.", href: "https://github.com/ris3abh/DL-firefighters" },
      { name: "Collision Severity", year: "2025", tag: "XGBoost · CatBoost", note: "Predicting injury severity from crash data with gradient-boosted ensembles.", href: "https://github.com/ris3abh/Collisions_prediction" },
      { name: "Customer Segmentation", year: "2025", tag: "Deep learning", note: "Estimating family size from customer attributes and purchase patterns.", href: "https://github.com/ris3abh/customer_segmentation" },
      { name: "NBFC Loan Foreclosure", year: "2025", tag: "Classification", note: "Predicting early loan foreclosure for a non-bank lender.", href: "https://github.com/ris3abh/NBFC_Loan_forclosure_Prediction" },
    ],
  },
  {
    group: "Data engineering",
    items: [
      { name: "GoodReads Pipeline", year: "2025", tag: "ETL · Redshift", note: "Data pipeline for GoodReads API data into a Redshift warehouse.", href: "https://github.com/ris3abh/The_GoodReads_Pipeline" },
      { name: "Airflow + EMR ETL", year: "2025", tag: "Airflow · Spark", note: "Airflow-orchestrated Spark jobs on EMR, from S3 back to S3.", href: "https://github.com/ris3abh/ETL-pipeline-using-Airflow-and-AWS-EMR" },
      { name: "Covid-19 Forecasting", year: "2023", tag: "Time series", note: "Forecasting cases and deaths in Mexico, with a dashboard.", href: "https://github.com/ris3abh/DSCI521Covid-19DashBoard" },
    ],
  },
];

export type Stop = {
  id: string;
  kind: "ticket" | "badge" | "tag" | "tags";
  org: string;
  role: string;
  place: string;
  when: string;
  notable: string[];
  learnt: string;
  logo?: string;
  band?: string;
  extra?: { org: string; role: string; when: string; logo?: string; notable: string[] };
};
// Each stop is a different object, like the things you'd actually keep. Listed newest first; the page plays them oldest → newest.
export const JOURNEY: Stop[] = [
  {
    id: "spinutech", kind: "ticket", org: "Spinutech", role: "AI Lead Engineer", place: "Tampa, FL", when: "2025 – now",
    notable: ["Data & AI platform", "Agentic go-to-market workflows", "Spinscribe content API"],
    learnt: "learnt the best agent is the one a team actually trusts",
  },
  {
    id: "dmt", kind: "badge", org: "Dark Matter Technologies", role: "AI/ML Ops Co-op", place: "Jacksonville, FL", when: "2023",
    logo: "/img/dmt.webp", band: "#1c3d5a",
    notable: ["A/B testing pipeline for AIVA", "SageMaker model deployments", "Document-verification CI/CD"],
    learnt: "learnt production is where models go to get honest",
  },
  {
    id: "drexel", kind: "tag", org: "Drexel", role: "MS Data Science · Dean's Fellow", place: "Philadelphia, PA", when: "2022 – 24",
    notable: ["3.80 GPA on a Dean's Fellowship", "Social Justice Hackathon winner", "Sentencing model used at Kline Law"],
    learnt: "learnt to say “I was wrong” with a p-value",
  },
  {
    id: "indore", kind: "tags", org: "Digital Pass", role: "Data Scientist", place: "Indore, India", when: "2020 – 22", logo: "/img/digitalpass.webp",
    notable: ["Sentiment analysis at scale", "Azure warehousing & ETL", "Graph-based marketing insights"],
    learnt: "learnt data science is mostly asking better questions",
    extra: { org: "SK Enterprises", role: "Data Science", when: "2019", logo: "/img/sk.webp", notable: ["LSTM demand forecasting", "Machine-downtime prediction"] },
  },
];
