import { Card, Rate, Tag, Badge, Typography, Space, Avatar } from 'antd';
import { HeartOutlined, EnvironmentOutlined, StarFilled } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Meta } = Card;

const OrchidCard = ({ orchid }) => {
  const getColorTag = (color) => {
    const colorMap = {
      pink: 'magenta',
      purple: 'purple',
      yellow: 'gold',
      white: 'default',
      red: 'red',
      blue: 'blue',
      green: 'green',
      orange: 'orange',
      lavender: 'purple',
      black: 'default',
      copper: 'volcano',
      cream: 'default',
      violet: 'purple',
      gold: 'gold'
    };
    return colorMap[color.toLowerCase()] || 'default';
  };

  const getCategoryColor = (category) => {
    const categoryColors = {
      'Cattleya': 'pink',
      'Dendrobium': 'blue',
      'Oncidium': 'orange',
      'Phalaenopsis': 'purple',
      'Vanda': 'green',
      'Paphiopedilum': 'cyan',
      'Miltonia': 'volcano',
      'Cymbidium': 'geekblue'
    };
    return categoryColors[category] || 'default';
  };

  const actions = [
    <Space key="rating">
      <StarFilled style={{ color: '#faad14' }} />
      <Text strong>{orchid.rating}/5</Text>
    </Space>,
    <Space key="likes">
      <HeartOutlined style={{ color: '#eb2f96' }} />
      <Text>{orchid.numberOfLike}</Text>
    </Space>,
    <Space key="origin">
      <EnvironmentOutlined style={{ color: '#1890ff' }} />
      <Text>{orchid.origin}</Text>
    </Space>
  ];

  return (
    <Badge.Ribbon 
      text={orchid.isSpecial ? "SPECIAL" : null} 
      color="gold"
      style={{ display: orchid.isSpecial ? 'block' : 'none' }}
    >
      <Card
        hoverable
        style={{ 
          width: '100%',
          marginBottom: 16,
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
        cover={
          <div style={{ position: 'relative' }}>
            <img
              alt={orchid.name}
              src={orchid.image}
              style={{ 
                height: 200, 
                width: '100%', 
                objectFit: 'cover' 
              }}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop';
              }}
            />
            {orchid.isNatural && (
              <Tag 
                color="green" 
                style={{ 
                  position: 'absolute', 
                  top: 8, 
                  left: 8,
                  fontWeight: 'bold'
                }}
              >
                NATURAL
              </Tag>
            )}
          </div>
        }
        actions={actions}
      >
        <Meta
          title={
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Title level={4} style={{ margin: 0, color: '#1890ff' }}>
                {orchid.name}
              </Title>
              <Rate 
                disabled 
                defaultValue={orchid.rating} 
                style={{ fontSize: 16 }}
              />
            </Space>
          }
          description={
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Space wrap>
                <Tag color={getCategoryColor(orchid.category)}>
                  {orchid.category}
                </Tag>
                <Tag color={getColorTag(orchid.color)}>
                  {orchid.color.toUpperCase()}
                </Tag>
              </Space>
              
              <Space>
                <Avatar 
                  size="small" 
                  style={{ 
                    backgroundColor: orchid.color.toLowerCase(),
                    border: '2px solid #d9d9d9'
                  }}
                />
                <Text type="secondary">Color: {orchid.color}</Text>
              </Space>
            </Space>
          }
        />
      </Card>
    </Badge.Ribbon>
  );
};
export default OrchidCard;