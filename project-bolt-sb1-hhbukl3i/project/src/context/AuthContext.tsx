import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  currentUser: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  purchaseCourse: (courseId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // In a real app, this would validate credentials against a backend
    // For demo purposes, we'll create a mock user
    setCurrentUser({
      id: '1',
      name: 'Demo User',
      email: email,
      purchasedCourses: []
    });
  };

  const register = async (name: string, email: string, password: string) => {
    // In a real app, this would send registration data to a backend
    // For demo purposes, we'll create a new user
    setCurrentUser({
      id: Date.now().toString(),
      name: name,
      email: email,
      purchasedCourses: []
    });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const purchaseCourse = (courseId: string) => {
    if (currentUser) {
      setCurrentUser({
        ...currentUser,
        purchasedCourses: [...currentUser.purchasedCourses, courseId]
      });
    }
  };

  const value = {
    currentUser,
    isLoggedIn: !!currentUser,
    login,
    register,
    logout,
    purchaseCourse
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};