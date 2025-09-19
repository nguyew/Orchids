import './App.css'
import Orchids from './Orchids/Orchids';
import React from 'react';
import { ConfigProvider, theme } from 'antd';
import useTheme from './hooks/useTheme';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#667eea',
          colorBgContainer: isDarkMode ? '#1f1f1f' : '#ffffff',
          colorBgElevated: isDarkMode ? '#262626' : '#ffffff',
        },
      }}
    >
      <div className="App" style={{
        minHeight: '100vh',
        backgroundColor: isDarkMode ? '#141414' : '#f0f2f5',
        transition: 'all 0.3s ease'
      }}>
        <Orchids isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </ConfigProvider>
  );
};

export default App