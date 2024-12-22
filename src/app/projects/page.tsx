import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Github, Globe, FileText } from "lucide-react";
import Link from "next/link";

const webProjects = [
  {
    title: "Recipe Sharing App",
    description: "A full-stack recipe sharing platform built with MERN stack",
    tags: ["React", "Node.js", "TailwindCSS", "MongoDB"],
    githubUrl: "https://github.com/RitulSM/Recipeapp",
    liveUrl: "https://recipeapp-vert.vercel.app/",
  },
  {
    title: "Chess Game Application",
    description: "A real-time chess game application built with React and Socket.io",
    tags: ["React", "Chess.js", "TypeScript", "MongoDB"],
    githubUrl: "https://github.com/RitulSM/ChessGame",
  },
];

const mlProjects = [
  {
    title: "WorkPlace Success Prediction Model",
    description: "A machine learning model for predicting workplace success using Big Five Personality Traits Meta Heuristics",
    tags: ["Python", "Numpy", "MatPlotlib", "Pandas"],
    paperUrl: "/Workplace_success_prediction.pdf",  // Updated link
  },
  {
    title: "Lunar Path Optimization Model",
    description: "Lunar path optimization using Particle Swarm Optimization (PSO), Ant Colony Optimization (ACO), and Differential Evolution (DE)",
    tags: ["Python", "SeaBorn", "Pandas", "Sklearn"],
    paperUrl: "/RoverPathOptimization.pdf",  // Updated link
  },
];

const technologies = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "C++", "C", "Java"],
  },
  {
    category: "Tools",
    items: ["Visual Studio Code", "Google Colab", "Overleaf", "Excel", "PowerPoint", "Git"],
  },
  {
    category: "Technologies/Frameworks",
    items: ["Node.js", "React", "Express", "SQL", "MongoDB", "Docker", "GitHub", "Jenkins", "Maven"],
  },
  {
    category: "Soft Skills",
    items: ["Presentation Skills", "Teamwork", "Time Management", "Leadership Skills", "Critical Thinking"],
  },
];

function ProjectCard({ project, isML }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
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
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Technologies and Domains</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {technologies.map((tech) => (
            <Card key={tech.category}>
              <CardHeader>
                <CardTitle>{tech.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
