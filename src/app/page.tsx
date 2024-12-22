// app/page.tsx
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import Link from "next/link";
import { ArrowRight, Code2, Trophy, Mail } from "lucide-react";
import Skills from "@/app/components/skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Ritul Mamdapur
          </h1>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-400">
            Software Engineer & Full Stack Developer
          </h2>
       
          <div className="flex gap-4">
            <Button asChild className="bg-blue-500 text-white hover:bg-blue-600">
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground">Technologies and tools I work with</p>
        </div>
        <Skills />
      </section>

      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Quick Links
          </h2>
          <p className="text-muted-foreground">Explore my work and get in touch</p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card className="flex flex-col items-center justify-center p-6 border-blue-500/20 bg-blue-500/10 backdrop-blur-sm">
            <Code2 className="h-12 w-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-bold">Projects</h3>
            <p className="text-muted-foreground text-center mb-4">
              View my latest work and projects
            </p>
            <Button asChild className="bg-blue-500 text-white hover:bg-blue-600">
              <Link href="/projects">View Projects</Link>
            </Button>
          </Card>
          <Card className="flex flex-col items-center justify-center p-6 border-teal-500/20 bg-teal-500/10 backdrop-blur-sm">
            <Trophy className="h-12 w-12 mb-4 text-teal-500" />
            <h3 className="text-xl font-bold">Achievements</h3>
            <p className="text-muted-foreground text-center mb-4">
              Discover my accomplishments
            </p>
            <Button asChild className="bg-teal-500 text-white hover:bg-teal-600">
              <Link href="/achievements">View Achievements</Link>
            </Button>
          </Card>
          <Card className="flex flex-col items-center justify-center p-6 border-purple-500/20 bg-purple-500/10 backdrop-blur-sm">
            <Mail className="h-12 w-12 mb-4 text-purple-500" />
            <h3 className="text-xl font-bold">Contact</h3>
            <p className="text-muted-foreground text-center mb-4">
              Get in touch with me
            </p>
            <Button asChild className="bg-purple-500 text-white hover:bg-purple-600">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}