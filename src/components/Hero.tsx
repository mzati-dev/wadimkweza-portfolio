import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background & Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68adc6976e048bfc8e4946f2_1756219078708_a683bd43.webp')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900/20" />
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-bounce" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

        {/* --- THIS IS THE CORRECT FIX FOR THE HEADING --- */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block whitespace-nowrap">AI & Full-Stack</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Developer
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafting intelligent digital experiences by combining robust full-stack architecture with cutting-edge AI solutions.
        </p>

        {/* The button grid is correct from the previous version */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm mx-auto">
          <Button
            size="lg"
            className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-8 py-3 text-lg"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>

          <a href="/Wadi_Mkweza_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 text-lg"
            >
              View My CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import React from 'react';
// import { Button } from '@/components/ui/button';

// const Hero: React.FC = () => {
//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//   };
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
//         style={{
//           backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68adc6976e048bfc8e4946f2_1756219078708_a683bd43.webp')`
//         }}
//       />

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900/20" />

//       {/* Floating Elements */}
//       <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl animate-pulse" />
//       <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-bounce" />

//       <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
//         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//           <span className="block">AI & Full-Stack</span>
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//             Developer
//           </span>
//         </h1>

//         <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
//           Crafting intelligent digital experiences by combining robust full-stack architecture with cutting-edge AI solutions.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button
//             size="lg"
//             className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-8 py-3 text-lg"
//             onClick={() => scrollToSection('projects')}
//           >
//             View My Work
//           </Button>
//           {/* <a href="/Wadi_Mkweza_Resume.pdf" download>
//             <Button
//               variant="outline"
//               size="lg"
//               className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 text-lg"
//             >
//               Download My CV
//             </Button>
//           </a> */}
//           <div className="flex gap-4">
//             {/* Button to view in a new tab */}
//             <a href="/Wadi_Mkweza_Resume.pdf" target="_blank" rel="noopener noreferrer">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 text-lg"
//               >
//                 View CV
//               </Button>
//             </a>

//             {/* Button to force download */}
//             {/* <a href="/Wadi_Mkweza_Resume.pdf" download>
//               <Button
//                 size="lg"
//                 className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-8 py-3 text-lg"
//               >
//                 Download CV
//               </Button>
//             </a> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;