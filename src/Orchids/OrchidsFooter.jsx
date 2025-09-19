import { Card, Divider, Space, Typography } from "antd";
const { Title, Text } = Typography;

const OrchidsFooter = ({ totalLikes }) => (
  <div style={{ textAlign: "center", marginTop: 48, padding: 24 }}>
    <Card style={{ background: "rgba(255,255,255,0.95)", borderRadius: 16 }}>
      <Space size="large">
        <div>
          <Title level={3} style={{ margin: 0, color: "#1890ff" }}>
            {totalLikes.toLocaleString()}
          </Title>
          <Text>Total Likes</Text>
        </div>
        <Divider type="vertical" style={{ height: 60 }} />
        <div>
          <Title level={3} style={{ margin: 0, color: "#eb2f96" }}>16</Title>
          <Text>Countries</Text>
        </div>
        <Divider type="vertical" style={{ height: 60 }} />
        <div>
          <Title level={3} style={{ margin: 0, color: "#52c41a" }}>8</Title>
          <Text>Categories</Text>
        </div>
      </Space>
    </Card>
  </div>
);

export default OrchidsFooter;
