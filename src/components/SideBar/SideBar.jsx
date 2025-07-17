import NotificationPanel from "./NotificationPanel";
import ActivityTimeLine from "./ActivityTimeLine";
import Contacts from "./Contacts";

function SideBar() {
  return (
    <div className="flex flex-col gap-10 p-10">
      <NotificationPanel />
      <ActivityTimeLine />
      <Contacts />
    </div>
  );
}

export default SideBar;
