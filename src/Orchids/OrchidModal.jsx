import { Modal, Typography, Image, Space, Tag, Rate, Divider, Card, Avatar } from "antd";
import { HeartFilled, EnvironmentOutlined, StarFilled } from "@ant-design/icons";
import {Leaf} from 'lucide-react';

const { Title, Paragraph, Text } = Typography;

const OrchidModal = ({ visible, orchid, onClose, isDarkMode }) => {
  if (!orchid) return null;

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

  const modalStyle = {
    top: 20,
  };

  const bodyStyle = isDarkMode ? {
    backgroundColor: '#1f1f1f',
    color: '#f0f0f0'
  } : {};

  return (
    <Modal 
      open={visible} 
      onCancel={onClose} 
      footer={null} 
      centered 
      width={700}
      style={modalStyle}
      bodyStyle={bodyStyle}
      styles={{
        content: {
          backgroundColor: isDarkMode ? '#1f1f1f' : '#ffffff',
          borderRadius: 16,
          overflow: 'hidden'
        }
      }}
    >
      <div style={{ padding: '20px 0' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Header with Image */}
          <div style={{ textAlign: "center" }}>
            <Image
              src={orchid.image}
              alt={orchid.name}
              width={350}
              height={250}
              style={{ 
                borderRadius: 16,
                objectFit: 'cover',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
              }}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop';
              }}
            />
          </div>

          {/* Title and Rating */}
          <div style={{ textAlign: "center" }}>
            <Title 
              level={1} 
              style={{ 
                margin: 0, 
                color: isDarkMode ? '#f0f0f0' : '#1890ff',
                fontSize: '2.5rem'
              }}
            >
              {orchid.name}
            </Title>
            <Rate 
              disabled 
              defaultValue={orchid.rating} 
              style={{ 
                fontSize: 24,
                margin: '12px 0'
              }}
            />
          </div>

          {/* Tags Section */}
          <div style={{ textAlign: "center" }}>
            <Space wrap size="middle">
              <Tag 
                color={getCategoryColor(orchid.category)} 
                style={{ 
                  fontSize: '1rem', 
                  padding: '6px 12px',
                  borderRadius: 20,
                  fontWeight: 'bold'
                }}
              >
                {orchid.category}
              </Tag>
              
              <Tag 
                color={getColorTag(orchid.color)}
                style={{ 
                  fontSize: '1rem', 
                  padding: '6px 12px',
                  borderRadius: 20,
                  fontWeight: 'bold'
                }}
              >
                {orchid.color.toUpperCase()}
              </Tag>

              {orchid.isSpecial && (
                <Tag 
                  color="gold"
                  style={{ 
                    fontSize: '1rem', 
                    padding: '6px 12px',
                    borderRadius: 20,
                    fontWeight: 'bold'
                  }}
                >
                  ⭐ SPECIAL
                </Tag>
              )}

              {orchid.isNatural && (
                <Tag 
                  color="green"
                  style={{ 
                    fontSize: '1rem', 
                    padding: '6px 12px',
                    borderRadius: 20,
                    fontWeight: 'bold'
                  }}
                >
                  <Leaf /> NATURAL
                </Tag>
              )}
            </Space>
          </div>

          <Divider style={{ 
            borderColor: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' 
          }} />

          {/* Stats Cards */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Card 
              size="small" 
              style={{ 
                textAlign: 'center',
                minWidth: 120,
                backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(24,144,255,0.1)',
                border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : 'none'
              }}
            >
              <Space direction="vertical" size="small">
                <HeartFilled style={{ fontSize: '1.5rem', color: '#eb2f96' }} />
                <Text strong style={{ 
                  fontSize: '1.2rem',
                  color: isDarkMode ? '#f0f0f0' : 'inherit'
                }}>
                  {orchid.numberOfLike}
                </Text>
                <Text type="secondary" style={{ 
                  color: isDarkMode ? 'rgba(255,255,255,0.6)' : undefined
                }}>
                  Likes
                </Text>
              </Space>
            </Card>

            <Card 
              size="small" 
              style={{ 
                textAlign: 'center',
                minWidth: 120,
                backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(24,144,255,0.1)',
                border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : 'none'
              }}
            >
              <Space direction="vertical" size="small">
                <EnvironmentOutlined style={{ fontSize: '1.5rem', color: '#1890ff' }} />
                <Text strong style={{ 
                  fontSize: '1.2rem',
                  color: isDarkMode ? '#f0f0f0' : 'inherit'
                }}>
                  {orchid.origin}
                </Text>
                <Text type="secondary" style={{ 
                  color: isDarkMode ? 'rgba(255,255,255,0.6)' : undefined
                }}>
                  Origin
                </Text>
              </Space>
            </Card>

            <Card 
              size="small" 
              style={{ 
                textAlign: 'center',
                minWidth: 120,
                backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(24,144,255,0.1)',
                border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : 'none'
              }}
            >
              <Space direction="vertical" size="small">
                <StarFilled style={{ fontSize: '1.5rem', color: '#faad14' }} />
                <Text strong style={{ 
                  fontSize: '1.2rem',
                  color: isDarkMode ? '#f0f0f0' : 'inherit'
                }}>
                  {orchid.rating}/5
                </Text>
                <Text type="secondary" style={{ 
                  color: isDarkMode ? 'rgba(255,255,255,0.6)' : undefined
                }}>
                  Rating
                </Text>
              </Space>
            </Card>
          </div>

          {/* Color Display */}
          <div style={{ textAlign: "center" }}>
            <Space align="center" size="middle">
              <Avatar 
                size={40}
                style={{ 
                  backgroundColor: orchid.color.toLowerCase(),
                  border: '3px solid #d9d9d9',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}
              />
              <Text 
                style={{ 
                  fontSize: '1.1rem',
                  color: isDarkMode ? '#f0f0f0' : 'inherit'
                }}
              >
                Primary Color: <strong>{orchid.color}</strong>
              </Text>
            </Space>
          </div>

          {/* Description */}
          <div style={{ textAlign: "center" }}>
            <Paragraph 
              style={{ 
                fontSize: '1rem',
                lineHeight: 1.6,
                color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
                maxWidth: 500,
                margin: '0 auto'
              }}
            >
              {orchid.description || `The ${orchid.name} is a stunning ${orchid.color.toLowerCase()} orchid from ${orchid.origin}. This ${orchid.category} variety represents the perfect balance of natural beauty and exotic elegance, making it a prized addition to any collection.`}
            </Paragraph>
          </div>
        </Space>
      </div>
    </Modal>
  );
};

export default OrchidModal;