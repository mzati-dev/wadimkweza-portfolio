import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone } from 'lucide-react';

// --- CHANGED: The import from 'react-icons/fa' was removed to prevent build errors.
// The icons are now defined as inline SVG components below.

// --- CHANGED: SVG components are defined here to replace the 'react-icons' dependency.
const LinkedInIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
const TwitterIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);
const KaggleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.08,8.34l3.33-3.33L19.5,7.1,16.17,10.43l3.33,3.33-2.09,2.09-3.33-3.33-3.33,3.33-2.09-2.09,3.33-3.33L8.83,7.1,10.92,5,14.08,8.34Z" />
  </svg>
);
const BrainIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15A2.5 2.5 0 0 1 9.5 22h-3A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2h3Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15A2.5 2.5 0 0 0 14.5 22h3a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 17.5 2h-3Z" />
  </svg>
);
const WhatsAppIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // --- CHANGED: Added state variables to manage the form's submission status and display messages to the user.
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // --- CHANGED: The entire handleSubmit function is updated to send data to your backend.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the default browser behavior of reloading the page on form submission.

    setIsSubmitting(true); // Disable the submit button to prevent multiple clicks.
    setStatusMessage(''); // Reset any previous status messages.

    try {

      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/send-email`;
      // Send the form data to your backend API endpoint using the fetch API.
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert the React state object to a JSON string.
      });

      const result = await response.json();

      if (response.ok) {
        // If the server responds with a success status code (e.g., 200).
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form.
      } else {
        // If the server responds with an error status code (e.g., 400, 500).
        setStatusMessage(result.error || 'An unknown error occurred.');
      }
    } catch (error) {
      // This catches network errors, like if the server is not running.
      console.error('There was an error submitting the form:', error);
      setStatusMessage('Could not connect to the server. Please try again later.');
    } finally {
      // This code runs whether the submission was successful or not.
      setIsSubmitting(false); // Re-enable the submit button.
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
            <div className="space-y-6">
              {/* Email Section */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 text-xl">📧</span>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <a href="mailto:wadimkweza@gmail.com" className="text-cyan-400 hover:underline">
                    wadimkweza@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Call Section */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Call Me</p>
                  <a href="tel:+265999613324" className="text-cyan-400 hover:underline">
                    +265 (0) 999 613 324
                  </a>
                </div>
              </div>

              {/* WhatsApp Section */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
                  {/* --- CHANGED: Replaced FaWhatsapp with the new SVG component */}
                  <WhatsAppIcon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">WhatsApp</p>
                  <a href="https://wa.me/265999613324" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    Click to start chat
                  </a>
                </div>
              </div>

              {/* Location Section */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 text-xl">📍</span>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Location</p>
                  <p className="text-cyan-400">Nkhatabay, Malawi</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {/* --- CHANGED: Replaced react-icons with the new SVG components */}
                {[
                  { name: 'LinkedIn', url: 'https://linkedin.com/in/your-profile', icon: <LinkedInIcon /> },
                  { name: 'GitHub', url: 'https://github.com/your-username', icon: <GithubIcon /> },
                  { name: 'Twitter', url: 'https://twitter.com/your-handle', icon: <TwitterIcon /> },
                  { name: 'Kaggle', url: 'https://www.kaggle.com/your-username', icon: <KaggleIcon /> },
                  { name: 'Hugging Face', url: 'https://huggingface.co/your-username', icon: <BrainIcon /> }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-cyan-400 text-gray-400 hover:text-gray-900 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-700 border-gray-600 text-white focus:border-cyan-400"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-700 border-gray-600 text-white focus:border-cyan-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-700 border-gray-600 text-white focus:border-cyan-400 min-h-[128px]"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  // --- CHANGED: The button is now disabled while the form is submitting.
                  disabled={isSubmitting}
                  className="w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                  {/* --- CHANGED: The button's text changes to give the user feedback. */}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {/* --- CHANGED: A new element to display the success or error message to the user. */}
                {statusMessage && (
                  <p className={`text-center text-sm mt-4 ${statusMessage.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
                    {statusMessage}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;


// import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Phone, MessageCircle } from 'lucide-react';
// import { FaBrain, FaGithub, FaKaggle, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="py-20 bg-gray-900">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Let's <span className="text-cyan-400">Connect</span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//             Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
//             <div className="space-y-6">
//               {/* Email Section */}
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
//                   <span className="text-cyan-400 text-xl">📧</span>
//                 </div>
//                 <div>
//                   <p className="text-gray-300 font-medium">Email</p>
//                   <a href="mailto:wadimkweza@gmail.com" className="text-cyan-400 hover:underline">
//                     wadimkweza@gmail.com
//                   </a>
//                 </div>
//               </div>

//               {/* Phone Call Section */}
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
//                   <Phone className="w-5 h-5 text-cyan-400" />
//                 </div>
//                 <div>
//                   <p className="text-gray-300 font-medium">Call Me</p>
//                   <a href="tel:+265999613324" className="text-cyan-400 hover:underline">
//                     +265 (0) 999 613 324
//                   </a>
//                 </div>
//               </div>

//               {/* WhatsApp Section */}
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
//                   {/* <MessageCircle className="w-5 h-5 text-cyan-400" /> */}
//                   <FaWhatsapp className="w-6 h-6 text-cyan-400" />
//                 </div>
//                 <div>
//                   <p className="text-gray-300 font-medium">WhatsApp</p>
//                   <a href="https://wa.me/265999613324" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
//                     Click to start chat
//                   </a>
//                 </div>
//               </div>

//               {/* Location Section */}
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
//                   <span className="text-cyan-400 text-xl">📍</span>
//                 </div>
//                 <div>
//                   <p className="text-gray-300 font-medium">Location</p>
//                   <p className="text-cyan-400">Nkhatabay, Malawi</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
//               <div className="flex space-x-4">
//                 {/* CHANGED: We now map over an array of objects, each containing a name, url, and icon. */}
//                 {[
//                   { name: 'LinkedIn', url: 'https://linkedin.com/in/your-profile', icon: <FaLinkedin size={20} /> },
//                   { name: 'GitHub', url: 'https://github.com/your-username', icon: <FaGithub size={20} /> },
//                   { name: 'Twitter', url: 'https://twitter.com/your-handle', icon: <FaTwitter size={20} /> },
//                   { name: 'Kaggle', url: 'https://www.kaggle.com/your-username', icon: <FaKaggle size={20} /> },
//                   { name: 'Hugging Face', url: 'https://huggingface.co/your-username', icon: <FaBrain size={20} /> }
//                 ].map((social) => (
//                   <a
//                     key={social.name}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-10 h-10 bg-gray-800 hover:bg-cyan-400 text-gray-400 hover:text-gray-900 rounded-lg flex items-center justify-center transition-colors duration-200"
//                     aria-label={social.name}
//                   >
//                     {/* CHANGED: We now render the icon component instead of the first letter. */}
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <Card className="bg-gray-800 border-gray-700">
//             <CardContent className="p-8">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
//                   <Input
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="bg-gray-700 border-gray-600 text-white focus:border-cyan-400"
//                     placeholder="Your name"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
//                   <Input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="bg-gray-700 border-gray-600 text-white focus:border-cyan-400"
//                     placeholder="your.email@example.com"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
//                   <Textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="bg-gray-700 border-gray-600 text-white focus:border-cyan-400 min-h-[128px]"
//                     placeholder="Tell me about your project..."
//                     required
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold"
//                 >
//                   Send Message
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="py-20 bg-gray-900">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Let's <span className="text-cyan-400">Connect</span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//             Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
//                   <span className="text-cyan-400 text-xl">📧</span>
//                 </div>
//                 <div>
//                   <p className="text-gray-300 font-medium">Email</p>

//                   {/* ADDED: An anchor tag to make the email clickable. */}
//                   <a href="mailto:wadimkweza@gmail.com" className="text-cyan-400 hover:underline">
//                     wadimkweza@gmail.com
//                   </a>

//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
//                   <span className="text-cyan-400 text-xl">📱</span>
//                 </div>
//                 <div>
//                   <p className="text-gray-300 font-medium">Phone</p>

//                   {/* ADDED: An anchor tag to make the phone number open WhatsApp. */}
//                   <a href="https://wa.me/265999613324"  rel="noopener noreferrer" className="text-cyan-400 hover:underline">
//                     +265 (0) 999 613 324
//                   </a>

//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
//                   <span className="text-cyan-400 text-xl">📍</span>
//                 </div>
//                 <div>
//                   <p className="text-gray-300 font-medium">Location</p>
//                   <p className="text-cyan-400">Nkhatabay, Malawi</p>
//                 </div>
//               </div>
//             </div>

//             {/* ... rest of your component ... */}
//             <div className="mt-8">
//               <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
//               <div className="flex space-x-4">
//                 {['LinkedIn', 'GitHub', 'Twitter'].map((platform) => (
//                   <a
//                     key={platform}
//                     href="#"
//                     className="w-10 h-10 bg-gray-800 hover:bg-cyan-400 text-gray-400 hover:text-gray-900 rounded-lg flex items-center justify-center transition-colors duration-200"
//                   >
//                     {platform[0]}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <Card className="bg-gray-800 border-gray-700">
//             <CardContent className="p-8">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* ... your form inputs ... */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
//                   <Input name="name" value={formData.name} onChange={handleChange} className="bg-gray-700 border-gray-600 text-white focus:border-cyan-400" placeholder="Your name" required />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
//                   <Input type="email" name="email" value={formData.email} onChange={handleChange} className="bg-gray-700 border-gray-600 text-white focus:border-cyan-400" placeholder="your.email@example.com" required />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
//                   <Textarea name="message" value={formData.message} onChange={handleChange} className="bg-gray-700 border-gray-600 text-white focus:border-cyan-400 min-h-32" placeholder="Tell me about your project..." required />
//                 </div>
//                 <Button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold">
//                   Send Message
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="py-20 bg-gray-900">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Let's <span className="text-cyan-400">Connect</span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//             Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
//                   <span className="text-cyan-400 text-xl">📧</span>
//                 </div>
//                 <div>
//                   <p className="text-gray-300 font-medium">Email</p>
//                   <p className="text-cyan-400">wadimkweza@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
//                   <span className="text-cyan-400 text-xl">📱</span>
//                 </div>
//                 <div>
//                   <p className="text-gray-300 font-medium">Phone</p>
//                   <p className="text-cyan-400">+265 (0) 999 613 324</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
//                   <span className="text-cyan-400 text-xl">📍</span>
//                 </div>
//                 <div>
//                   <p className="text-gray-300 font-medium">Location</p>
//                   <p className="text-cyan-400">Nkhatabay, Malawi</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
//               <div className="flex space-x-4">
//                 {['LinkedIn', 'GitHub', 'Twitter'].map((platform) => (
//                   <a
//                     key={platform}
//                     href="#"
//                     className="w-10 h-10 bg-gray-800 hover:bg-cyan-400 text-gray-400 hover:text-gray-900 rounded-lg flex items-center justify-center transition-colors duration-200"
//                   >
//                     {platform[0]}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <Card className="bg-gray-800 border-gray-700">
//             <CardContent className="p-8">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
//                   <Input
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="bg-gray-700 border-gray-600 text-white focus:border-cyan-400"
//                     placeholder="Your name"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
//                   <Input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="bg-gray-700 border-gray-600 text-white focus:border-cyan-400"
//                     placeholder="your.email@example.com"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
//                   <Textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="bg-gray-700 border-gray-600 text-white focus:border-cyan-400 min-h-32"
//                     placeholder="Tell me about your project..."
//                     required
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold"
//                 >
//                   Send Message
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;