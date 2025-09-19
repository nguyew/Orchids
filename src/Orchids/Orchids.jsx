import { useState } from "react";
import { Divider } from "antd";
import { ListOfOrchids } from "../data/orchidsData";

import OrchidsHeader from "./OrchidsHeader";
import OrchidsStats from "./OrchidsStats";
import OrchidsGrid from "./OrchidsGrid";
import OrchidsFooter from "./OrchidsFooter";
import OrchidModal from "./OrchidModal";

const Orchids = () => {
  const [selectedOrchid, setSelectedOrchid] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const specialCount = ListOfOrchids.filter(o => o.isSpecial).length;
  const naturalCount = ListOfOrchids.filter(o => o.isNatural).length;
  const totalLikes = ListOfOrchids.reduce((sum, o) => sum + o.numberOfLike, 0);

  const openModal = (orchid) => {
    setSelectedOrchid(orchid);
    setModalVisible(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <OrchidsHeader />
        <OrchidsStats
          total={ListOfOrchids.length}
          special={specialCount}
          natural={naturalCount}
        />
        <Divider style={{ borderColor: "rgba(255,255,255,0.3)" }} />
        <OrchidsGrid orchids={ListOfOrchids} onSelect={openModal} />
        <OrchidsFooter totalLikes={totalLikes} />
      </div>

      <OrchidModal
        visible={modalVisible}
        orchid={selectedOrchid}
        onClose={() => setModalVisible(false)}
      />
    </div>
  );
};

export default Orchids;
