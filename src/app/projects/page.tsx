// app/projects/page.tsx
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Github, Globe, FileText } from "lucide-react";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  imageUrl?: string;
};

const webProjects: Project[] = [
  {
    title: "Flavoriz",
    description: "A full-stack recipe sharing platform with AI recipe maker built using MERN stack",
    tags: ["React", "Node.js", "Google Gemini ", "MongoDB"],
    githubUrl: "https://github.com/RitulSM/flavoriz",
    liveUrl: "https://flavoriz.vercel.app/recipes",
    imageUrl: "/flavoriz.png",
  },
  {
    title: "Code Snaps",
    description: "A Next.js application to download formatted code snippets as images",
    tags: ["Next.js", "ShadCn", "TailwindCSS", "HTML Canvas"],
    githubUrl: "https://github.com/RitulSM/CodeSnap",
    liveUrl: "https://code-snaps.vercel.app/",
    imageUrl: "/Codesnaps.png",},
  {
    title: "Chess Game Application",
    description: "A real-time chess game application built with React and Socket.io",
    tags: ["React", "Chess.js", "TypeScript", "MongoDB"],
    githubUrl: "https://github.com/RitulSM/ChessGame",
    imageUrl: "/chess.png",
  },
];

const mlProjects: Project[] = [
  {
    title: "WorkPlace Success Prediction Model",
    description: "A machine learning model for predicting workplace success using Big Five Personality Traits and Meta Heuristics",
    tags: ["Python", "Numpy", "MatPlotlib", "Pandas"],
    paperUrl: "/Workplace_success_prediction.pdf",
  },
  {
    title: "Lunar Path Optimization Model",
    description: "Lunar path optimization using Particle Swarm Optimization (PSO), Ant Colony Optimization (ACO), and Differential Evolution (DE)",
    tags: ["Python", "SeaBorn", "Pandas", "Sklearn"],
    paperUrl: "/RoverPathOptimization.pdf",
  },
];

interface ProjectCardProps {
  project: Project;
  isML?: boolean;
}

function ProjectCard({ project, isML }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="w-full h-auto mb-4 rounded-md" />}
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {project.liveUrl && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.liveUrl} target="_blank">
              <Globe className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.githubUrl} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Link>
          </Button>
        )}
        {isML && project.paperUrl && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.paperUrl} target="_blank" download>
              <FileText className="mr-2 h-4 w-4" />
              Read Paper
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default function ProjectsPage() {
  return (
    <div className="container py-8 md:py-12 space-y-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-muted-foreground max-w-[42rem]">
          Explore my latest work and projects showcasing various technologies and skills.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {webProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-8">
        {mlProjects.map((project) => (
          <ProjectCard key={project.title} project={project} isML={true} />
        ))}
      </div>
    </div>
  );
}