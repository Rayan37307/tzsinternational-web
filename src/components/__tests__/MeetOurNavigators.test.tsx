import React from 'react';
import { render, screen } from '@testing-library/react';
import MeetOurNavigators from '@/components/MeetOurNavigators';

describe('MeetOurNavigators Component', () => {
  const mockProfiles = [
    {
      id: 1,
      imageSrc: '/test-image.jpg',
      name: 'JOHN DOE',
      title: 'CEO',
      bio: 'John is an experienced leader...'
    }
  ];

  it('renders the main heading', () => {
    render(<MeetOurNavigators />);
    
    const heading = screen.getByRole('heading', { 
      name: /Meet Our Navigators/i 
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders profiles when provided', () => {
    render(<MeetOurNavigators profiles={mockProfiles} />);
    
    const profileName = screen.getByText(/JOHN DOE/i);
    expect(profileName).toBeInTheDocument();
    
    const profileTitle = screen.getByText(/CEO/i);
    expect(profileTitle).toBeInTheDocument();
  });

  it('renders default profiles when no profiles prop is provided', () => {
    render(<MeetOurNavigators />);
    
    const defaultProfileNames = [/ABDULLAH AL-MAMUN/i, /DR\. REHANA ARJUMAN HYE/i, /MOFIZUR RAHMAN/i];
    defaultProfileNames.forEach(name => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});