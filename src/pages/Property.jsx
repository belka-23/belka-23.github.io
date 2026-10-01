import React, { useMemo, useState } from "react";
import { ArrowRight, Compass } from "lucide-react";
import "../styles.css";

const PROPERTIES = [
  { title:"Grün Lake Operations Loft", region:"Grün", type:"Industrial", price:480000, img:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=70", tag:"Northern District" },
  { title:"Sudentor Ridge Residence", region:"Sudentor", type:"Residential", price:735000, img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=70", tag:"Mountain Region" },
  { title:"Lazuli Civic Office", region:"Lazuli", type:"Commercial", price:1290000, img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=70", tag:"Capital Sector" },
  { title:"Felsen Coast Hangar", region:"Felsen", type:"Industrial", price:920000, img:"https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1200&q=70", tag:"Airfield Zone" }
];

export default function Property() {
  const [propertyType, setPropertyType] = useState("All");
  
  const filteredProps = useMemo(()=>
    PROPERTIES.filter(x=>propertyType==="All"||x.type===propertyType), [propertyType]
  );

  return (
    <div className="page property-page">
      <section className="section property" id="property">
        <div className="section-kicker">04 / PROPERTY REGISTER</div>
        <div className="section-head">
          <div><h2>Places across <span>Belka.</span></h2><p>Fictional properties for worldbuilding and interface demonstration only.</p></div>
          <select value={propertyType} onChange={e=>setPropertyType(e.target.value)}>
            <option>All</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Industrial</option>
          </select>
        </div>
        <div className="property-grid">
          {filteredProps.map(p=>
            <article className="property-card" key={p.title}>
              <img src={p.img} alt="Fictional property illustration"/>
              <div className="property-body">
                <span>{p.region} · {p.type}</span>
                <h3>{p.title}</h3>
                <p><Compass size={14}/> {p.tag}</p>
                <div>
                  <strong>ℬ {p.price.toLocaleString()}</strong>
                  <button className="icon-btn" aria-label={"View "+p.title}><ArrowRight/></button>
                </div>
              </div>
            </article>
          )}
        </div>
      </section>
    </div>
  );
}