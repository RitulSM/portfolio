import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Star, GraduationCap, Briefcase, Award } from "lucide-react";

const achievements = [
  {
    title: "Academic Performance",
    description: "Maintained a CGPA of 9.4 throughout the academic program",
    icon: GraduationCap,
    year: "2022-25",
  },
  {
    title: "Research Internship",
    description: "Worked as a machine learning intern at Pravinya InfoTech",
    icon: Briefcase,
    year: "2024",
    tags: ["Team Work", "Machine Learning", "Internship"],
  },
  {
    title: "Certifications in Big Data Analytics, DevOps, and Cybersecurity",
    description: "Professional certifications on renowned platforms in various domains",
    icon: Star,
    year: "2024",
    tags: ["Big Data", "DevOps", "Cybersecurity"],
  },
  {
    title: "Participated and achieved recognition in Competitive Coding Contests",
    description: "Won 3rd place at Praxis Coding Contest and participated in ICPC Qualifiers",
    icon: Award,
    year: "2023-24",
    tags: ["Competitive Programming", "Data Structures and Algorithms", "Community"],
  },
];

export default function AchievementsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col items-center gap-4 text-center mb-8">
        <h1 className="text-4xl font-bold">Achievements</h1>
        <p className="text-muted-foreground max-w-[42rem]">
          A collection of my professional achievements, certifications, and milestones.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {achievements.map((achievement) => (
          <Card key={achievement.title} className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <achievement.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <CardTitle>{achievement.title}</CardTitle>
                <CardDescription>{achievement.year}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground mb-4">{achievement.description}</p>
              {achievement.tags && (
                <div className="flex flex-wrap gap-2">
                  {achievement.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
