// app/components/skills.tsx
"use client"

import { Card, CardContent } from "@/app/components/ui/card"
import { motion } from "framer-motion"
import { 
  FaPython, FaJava, FaReact, FaNodeJs, FaDocker, FaGithub, FaGitAlt,
  FaDatabase
} from 'react-icons/fa';
import { 
  TbBrandVscode, TbBrandCpp, TbBrandJavascript,
  TbBrandMongodb
} from 'react-icons/tb';
import { 
  SiExpress, SiJenkins, SiGooglecolab, SiOverleaf
} from 'react-icons/si';
import { BsPersonWorkspace, BsPeople, BsClockHistory, BsPersonLinesFill} from 'react-icons/bs';

const skillCategories = {
  Languages: [
    { name: "Python", icon: FaPython },
    { name: "JavaScript", icon: TbBrandJavascript },
    { name: "C++", icon: TbBrandCpp },
    { name: "Java", icon: FaJava }
  ],
  Tools: [
    { name: "Visual Studio Code", icon: TbBrandVscode },
    { name: "Google Colab", icon: SiGooglecolab },
    { name: "Overleaf", icon: SiOverleaf },
    { name: "Git", icon: FaGitAlt }
  ],
  "Technologies/Frameworks": [
    { name: "Node.js", icon: FaNodeJs },
    { name: "React", icon: FaReact },
    { name: "Express", icon: SiExpress },
    { name: "SQL", icon: FaDatabase },
    { name: "MongoDB", icon: TbBrandMongodb },
    { name: "Docker", icon: FaDocker },
    { name: "GitHub", icon: FaGithub },
    { name: "Jenkins", icon: SiJenkins },
  ],
  "Soft Skills": [
    { name: "Presentation Skills", icon: BsPersonWorkspace },
    { name: "Teamwork", icon: BsPeople },
    { name: "Time Management", icon: BsClockHistory },
    { name: "Leadership Skills", icon: BsPersonLinesFill },
  ]
};

export default function Skills() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {Object.entries(skillCategories).map(([category, items], categoryIndex) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (categoryIndex * items.length + index) * 0.1 }}
                >
                  <Card className="h-full overflow-hidden">
                    <CardContent className="p-0">
                      <motion.div
                        className="flex flex-col items-center justify-center h-full p-6 bg-secondary/50 hover:bg-primary/50 transition-colors duration-300 gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.icon && <item.icon className="w-8 h-8 mb-2" />}
                        <span className="text-lg font-semibold text-foreground text-center">{item.name}</span>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}