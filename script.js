// Language data
const translations = {
    en: {
        title: "PricePal – Your Friendly Market Companion",
        subtitle: "Negotiate smarter and save money with AI-powered price suggestions in Pidgin or English.",
        featuresTitle: "Features",
        feature1Title: "Smart Bargaining Suggestions",
        feature1Desc: "Get AI-generated counter-offers in seconds.",
        feature2Title: "Pidgin or English",
        feature2Desc: "Choose your preferred language for local flavor.",
        feature3Title: "Track Your Deals",
        feature3Desc: "Save and view your past bargains anytime.",
        feature4Title: "Offline Ready",
        feature4Desc: "Works even without internet (uses built-in phrases).",
        howItWorksTitle: "How It Works",
        step1: "Enter item name & price",
        step2: "Get bargaining suggestion from PricePal",
        step3: "Save final price for your records",
        testimonialsTitle: "What Our Users Say",
        testimonial1: "PricePal saved me so much money at the market! The AI suggestions are spot on.",
        testimonial2: "I love that I can switch between Pidgin and English. It makes bargaining so much easier.",
        testimonial3: "Tracking my deals helps me see how much I've saved over time. Highly recommend!",
        ctaTitle: "Download PricePal Today – Stop overpaying in the market!",
        footerText: "© 2025 All rights reserved. Designed By",
        googlePlayAlt: "Get it on Google Play",
        appStoreAlt: "Download on the App Store"
    },
    pidgin: {
        title: "PricePal – Your Market Padi",
        subtitle: "Use AI power negotiate better price for market. E dey work for Pidgin and English.",
        featuresTitle: "Wetin E Dey Do",
        feature1Title: "Smart Bargaining Suggestions",
        feature1Desc: "Get AI counter-offer in seconds.",
        feature2Title: "Pidgin or English",
        feature2Desc: "Choose the language wey you sabi well.",
        feature3Title: "Track Your Deals",
        feature3Desc: "Save all your bargain history anytime.",
        feature4Title: "Offline Ready",
        feature4Desc: "E dey work even without internet (with built-in phrases).",
        howItWorksTitle: "How E Dey Work",
        step1: "Enter item name and price",
        step2: "Get bargaining suggestion from PricePal",
        step3: "Save final price for your records",
        testimonialsTitle: "Wetin People Dey Talk",
        testimonial1: "PricePal save me plenty money for market! The AI suggestions dey correct well well.",
        testimonial2: "I like say I fit switch between Pidgin and English. E make bargaining easy pass.",
        testimonial3: "To dey track my deals help me see how much I don save. I recommend am!",
        ctaTitle: "Download PricePal Today – Stop to dey overpay for market!",
        footerText: "© 2025 All rights reserved. Designed By",
        googlePlayAlt: "Get it on Google Play",
        appStoreAlt: "Download on the App Store"
    }
};

// Current language
let currentLanguage = 'en';

// Function to update content based on language
function updateContent(lang) {
    const data = translations[lang];
    
    // Update main title
    document.querySelector('.hero-section h1').textContent = data.title;
    document.querySelector('.hero-section .subtext').textContent = data.subtitle;
    
    // Update features section
    document.querySelector('.features-section h2').textContent = data.featuresTitle;
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems[0].querySelector('h3').textContent = data.feature1Title;
    featureItems[0].querySelector('p').textContent = data.feature1Desc;
    featureItems[1].querySelector('h3').textContent = data.feature2Title;
    featureItems[1].querySelector('p').textContent = data.feature2Desc;
    featureItems[2].querySelector('h3').textContent = data.feature3Title;
    featureItems[2].querySelector('p').textContent = data.feature3Desc;
    featureItems[3].querySelector('h3').textContent = data.feature4Title;
    featureItems[3].querySelector('p').textContent = data.feature4Desc;
    
    // Update how it works section
    document.querySelector('.how-it-works-section h2').textContent = data.howItWorksTitle;
    const stepItems = document.querySelectorAll('.step-item p');
    stepItems[0].textContent = data.step1;
    stepItems[1].textContent = data.step2;
    stepItems[2].textContent = data.step3;
    
    // Update testimonials section
    document.querySelector('.testimonials-section h2').textContent = data.testimonialsTitle;
    const testimonialItems = document.querySelectorAll('.testimonial-item p:first-child');
    testimonialItems[0].textContent = `"${data.testimonial1}"`;
    testimonialItems[1].textContent = `"${data.testimonial2}"`;
    testimonialItems[2].textContent = `"${data.testimonial3}"`;
    
    // Update CTA section
    document.querySelector('.cta-section h2').textContent = data.ctaTitle;
    
    // Update footer
    document.querySelector('footer p').innerHTML = `${data.footerText} <a href="https://instagram.com/osas.codes" target="_blank">Osagie Bernard Ebhuomhan</a>`;
    
    // Update alt texts
    document.querySelectorAll('img[alt="Get it on Google Play"]').forEach(img => {
        img.alt = data.googlePlayAlt;
    });
    document.querySelectorAll('img[alt="Download on the App Store"]').forEach(img => {
        img.alt = data.appStoreAlt;
    });
    
    // Update screenshots based on language
    updateScreenshots(lang);
    
    // Update language toggle button
    const toggleBtn = document.getElementById('languageToggle');
    toggleBtn.textContent = lang === 'en' ? 'Switch to Pidgin' : 'Switch to English';
}

// Function to update screenshots
function updateScreenshots(lang) {
    const screenshot1 = document.querySelector('.app-mockups img:first-child');
    const screenshot4 = document.querySelector('.app-mockups img:nth-child(4)');
    
    // Use Naira currency screenshots
    screenshot1.src = 'assets/screenshot1_naira.png';
    screenshot4.src = 'assets/screenshot4_naira.png';
}

// Function to toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'pidgin' : 'en';
    updateContent(currentLanguage);
    
    // Save preference to localStorage
    localStorage.setItem('pricepal_language', currentLanguage);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('pricepal_language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Create language toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'languageToggle';
    toggleBtn.className = 'language-toggle';
    toggleBtn.onclick = toggleLanguage;
    
    // Add toggle button to hero section
    const heroContainer = document.querySelector('.hero-section .container');
    heroContainer.insertBefore(toggleBtn, heroContainer.firstChild);
    
    // Initialize content
    updateContent(currentLanguage);
});

