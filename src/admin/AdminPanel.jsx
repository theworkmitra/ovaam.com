import { useState } from "react";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Stores from "./pages/Stores";
import Subscriptions from "./pages/Subscriptions";
import Payments from "./pages/Payments";
import Settings from "./pages/Settings";
import "./styles/admin.css";

export default function AdminPanel({ token, onLogout }) {
  const [page, setPage] = useState("Dashboard");
  const pages = {
    Dashboard: <Dashboard token={token} />,
    Customers: <Customers token={token} />,
    Stores: <Stores token={token} />,
    Subscriptions: <Subscriptions token={token} />,
    Payments: <Payments token={token} />,
    Settings: <Settings token={token} />
  };
  return <AdminLayout page={page} setPage={setPage} onLogout={onLogout}>
    {pages[page] || pages.Dashboard}
  </AdminLayout>;
}
