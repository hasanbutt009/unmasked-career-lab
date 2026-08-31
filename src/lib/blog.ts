import { IMAGES } from "@/lib/site";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  date: string;
  image: string;
  isPlaceholder?: boolean;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  sources: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "therapist-burnout-clinical-masking-self-care",
    title:
      "Beyond the Mask: Understanding Therapist Burnout, Clinical Masking & Real Self-Care",
    description:
      "Therapist burnout is not a personal failure. Understand clinical masking and what real self-care looks like for mental-health professionals.",
    keywords: ["therapist burnout", "clinical masking", "mental health professional self-care"],
    date: "2019-09-18",
    image: IMAGES.blogBurnout,
    sections: [
      {
        heading: "Opening",
        paragraphs: [
          "Mental-health professionals spend their careers holding space for other people's pain - yet behind the calm, composed presence most clinicians present lies a reality nobody talks about: burnout.",
          "And for many, the most exhausting part is not the work itself. It is the masking - staying composed in every session even as you run on empty.",
        ],
      },
      {
        heading: "What is therapist burnout?",
        paragraphs: [
          "Burnout is more than a hard week. It is a prolonged response to chronic workplace stress: excessive caseloads, relentless emotional labor, and systems that treat your well-being as an afterthought.",
          "The research is stark: one whitepaper reports that 48.2% of practicing mental-health professionals experience severe clinical burnout - one of the highest rates of any profession.",
        ],
      },
      {
        heading: "What is clinical masking?",
        paragraphs: [
          "Clinical masking is the invisible labor of appearing fine - organized, composed, endlessly available - while privately running on fumes.",
          "It is code-switching into a professional persona that is not sustainable. Over time, masking does not protect you; it drains you, and it quietly erodes the quality of care you can give.",
        ],
      },
      {
        heading: "Why real self-care is not a bubble bath",
        paragraphs: [
          "The mainstream answer is individual: meditate, take a walk, practice self-care. But self-care that ignores the system just blames the burned-out clinician for their own exhaustion.",
          "Real self-care means boundaries, workload management, and naming structural causes - not adding more tasks to an already overloaded plate.",
        ],
      },
      {
        heading: "What actually helps",
        paragraphs: [
          "1) Recognize masking for what it is. 2) Name burnout as a systemic problem, not a personal failure. 3) Build boundaries that protect your capacity. 4) Get support that understands the clinical context - not generic advice.",
        ],
      },
    ],
    sources: [
      "TODO: Add Tyler's original whitepaper citation.",
      "WHO ICD-11 Burnout definition.",
      "Relational-Cultural Theory references used in the original post.",
    ],
  },
  {
    slug: "adhd-therapist-burnout-adrenaline-grind",
    title:
      "The Adrenaline Grind: Why the Mental Health Field Is Eating ADHD Therapists Alive",
    description:
      "How neurodivergent clinicians get trapped in the adrenaline grind and what to change before burnout takes over.",
    keywords: ["ADHD therapist burnout", "neurodivergent clinicians", "ADHD in the mental health field"],
    date: "2019-10-02",
    image: IMAGES.blogAdhd,
    sections: [
      {
        heading: "Opening",
        paragraphs: [
          "Many neurodivergent mental-health professionals know the feeling: from the outside you look organized and high-achieving, but inside you are running a cognitive marathon just to survive rigid expectations of professionalism.",
          "For therapists, counselors, and associates navigating late-diagnosed ADHD, the struggle is largely invisible.",
        ],
      },
      {
        heading: "The adrenaline grind",
        paragraphs: [
          "ADHD brains run on an interest-based nervous system - novelty, challenge, and urgency are what activate us.",
          "The mental-health field, with its constant crises and caseloads, hijacks that wiring: it feeds on adrenaline. Clinicians work twice as hard to appear composed, then crash hard.",
        ],
      },
      {
        heading: "What the field gets wrong",
        paragraphs: [
          "The industry treats ADHD as a deficit to be managed rather than a difference to be worked with.",
          "Standard advice like just use a planner ignores that an interest-based nervous system needs novelty, challenge, and dopamine to activate.",
        ],
      },
      {
        heading: "Reclaiming your unmasked clinical career",
        paragraphs: [
          "1) Stop masking as a coping strategy. 2) Build dynamic, visual project systems that accommodate time blindness. 3) Protect your hyperfocus blocks from operational noise. 4) Design shifting workflows that use your multidisciplinary talents as assets - not liabilities.",
        ],
      },
    ],
    sources: [
      "TODO: Add Tyler's original citation list for this article.",
      "William Dodson's interest-based nervous system work.",
      "Research on rejection sensitivity, time blindness, and ADHD in workplace settings.",
    ],
  },
  {
    slug: "stop-folding-in-negotiate-your-worth-as-a-clinician",
    title: "Stop Folding In: How to Negotiate Your Worth as a Clinician",
    description: "Planned article.",
    keywords: ["negotiation for mental health professionals"],
    date: "2026-09-01",
    image: IMAGES.heroOffice,
    isPlaceholder: true,
    sections: [],
    sources: ["Sources will be added with the full article draft."],
  },
  {
    slug: "hidden-curriculum-of-licensure",
    title: "The Hidden Curriculum of Licensure: What Grad School Never Taught You",
    description: "Planned article.",
    keywords: ["associate clinician licensure"],
    date: "2026-09-08",
    image: IMAGES.heroOffice,
    isPlaceholder: true,
    sections: [],
    sources: ["Sources will be added with the full article draft."],
  },
  {
    slug: "unmasking-at-work-what-it-costs-you",
    title: "Unmasking at Work: What It Costs You (and What It Costs Your Clients)",
    description: "Planned article.",
    keywords: ["unmasking", "code-switching"],
    date: "2026-09-15",
    image: IMAGES.dropMask,
    isPlaceholder: true,
    sections: [],
    sources: ["Sources will be added with the full article draft."],
  },
  {
    slug: "from-direct-care-to-director-business-side-of-mental-health",
    title: "From Direct Care to Director: The Business Side of Mental Health",
    description: "Planned article.",
    keywords: ["clinical leadership"],
    date: "2026-09-22",
    image: IMAGES.heroOffice,
    isPlaceholder: true,
    sections: [],
    sources: ["Sources will be added with the full article draft."],
  },
  {
    slug: "why-your-adhd-brain-isnt-broken",
    title: "Why Your ADHD Brain Is Not Broken - The System Is",
    description: "Planned article.",
    keywords: ["ADHD executive function"],
    date: "2026-09-29",
    image: IMAGES.dropMask,
    isPlaceholder: true,
    sections: [],
    sources: ["Sources will be added with the full article draft."],
  },
  {
    slug: "burnout-is-systemic-not-a-badge-of-honor",
    title: "Burnout Is a Systemic Failure, Not a Badge of Honor",
    description: "Planned article.",
    keywords: ["clinician well-being"],
    date: "2026-10-06",
    image: IMAGES.blogBurnout,
    isPlaceholder: true,
    sections: [],
    sources: ["Sources will be added with the full article draft."],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
