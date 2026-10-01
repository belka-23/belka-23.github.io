import React from "react";
import { Plane, Zap, ShieldCheck } from "lucide-react";
import "../styles.css";

export default function Intro() {
  return (
    <div className="page intro-page">
      <section className="hero">
        <video autoPlay muted loop playsInline poster="./media/belka-fallback.svg" className="hero-video" aria-label="Fictional Belkan aviation and industrial scenery">
          <source src="./media/belka-hero.mp4" type="video/mp4"/>
        </video>
        <div className="hero-shade"/>
        <div className="hero-content">
          <div className="eyebrow"><span className="dot"/>FICTIONAL MICRONATION</div>
          <h1>THE STATE OF<br/><em>NEW BELKA</em></h1>
          <p>A cinematic digital portal for a fictional nation of air superiority, wartime industries, and live roleplay.</p>
          <div className="hero-buttons">
            <a href="/markets" className="primary">Explore the exchange →</a>
            <a href="/marketplace" className="ghost">Enter the marketplace</a>
          </div>
          <div className="hero-meta">
            <span><Plane size={15}/> FLIGHT-PLAN NETWORK</span>
            <span><Zap size={15}/> ℬ BELKAN CURRENCY</span>
            <span><ShieldCheck size={15}/> DEMO / PLAY-MONEY ONLY</span>
          </div>
        </div>
        <div className="hero-coords">50°04′N 14°25′E<br/><span>BRIEFING // BLP-001</span></div>
      </section>

      <section className="section intro" id="overview">
        <div className="section-kicker">01 / THE STATE</div>
        <div className="split">
          <div><h2>A nation built around <span>flight.</span></h2></div>
          <div>
            <p>Belka Portal is a fictional, fan-made interface imagining how a small industrial nation might expose its civic, commercial and sporting life through one modern digital service.</p>
            <p className="muted">The setting is non-canonical. Nothing here represents a real government, financial institution, property listing, bookmaker or service.</p>
          </div>
        </div>
        <div className="stats">
          <div><small>FICTIONAL CURRENCY</small><strong>ℬ Belkan Mark</strong><span>Play-money unit</span></div>
          <div><small>MARKET INDEX</small><strong>1,842.17</strong><span className="up">+1.64% today</span></div>
          <div><small>ACTIVE AIRFIELDS</small><strong>17</strong><span>Imagined network</span></div>
          <div><small>PORTAL STATUS</small><strong>DEMO</strong><span>Backend not connected</span></div>
        </div>
      </section>
    </div>
  );
}