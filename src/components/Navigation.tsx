import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

// Icons (no changes needed)
const MenuIcon = (
  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const XIcon = (
  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // STEP 2: Initialize navigate
  const location = useLocation(); // STEP 2: Initialize location

  useEffect(() => {
    // This effect is correct, no changes needed here.
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      let currentSection = 'hero';
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= window.scrollY + window.innerHeight / 2) {
          currentSection = sectionId;
          break;
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const scrollToSection = (id: string) => {
  //   if (id === 'hero') {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   } else {
  //     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   setIsMenuOpen(false);
  // };

  // STEP 3: Update the scroll function
  const scrollToSection = (id: string) => {
    // If we're already on the homepage, just scroll
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate to the homepage with a hash
      navigate(`/#${id}`);
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16">

          {/* Left side (desktop view) */}
          {/* <div className="hidden md:flex md:flex-1 md:items-center"> */}
          <div className="hidden md:flex md:flex-1 md:items-center">
            {/* <button onClick={() => scrollToSection('hero')} className="text-2xl font-bold transition-opacity hover:opacity-80">
              <span className="text-2xl font-black text-white/20 select-none mr-2">
                W
              </span>
              <span className={`mx-2 transition-colors duration-300 ${activeSection === 'hero' ? 'text-cyan-400' : 'text-white'}`}>
                Wadi Mkweza
              </span>

            </button> */}
            <button onClick={() => scrollToSection('hero')} className="flex items-center transition-opacity hover:opacity-80">
              {/* This span is now the circle */}
              <span className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center mr-3">
                {/* This span styles the letter 'W' inside the circle */}
                <span className="text-xl font-bold text-gray-900">
                  W
                </span>
              </span>

              <span className={`text-2xl font-bold transition-colors duration-300 ${activeSection === 'hero' ? 'text-cyan-400' : 'text-white'}`}>
                Wadi Mkweza
              </span>
            </button>
          </div>

          {/* Name centered on mobile */}
          {/* Left side (mobile view) */}
          <div className="flex-1 md:hidden">
            <button onClick={() => scrollToSection('hero')} className="flex items-center transition-opacity hover:opacity-80">

              {/* The Circle */}
              <span className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center mr-2">
                <span className="text-lg font-bold text-gray-900">
                  W
                </span>
              </span>

              {/* Your Name */}
              <span className={`text-xl font-bold whitespace-nowrap transition-colors duration-300 ${activeSection === 'hero' ? 'text-cyan-400' : 'text-white'}`}>
                Wadi Mkweza
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => {
              const sectionId = item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className={`relative py-2 text-sm font-medium transition-colors duration-200 ${activeSection === sectionId ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}>
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform transition-transform duration-300 ${activeSection === sectionId ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right side (Desktop and Mobile) */}
          <div className="flex-1 flex items-start justify-end ">
            {/* Desktop "Get In Touch" button */}
            <div className="hidden md:block">
              <Button onClick={() => scrollToSection('contact')} className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold">
                Get In Touch
              </Button>
            </div>

            {/* --- FINAL FIX: Swapped order of buttons --- */}
            <div className="md:hidden flex flex-col items-end pt-7">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-400"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? XIcon : MenuIcon}
              </button>
              {!isMenuOpen && (
                <Button size="sm" onClick={() => scrollToSection('contact')} className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold text-xs h-6 px-2 mt-2">
                  Get In Touch
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel (no changes needed here) */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${activeSection === item.toLowerCase() ? 'bg-cyan-400 text-gray-900' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;


// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';

// const Navigation: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('hero');

//   // ------------------------------------------------------------------
//   //  THE FIX IS HERE: This useEffect logic is now corrected and robust.
//   // ------------------------------------------------------------------
//   useEffect(() => {
//     const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);

//       // --- Start of Corrected Scroll Spy Logic ---
//       let currentSection = 'hero'; // Default to 'hero'

//       // We loop from the bottom-most section to the top.
//       for (let i = sections.length - 1; i >= 0; i--) {
//         const sectionId = sections[i];
//         const section = document.getElementById(sectionId);

//         if (section) {
//           // Check if the section's top edge is above the middle of the screen
//           // The offset (window.innerHeight / 2) makes the change happen when the section is centered.
//           if (section.offsetTop <= window.scrollY + window.innerHeight / 2) {
//             currentSection = sectionId;
//             break; // IMPORTANT: We stop the loop as soon as we find the correct section.
//           }
//         }
//       }

//       setActiveSection(currentSection);
//       // --- End of Corrected Scroll Spy Logic ---
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     if (id === 'hero') {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//       document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
//       }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <button onClick={() => scrollToSection('hero')} className="text-2xl font-bold transition-opacity hover:opacity-80">
//             <span className="text-cyan-400">&lt;</span>
//             <span className={`mx-2 transition-colors duration-300 ${activeSection === 'hero' ? 'text-cyan-400' : 'text-white'}`}>
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
//                   className={`relative py-2 text-sm font-medium transition-colors duration-200 ${activeSection === sectionId
//                     ? 'text-cyan-400'
//                     : 'text-gray-300 hover:text-cyan-400'
//                     }`}
//                 >
//                   {item}
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