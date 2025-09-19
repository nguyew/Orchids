import { Divider, FloatButton, notification } from "antd";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import { ListOfOrchids } from "../data/orchidsData";
import useModal from "../hooks/useModal";
import useOrchidStats from "../hooks/useOrchidStats";
import { useEffect } from "react";

import OrchidsHeader from "./OrchidsHeader";
import OrchidsStats from "./OrchidsStats";
import OrchidsGrid from "./OrchidsGrid";
import OrchidsFooter from "./OrchidsFooter";
import OrchidModal from "./OrchidModal";

const Orchids = ({ isDarkMode, toggleTheme }) => {
  const { isOpen, selectedOrchid, openModal, closeModal } = useModal();
  const stats = useOrchidStats(ListOfOrchids);

  // Show notification when theme changes
  useEffect(() => {
    const message = isDarkMode ? '🌙 Dark mode activated' : '☀️ Light mode activated';
    notification.success({
      message,
      description: isDarkMode 
        ? 'Enjoying the darker side of orchids!' 
        : 'Basking in the light with beautiful orchids!',
      placement: 'topRight',
      duration: 2,
    });
  }, [isDarkMode]);

  const backgroundStyle = {
    minHeight: "100vh",
    background: isDarkMode 
      ? "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)"
      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "24px",
    transition: "all 0.3s ease",
    position: "relative"
  };

  const dividerStyle = {
    borderColor: isDarkMode 
      ? "rgba(255,255,255,0.2)" 
      : "rgba(255,255,255,0.3)"
  };

  return (
    <div style={backgroundStyle}>
      {/* Animated particles background */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 10 + 's',
              animationDuration: (Math.random() * 10 + 10) + 's'
            }}
          />
        ))}
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <OrchidsHeader isDarkMode={isDarkMode} />
        
        <OrchidsStats
          total={stats.total}
          special={stats.special}
          natural={stats.natural}
          isDarkMode={isDarkMode}
        />
        
        <Divider style={dividerStyle} />
        
        {/* Additional stats display */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: 32,
          color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.9)'
        }}>
          <p style={{ fontSize: '1.1rem', margin: 0 }}>
            ⭐ Average Rating: <strong>{stats.averageRating}/5</strong> | 
            🏆 Most Liked: <strong>{stats.mostLiked?.name}</strong> ({stats.mostLiked?.numberOfLike} likes) |
            🌟 Top Rated: <strong>{stats.topRated?.name}</strong> ({stats.topRated?.rating}/5)
          </p>
        </div>
        
        <OrchidsGrid orchids={ListOfOrchids} onSelect={openModal} />
        
        <OrchidsFooter totalLikes={stats.totalLikes} isDarkMode={isDarkMode} />
      </div>

      {/* Enhanced Theme Toggle Button */}
      <FloatButton
        icon={isDarkMode ? <BulbFilled /> : <BulbOutlined />}
        type="primary"
        style={{
          right: 24,
          bottom: 24,
          width: 60,
          height: 60,
          background: isDarkMode 
            ? 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' 
            : 'linear-gradient(45deg, #667eea, #764ba2)',
          border: 'none',
          boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
          animation: 'float 3s ease-in-out infinite'
        }}
        onClick={toggleTheme}
        tooltip={
          <div style={{ textAlign: 'center' }}>
            <strong>{isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</strong>
            <br />
            <small>{isDarkMode ? "☀️ Brighten up!" : "🌙 Go dark!"}</small>
          </div>
        }
      />

      <OrchidModal
        visible={isOpen}
        orchid={selectedOrchid}
        onClose={closeModal}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default Orchids;