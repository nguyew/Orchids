import { useState, useEffect } from 'react';

const useTheme = () => {
    // Initialize with system preference or stored preference
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check for saved preference first
        const savedTheme = localStorage.getItem('orchids-theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        // Fall back to system preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // Save theme preference to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('orchids-theme', isDarkMode ? 'dark' : 'light');
        
        // Update document class for global styling
        if (isDarkMode) {
            document.documentElement.classList.add('dark-theme');
            document.documentElement.classList.remove('light-theme');
        } else {
            document.documentElement.classList.add('light-theme');
            document.documentElement.classList.remove('dark-theme');
        }
    }, [isDarkMode]);

    // Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            // Only update if user hasn't manually set a preference
            const savedTheme = localStorage.getItem('orchids-theme');
            if (!savedTheme) {
                setIsDarkMode(e.matches);
            }
        };

        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    const setTheme = (theme) => {
        setIsDarkMode(theme === 'dark');
    };

    return { 
        isDarkMode, 
        toggleTheme, 
        setTheme,
        currentTheme: isDarkMode ? 'dark' : 'light'
    };
};

export default useTheme;