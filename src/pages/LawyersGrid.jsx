import React, { useState } from 'react';
import LawyerSearch from './LawyerSearch';
import LawyersCard from './LawyersCard';
import Footer from '../components/Footer';

const lawyers = [
  { id: 1, name: 'John Doe', experience: 10, specialization: 'Criminal Law', rate_per_hour: '5,000', image_url: 'https://media.istockphoto.com/id/1314997483/photo/portrait-of-a-confident-mature-businessman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=OxN-O2qe4LbgYuOnp_VkgXOV5p7CDC_uWja9iWFM-OA=' },
  { id: 2, name: 'Jane Smith', experience: 8, specialization: 'Corporate Law', rate_per_hour: '6,000', image_url: 'https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=' },
  { id: 3, name: 'James Brown', experience: 15, specialization: 'Family Law', rate_per_hour: '4,500', image_url: 'https://media.istockphoto.com/id/1182967311/photo/confident-smiling-young-african-businessman-looking-at-camera-in-office.jpg?s=612x612&w=0&k=20&c=OIKWgJqGRsU12EhryxZOpqKQ2eBd_buxLfqYHhh42_4=' },
  { id: 4, name: 'Lisa Ray', experience: 12, specialization: 'Property Law', rate_per_hour: '7,000', image_url: 'https://media.istockphoto.com/id/1181860679/photo/studio-headshot-of-a-hispanic-woman-wearing-a-turtle-neck-pullover.jpg?s=612x612&w=0&k=20&c=VpNhmeN4Qj_YVghjCiq8_sDt6TNyJr_JSSUDBgi4txU=' },
  { id: 5, name: 'Michael White', experience: 9, specialization: 'Environmental Law', rate_per_hour: '5,500', image_url: 'https://media.istockphoto.com/id/1184187261/photo/portrait-of-cheerful-bearded-black-man-over-yellow-background.jpg?s=612x612&w=0&k=20&c=me77y_a3sfKKOauLJpMMQo3wctCyMTf9_PtQT6YLhN4=' },
  { id: 6, name: 'Emily Green', experience: 11, specialization: 'Real Estate Law', rate_per_hour: '6,500', image_url: 'https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A=' },
  { id: 7, name: 'David Black', experience: 7, specialization: 'Tax Law', rate_per_hour: '5,200', image_url: 'https://media.istockphoto.com/id/1262964438/photo/success-happens-the-moment-you-believe-it-will.jpg?s=612x612&w=0&k=20&c=tpjbR4aaaiB43sneEWgatyFIQOmN3E-3nB5CBE5Idyg=' },
  { id: 8, name: 'Laura Blue', experience: 14, specialization: 'Health Law', rate_per_hour: '6,300', image_url: 'https://media.istockphoto.com/id/1278139568/photo/studio-portrait-of-20-year-old-woman.jpg?s=612x612&w=0&k=20&c=FSEdX6EGKrjbCvOJk9idiYZJoSErA9bwizHEkW86A3c=' },
  { id: 9, name: 'Chris Yellow', experience: 6, specialization: 'Labor Law', rate_per_hour: '4,800', image_url: 'https://media.istockphoto.com/id/1152603187/photo/african-mature-man-with-spectacles.jpg?s=612x612&w=0&k=20&c=f2SytlutqLu8XGBdjYVlvSZEVHthQKAGjBVOWs8tiv8=' },
  { id: 10, name: 'Anna Purple', experience: 13, specialization: 'International Law', rate_per_hour: '7,100', image_url: 'https://media.istockphoto.com/id/1196391449/photo/portrait-of-african-woman.jpg?s=612x612&w=0&k=20&c=b-hwtJGyg5Y-hwG-9id9D3hb71TmaqyDlfU-Ps3GA2s=' },
  { id: 11, name: 'Tom Orange', experience: 10, specialization: 'Bankruptcy Law', rate_per_hour: '5,700', image_url: 'https://media.istockphoto.com/id/1201144328/photo/smiling-black-man-in-suit-posing-on-studio-background.jpg?s=612x612&w=0&k=20&c=abcU_jcFCUgSkmpXAd5qfrsUFUcdv6oOMdtW2U-m_8g=' },
  { id: 12, name: 'Sarah Pink', experience: 5, specialization: 'Criminal Law', rate_per_hour: '5,300', image_url: 'https://media.istockphoto.com/id/1153955734/photo/happy-smiling-african-american-woman-in-formal-business-attire.jpg?s=612x612&w=0&k=20&c=UyNptq9c5l4G0Wi6f8IEMPY4n5hytZ_-8qyCC67_ujQ=' }
];

const LawyersGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLawyers = lawyers.filter(lawyer =>
    lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lawyer.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container mx-auto px-4 bg-#c7c55b">
        <LawyerSearch setSearchTerm={setSearchTerm} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {filteredLawyers.length > 0 ? (
            filteredLawyers.map((lawyer) => (
              <div key={lawyer.id} className="mb-1">
                <LawyersCard lawyer={lawyer} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-black mt-10">
              <p>Lawyer not found.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LawyersGrid;

// import React, { useState, useEffect } from 'react';
// import LawyersCard from './LawyersCard';
// import LawyerSearch from './LawyerSearch';
// import Footer from '../components/Footer';

// const LawyersGrid = () => {
//   const [lawyers, setLawyers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/lawyers')
//       .then((response) => response.json())
//       .then((data) => setLawyers(data))
//       .catch((error) => console.error('Error fetching lawyers:', error));
//   }, []);

//   const filteredLawyers = lawyers.filter((lawyer) =>
//     lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     lawyer.specialization.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <div className="container mx-auto px-4">
//         <h1 className="text-2xl font-bold text-center mb-4">Our Lawyers</h1>
//         <LawyerSearch setSearchTerm={setSearchTerm} />
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {filteredLawyers.length > 0 ? (
//             filteredLawyers.map((lawyer) => (
//               <div key={lawyer.id} className="mb-4">
//                 <LawyersCard lawyer={lawyer} />
//               </div>
//             ))
//           ) : (
//             <div className="col-span-full text-center text-black mt-10">
//               <p>Lawyer not found.</p>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default LawyersGrid;

