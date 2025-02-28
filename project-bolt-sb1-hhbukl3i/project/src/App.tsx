import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyCoursesPage from './pages/MyCoursesPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:id" element={<CourseDetailsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/my-courses" element={<MyCoursesPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-xl font-bold">ChemiaOnline</h2>
                  <p className="mt-2 text-gray-400">Najlepsze kursy chemii online</p>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Kursy</h3>
                    <ul className="mt-4 space-y-2">
                      <li><a href="#" className="text-gray-400 hover:text-white">Szkoła podstawowa</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Matura</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Studia</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Firma</h3>
                    <ul className="mt-4 space-y-2">
                      <li><a href="#" className="text-gray-400 hover:text-white">O nas</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Kontakt</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Kariera</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Pomoc</h3>
                    <ul className="mt-4 space-y-2">
                      <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Wsparcie</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Regulamin</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
                <p className="text-gray-400">&copy; 2025 ChemiaOnline. Wszelkie prawa zastrzeżone.</p>
                <div className="mt-4 md:mt-0 flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-white">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;