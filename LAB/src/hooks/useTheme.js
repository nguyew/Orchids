import { useState } from 'react';

const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    return { isDarkMode, toggleTheme };
};

export default useTheme;