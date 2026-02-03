
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface TimelineItem {
  id: string;
  time: string;
  activity: string;
}

export interface Speaker {
  id: string;
  name: string;
  bio: string;
  talkTitle: string;
  img: string;
  linkedin: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  dept: string;
  img: string;
  linkedin: string;
}

export interface Alumnus {
  id: string;
  name: string;
  role: string;
  year: string;
  linkedin: string;
}

export type PastEventType = 'talk' | 'photo';

// Added missing properties to match usage in Admin and PastEvents pages
export interface PastEvent {
  id: string;
  type: PastEventType;
  eventName: string;
  date: string;
  venue?: string;
  title?: string;
  speaker?: string;
  youtubeUrl?: string;
  flickrUrl?: string;
  img: string; // Thumbnail or Gallery Cover
}

export interface Submission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dept: string;
  motivation: string;
  date: string;
}

export interface Attendee {
  id: string;
  name: string;
  email: string;
  type: string;
  status: string;
  qrStatus: string;
  date: string;
}

export interface SocialLinks {
  facebook: string;
  linkedin: string;
  instagram: string;
  flickr: string;
}

interface AppState {
  eventInfo: {
    title: string;
    date: string;
    venue: string;
    description: string;
    remarks: string;
    coverImg: string;
    timeline: TimelineItem[];
  };
  speakers: Speaker[];
  team: TeamMember[];
  alumni: Alumnus[];
  pastEvents: PastEvent[];
  submissions: Submission[];
  attendees: Attendee[];
  logo: string;
  socialLinks: SocialLinks;
  pastPartners: { name: string; logo: string }[];
}

interface AppContextType extends AppState {
  updateEventInfo: (info: AppState['eventInfo']) => void;
  setSpeakers: (speakers: Speaker[]) => void;
  setTeam: (team: TeamMember[]) => void;
  setAlumni: (alumni: Alumnus[]) => void;
  setPastEvents: (events: PastEvent[]) => void;
  addSubmission: (sub: Submission) => void;
  addAttendee: (att: Attendee) => void;
  setLogo: (url: string) => void;
  setSocialLinks: (links: SocialLinks) => void;
  setPastPartners: (partners: { name: string; logo: string }[]) => void;
  moveToAlumni: (id: string, year: string) => void;
}

const DEFAULT_STATE: AppState = {
  eventInfo: {
    title: "Beyond Boundaries",
    date: "2025-10-24T09:00",
    venue: "Pieter De Somer Aula, Naamsestraat 22, 3000 Leuven",
    description: "Join us for a day of transformative ideas and groundbreaking talks at KU Leuven.",
    remarks: "Note: Please bring your student card if you purchased a Student ticket.",
    coverImg: "",
    timeline: [
      { id: '1', time: "09:30", activity: "Registration & Coffee" },
      { id: '2', time: "10:30", activity: "Opening Ceremony" }
    ]
  },
  speakers: [],
  team: [
    { id: '1', name: "Anna Smith", role: "President", dept: "Executive", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200", linkedin: "https://linkedin.com" }
  ],
  alumni: [],
  pastEvents: [],
  submissions: [],
  attendees: [],
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/TEDx_logo.svg/1024px-TEDx_logo.svg.png",
  socialLinks: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    flickr: "https://flickr.com"
  },
  pastPartners: []
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('tedx_app_state_v5');
    return saved ? JSON.parse(saved) : DEFAULT_STATE;
  });

  useEffect(() => {
    localStorage.setItem('tedx_app_state_v5', JSON.stringify(state));
  }, [state]);

  const updateEventInfo = (eventInfo: AppState['eventInfo']) => setState(s => ({ ...s, eventInfo }));
  const setSpeakers = (speakers: Speaker[]) => setState(s => ({ ...s, speakers }));
  const setTeam = (team: TeamMember[]) => setState(s => ({ ...s, team }));
  const setAlumni = (alumni: Alumnus[]) => setState(s => ({ ...s, alumni }));
  const setPastEvents = (pastEvents: PastEvent[]) => setState(s => ({ ...s, pastEvents }));
  const addSubmission = (sub: Submission) => setState(s => ({ ...s, submissions: [sub, ...s.submissions] }));
  const addAttendee = (att: Attendee) => setState(s => ({ ...s, attendees: [att, ...s.attendees] }));
  const setLogo = (logo: string) => setState(s => ({ ...s, logo }));
  const setSocialLinks = (socialLinks: SocialLinks) => setState(s => ({ ...s, socialLinks }));
  const setPastPartners = (pastPartners: AppState['pastPartners']) => setState(s => ({ ...s, pastPartners }));

  const moveToAlumni = (id: string, year: string) => {
    const member = state.team.find(m => m.id === id);
    if (!member) return;
    const newAlum: Alumnus = { id: member.id, name: member.name, role: member.role, year, linkedin: member.linkedin };
    setState(s => ({ ...s, team: s.team.filter(m => m.id !== id), alumni: [...s.alumni, newAlum] }));
  };

  return (
    <AppContext.Provider value={{
      ...state, updateEventInfo, setSpeakers, setTeam, setAlumni, setPastEvents,
      addSubmission, addAttendee, setLogo, setSocialLinks, setPastPartners, moveToAlumni
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
