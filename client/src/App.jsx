import { Layout } from "antd";
import styles from "./styles.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const { Footer } = Layout;

const App = () => {

  return (
    <Router>
      <Layout style={styles.layout}>
        <div>Hello InstaBesties !! </div>
        <Footer style={styles.footer}> InstaBesties 2022 !! </Footer>
      </Layout>
    </Router>
  );



};

export default App;
