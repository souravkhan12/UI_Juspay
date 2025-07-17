import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar/SideBar";

function AppLayout() {
  const path = useLocation().pathname;

  return (
    <div
      className={`mx-auto grid w-full max-w-screen-2xl ${
        path == "/" ? "grid-cols-[18%_1fr_25%]" : "grid-cols-[18%_1fr]"
      }`}
    >
      <NavBar />
      <Outlet />
      {path == "/" ? <SideBar /> : null}
    </div>
  );
}

export default AppLayout;
