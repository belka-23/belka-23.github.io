import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, WalletCards, Home, ShieldCheck } from "lucide-react";
import "../styles.css";

function Notice({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div className="fiction-banner">
      <ShieldCheck size={15}/> FAN-MADE FICTIONAL SETTING · NOT AN OFFICIAL BELKA / ACE COMBAT / GOVERNMENT / FINANCIAL SERVICE
      <button className="notice-close" onClick={onClose} aria-label="Close notice">
        <X size={14}/>
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="brand small">
            <span className="crest">B</span>
            <span>BELKA<span className="muted">/PORTAL</span></span>
          </div>
          <p>A fictional micronation interface inspired by the world and aesthetic of Ace Combat. All currencies, companies, properties and events are invented.</p>
        </div>
        <div>
          <b>Explore</b>
          <a href="/markets">Markets</a>
          <a href="/marketplace">Marketplace</a>
          <a href="/property">Property</a>
        </div>
        <div>
          <b>Legal</b>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/demo">Demo mode</a>
        </div>
        <div>
          <b>Project</b>
          <p>Fan-made · Non-canonical<br/>No real payments<br/>No real property offers</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Belka Portal — fictional fan project.</span>
        <span>Built for GitHub Pages · Backend-ready architecture</span>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const [signed, setSigned] = useState(false);
  const [noticeVisible, setNoticeVisible] = useState(true);
  const balance = 10000;

  const navItems = [
    { to: "/", label: "Overview" },
    { to: "/markets", label: "Markets" },
    { to: "/marketplace", label: "Marketplace" },
    { to: "/property", label: "Property" },
  ];

  return (
    <div className="app">
      <Notice visible={noticeVisible} onClose={()=>setNoticeVisible(false)}/>
      <header className="nav">
        <Link className="brand" to="/" aria-label="Belka Portal home">
          <span className="crest">B</span>
          <span>BELKA<span className="muted">/PORTAL</span></span>
        </Link>
        <nav className={menu?"open":""}>
          {navItems.map(item=>
            <Link 
              key={item.to} 
              to={item.to} 
              onClick={()=>setMenu(false)}
              className={location.pathname === item.to ? "active" : ""}
            >
              {item.label}
            </Link>
          )}
        </nav>
        <div className="nav-actions">
          {signed ? (
            <button className="balance" onClick={()=>setSigned(false)}>
              <WalletCards size={16}/> ℬ {balance.toLocaleString()}
            </button>
          ) : (
            <button className="outline" onClick={()=>setSigned(true)}>
              <LogIn size={16}/> Demo sign in
            </button>
          )}
          <button 
            className="icon-btn mobile-menu" 
            aria-label="Open navigation" 
            onClick={()=>setMenu(!menu)}
          >
            {menu?<X/>:<Menu/>}
          </button>
        </div>
      </header>

      <main>
        {children}
      </main>

      <Footer/>
    </div>
  );
}