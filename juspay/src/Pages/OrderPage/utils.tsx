export interface StatusParserProps {
  status: Status;
}

export enum Status {
  InProgress = '{"text": "In Progress", "color": "rgba(149, 164, 252, 1)"}',
  Complete = '{"text": "Complete", "color": "#70B3A0"}',
  Pending = '{"text": "Pending", "color": "#ADD8E6"}',
  Approved = '{"text": "Approved", "color": "#F8CE7F"}',
  Rejected = '{"text": "Rejected", "color": "#B4B4B4"}',
}

export interface Order {
  orderID: string;
  contact: Contact;
  project: string;
  address: string;
  timestamp: string;
  status: Status;
}

export interface Contact {
  username: string;
  profileUrl: string;
}
