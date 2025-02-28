import React, { useState } from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const CoursesPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(course => course.level === filter);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Nasze kursy chemii</h1>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md ${
                filter === 'all' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Wszystkie
            </button>
            <button
              onClick={() => setFilter('primary')}
              className={`px-4 py-2 rounded-md ${
                filter === 'primary' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Szkoła podstawowa
            </button>
            <button
              onClick={() => setFilter('highschool')}
              className={`px-4 py-2 rounded-md ${
                filter === 'highschool' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Matura
            </button>
            <button
              onClick={() => setFilter('university')}
              className={`px-4 py-2 rounded-md ${
                filter === 'university' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Studia
            </button>
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nie znaleziono kursów spełniających wybrane kryteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;