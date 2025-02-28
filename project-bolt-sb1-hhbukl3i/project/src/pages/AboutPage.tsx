import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              O nas
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Nasza misja to uczynienie chemii przystępną i fascynującą dla każdego ucznia.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Nasza historia
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p>
              ChemiaOnline powstała z pasji do nauczania i przekonania, że chemia może być fascynującym przedmiotem dla każdego ucznia. Nasz zespół składa się z doświadczonych nauczycieli, wykładowców akademickich i pasjonatów chemii, którzy połączyli siły, aby stworzyć platformę edukacyjną na najwyższym poziomie.
            </p>
            <p>
              Zaczęliśmy w 2020 roku jako mały projekt mający na celu pomoc uczniom w przygotowaniu do matury z chemii. Szybko jednak zauważyliśmy, że istnieje ogromne zapotrzebowanie na wysokiej jakości materiały edukacyjne z chemii dla uczniów na różnych poziomach edukacji.
            </p>
            <p>
              Dziś ChemiaOnline to kompleksowa platforma oferująca kursy dla uczniów szkół podstawowych, maturzystów oraz studentów. Nasze materiały są tworzone z myślą o jasnym i przystępnym przekazywaniu nawet najtrudniejszych zagadnień chemicznych.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Nasz zespół
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Poznaj ekspertów, którzy tworzą nasze kursy
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <img 
                className="w-32 h-32 mx-auto rounded-full object-cover" 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" 
                alt="Anna Kowalska" 
              />
              <h3 className="mt-4 text-xl font-medium text-gray-900">dr Anna Kowalska</h3>
              <p className="text-gray-600">Wykładowca chemii organicznej</p>
            </div>

            <div className="text-center">
              <img 
                className="w-32 h-32 mx-auto rounded-full object-cover" 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" 
                alt="Jan Nowak" 
              />
              <h3 className="mt-4 text-xl font-medium text-gray-900">prof. Jan Nowak</h3>
              <p className="text-gray-600">Specjalista chemii nieorganicznej</p>
            </div>

            <div className="text-center">
              <img 
                className="w-32 h-32 mx-auto rounded-full object-cover" 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" 
                alt="Marta Wiśniewska" 
              />
              <h3 className="mt-4 text-xl font-medium text-gray-900">mgr Marta Wiśniewska</h3>
              <p className="text-gray-600">Nauczycielka chemii, egzaminator maturalny</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Dlaczego warto wybrać nasze kursy?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-center">
                <BookOpen className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">Kompleksowe materiały</h3>
              <p className="mt-2 text-gray-600">
                Nasze kursy zawierają filmy, zadania, quizy i materiały dodatkowe, które pomogą Ci opanować materiał.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">Doświadczeni nauczyciele</h3>
              <p className="mt-2 text-gray-600">
                Nasi instruktorzy to doświadczeni nauczyciele i wykładowcy z pasją do nauczania chemii.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-center">
                <Award className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">Potwierdzona skuteczność</h3>
              <p className="mt-2 text-gray-600">
                Tysiące zadowolonych uczniów, którzy osiągnęli świetne wyniki dzięki naszym kursom.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Skontaktuj się z nami
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Masz pytania? Chętnie na nie odpowiemy!
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="flex items-center mb-6">
              <Mail className="h-6 w-6 text-indigo-600 mr-3" />
              <span className="text-gray-700">kontakt@chemiaonline.pl</span>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Wyślij wiadomość
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;