import { Typography } from "antd";
const { Title, Paragraph } = Typography;

const OrchidsHeader = () => (
  <div style={{ textAlign: "center", marginBottom: 48 }}>
    <Title
      level={1}
      style={{
        color: "white",
        fontSize: "3rem",
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        marginBottom: 16,
      }}
    >
      🌺 Exotic Orchids Collection
    </Title>
    <Paragraph
      style={{
        color: "rgba(255,255,255,0.9)",
        fontSize: "1.2rem",
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      Discover our stunning collection of rare and beautiful orchids from around
      the world. Each flower tells a unique story of elegance and natural wonder.
    </Paragraph>
  </div>
);

export default OrchidsHeader;
