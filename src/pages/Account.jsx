import React, { useState } from "react";
import { CircleUserRound } from "lucide-react";
import "../styles.css";

export default function Account() {
  const [signed, setSigned] = useState(false);

  return (
    <div className="page account-page">
      <section className="section account" id="account">
        <div className="account-card">
          <div className="account-icon"><CircleUserRound size={34}/></div>
          <div>
            <div className="section-kicker">07 / IDENTITY</div>
            <h2>{signed?"Demo account active":"Your Belkan profile"}</h2>
            <p>{signed?"You're viewing a local demo identity. Persistent accounts require a configured backend.":"Sign-in is intentionally simulated in this static build. Connect Supabase or Firebase before enabling real authentication."}</p>
          </div>
          <button className="outline" onClick={()=>setSigned(!signed)}>
            {signed?"Sign out":"Create demo account"}
          </button>
        </div>
      </section>
    </div>
  );
}