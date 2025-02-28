import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'primary':
        return 'Szkoła podstawowa';
      case 'highschool':
        return 'Matura';
      case 'university':
        return 'Studia';
      default:
        return level;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <img 
        src={course.imageUrl} 
        alt={course.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
          <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
            {getLevelLabel(course.level)}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-indigo-700">{course.price} zł</span>
          <Link 
            to={`/courses/${course.id}`}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Szczegóły
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;