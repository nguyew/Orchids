import React from "react";
import { Divider, FloatButton } from "antd";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import { ListOfOrchids } from "../data/orchidsData";
import useModal from "../hooks/useModal";

import OrchidsHeader from "./OrchidsHeader";
import OrchidsStats from "./OrchidsStats";
import OrchidsGrid from "./OrchidsGrid";
import OrchidsFooter from "./OrchidsFooter";
import OrchidModal from "./OrchidModal";

const Orchids = ({ isDarkMode, toggleTheme }) => {
  const { isOpen, selectedOrchid, openModal, closeModal } = useModal();

  const specialCount = ListOfOrchids.filter(o => o.isSpecial).length;
  const naturalCount = ListOfOrchids.filter(o => o.isNatural).length;
  const totalLikes = ListOfOrchids.reduce((sum, o) => sum + o.numberOfLike, 0);

  const backgroundStyle = {
    minHeight: "100vh",
    background: isDarkMode 
      ? "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)"
      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "24px",
    transition: "all 0.3s ease"
  };

  const dividerStyle = {
    borderColor: isDarkMode 
      ? "rgba(255,255,255,0.2)" 
      : "rgba(255,255,255,0.3)"
  };

  return (
    <div style={backgroundStyle}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <OrchidsHeader isDarkMode={isDarkMode} />
        <OrchidsStats
          total={ListOfOrchids.length}
          special={specialCount}
          natural={naturalCount}
          isDarkMode={isDarkMode}
        />
        <Divider style={dividerStyle} />
        <OrchidsGrid orchids={ListOfOrchids} onSelect={openModal} />
        <OrchidsFooter totalLikes={totalLikes} isDarkMode={isDarkMode} />
      </div>

      {/* Theme Toggle Button */}
      <FloatButton
        icon={isDarkMode ? <BulbFilled /> : <BulbOutlined />}
        type="primary"
        style={{
          right: 24,
          bottom: 24,
          width: 60,
          height: 60,
        }}
        onClick={toggleTheme}
        tooltip={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
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