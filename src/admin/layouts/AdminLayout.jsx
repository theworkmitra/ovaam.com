import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function AdminLayout({ page, setPage, onLogout, children }) {
  return <div className="oa-shell">
    <Sidebar page={page} setPage={setPage} />
    <main className="oa-main">
      <Header page={page} onLogout={onLogout} />
      <section className="oa-content">{children}</section>
    </main>
  </div>;
}
