
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Layout = ({ children }) => (
  <div style={{background:'#0a0a0a', color:'#fff', minHeight:'100vh'}}>
    <header style={{display:'flex', justifyContent:'space-between', padding:'20px'}}>
      <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
        <img src="/108_Yacht_Management_Logo.svg" height="40" />
        <strong>108 Yacht Management</strong>
      </div>
      <nav style={{display:'flex', gap:'20px'}}>
        <Link to="/">Home</Link>
        <Link to="/private">Private</Link>
        <Link to="/charter">Charter</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
    {children}
    <footer style={{textAlign:'center', padding:'20px', opacity:0.6}}>
      © {new Date().getFullYear()} 108 Yacht Management
    </footer>
  </div>
);

const Page = ({ title }) => (
  <section style={{padding:'80px', textAlign:'center'}}>
    <h1>{title}</h1>
    <p>Premium yacht management services.</p>
  </section>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Page title="108 Yacht Management" />} />
          <Route path="/private" element={<Page title="Private Yacht Management" />} />
          <Route path="/charter" element={<Page title="Charter Yacht Management" />} />
          <Route path="/contact" element={<Page title="Contact Us" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
