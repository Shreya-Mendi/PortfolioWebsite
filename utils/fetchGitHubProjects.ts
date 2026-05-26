import { Project } from "../typings";
import { projectsData } from "../data/projects";

const GITHUB_USERNAME = "Shreya-Mendi";

interface GitHubRepo {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  fork: boolean;
  updated_at: string;
  stargazers_count: number;
  homepage: string | null;
}

const SKIP_REPOS = new Set([
  "503-GIT-TEST",
  "weather",
  "Bootcamp_project",
  "Shreya-Mendi",
  "PortfolioWebsite",
]);

const LANGUAGE_TO_TECH: Record<string, { title: string; image: string }> = {
  Python: { title: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  TypeScript: { title: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  JavaScript: { title: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  "Jupyter Notebook": { title: "Jupyter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  R: { title: "R", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
  Go: { title: "Go", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  Java: { title: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
};

const TOPIC_TO_TAG: Record<string, string> = {
  "machine-learning": "Machine Learning",
  "deep-learning": "Deep Learning",
  "reinforcement-learning": "Reinforcement Learning",
  nlp: "NLP",
  "computer-vision": "Computer Vision",
  ai: "AI",
  "data-science": "Data Science",
  python: "Python",
  pytorch: "PyTorch",
  tensorflow: "TensorFlow",
  fastapi: "FastAPI",
  docker: "Docker",
  react: "React",
  nextjs: "Next.js",
};

function extractSummaryFromReadme(readme: string): string {
  const lines = readme.split("\n");
  const paragraphs: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("#")) continue;
    if (trimmed.startsWith("![")) continue;
    if (trimmed.startsWith("```")) continue;
    if (trimmed.startsWith("|")) continue;
    if (trimmed.startsWith("- [ ]") || trimmed.startsWith("- [x]")) continue;
    if (trimmed.match(/^#{1,6}\s/)) continue;
    if (trimmed.startsWith("[![")) continue;
    if (trimmed.length < 20) continue;

    const cleaned = trimmed
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*_`]/g, "")
      .replace(/<[^>]+>/g, "");

    if (cleaned.length >= 20) {
      paragraphs.push(cleaned);
    }
    if (paragraphs.join(" ").length > 300) break;
  }

  const summary = paragraphs.join(" ").slice(0, 400);
  return summary || "A project by Shreya Mendi.";
}

function repoToProject(
  repo: GitHubRepo,
  readme: string | null,
  index: number
): Project {
  const tags = (repo.topics || [])
    .map((t) => TOPIC_TO_TAG[t] || t.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()))
    .slice(0, 3);

  if (tags.length === 0 && repo.language) {
    tags.push(repo.language);
  }

  const technologies = [];
  let techId = 100 + index * 10;

  if (repo.language && LANGUAGE_TO_TECH[repo.language]) {
    const tech = LANGUAGE_TO_TECH[repo.language];
    technologies.push({
      _id: `gt${techId++}`,
      _type: "technology" as const,
      _createdAt: "",
      _updatedAt: "",
      _rev: "",
      title: tech.title,
      progress: 80,
      image: tech.image,
    });
  }

  for (const topic of repo.topics || []) {
    const topicLower = topic.toLowerCase();
    if (topicLower === "pytorch") {
      technologies.push({
        _id: `gt${techId++}`,
        _type: "technology" as const,
        _createdAt: "",
        _updatedAt: "",
        _rev: "",
        title: "PyTorch",
        progress: 85,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      });
    } else if (topicLower === "docker") {
      technologies.push({
        _id: `gt${techId++}`,
        _type: "technology" as const,
        _createdAt: "",
        _updatedAt: "",
        _rev: "",
        title: "Docker",
        progress: 85,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      });
    } else if (topicLower === "fastapi") {
      technologies.push({
        _id: `gt${techId++}`,
        _type: "technology" as const,
        _createdAt: "",
        _updatedAt: "",
        _rev: "",
        title: "FastAPI",
        progress: 85,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      });
    }
  }

  const summary = readme
    ? extractSummaryFromReadme(readme)
    : repo.description || `A ${repo.language || ""} project by Shreya Mendi.`;

  return {
    _id: `gh-${repo.name}`,
    _type: "project",
    _createdAt: repo.updated_at,
    _updatedAt: repo.updated_at,
    _rev: "",
    title: repo.name.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    image: `https://opengraph.githubassets.com/1/${repo.full_name}`,
    linkToBuild: repo.html_url,
    githubUrl: repo.html_url,
    demoUrl: repo.homepage || "",
    summary,
    technologies,
    tags,
  };
}

async function fetchReadme(repoFullName: string): Promise<string | null> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.raw",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(
      `https://api.github.com/repos/${repoFullName}/readme`,
      { headers }
    );
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

export async function fetchGitHubProjects(): Promise<Project[]> {
  const handcraftedNames = new Set(
    projectsData.map((p) => {
      const match = p.githubUrl?.match(/github\.com\/[^/]+\/([^/]+)/);
      return match ? match[1].toLowerCase() : null;
    }).filter(Boolean)
  );

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      { headers }
    );

    if (!res.ok) {
      console.warn("GitHub API returned", res.status, "— falling back to static data");
      return projectsData as Project[];
    }

    const repos: GitHubRepo[] = await res.json();

    const newRepos = repos.filter((r) => {
      if (r.fork) return false;
      if (SKIP_REPOS.has(r.name)) return false;
      if (handcraftedNames.has(r.name.toLowerCase())) return false;
      return true;
    });

    const newProjects = await Promise.all(
      newRepos.map(async (repo, i) => {
        const readme = await fetchReadme(repo.full_name);
        return repoToProject(repo, readme, i);
      })
    );

    return [...(projectsData as Project[]), ...newProjects];
  } catch (err) {
    console.warn("Failed to fetch GitHub repos:", err);
    return projectsData as Project[];
  }
}
