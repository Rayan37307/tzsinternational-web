import React from 'react';
import Image from 'next/image';

interface NavigatorProfile {
  id: number;
  imageSrc: string; // URL path for the photo
  name: string;
  title: string;
  bio: string;
}

interface MeetNavigatorsProps {
  profiles?: NavigatorProfile[];
}

const defaultProfiles = [
  {
    id: 1,
    imageSrc: '/abdullah-al-mamun.jpg',
    name: 'ABDULLAH AL-MAMUN',
    title: 'MANAGING DIRECTOR',
    bio: 'Mr. Abdullah Al-Mamun embodies the spirit of innovation and leadership that defines Greenland Group. With dual Master\'s degrees in Business Economics and Computer Science Engineering from the University of Texas, he brings exceptional expertise to drive our strategic vision.',
  },
  {
    id: 2,
    imageSrc: '/dr-rehana-arjuman-hye.jpg',
    name: 'DR. REHANA ARJUMAN HYE',
    title: 'PROPRIETOR',
    bio: 'A graduate of Dinajpur Medical College and Hospital, she combines medical expertise with visionary leadership. As Executive Director of Greenland Medical Centre Ltd., she has ensured world-class medical screening services for our recruitment processes.',
  },
  {
    id: 3,
    imageSrc: '/mofizur-rahman.jpg',
    name: 'MOFIZUR RAHMAN',
    title: 'DIRECTOR',
    bio: 'Mr. Mofizur Rahman, serving as Director (Recruitment) of Greenland Overseas, has been an integral part of the organization\'s success for over three decades. Known for his hands-on approach and strong managerial acumen.',
  },
];

export default function MeetNavigators({ profiles = defaultProfiles }: MeetNavigatorsProps) {
  return (
    <section id="meet-navigators" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Meet Our <span className="text-primary-600">Navigators</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our experienced leadership team brings decades of expertise to guide your recruitment journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {profiles.map((member) => (
            <div
              key={member.id}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col items-center text-center"
            >
              {/* Profile Image */}
              <div className="relative mx-auto mb-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-32 h-32 mx-auto overflow-hidden flex items-center justify-center">
                  <span className="text-gray-500 text-xs text-center p-2">Profile Image</span>
                </div>
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 object-cover rounded-full mx-auto absolute inset-0"
                />
              </div>

              <h3 className="text-xl font-bold uppercase text-primary-900 mb-2">{member.name}</h3>
              <p className="text-primary-600 font-semibold mb-4 uppercase tracking-wide">{member.title}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-4xl mx-auto">
            Our leadership team combines international experience with deep understanding of local markets to deliver exceptional results.
            Their combined expertise in business management, engineering, healthcare, and recruitment has positioned Greenland Overseas as
            a trusted partner for organizations worldwide seeking quality human resources solutions.
          </p>
        </div>
      </div>
    </section>
  );
}