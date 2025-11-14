'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  mobileNumber: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (mobileNumber: string, password: string) => Promise<void>;
  signup: (mobileNumber: string, name: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('voiceshop_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (mobileNumber: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call with delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Get stored credentials from localStorage
      const storedUsers = JSON.parse(localStorage.getItem('voiceshop_users') || '[]');
      const userRecord = storedUsers.find((u: any) => u.mobileNumber === mobileNumber);

      if (!userRecord || userRecord.password !== password) {
        throw new Error('Invalid mobile number or password');
      }

      const userData = { mobileNumber, name: userRecord.name };
      setUser(userData);
      localStorage.setItem('voiceshop_user', JSON.stringify(userData));
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (mobileNumber: string, name: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call with delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check if user already exists
      const storedUsers = JSON.parse(localStorage.getItem('voiceshop_users') || '[]');
      if (storedUsers.some((u: any) => u.mobileNumber === mobileNumber)) {
        throw new Error('Mobile number already registered');
      }

      // Store new user
      const newUser = { mobileNumber, name, password };
      storedUsers.push(newUser);
      localStorage.setItem('voiceshop_users', JSON.stringify(storedUsers));

      const userData = { mobileNumber, name };
      setUser(userData);
      localStorage.setItem('voiceshop_user', JSON.stringify(userData));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('voiceshop_user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (undefined === context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
