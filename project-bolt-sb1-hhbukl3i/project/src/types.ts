export interface User {
  id: string;
  name: string;
  email: string;
  purchasedCourses: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'primary' | 'highschool' | 'university';
  price: number;
  imageUrl: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  videos: Video[];
}

export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  duration: string;
}