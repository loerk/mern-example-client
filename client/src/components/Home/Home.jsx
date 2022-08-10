import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
//import storyForm and storyList
import styles from "./styles.js";
// import the context

const { Sider, Content } = Layout;

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
  // context is important
  // dispatched to the context
    return (
      <Layout>
        <Sider width={400} style={styles.sider}>
          <div>Add your story</div>
          {/*The Story Form */}
        </Sider>
        <Content style={styles.content}>
          {/*The Story List */}
          <ul>
            <li>story one</li>
            <li>story two</li>
          </ul>
        </Content>
      </Layout>
    );
}


export default Home;