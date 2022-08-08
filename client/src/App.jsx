import { Layout } from "antd";
import styles from "./styles.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home.jsx";
const { Footer } = Layout;

const App = () => {

  return (
    <Router>
      <Layout style={styles.layout}>
        <div>Hello InstaBesties !! </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/authform" element={<div>login or signup</div>} />
        </Routes>
        <Footer style={styles.footer}> InstaBesties 2022 !! </Footer>
      </Layout>
    </Router>
  );



};

export default App;
