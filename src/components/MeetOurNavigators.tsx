import React from 'react';
import Image from 'next/image';

interface NavigatorProfile {
  id: number;
  imageSrc: string; // URL path for the photo
  name: string;
  title: string;
  bio: string;
}

interface MeetOurNavigatorsProps {
  profiles?: NavigatorProfile[];
}

const defaultProfiles = [
  {
    id: 1,
    imageSrc: '/placeholder-abdullah.jpg',
    name: 'ABDULLAH AL-MAMUN',
    title: 'MANAGING DIRECTOR',
    bio: 'With extensive experience in business leadership, Abdullah brings strategic vision and operational excellence to guide our organization toward sustainable growth and success.',
  },
  {
    id: 2,
    imageSrc: '/placeholder-rehana.jpg',
    name: 'DR. REHANA ARJUMAN HYE',
    title: 'PROPRIETOR',
    bio: 'Dr. Rehana combines her academic expertise with entrepreneurial acumen to drive innovation and maintain the highest standards of quality across all our operations.',
  },
  {
    id: 3,
    imageSrc: '/placeholder-mofizur.jpg',
    name: 'MOFIZUR RAHMAN',
    title: 'DIRECTOR',
    bio: 'Mofizur brings a wealth of industry knowledge and hands-on experience, focusing on operational efficiency and fostering relationships that strengthen our market position.',
  },
];

const MeetOurNavigators: React.FC<MeetOurNavigatorsProps> = ({ profiles = defaultProfiles }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Meet Our Navigators</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl"
            >
              {/* Profile Image */}
              <div className="p-6 w-full flex flex-col items-center">
                <div className="relative mx-auto mb-6">
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-32 h-32 mx-auto overflow-hidden flex items-center justify-center">
                    <span className="text-gray-500 text-xs text-center p-2">Profile Image</span>
                  </div>
                  <Image
                    src={profile.imageSrc}
                    alt={profile.name}
                    width={128}
                    height={128}
                    className="w-32 h-32 object-cover rounded-full mx-auto absolute inset-0"
                  />
                </div>

                {/* Profile Info */}
                <div className="px-4 pb-6">
                  <h3 className="text-xl font-bold uppercase text-gray-900 mb-1">{profile.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3 uppercase tracking-wide">{profile.title}</p>
                  <p className="text-gray-600 text-base leading-relaxed">{profile.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurNavigators;