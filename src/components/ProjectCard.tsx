import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl
}) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex gap-2">
            {/* {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-cyan-400 hover:bg-cyan-500 text-gray-900">
                  Live Demo
                </Button>
              </a>
            )} */}
            {/* --- Start of Updated Button Code --- */}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-cyan-400 hover:bg-cyan-500 text-gray-900">
                  {liveUrl.includes('youtube.com') || liveUrl.includes('youtu.be')
                    ? 'Video Demo'
                    : 'Live Demo'}
                </Button>
              </a>
            )}
            {/* --- End of Updated Button Code --- */}

            {/* --- Start of New Interactive Button Code --- */}
            {githubUrl && githubUrl !== "#" && githubUrl.length > 5 ? (
              // If there's a real URL, this is a normal link.
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                  Code
                </Button>
              </a>
            ) : (
              // If there is NO URL, this button will change on click.
              <Button
                size="sm"
                variant="outline"
                className={`border-gray-600 ${isClicked ? 'text-gray-400 cursor-not-allowed' : 'text-gray-300'}`}
                onClick={() => setIsClicked(true)}
                disabled={isClicked}
              >
                {isClicked ? "Request Private Viewing" : "Code"}
              </Button>
            )}
            {/* --- End of New Interactive Button Code --- */}
            {/* {githubUrl && (
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                Code
              </Button>
            )} */}
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700 text-cyan-400 text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;