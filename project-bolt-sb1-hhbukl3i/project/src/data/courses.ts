import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Podstawy chemii dla szkoły podstawowej',
    description: 'Kurs wprowadzający do chemii dla uczniów szkoły podstawowej. Poznaj podstawowe pojęcia i reakcje chemiczne w przystępny sposób.',
    level: 'primary',
    price: 199,
    imageUrl: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    topics: [
      {
        id: '1-1',
        title: 'Wprowadzenie do chemii',
        description: 'Podstawowe pojęcia i definicje w chemii',
        videos: [
          {
            id: '1-1-1',
            title: 'Czym jest chemia?',
            description: 'Wprowadzenie do nauki chemii i jej znaczenie w codziennym życiu',
            url: 'https://example.com/video1',
            duration: '10:15'
          },
          {
            id: '1-1-2',
            title: 'Atomy i cząsteczki',
            description: 'Podstawowe informacje o budowie materii',
            url: 'https://example.com/video2',
            duration: '12:30'
          }
        ]
      },
      {
        id: '1-2',
        title: 'Układ okresowy pierwiastków',
        description: 'Nauka o układzie okresowym i właściwościach pierwiastków',
        videos: [
          {
            id: '1-2-1',
            title: 'Historia układu okresowego',
            description: 'Jak powstał układ okresowy pierwiastków',
            url: 'https://example.com/video3',
            duration: '8:45'
          },
          {
            id: '1-2-2',
            title: 'Grupy i okresy',
            description: 'Jak czytać układ okresowy pierwiastków',
            url: 'https://example.com/video4',
            duration: '15:20'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Chemia organiczna dla maturzystów',
    description: 'Kompleksowy kurs chemii organicznej przygotowujący do matury. Wszystkie zagadnienia wymagane na egzaminie maturalnym.',
    level: 'highschool',
    price: 299,
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    topics: []
  },
  {
    id: '3',
    title: 'Chemia analityczna dla studentów',
    description: 'Zaawansowany kurs chemii analitycznej dla studentów kierunków przyrodniczych i medycznych.',
    level: 'university',
    price: 399,
    imageUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    topics: []
  }
];