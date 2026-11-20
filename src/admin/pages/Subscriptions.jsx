import { useEffect, useState } from "react";
import { getPlans, savePlan } from "../services/adminApi";
import DataTable from "../components/DataTable";

export default function Subscriptions({ token }) {
  const [plans,setPlans]=useState([]),[error,setError]=useState("");
  const load=()=>getPlans(token).then(d=>setPlans(d.plans||[])).catch(e=>setError(e.message));
  useEffect(()=>{load();},[token]);
  async function createPlan() {
    const name=prompt("Plan name"); if(!name) return;
    const price=prompt("Monthly price (INR)","499"); if(price===null || !Number.isFinite(Number(price))) return;
    try { await savePlan(token,{name,price:Number(price),billing_cycle:"monthly"}); load(); } catch(e){setError(e.message);}
  }
  return <><div className="oa-page-title"><div><h1>Subscriptions</h1><p>Manage available subscription plans.</p></div><button className="oa-primary" onClick={createPlan}>+ Add plan</button></div>
    {error && <div className="oa-alert">{error}</div>}
    <section className="oa-panel"><DataTable columns={[
      {key:"name",label:"Plan"},{key:"price",label:"Price (₹)"},{key:"billing_cycle",label:"Billing"},
      {key:"status",label:"Status"}
    ]} rows={plans}/></section></>;
}
