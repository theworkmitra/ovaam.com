import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { getStores, updateStore } from "../services/adminApi";

export default function Stores({ token }) {
  const [rows,setRows]=useState([]),[search,setSearch]=useState(""),[error,setError]=useState("");
  const load=()=>getStores(token,search).then(d=>setRows(d.stores||[])).catch(e=>setError(e.message));
  useEffect(()=>{load();},[token,search]);
  async function toggle(r) {
    const status = r.status === "active" ? "suspended" : "active";
    if (!confirm(`Set store "${r.store_name}" to ${status}?`)) return;
    try { await updateStore(token,r.id,{status}); load(); } catch(e){setError(e.message);}
  }
  return <><div className="oa-page-title"><div><h1>Stores</h1><p>Manage customer storefronts.</p></div></div>
    {error && <div className="oa-alert">{error}</div>}
    <section className="oa-panel"><input className="oa-search" placeholder="Search store or subdomain..." value={search} onChange={e=>setSearch(e.target.value)} />
      <DataTable columns={[
        {key:"store_name",label:"Store"},{key:"subdomain",label:"Subdomain"},
        {key:"customer_email",label:"Owner email"},{key:"status",label:"Status",render:r=><span className={`oa-status ${r.status}`}>{r.status}</span>},
        {key:"action",label:"Action",render:r=><button className="oa-action" onClick={()=>toggle(r)}>{r.status === "active" ? "Suspend" : "Activate"}</button>}
      ]} rows={rows}/>
    </section></>;
}
