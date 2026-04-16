import { Outlet } from "react-router";
import AdminLayout from "../../features/admin/AdminLayout/AdminLayout";

const AdminLayoutPage = function () {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};

export default AdminLayoutPage;
