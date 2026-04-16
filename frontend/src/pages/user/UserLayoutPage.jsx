import { Outlet } from "react-router";
import { RegisteredUserLayout } from "../../features/user/components";

const UserLayoutPage = function () {
  return (
    <RegisteredUserLayout>
      <Outlet />
    </RegisteredUserLayout>
  );
};

export default UserLayoutPage;
