// src/pages/PrivacyPolicy.tsx
import React from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';

const PrivacyPolicy: React.FC = () => {
    return (

        <LegalPageLayout title="Privacy Policy">
            <p>
                <strong>Last updated: August 26, 2025</strong>
            </p>
            <p>
                Your privacy is important to us. It is Wadi Mkweza's policy to respect your privacy regarding any information we may collect from you across our website...
            </p>

            <h2>Information We Collect</h2>
            <p>
                We may collect personal information that you voluntarily provide to us when you use our contact form... (Paste the rest of generated policy here).
            </p>

            <h2>How We Use Your Information</h2>
            <p>
                We use the information we collect in various ways, including to provide, operate, and maintain our website...
            </p>
        </LegalPageLayout>
    );
};

export default PrivacyPolicy;