import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Flutter", "React Native"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
      title: "AI / Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "Hugging Face"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expertise across the full technology stack with modern tools and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-800 px-3 py-2 rounded-lg text-center text-cyan-400 font-medium hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;