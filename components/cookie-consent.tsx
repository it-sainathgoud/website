// 'use client';

// import { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import CookieSettingsModal from './cookie-settings-modal';

// export default function CookieConsent() {
//   const [visible, setVisible] = useState(false);
//   const [showSettings, setShowSettings] = useState(false);

//   useEffect(() => {
//     const consent = Cookies.get('cookie_consent');
//     if (!consent) setVisible(true);
//   }, []);

//   const handleConsent = (value: string) => {
//     Cookies.set('cookie_consent', value, { expires: 365 });
//     setVisible(false);
//   };

//   if (!visible) return null;

//   return (
//     <>
//       <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:bottom-6 z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-6 max-w-md mx-auto animate-fade-in">
//         <h4 className="text-lg font-semibold text-gray-900 mb-2">We value your privacy</h4>
//         <p className="text-sm text-gray-600 mb-4">
//           We use cookies to enhance your experience, personalize content, and analyze traffic. Manage your preferences anytime.
//         </p>
//         <div className="flex flex-wrap gap-2">
//           <button
//             onClick={() => handleConsent('accepted')}
//             className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
//           >
//             Accept
//           </button>
//           <button
//             onClick={() => handleConsent('declined')}
//             className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-lg transition"
//           >
//             Decline
//           </button>
//           <button
//             onClick={() => setShowSettings(true)}
//             className="text-indigo-600 hover:underline text-sm font-medium px-2 py-2"
//           >
//             Settings
//           </button>
//         </div>
//       </div>

//       {showSettings && <CookieSettingsModal onClose={() => setShowSettings(false)} />}
//     </>
//   );
// }