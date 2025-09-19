import { Card, Row, Col, Typography } from "antd";
const { Title, Text } = Typography;

const OrchidsStats = ({ total, special, natural }) => (
  <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
    <Col xs={24} sm={8}>
      <Card style={{ textAlign: "center", background: "rgba(255,255,255,0.95)" }}>
        <Title level={2} style={{ color: "#1890ff", margin: 0 }}>{total}</Title>
        <Text>Total Orchids</Text>
      </Card>
    </Col>
    <Col xs={24} sm={8}>
      <Card style={{ textAlign: "center", background: "rgba(255,255,255,0.95)" }}>
        <Title level={2} style={{ color: "#faad14", margin: 0 }}>{special}</Title>
        <Text>Special Collection</Text>
      </Card>
    </Col>
    <Col xs={24} sm={8}>
      <Card style={{ textAlign: "center", background: "rgba(255,255,255,0.95)" }}>
        <Title level={2} style={{ color: "#52c41a", margin: 0 }}>{natural}</Title>
        <Text>Natural Species</Text>
      </Card>
    </Col>
  </Row>
);

export default OrchidsStats;
