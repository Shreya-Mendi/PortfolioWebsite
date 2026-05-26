import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import Header from "../components/Header";
import { fetchSocials } from "../utils/fetchSocials";
import { Social } from "../typings";
import { GetStaticProps } from "next";

type Bubble = {
  id: string;
  hook: string;
  story: string;
  color: string;
  size: "sm" | "md" | "lg";
  tags: string[];
};

const bubbles: Bubble[] = [
  {
    id: "bmw",
    hook: "BMW asked: which cars will actually sell?",
    story:
      "Built ML models on real dealer data to predict which vehicle specs move fast. LightGBM + Optuna-tuned TabularMLP, served through a live API so dealers make spec decisions without needing a data team.",
    color: "from-blue-600 to-indigo-700",
    size: "lg",
    tags: ["BMW", "ML", "Industry"],
  },
  {
    id: "rl-intervention",
    hook: "what happens to the reward when Alexa won't shut up?",
    story:
      "Trained an RL policy that learns WHEN to intervene in multi-agent dialogue — not just what to say. Reduced unnecessary interruptions 25% while keeping task success intact. Currently writing this up for NeurIPS.",
    color: "from-purple-600 to-fuchsia-600",
    size: "lg",
    tags: ["Reinforcement Learning", "NeurIPS", "Duke Trust Lab"],
  },
  {
    id: "drones",
    hook: "finding humans in a blizzard, from 200 feet up",
    story:
      "Fine-tuned Faster R-CNN on thermal imagery with snow, smoke, and sensor noise augmentation. 20% recall improvement in adverse conditions — the kind of gain that means someone gets found.",
    color: "from-emerald-600 to-teal-700",
    size: "md",
    tags: ["Computer Vision", "Search & Rescue"],
  },
  {
    id: "mirror",
    hook: "a therapist that remembers everything but never judges",
    story:
      "RAG over 8 psychological frameworks (CBT, IFS, NVC) to pattern-match emotional entries. Tracks cognitive distortions, mood trends, and recurring triggers across sessions.",
    color: "from-rose-500 to-pink-600",
    size: "md",
    tags: ["RAG", "Mental Health", "LLM"],
  },
  {
    id: "durham",
    hook: "the math proving Durham's crosswalks are placed by bias",
    story:
      "Black residents: 32% of Durham's population, 47% of pedestrian crash victims. Built interactive maps comparing AI allocation vs. need-based infrastructure using Census + NCDOT crash data.",
    color: "from-amber-500 to-orange-600",
    size: "md",
    tags: ["AI Ethics", "Equity", "GIS"],
  },
  {
    id: "cinestyle",
    hook: "shazam, but for outfits in movies",
    story:
      "FashionCLIP embeddings + FAISS vector search over 20K garment crops. Four-stage recommendation pipeline (FAISS → NeuMF → SASRec → diversity filter) that actually surfaces style you'd wear.",
    color: "from-violet-500 to-purple-600",
    size: "sm",
    tags: ["Multimodal AI", "Rec Systems"],
  },
  {
    id: "inflation",
    hook: "shipping containers predict your grocery bill",
    story:
      "SARIMAX pipeline combining port traffic volume with CPI data. 0.67–1.69% MAPE across major categories — turns out boats know inflation before the Fed does.",
    color: "from-cyan-500 to-blue-600",
    size: "sm",
    tags: ["Time Series", "Forecasting"],
  },
  {
    id: "carbon",
    hook: "how much carbon did that prompt just cost you?",
    story:
      "Chrome extension estimating energy, carbon, and water footprint per AI prompt in real-time. Privacy-first, client-side only, with a daily impact dashboard.",
    color: "from-green-500 to-emerald-600",
    size: "sm",
    tags: ["Sustainability", "Chrome Extension"],
  },
  {
    id: "legal",
    hook: "semantic search that reads case law like a lawyer",
    story:
      "Embedding-based retrieval with citation-link modeling to surface related precedents. Built for explainable legal research — not just keyword matching, actual meaning.",
    color: "from-slate-600 to-gray-700",
    size: "sm",
    tags: ["NLP", "LegalTech", "Vector Search"],
  },
  {
    id: "eu-ai",
    hook: "can your model pass the EU AI Act?",
    story:
      "TF-IDF + Logistic Regression for risk classification, rule-based article evaluation (Articles 5, 6, 9, 10, 14), automated remediation. Because compliance shouldn't need a lawyer and a data scientist in the same room.",
    color: "from-red-500 to-rose-600",
    size: "sm",
    tags: ["AI Compliance", "MLOps"],
  },
];

const sizeClasses = {
  lg: "w-72 h-72 md:w-80 md:h-80",
  md: "w-56 h-56 md:w-64 md:h-64",
  sm: "w-48 h-48 md:w-52 md:h-52",
};

type Props = {
  socials: Social[];
};

export default function ThinkWithMe({ socials }: Props) {
  return (
    <div className="bg-lightBackground min-h-screen">
      <Head>
        <title>Think With Me — Shreya Mendi</title>
        <meta
          name="description"
          content="The interesting bits behind Shreya's projects — RL rewards, BMW predictions, drone search, and more."
        />
      </Head>

      <Header socials={socials} />

      <main className="max-w-7xl mx-auto px-6 pb-20 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Think With Me
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Each bubble is a rabbit hole. Click one and fall in.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5 md:gap-7">
          {bubbles.map((bubble, i) => (
            <motion.div
              key={bubble.id}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.08, zIndex: 50 }}
              className={`group relative ${sizeClasses[bubble.size]} rounded-full bg-gradient-to-br ${bubble.color} shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex items-center justify-center p-6 text-center overflow-hidden`}
            >
              {/* Hook text (visible by default) */}
              <p className="text-white font-semibold text-sm md:text-base leading-snug group-hover:opacity-0 transition-opacity duration-300 z-10">
                {bubble.hook}
              </p>

              {/* Story (shown on hover) */}
              <div className="absolute inset-0 rounded-full flex flex-col items-center justify-center p-5 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs md:text-sm leading-relaxed mb-2">
                  {bubble.story}
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {bubble.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] bg-white/20 text-white px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Link href="/">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <div className="h-10 w-10 bg-dukeBlue/80 rounded-full flex items-center justify-center shadow-lg hover:bg-dukeBlue transition-colors duration-200">
              <HomeIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const socials = await fetchSocials();
  return { props: { socials } };
};
