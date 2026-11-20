export default function DataTable({ columns, rows, empty = "No records found." }) {
  return <div className="oa-table-wrap"><table className="oa-table">
    <thead><tr>{columns.map(c => <th key={c.key}>{c.label}</th>)}</tr></thead>
    <tbody>{rows.length ? rows.map((row, i) => <tr key={row.id ?? i}>
      {columns.map(c => <td key={c.key}>{c.render ? c.render(row) : (row[c.key] ?? "—")}</td>)}
    </tr>) : <tr><td colSpan={columns.length} className="oa-empty">{empty}</td></tr>}</tbody>
  </table></div>;
}
