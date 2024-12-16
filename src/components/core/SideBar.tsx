import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SIDEBAR } from "@/config/sidebar.config";
import { faDashboard } from "@fortawesome/free-solid-svg-icons/faDashboard";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import "./Sidebar.css";
const SideBar = () => {
  return (
    <nav className="sidebar-container">
      <div className="toolbar">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faDashboard} />
          <span>APP</span>
        </div>
        <FontAwesomeIcon icon={faClose} />
      </div>
      <ul>
        {SIDEBAR.map((item) => {
          return (
            <li>
              <FontAwesomeIcon icon={item.icon} />
              <div>{item.name}</div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideBar;
