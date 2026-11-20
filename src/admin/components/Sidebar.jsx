import { useState } from "react";
const items = ["Dashboard", "Customers", "Stores", "Subscriptions", "Payments", "Settings"];
const icons = { Dashboard: "▦", Customers: "♙", Stores: "▣", Subscriptions: "◇", Payments: "₹", Settings: "⚙" };

export default function Sidebar({ page, setPage }) {
  const [open, setOpen] = useState(false);
  return <>
    <button className="oa-mobile-toggle" onClick={() => setOpen(!open)}>☰</button>
    <aside className={`oa-sidebar ${open ? "is-open" : ""}`}>
      <div className="oa-brand">ovaam<span>.</span></div>
      <div className="oa-workspace"><b>O</b><span><strong>Ovaam Workspace</strong><small>Administration</small></span></div>
      <small className="oa-nav-label">WORKSPACE</small>
      <nav>{items.map(item => <button key={item}
        className={page === item ? "active" : ""}
        onClick={() => { setPage(item); setOpen(false); }}>
        <span className="oa-nav-icon">{icons[item]}</span>{item}
      </button>)}</nav>
      <div className="oa-sidebar-bottom">
        <strong>Ovaam Admin</strong><small>Platform management</small>
      </div>
    </aside>
    {open && <button className="oa-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />}
  </>;
}
