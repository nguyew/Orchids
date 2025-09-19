import { Card, Row, Col, Typography, Space } from "antd";
import { TrophyOutlined, StarOutlined, EnvironmentOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const OrchidsStats = ({ total, special, natural, isDarkMode }) => {
  const cardStyle = {
    textAlign: "center",
    background: isDarkMode 
      ? "rgba(255,255,255,0.08)" 
      : "rgba(255,255,255,0.95)",
    borderRadius: 16,
    border: isDarkMode 
      ? "1px solid rgba(255,255,255,0.1)" 
      : "none",
    backdropFilter: "blur(10px)",
    boxShadow: isDarkMode
      ? "0 8px 32px rgba(0,0,0,0.3)"
      : "0 4px 20px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  };

  const StatCard = ({ icon, value, label, color }) => (
    <Card 
      style={cardStyle}
      hoverable
      className="stat-card"
    >
      <Space direction="vertical" size="small">
        {icon}
        <Title 
          level={2} 
          style={{ 
            color: isDarkMode ? "#f0f0f0" : color, 
            margin: 0,
            fontSize: "2.5rem",
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
    </Card>
  );

  return (
    <>
      <style>
        {`
          .stat-card:hover {
            transform: translateY(-5px);
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .stat-card {
            animation: fadeInUp 0.6s ease-out;
          }
        `}
      </style>
      
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        <Col xs={24} sm={8}>
          <StatCard
            icon={<TrophyOutlined style={{ fontSize: "2rem", color: "#1890ff" }} />}
            value={total}
            label="Total Orchids"
            color="#1890ff"
          />
        </Col>
        
        <Col xs={24} sm={8}>
          <StatCard
            icon={<StarOutlined style={{ fontSize: "2rem", color: "#faad14" }} />}
            value={special}
            label="Special Collection"
            color="#faad14"
          />
        </Col>
        
        <Col xs={24} sm={8}>
          <StatCard
            icon={<EnvironmentOutlined style={{ fontSize: "2rem", color: "#52c41a" }} />}
            value={natural}
            label="Natural Species"
            color="#52c41a"
          />
        </Col>
      </Row>
    </>
  );
};

export default OrchidsStats;