import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { useAuth } from '../context/AuthContext';
import { ChevronDown, ChevronUp, Clock, Play } from 'lucide-react';

const CourseDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isLoggedIn, currentUser, purchaseCourse } = useAuth();
  const [expandedTopics, setExpandedTopics] = React.useState<Record<string, boolean>>({});

  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Kurs nie został znaleziony</h2>
          <button 
            onClick={() => navigate('/courses')}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Wróć do listy kursów
          </button>
        </div>
      </div>
    );
  }

  const isCoursePurchased = currentUser?.purchasedCourses.includes(course.id);

  const toggleTopic = (topicId: string) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const handlePurchase = () => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    
    purchaseCourse(course.id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img 
                className="h-64 w-full object-cover md:w-64" 
                src={course.imageUrl} 
                alt={course.title} 
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
                  <p className="mt-2 text-gray-600">{course.description}</p>
                </div>
                <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                  {course.level === 'primary' ? 'Szkoła podstawowa' : 
                   course.level === 'highschool' ? 'Matura' : 'Studia'}
                </span>
              </div>
              
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-indigo-700">{course.price} zł</span>
                  {isCoursePurchased ? (
                    <button 
                      className="px-6 py-3 bg-green-600 text-white rounded-md cursor-default"
                      disabled
                    >
                      Zakupiono
                    </button>
                  ) : (
                    <button 
                      onClick={handlePurchase}
                      className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                    >
                      Kup teraz
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Spis treści kursu</h2>
            
            {course.topics.length === 0 ? (
              <p className="text-gray-600">Szczegółowy spis treści tego kursu jest w przygotowaniu.</p>
            ) : (
              <div className="space-y-4">
                {course.topics.map(topic => (
                  <div key={topic.id} className="border border-gray-200 rounded-md overflow-hidden">
                    <button
                      onClick={() => toggleTopic(topic.id)}
                      className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                    >
                      <h3 className="text-lg font-medium text-gray-900">{topic.title}</h3>
                      {expandedTopics[topic.id] ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    
                    {expandedTopics[topic.id] && (
                      <div className="p-4 space-y-3">
                        <p className="text-gray-600 mb-4">{topic.description}</p>
                        
                        {topic.videos.map(video => (
                          <div 
                            key={video.id} 
                            className={`p-3 rounded-md flex items-start ${
                              isCoursePurchased ? 'bg-indigo-50 hover:bg-indigo-100 cursor-pointer' : 'bg-gray-50'
                            }`}
                          >
                            <div className="flex-shrink-0 mr-3">
                              <div className={`rounded-full p-2 ${
                                isCoursePurchased ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-600'
                              }`}>
                                <Play className="h-4 w-4" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-md font-medium text-gray-900">{video.title}</h4>
                              <p className="text-sm text-gray-600">{video.description}</p>
                            </div>
                            <div className="flex-shrink-0 flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {video.duration}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {!isCoursePurchased && course.topics.length > 0 && (
              <div className="mt-8 bg-indigo-50 p-4 rounded-md">
                <p className="text-indigo-700">
                  Kup ten kurs, aby uzyskać dostęp do wszystkich materiałów i filmów.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;