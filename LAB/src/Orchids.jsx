import { Card, Row, Col, Typography, Space, Divider } from 'antd';
import OrchidCard from './OrchidCards';
import { ListOfOrchids } from './data/orchidsData';

const { Title, Text, Paragraph } = Typography;

const Orchids = () => {
  const specialCount = ListOfOrchids.filter(orchid => orchid.isSpecial).length;
  const naturalCount = ListOfOrchids.filter(orchid => orchid.isNatural).length;
  const totalLikes = ListOfOrchids.reduce((sum, orchid) => sum + orchid.numberOfLike, 0);

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '24px'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Title 
            level={1} 
            style={{ 
              color: 'white', 
              fontSize: '3rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              marginBottom: 16
            }}
          >
            🌺 Exotic Orchids Collection
          </Title>
          <Paragraph 
            style={{ 
              color: 'rgba(255,255,255,0.9)', 
              fontSize: '1.2rem',
              maxWidth: 600,
              margin: '0 auto'
            }}
          >
            Discover our stunning collection of rare and beautiful orchids from around the world. 
            Each flower tells a unique story of elegance and natural wonder.
          </Paragraph>
        </div>

        {/* Statistics Section */}
        <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
          <Col xs={24} sm={8}>
            <Card style={{ textAlign: 'center', background: 'rgba(255,255,255,0.95)' }}>
              <Title level={2} style={{ color: '#1890ff', margin: 0 }}>
                {ListOfOrchids.length}
              </Title>
              <Text>Total Orchids</Text>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card style={{ textAlign: 'center', background: 'rgba(255,255,255,0.95)' }}>
              <Title level={2} style={{ color: '#faad14', margin: 0 }}>
                {specialCount}
              </Title>
              <Text>Special Collection</Text>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card style={{ textAlign: 'center', background: 'rgba(255,255,255,0.95)' }}>
              <Title level={2} style={{ color: '#52c41a', margin: 0 }}>
                {naturalCount}
              </Title>
              <Text>Natural Species</Text>
            </Card>
          </Col>
        </Row>

        <Divider style={{ borderColor: 'rgba(255,255,255,0.3)' }} />

        {/* Orchids Grid */}
        <Row gutter={[24, 24]} style={{ marginTop: 32 }}>
          {ListOfOrchids.map((orchid) => (
            <Col xs={24} sm={12} md={8} lg={6} key={orchid.id}>
              <OrchidCard orchid={orchid} />
            </Col>
          ))}
        </Row>

        {/* Footer Section */}
        <div style={{ textAlign: 'center', marginTop: 48, padding: 24 }}>
          <Card style={{ background: 'rgba(255,255,255,0.95)', borderRadius: 16 }}>
            <Space size="large">
              <div>
                <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                  {totalLikes.toLocaleString()}
                </Title>
                <Text>Total Likes</Text>
              </div>
              <Divider type="vertical" style={{ height: 60 }} />
              <div>
                <Title level={3} style={{ margin: 0, color: '#eb2f96' }}>
                  16
                </Title>
                <Text>Countries</Text>
              </div>
              <Divider type="vertical" style={{ height: 60 }} />
              <div>
                <Title level={3} style={{ margin: 0, color: '#52c41a' }}>
                  8
                </Title>
                <Text>Categories</Text>
              </div>
            </Space>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Orchids;
