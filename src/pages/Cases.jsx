import React from 'react';

function Card() {
  const cards = [
    {
      id: 1,
      name: 'John Doe',
      title: 'Case Title: Alleged Technology Patent Infringement',
      description: 'John Doe is accused of infringing on a major tech company’s AI technology patent.',
      lawyerType: 'Intellectual Property Lawyer',
      imgUrl: 'https://media.istockphoto.com/id/1140459803/photo/portait-of-businessman-sitting-in-meeting-room.jpg?s=612x612&w=0&k=20&c=Q6vse3AEhgByQgMbkiK9VPdqOxgGvIc0N5Rj9cbwHqk=',
    },
    {
      id: 2,
      name: 'Jane Smith',
      title: 'Case Title: Environmental Law Violation',
      description: 'Jane Smith is facing allegations of violating environmental regulations during a construction project.',
      lawyerType: 'Environmental Lawyer',
      imgUrl: 'https://img.freepik.com/free-photo/beautiful-african-woman-face-portrait-close-up_53876-148041.jpg',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      title: 'Case Title: Corporate Fraud Allegation',
      description: 'Michael Johnson is accused of committing corporate fraud during a major merger deal.',
      lawyerType: 'Corporate Lawyer',
      imgUrl: 'https://img.freepik.com/free-photo/african-american-man-wearing-white-t-shirt_273609-14647.jpg',
    },
    {
      id: 4,
      name: 'Emily Davis',
      title: 'Case Title: Medical Malpractice Accusation',
      description: 'Emily Davis is accused of medical malpractice in a case involving serious patient harm.',
      lawyerType: 'Medical Malpractice Lawyer',
      imgUrl: 'https://media.istockphoto.com/id/92347273/photo/portrait-of-a-doctor.jpg?s=612x612&w=0&k=20&c=TA7pX3qsXo5HXL_FHraeHEj_rl68Wtq93dNsPk1oUww=',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-4 mt-2 underline">CLIENT CASES</h1>
      <div className="grid grid-cols-1 gap-6">
        {cards.length > 0 ? (
          cards.map((card) => (
            <div
              key={card.id}
              className="w-full h-75 bg-white border-b border-l border-cyan-400 rounded-lg shadow flex flex-row items-stretch drop-shadow-2xl"
            >
              <img
                className="object-cover w-48 h-full rounded-l-lg"
                src={card.imgUrl}
                alt={card.title}
              />
              <div className="flex flex-col justify-between p-4 leading-normal flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.name}
                </h5>
                <h6 className="mb-2 text-lg font-semibold tracking-tight text-gray-800 dark:text-gray-300">
                  {card.title}
                </h6>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                  {card.description}
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Lawyer Needed: {card.lawyerType}
                </p>
                <div className="mt-auto flex justify-center">
                  <button className="inline-flex items-center px-10 py-2 text-lg font-medium text-center text-white bg-[#37B9F1] rounded-lg hover:bg-[#32a6d8] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View Case
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-black mt-10">
            <p>No cards found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
