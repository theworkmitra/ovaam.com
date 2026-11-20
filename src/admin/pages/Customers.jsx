import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { getCustomers, updateCustomer } from "../services/adminApi";

export default function Customers({ token }) {
  const [rows, setRows] = useState([]), [search, setSearch] = useState(""), [error, setError] = useState("");
  const load = () => getCustomers(token, search).then(d => setRows(d.customers || [])).catch(e => setError(e.message));
  useEffect(() => { load(); }, [token, search]);
  async function changeStatus(row) {
    const status = row.status === "active" ? "blocked" : "active";
    if (!confirm(`Set ${row.name} to ${status}?`)) return;
    try { await updateCustomer(token, row.id, { status }); load(); } catch (e) { setError(e.message); }
  }
  return <><div className="oa-page-title"><div><h1>Customers</h1><p>View and manage customer accounts.</p></div></div>
    {error && <div className="oa-alert">{error}</div>}
    <section className="oa-panel"><input className="oa-search" placeholder="Search name or email..." value={search} onChange={e => setSearch(e.target.value)} />
      <DataTable columns={[
        {key:"name",label:"Customer"},{key:"email",label:"Email"},{key:"created_at",label:"Joined"},
        {key:"status",label:"Status",render:r=><span className={`oa-status ${r.status}`}>{r.status}</span>},
        {key:"action",label:"Action",render:r=><button className="oa-action" onClick={()=>changeStatus(r)}>{r.status === "active" ? "Block" : "Activate"}</button>}
      ]} rows={rows} />
    </section></>;
}
