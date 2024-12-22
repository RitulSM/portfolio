"use client"

import { Card, CardContent } from "@/app/components/ui/card"
import { motion } from "framer-motion"

const skills = [
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "TailwindCSS",
  "SQL",
  "Next.js",
  "MongoDB",
]

export default function Skills() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <CardContent className="p-0">
                  <motion.div
                    className="flex items-center justify-center h-full p-6 bg-secondary/50 hover:bg-primary/50 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg font-semibold text-foreground">{skill}</span>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

