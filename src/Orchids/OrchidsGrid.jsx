import { Row, Col } from "antd";
import OrchidCard from "./OrchidCards";

const OrchidsGrid = ({ orchids, onSelect }) => (
  <Row gutter={[24, 24]} style={{ marginTop: 32 }}>
    {orchids.map((orchid) => (
      <Col xs={24} sm={12} md={8} lg={6} key={orchid.id}>
        <div onClick={() => onSelect(orchid)}>
          <OrchidCard orchid={orchid} />
        </div>
      </Col>
    ))}
  </Row>
);

export default OrchidsGrid;
