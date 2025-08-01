// 'use client';

// import { useState } from 'react';

// type Props = {
//   onClose: () => void;
// };

// export default function CookieSettingsModal({ onClose }: Props) {
//   const [analytics, setAnalytics] = useState(true);
//   const [marketing, setMarketing] = useState(false);

//   const handleSave = () => {
//     const preferences = {
//       essential: true,
//       analytics,
//       marketing,
//     };
//     localStorage.setItem('cookie_preferences', JSON.stringify(preferences));
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6">
//         <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookie Preferences</h2>
//         <p className="text-sm text-gray-600 mb-6">
//           Select which cookies you want to allow. You can change these settings anytime.
//         </p>

//         <div className="space-y-4">
//           <div className="flex items-center justify-between">
//             <span className="text-gray-800 font-medium">Essential Cookies</span>
//             <span className="text-xs text-gray-500">Required</span>
//           </div>

//           <div className="flex items-center justify-between">
//             <label className="text-gray-800 font-medium">Analytics Cookies</label>
//             <input
//               type="checkbox"
//               checked={analytics}
//               onChange={() => setAnalytics(!analytics)}
//               className="form-checkbox h-5 w-5 text-indigo-600"
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <label className="text-gray-800 font-medium">Marketing Cookies</label>
//             <input
//               type="checkbox"
//               checked={marketing}
//               onChange={() => setMarketing(!marketing)}
//               className="form-checkbox h-5 w-5 text-indigo-600"
//             />
//           </div>
//         </div>

//         <div className="mt-6 flex justify-end gap-3">
//           <button
//             onClick={onClose}
//             className="text-sm text-gray-600 hover:underline"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg"
//           >
//             Save Preferences
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }