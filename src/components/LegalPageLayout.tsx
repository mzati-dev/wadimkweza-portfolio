// src/components/LegalPageLayout.tsx
import React from 'react';

interface LegalPageLayoutProps {
    title: string;
    children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, children }) => {
    return (
        <main className="bg-gray-800 text-gray-300 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    {title}
                </h1>
                {/* The 'prose' classes from Tailwind Typography are perfect for styling text content */}
                <div className="prose prose-invert prose-lg max-w-none prose-h2:text-2xl prose-h2:text-cyan-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-300">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default LegalPageLayout;