import { Modal, Typography, Image } from "antd";
const { Title, Paragraph, Text } = Typography;

const OrchidModal = ({ visible, orchid, onClose }) => {
  if (!orchid) return null;
  return (
    <Modal open={visible} onCancel={onClose} footer={null} centered width={600}>
      <div style={{ textAlign: "center" }}>
        <Image
          src={orchid.image}
          alt={orchid.name}
          width={300}
          style={{ borderRadius: 12, marginBottom: 16 }}
        />
        <Title level={2}>{orchid.name}</Title>
        <Paragraph>{orchid.description}</Paragraph>
        <Text strong>Likes: {orchid.numberOfLike}</Text>
      </div>
    </Modal>
  );
};

export default OrchidModal;
