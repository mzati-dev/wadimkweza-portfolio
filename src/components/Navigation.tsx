import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // ------------------------------------------------------------------
  //  THE FIX IS HERE: This useEffect logic is now corrected and robust.
  // ------------------------------------------------------------------
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // --- Start of Corrected Scroll Spy Logic ---
      let currentSection = 'hero'; // Default to 'hero'

      // We loop from the bottom-most section to the top.
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);

        if (section) {
          // Check if the section's top edge is above the middle of the screen
          // The offset (window.innerHeight / 2) makes the change happen when the section is centered.
          if (section.offsetTop <= window.scrollY + window.innerHeight / 2) {
            currentSection = sectionId;
            break; // IMPORTANT: We stop the loop as soon as we find the correct section.
          }
        }
      }

      setActiveSection(currentSection);
      // --- End of Corrected Scroll Spy Logic ---
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => scrollToSection('hero')} className="text-2xl font-bold transition-opacity hover:opacity-80">
            <span className="text-cyan-400">&lt;</span>
            <span className={`mx-2 transition-colors duration-300 ${activeSection === 'hero' ? 'text-cyan-400' : 'text-white'}`}>
              Wadi Mkweza
            </span>
            <span className="text-cyan-400">/&gt;</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => {
              const sectionId = item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className={`relative py-2 text-sm font-medium transition-colors duration-200 ${activeSection === sectionId
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                    }`}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform transition-transform duration-300 ${activeSection === sectionId ? 'scale-x-100' : 'scale-x-0'
                      }`}
                  />
                </button>
              );
            })}
          </div>

          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';

// const Navigation: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   // CHANGED: We now only need one state to track the active section.
//   // 'hero' will be the default active section when the page loads.
//   const [activeSection, setActiveSection] = useState('hero');

//   // CHANGED: This useEffect hook is now a "scroll spy".
//   useEffect(() => {
//     const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

//     const handleScroll = () => {
//       // Logic to determine if the navbar should have a background
//       setIsScrolled(window.scrollY > 50);

//       // Logic to find the currently active section
//       let currentSection = '';
//       for (const sectionId of sections) {
//         const section = document.getElementById(sectionId);
//         if (section) {
//           // We subtract 100 to make the link active a little before the section top hits the very top of the viewport.
//           const sectionTop = section.offsetTop - 100;
//           if (window.scrollY >= sectionTop) {
//             currentSection = sectionId;
//           }
//         }
//       }
//       setActiveSection(currentSection);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     // A special case for scrolling to the top ('hero' section)
//     if (id === 'hero') {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//       document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // NOTE: The scrollToTop function is now handled by scrollToSection('hero'), so it can be removed.

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
//       }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">

//           {/* CHANGED: The onClick now calls scrollToSection with 'hero' */}
//           <button onClick={() => scrollToSection('hero')} className="text-2xl font-bold transition-opacity hover:opacity-80">
//             {/* The brackets' styling is simplified now */}
//             <span className="text-cyan-400">&lt;</span>

//             {/* ADDED: A new span around your name to control its color independently. */}
//             {/* <span className={`mx-2 transition-colors duration-300 ${activeSection === 'hero' ? 'text-cyan-400' : 'text-white'}`}>
//               Wadi Mkweza
//             </span> */}
//             <span className={`mx-2 transition-colors duration-300 ${activeSection === 'hero' ? 'text-cyan-400' : 'text-white'
//               }`}>
//               Wadi Mkweza
//             </span>

//             <span className="text-cyan-400">/&gt;</span>
//           </button>


//           <div className="hidden md:flex items-center space-x-8">
//             {['About', 'Skills', 'Projects', 'Contact'].map((item) => {
//               const sectionId = item.toLowerCase();
//               return (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(sectionId)}
//                   // CHANGED: The className is now dynamic.
//                   // It adds a bottom border and changes text color if the section is active.
//                   className={`relative py-2 text-sm font-medium transition-colors duration-200 ${activeSection === sectionId
//                     ? 'text-cyan-400'
//                     : 'text-gray-300 hover:text-cyan-400'
//                     }`}
//                 >
//                   {item}
//                   {/* ADDED: A span to create the animated underline effect. */}
//                   <span
//                     className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform transition-transform duration-300 ${activeSection === sectionId ? 'scale-x-100' : 'scale-x-0'
//                       }`}
//                   />
//                 </button>
//               );
//             })}
//           </div>

//           <Button
//             onClick={() => scrollToSection('contact')}
//             className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold"
//           >
//             Get In Touch
//           </Button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';

// const Navigation: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);


//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//   };


//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
//       }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <button onClick={scrollToTop} className="text-2xl font-bold text-white  transition-opacity hover:opacity-80">
//             <span className="text-cyan-400">&lt;</span>
//             Wadi Mkweza
//             <span className="text-cyan-400">/&gt;</span>
//           </button>


//           <div className="hidden md:flex space-x-8">
//             {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
//               >
//                 {item}
//               </button>
//             ))}
//           </div>

//           <Button
//             onClick={() => scrollToSection('contact')}
//             className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold"
//           >
//             Get In Touch
//           </Button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;