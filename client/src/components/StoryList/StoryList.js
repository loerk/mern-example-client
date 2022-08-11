import React from "react";
import { Col, Row, Spin } from "antd";
import Story from "../Story/Story.js";


 const StoryList = ({ setSelectedId }) => {


  
const stories = null; // context is required
  return !stories ? (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Spin size="large" />
    </div>
  ) : (
    <Row gutter={[48, 32]}>
      {stories.map((story) => (
        <Col key={story._id} xl={12} lg={24} xxl={8}>
          <Story story={story} setSelectedId={setSelectedId} />
        </Col>
      ))}
    </Row>
  );
};

export default StoryList;
