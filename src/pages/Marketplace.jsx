import React, { useMemo, useState } from "react";
import { ArrowRight, Package, Search, Filter } from "lucide-react";
import "../styles.css";

const LISTINGS = [
  { title:"Belkan Field Radio — Replica", seller:"Northline Atelier", price:320, category:"Collectibles", condition:"Museum-style replica" },
  { title:"Sudentor Wool Flight Jacket", seller:"Kaiser Works", price:185, category:"Apparel", condition:"New" },
  { title:"Felsen Airfield Poster Set", seller:"Runway Archive", price:75, category:"Prints", condition:"Limited run" },
  { title:"Custom Hangar Signage", seller:"Gründer Fabrication", price:640, category:"Services", condition:"Made to order" }
];

export default function Marketplace() {
  const [search, setSearch] = useState("");
  
  const filteredListings = useMemo(()=>
    LISTINGS.filter(x=>
      (x.title+" "+x.category).toLowerCase().includes(search.toLowerCase())
    ), [search]
  );

  return (
    <div className="page marketplace-page">
      <section className="section" id="marketplace">
        <div className="section-kicker">03 / CIVIL MARKET</div>
        <div className="section-head">
          <div><h2>Trade the <span>fiction.</span></h2><p>Browse imagined goods and services. No payments are processed.</p></div>
          <button className="primary" onClick={()=>alert("Demo mode: listing creation would be handled by the backend.")}>
            <Package size={17}/> List an item
          </button>
        </div>
        <div className="toolbar">
          <div className="search">
            <Search size={17}/>
            <input 
              value={search} 
              onChange={e=>setSearch(e.target.value)} 
              placeholder="Search fictional listings…"
            />
          </div>
          <button className="filter"><Filter size={16}/> Filters</button>
        </div>
        <div className="listing-grid">
          {filteredListings.map(x=>
            <article className="listing" key={x.title}>
              <div className="listing-img">
                <Package size={30}/>
                <span>FICTIONAL ITEM</span>
              </div>
              <div className="listing-body">
                <small>{x.category} · {x.condition}</small>
                <h3>{x.title}</h3>
                <p>Seller: <b>{x.seller}</b></p>
                <div className="listing-price">ℬ {x.price.toLocaleString()}</div>
                <button className="text-btn">View listing <ArrowRight size={15}/></button>
              </div>
            </article>
          )}
        </div>
      </section>
    </div>
  );
}