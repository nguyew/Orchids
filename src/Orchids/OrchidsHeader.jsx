import { Typography, Space } from "antd";
import { StarOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;

const OrchidsHeader = ({ isDarkMode }) => {
  const headerStyle = {
    textAlign: "center", 
    marginBottom: 48,
    animation: "fadeInDown 1s ease-out"
  };

  const titleStyle = {
    color: isDarkMode ? "#f0f0f0" : "white",
    fontSize: "3.5rem",
    textShadow: isDarkMode 
      ? "3px 3px 6px rgba(0,0,0,0.5)" 
      : "2px 2px 4px rgba(0,0,0,0.3)",
    marginBottom: 16,
    fontWeight: "bold",
    background: isDarkMode
      ? "linear-gradient(45deg, #ff6b6b, #4ecdc4)"
      : "linear-gradient(45deg, #fff, #e0e6ff)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const paragraphStyle = {
    color: isDarkMode ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.9)",
    fontSize: "1.3rem",
    maxWidth: 700,
    margin: "0 auto",
    lineHeight: 1.6,
  };

  return (
    <div style={headerStyle}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Title level={1} style={titleStyle}>
          🌺 Exotic Orchids Collection
        </Title>
        
        <Paragraph style={paragraphStyle}>
          <StarOutlined style={{ color: "#faad14", marginRight: 8 }} />
          Discover our stunning collection of rare and beautiful orchids from around
          the world. Each flower tells a unique story of elegance and natural wonder.
          <StarOutlined style={{ color: "#faad14", marginLeft: 8 }} />
        </Paragraph>

        <div style={{
          display: "inline-block",
          padding: "8px 20px",
          background: isDarkMode 
            ? "rgba(255,255,255,0.1)" 
            : "rgba(255,255,255,0.2)",
          borderRadius: "25px",
          backdropFilter: "blur(10px)",
          border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.3)"}`,
          color: isDarkMode ? "#f0f0f0" : "white",
          fontSize: "1rem",
          fontWeight: "500"
        }}>
          ✨ Premium Collection • Handpicked Varieties ✨
        </div>
      </Space>
    </div>
  );
};

export default OrchidsHeader;