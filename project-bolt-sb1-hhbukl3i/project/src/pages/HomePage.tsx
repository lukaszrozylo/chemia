import React from 'react';
import { Link } from 'react-router-dom';
import { BeakerIcon, GraduationCap, BookOpen } from 'lucide-react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const HomePage: React.FC = () => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Odkryj świat chemii
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Interaktywne kursy chemii dla uczniów, maturzystów i studentów. Ucz się w swoim tempie i osiągaj najlepsze wyniki.
            </p>
            <div className="mt-10">
              <Link
                to="/courses"
                className="px-8 py-3 bg-white text-indigo-700 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Przeglądaj kursy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Dlaczego warto uczyć się z nami?
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-center">
                <BeakerIcon className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">Praktyczne doświadczenia</h3>
              <p className="mt-2 text-gray-600">
                Nasze kursy zawierają praktyczne przykłady i eksperymenty, które pomogą Ci lepiej zrozumieć chemię.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-center">
                <GraduationCap className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">Doświadczeni nauczyciele</h3>
              <p className="mt-2 text-gray-600">
                Nasi instruktorzy to doświadczeni nauczyciele i wykładowcy z pasją do nauczania chemii.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-center">
                <BookOpen className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">Kompleksowe materiały</h3>
              <p className="mt-2 text-gray-600">
                Każdy kurs zawiera filmy, zadania, quizy i materiały dodatkowe, które pomogą Ci opanować materiał.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Polecane kursy
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Sprawdź nasze najpopularniejsze kursy chemii
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/courses"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Zobacz wszystkie kursy
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Co mówią nasi uczniowie
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic">
                "Dzięki kursom z chemii organicznej zdałem maturę na 92%! Materiały są świetnie przygotowane i bardzo przystępne."
              </p>
              <p className="mt-4 font-medium">Michał, maturzysta</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic">
                "Jako nauczycielka chemii polecam te kursy swoim uczniom. Świetne wyjaśnienia trudnych zagadnień i mnóstwo praktycznych przykładów."
              </p>
              <p className="mt-4 font-medium">Anna, nauczycielka chemii</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic">
                "Kursy pomogły mi nadrobić zaległości z chemii analitycznej na studiach. Teraz rozumiem wszystko znacznie lepiej!"
              </p>
              <p className="mt-4 font-medium">Karolina, studentka farmacji</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;