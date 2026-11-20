export default function StatCard({ label, value, note, icon }) {
  return <article className="oa-stat">
    <div className="oa-stat-top"><span>{label}</span><b>{icon}</b></div>
    <strong>{value ?? "—"}</strong>
    <small>{note || "Live platform data"}</small>
  </article>;
}
