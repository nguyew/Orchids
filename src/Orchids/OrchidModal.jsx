import React from 'react'
import { Modal, Typography, Space, Tag, Rate, Image, Descriptions } from 'antd';

const { Title, Text, Paragraph } = Typography;

const OrchidModal = ( orchid, visible, onClose ) => {
    if (!orchid) return null;

    return (
        <Modal
            open={visible}
            title={
                <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                    {orchid.name}
                </Title>
            }
            footer={null}
            onCancel={onClose}
            centered
            width={700}
            >
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    {/* Orchid Image */}
                    <Image
                        src={orchid.image}
                        alt={orchid.name}
                        height={300}
                        width="100%"
                        style={{ objectFit: 'cover', borderRadius: 12 }}
                        fallback='https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
                    />

                    {/* Orchid Rating */}
                    <Space align='center'>
                        <Rate disabled defaultValue={orchid.rating} />
                        <Text>({orchid.rating} / 5)</Text>
                    </Space>

                    {/* Orchid Tag */}
                    <Space wrap>
                        {orchid.isSpecial && <Tag color="gold">⭐ SPECIAL</Tag>}
                        {orchid.isNatural && <Tag color="green">🌿 NATURAL</Tag>}
                        <Tag>{orchid.category}</Tag>
                        <Tag>{orchid.color}</Tag>
                    </Space>

                    {/* Orchid Description */}
                    <Descriptions bordered column={1} size="small">
                        <Descriptions.Item label="Origin">{orchid.origin}</Descriptions.Item>
                        <Descriptions.Item label="Category">{orchid.category}</Descriptions.Item>
                        <Descriptions.Item label="Color">{orchid.color}</Descriptions.Item>
                        <Descriptions.Item label="Likes">{orchid.numberOfLike}</Descriptions.Item>
                    </Descriptions>

                    {/* Extra Info */}
                    {orchid.description && (
                        <Paragraph style={{ marginTop: 12 }}>{orchid.description}</Paragraph>
                    )}
                </Space>
            </Modal>
    );
};

