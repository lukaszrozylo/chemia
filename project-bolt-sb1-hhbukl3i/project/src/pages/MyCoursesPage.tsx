import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { courses } from '../data/courses';
import { Play } from 'lucide-react';

const MyCoursesPage: React.FC = () => {
  const { isLoggedIn, currentUser } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn || !currentUser) {
    return null;
  }

  const purchasedCourses = courses.filter(course => 
    currentUser.purchasedCourses.includes(course.id)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Moje kursy</h1>
        
        {purchasedCourses.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl font-medium text-gray-900 mb-4">Nie masz jeszcze żadnych kursów</h2>
            <p className="text-gray-600 mb-6">
              Przeglądaj nasze kursy i wybierz ten, który najbardziej Ci odpowiada.
            </p>
            <Link
              to="/courses"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors inline-block"
            >
              Przeglądaj kursy
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {purchasedCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img 
                      className="h-48 w-full object-cover md:w-48" 
                      src={course.imageUrl} 
                      alt={course.title} 
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h2>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <Link
                      to={`/courses/${course.id}`}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors inline-block"
                    >
                      Przejdź do kursu
                    </Link>
                  </div>
                </div>
                
                {course.topics.length > 0 && (
                  <div className="border-t border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Ostatnio przeglądane</h3>
                    
                    <div className="space-y-3">
                      {course.topics[0].videos.slice(0, 2).map(video => (
                        <div 
                          key={video.id} 
                          className="p-3 bg-indigo-50 hover:bg-indigo-100 rounded-md flex items-start cursor-pointer"
                        >
                          <div className="flex-shrink-0 mr-3">
                            <div className="rounded-full p-2 bg-indigo-600 text-white">
                              <Play className="h-4 w-4" />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-md font-medium text-gray-900">{video.title}</h4>
                            <p className="text-sm text-gray-600">{course.topics[0].title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCoursesPage;