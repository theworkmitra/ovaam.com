export default function Header({ page, onLogout }) {
  return <header className="oa-header">
    <div className="oa-crumb">Ovaam <span>/</span> {page}</div>
    <div className="oa-header-right">
      <span className="oa-admin-label">Super Admin</span>
      <div className="oa-avatar">A</div>
      <button className="oa-logout" onClick={onLogout}>Logout</button>
    </div>
  </header>;
}
