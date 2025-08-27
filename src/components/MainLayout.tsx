// src/components/MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation'; // Make sure this path is correct
import Footer from './Footer';       // Make sure this path is correct

const MainLayout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            <Navigation />
            {/* Outlet renders the specific page component (e.g., HomePage or PrivacyPolicy) */}
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;