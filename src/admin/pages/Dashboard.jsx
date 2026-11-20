import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import { getDashboard } from "../services/adminApi";

export default function Dashboard({ token }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => { getDashboard(token).then(setData).catch(e => setError(e.message)); }, [token]);
  const s = data?.stats || {};
  return <>
    <div className="oa-page-title"><div><h1>Dashboard overview</h1><p>Platform performance at a glance.</p></div></div>
    {error && <div className="oa-alert">{error}</div>}
    <div className="oa-stats-grid">
      <StatCard label="Total customers" value={s.total_customers} icon="♙" />
      <StatCard label="Total stores" value={s.total_stores} icon="▣" />
      <StatCard label="Active stores" value={s.active_stores} icon="↗" />
      <StatCard label="Blocked customers" value={s.blocked_customers} icon="!" />
    </div>
    <section className="oa-panel"><div className="oa-panel-heading"><h2>Recent customers</h2></div>
      <div className="oa-table-wrap"><table className="oa-table">
        <thead><tr><th>Name</th><th>Email</th><th>Joined</th><th>Status</th></tr></thead>
        <tbody>{(data?.recent_customers || []).map(u => <tr key={u.id}><td>{u.name}</td><td>{u.email}</td><td>{u.created_at}</td><td><span className={`oa-status ${u.status}`}>{u.status}</span></td></tr>)}
        {!data?.recent_customers?.length && <tr><td colSpan="4" className="oa-empty">No customer records yet.</td></tr>}</tbody>
      </table></div>
    </section>
  </>;
}
