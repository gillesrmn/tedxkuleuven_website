
export enum TicketType {
  STUDENT = 'Student',
  GENERAL = 'General Admission',
  SUPPORTER = 'Supporter'
}

export interface TicketOption {
  type: TicketType;
  price: number;
  description: string;
  perks: string[];
  isPopular?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  imageUrl: string;
}

export interface EventInfo {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  edition: string;
}
