import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/RitulSM",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ritul-mamdapur-a6754525b/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://x.com/ritulmamdapur7",
    icon: Twitter,
  },
];

export default function ContactPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col items-center gap-4 text-center mb-8">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-muted-foreground max-w-[42rem]">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Connect With Me</CardTitle>
          <CardDescription>
            Find me on these platforms and social media.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <Link href="mailto:your.email@example.com" className="hover:underline">
                ritulmamdapur17@gmail.com
              </Link>
            </div>
            {socialLinks.map((link) => (
              <div key={link.name} className="flex items-center gap-2">
                <link.icon className="h-5 w-5 text-primary" />
                <Link href={link.url} target="_blank" className="hover:underline">
                  {link.name}
                </Link>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <Link href="/Ritul_Resume.pdf" download className="text-primary hover:underline">
                Download Resume
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
