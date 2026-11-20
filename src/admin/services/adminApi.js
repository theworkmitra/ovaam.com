const API_BASE = import.meta.env.VITE_API_BASE_URL;

async function request(path, token, options = {}) {
  const response = await fetch(`${API_BASE}/api/admin/${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers || {})
    }
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || `Request failed (${response.status})`);
  return data;
}

export const getDashboard = token => request("dashboard.php", token);
export const getCustomers = (token, search = "") => request(`customers.php?search=${encodeURIComponent(search)}`, token);
export const updateCustomer = (token, id, payload) => request(`customer-update.php?id=${id}`, token, { method: "PATCH", body: JSON.stringify(payload) });
export const getStores = (token, search = "") => request(`stores.php?search=${encodeURIComponent(search)}`, token);
export const updateStore = (token, id, payload) => request(`store-update.php?id=${id}`, token, { method: "PATCH", body: JSON.stringify(payload) });
export const getPlans = token => request("plans.php", token);
export const savePlan = (token, payload) => request("plans.php", token, { method: "POST", body: JSON.stringify(payload) });
export const getPayments = token => request("payments.php", token);
export const getAdminSettings = token => request("settings.php", token);
