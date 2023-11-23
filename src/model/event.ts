export type Minute = number;
export interface IEvent {
  slug: string;
  date: string;
  place: string;
  maps: string;
  duration?: Minute;
  youtubeUrl?: string;
  thumbnail: string;
  title: string;
  description: string;
  prerequisites: string[];
  stacks: string[];
}
