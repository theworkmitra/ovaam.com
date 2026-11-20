import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { getPayments } from "../services/adminApi";

export default function Payments({ token }) {
  const [rows,setRows]=useState([]),[error,setError]=useState("");
  useEffect(()=>{getPayments(token).then(d=>setRows(d.payments||[])).catch(e=>setError(e.message));},[token]);
  return <><div className="oa-page-title"><div><h1>Payments</h1><p>Payment records and transaction history.</p></div></div>
    {error && <div className="oa-alert">{error}</div>}
    <section className="oa-panel"><DataTable columns={[
      {key:"id",label:"Payment ID"},{key:"customer_email",label:"Customer"},
      {key:"amount",label:"Amount (₹)"},{key:"currency",label:"Currency"},
      {key:"status",label:"Status"},{key:"created_at",label:"Date"}
    ]} rows={rows}/></section></>;
}
