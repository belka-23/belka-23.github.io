import React from "react";
import { BarChart3 } from "lucide-react";
import "../styles.css";

const COMPANY_DATA = [
  { ticker:"VRA", name:"Valais Aeronautics", sector:"Aerospace", price:184.22, change:3.84, series:[155,161,159,168,164,175,172,184] },
  { ticker:"NTR", name:"North Belkan Rail", sector:"Infrastructure", price:92.70, change:-1.22, series:[99,96,98,94,97,93,95,92] },
  { ticker:"GRI", name:"Gründer Energy", sector:"Energy", price:241.10, change:5.17, series:[203,211,215,209,222,231,229,241] },
  { ticker:"KSP", name:"Kestrel Systems", sector:"Technology", price:128.44, change:1.09, series:[119,121,118,125,123,127,126,128] },
  { ticker:"OBC", name:"Oured Bay Components", sector:"Manufacturing", price:67.83, change:-2.48, series:[74,72,71,69,70,68,69,67] }
];

function Sparkline({series}) {
  const min=Math.min(...series), max=Math.max(...series);
  const pts=series.map((v,i)=>`${(i/(series.length-1))*100},${100-((v-min)/(max-min||1))*86-7}`).join(" ");
  return <svg className="spark" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline points={pts} fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke"/></svg>;
}

export default function Markets() {
  return (
    <div className="page markets-page">
      <section className="ticker">
        <div className="ticker-label">FICTIONAL MARKET</div>
        {COMPANY_DATA.slice(0,4).map(c=>
          <div className="tick" key={c.ticker}>
            <b>{c.ticker}</b>
            <span>ℬ {c.price.toFixed(2)}</span>
            <i className={c.change>0?"up":"down"}>{c.change>0?"+":""}{c.change.toFixed(2)}%</i>
          </div>
        )}
      </section>

      <section className="section dark" id="markets">
        <div className="section-kicker">02 / BELKAN EXCHANGE</div>
        <div className="section-head">
          <div><h2>Markets, <span>fictionalised.</span></h2><p>Sample equities for an aviation, energy, manufacturing and technology economy.</p></div>
          <span className="status-pill"><span className="live-dot"/> SAMPLE DATA</span>
        </div>
        <div className="market-grid">
          {COMPANY_DATA.map(c=>
            <article className="market-card" key={c.ticker}>
              <div className="card-top">
                <span className="ticker-code">{c.ticker}</span>
                <span>{c.sector}</span>
              </div>
              <h3>{c.name}</h3>
              <div className="price">ℬ {c.price.toFixed(2)}</div>
              <div className={c.change>0?"change up":"change down"}>
                {c.change>0?"+":""}{c.change.toFixed(2)}%
              </div>
              <Sparkline series={c.series}/>
            </article>
          )}
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Sector</th>
                <th>Last</th>
                <th>Change</th>
                <th>Session</th>
              </tr>
            </thead>
            <tbody>
              {COMPANY_DATA.map(c=>
                <tr key={c.ticker}>
                  <td><b>{c.ticker}</b> · {c.name}</td>
                  <td>{c.sector}</td>
                  <td>ℬ {c.price.toFixed(2)}</td>
                  <td className={c.change>0?"up":"down"}>{c.change>0?"+":""}{c.change.toFixed(2)}%</td>
                  <td>Open</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}