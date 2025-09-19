import { Card, Divider, Space, Typography } from "antd";
import { HeartFilled, GlobalOutlined, AppstoreOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const OrchidsFooter = ({ totalLikes, isDarkMode }) => {
  const cardStyle = {
    background: isDarkMode 
      ? "rgba(255,255,255,0.08)" 
      : "rgba(255,255,255,0.95)",
    borderRadius: 20,
    border: isDarkMode 
      ? "1px solid rgba(255,255,255,0.1)" 
      : "none",
    backdropFilter: "blur(15px)",
    boxShadow: isDarkMode
      ? "0 12px 40px rgba(0,0,0,0.4)"
      : "0 8px 30px rgba(0,0,0,0.15)",
    padding: "2rem",
    transition: "all 0.3s ease"
  };

  const StatItem = ({ icon, value, label, color }) => (
    <div style={{ textAlign: "center" }}>
      <Space direction="vertical" size="small">
        {icon}
        <Title 
          level={3} 
          style={{ 
            margin: 0, 
            color: isDarkMode ? "#f0f0f0" : color,
            fontSize: "2rem",
            fontWeight: "bold"
          }}
        >
          {value}
        </Title>
        <Text 
          style={{ 
            color: isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.65)",
            fontSize: "1rem",
            fontWeight: "500"
          }}
        >
          {label}
        </Text>
      </Space>
    </div>
  );

  return (
    <div style={{ textAlign: "center", marginTop: 48, padding: 24 }}>
      <Card style={cardStyle} hoverable>
        <Space size="large" wrap>
          <StatItem
            icon={<HeartFilled style={{ fontSize: "1.5rem", color: "#eb2f96" }} />}
            value={totalLikes.toLocaleString()}
            label="Total Likes"
            color="#eb2f96"
          />
          
          <Divider 
            type="vertical" 
            style={{ 
              height: 80, 
              borderColor: isDarkMode 
                ? "rgba(255,255,255,0.2)" 
                : "rgba(0,0,0,0.1)" 
            }} 
          />
          
          <StatItem
            icon={<GlobalOutlined style={{ fontSize: "1.5rem", color: "#1890ff" }} />}
            value="16"
            label="Countries"
            color="#1890ff"
          />
          
          <Divider 
            type="vertical" 
            style={{ 
              height: 80, 
              borderColor: isDarkMode 
                ? "rgba(255,255,255,0.2)" 
                : "rgba(0,0,0,0.1)" 
            }} 
          />
          
          <StatItem
            icon={<AppstoreOutlined style={{ fontSize: "1.5rem", color: "#52c41a" }} />}
            value="8"
            label="Categories"
            color="#52c41a"
          />
        </Space>
        
        <Divider 
          style={{ 
            borderColor: isDarkMode 
              ? "rgba(255,255,255,0.2)" 
              : "rgba(0,0,0,0.1)",
            margin: "1.5rem 0 1rem 0" 
          }} 
        />
        
        <Text 
          style={{ 
            color: isDarkMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)",
            fontSize: "0.9rem",
            fontStyle: "italic"
          }}
        >
          🌸 "In every walk with nature, one receives far more than they seek" 🌸
        </Text>
      </Card>
    </div>
  );
};

export default OrchidsFooter;