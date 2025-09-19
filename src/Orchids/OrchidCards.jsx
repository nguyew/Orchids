import { Card, Rate, Tag, Badge, Typography, Space, Avatar, Button } from 'antd';
import { HeartOutlined, EnvironmentOutlined, StarFilled, EyeOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Meta } = Card;

const OrchidCard = ({ orchid, onSelect }) => {
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
    <Button
      key="details"
      type="primary"
      icon={<EyeOutlined />}
      size="small"
      onClick={(e) => {
        e.stopPropagation();
        onSelect(orchid);
      }}
      style={{
        borderRadius: 20,
        background: 'linear-gradient(45deg, #667eea, #764ba2)',
        border: 'none'
      }}
    >
      Details
    </Button>
  ];

  return (
    <>
      <style>
        {`
          .orchid-card {
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .orchid-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
          }
          .orchid-card .ant-card-cover {
            overflow: hidden;
          }
          .orchid-card:hover .ant-card-cover img {
            transform: scale(1.1);
            transition: transform 0.3s ease;
          }
          .orchid-card-image {
            transition: all 0.3s ease;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .orchid-card {
            animation: fadeInUp 0.6s ease-out;
          }
        `}
      </style>
      
      <Badge.Ribbon 
        text={orchid.isSpecial ? "SPECIAL" : null} 
        color="gold"
        style={{ display: orchid.isSpecial ? 'block' : 'none' }}
      >
        <Card
          hoverable
          className="orchid-card"
          style={{ 
            width: '100%',
            marginBottom: 16,
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))'
          }}
          cover={
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                alt={orchid.name}
                src={orchid.image}
                className="orchid-card-image"
                style={{ 
                  height: 220, 
                  width: '100%', 
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop';
                }}
              />
              
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%)'
              }} />

              {orchid.isNatural && (
                <Tag 
                  color="green" 
                  style={{ 
                    position: 'absolute', 
                    top: 12, 
                    left: 12,
                    fontWeight: 'bold',
                    borderRadius: 12,
                    padding: '4px 12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                >
                  🌿 NATURAL
                </Tag>
              )}

              {/* Origin badge */}
              <div style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'rgba(0,0,0,0.6)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: 15,
                fontSize: '0.8rem',
                fontWeight: 'bold',
                backdropFilter: 'blur(5px)'
              }}>
                <EnvironmentOutlined style={{ marginRight: 4 }} />
                {orchid.origin}
              </div>
            </div>
          }
          actions={actions}
          onClick={() => onSelect(orchid)}
        >
          <Meta
            title={
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <Title 
                  level={4} 
                  style={{ 
                    margin: 0, 
                    color: '#1890ff',
                    fontSize: '1.3rem',
                    fontWeight: 'bold'
                  }}
                >
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
              <Space direction="vertical" size="medium" style={{ width: '100%' }}>
                <Space wrap size="small">
                  <Tag 
                    color={getCategoryColor(orchid.category)}
                    style={{ 
                      borderRadius: 12, 
                      fontWeight: 'bold',
                      padding: '2px 8px'
                    }}
                  >
                    {orchid.category}
                  </Tag>
                  <Tag 
                    color={getColorTag(orchid.color)}
                    style={{ 
                      borderRadius: 12, 
                      fontWeight: 'bold',
                      padding: '2px 8px'
                    }}
                  >
                    {orchid.color.toUpperCase()}
                  </Tag>
                </Space>
                
                <Space align="center" size="middle">
                  <Avatar 
                    size="small" 
                    style={{ 
                      backgroundColor: orchid.color.toLowerCase(),
                      border: '2px solid #d9d9d9',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Text type="secondary" style={{ fontWeight: '500' }}>
                    Color: {orchid.color}
                  </Text>
                </Space>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 8,
                  padding: '8px 0',
                  borderTop: '1px solid rgba(0,0,0,0.1)'
                }}>
                  <Space>
                    <HeartOutlined style={{ color: '#eb2f96' }} />
                    <Text strong style={{ color: '#eb2f96' }}>
                      {orchid.numberOfLike} likes
                    </Text>
                  </Space>
                  
                  <Space>
                    <StarFilled style={{ color: '#faad14' }} />
                    <Text strong style={{ color: '#faad14' }}>
                      {orchid.rating}/5
                    </Text>
                  </Space>
                </div>
              </Space>
            }
          />
        </Card>
      </Badge.Ribbon>
    </>
  );
};

export default OrchidCard;