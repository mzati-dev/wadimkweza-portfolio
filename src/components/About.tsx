import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const skills = [
    { name: "Frontend Development", level: 95 },
    { name: "Backend Development", level: 88 },
    { name: "Mobile Development", level: 82 },
    { name: "AI / Machine Learning", level: 80 },
    { name: "DevOps & Cloud", level: 78 },
    { name: "UI/UX Design", level: 85 },
    { name: "Database Design", level: 90 }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "AWS", "Docker",
    "GraphQL", "MongoDB", "PostgreSQL", "Kubernetes", "Next.js", "LangChain", "PyTorch", "TensorFlow", "Hugging Face"
  ];

  return (
    <section id="about" className="py-8 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full-Stack AI Developer with 5+ years of experience, and
              I build intelligent, end-to-end digital solutions.
              My expertise is in transforming AI concepts into robust and scalable applications,
              leveraging my full-stack skills to create smarter, more intuitive user experiences
              that deliver tangible value.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Beyond my professional work, I'm passionate about exploring the frontiers of AI,
              contributing to the open-source community, and mentoring the next generation of developers.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-700 text-cyan-400 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <img
                  src="/headshot.JPG"
                  //src="https://d64gsuwffb70l.cloudfront.net/68adc6976e048bfc8e4946f2_1756219102122_6017602f.webp"
                  alt="Professional headshot"
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-cyan-400"
                />

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white text-center mb-6">Skills & Expertise</h3>
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;