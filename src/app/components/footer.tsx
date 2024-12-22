import { Github, Linkedin,  Twitter } from 'lucide-react'
import Link from "next/link"

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
]

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center gap-4 py-8 md:flex-row md:justify-between md:py-4">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with Next.js and Tailwind CSS. Deployed on Vercel.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <link.icon className="h-5 w-5" />
              <span className="sr-only">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

