import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './style.css';

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) { console.error('Portfolio render error:', error, info); }
  render() {
    if (this.state.error) return <div style={{ minHeight:'100vh', padding:'8vh 6vw', background:'#0e1110', color:'#e6e9e7', fontFamily:'sans-serif' }}>
      <h1>Portofolio tidak berhasil dimuat</h1>
      <p>Silakan lihat Console browser (F12) untuk detailnya.</p>
      <pre style={{whiteSpace:'pre-wrap',overflowWrap:'anywhere',color:'#b9f46c'}}>{String(this.state.error)}</pre>
      <button onClick={() => location.reload()} style={{padding:'12px 18px',cursor:'pointer'}}>Muat ulang</button>
    </div>;
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><ErrorBoundary><App /></ErrorBoundary></React.StrictMode>
);
