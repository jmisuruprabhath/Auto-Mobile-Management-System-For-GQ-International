import "./Sidebar.css";
import {
  LineStyle,
  Payment,
  ViewList,
  PeopleAlt,
  SupervisedUserCircle,
  PeopleAltOutlined,
  SupervisorAccountRounded,
  BarChart,
  ShowChart,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <br />
            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon" />{" "}
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/overview"
              >
                {" "}
                OVERVIEW
              </a>
            </li>
            <br />
            <li className="sidebarListItem">
              <Payment className="sidebarIcon" />{" "}
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/payments"
              >
                {" "}
                PAYMENT
              </a>
            </li>
            <br />
            <li className="sidebarListItem">
              <ViewList className="sidebarIcon" />{" "}
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/orders"
              >
                {" "}
                ORDERS
              </a>
            </li>
            <br />
            <li className="sidebarListItem">
              <PeopleAltOutlined className="sidebarIcon" />{" "}
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/allEmp"
              >
                {" "}
                EMPLOYEE
              </a>
            </li>
            <br />
            <li className="sidebarListItem">
              <SupervisorAccountRounded className="sidebarIcon" />{" "}
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/supplier"
              >
                {" "}
                SUPPLIERS
              </a>
            </li>
            <br />
            <li className="sidebarListItem">
              <SupervisedUserCircle className="sidebarIcon" />
              <a href="/CR" style={{ textDecoration: "none", color: "white" }}>
                {" "}
                CLIENT RELATION
              </a>
            </li>
            <br />
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              <a
                href="/expensesHome"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                EXPENSES{" "}
              </a>
            </li>
            <br />
            <li className="sidebarListItem">
              <ShowChart className="sidebarIcon" />{" "}
              <a
                href="/Stock"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                STOCKS
              </a>
            </li>
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
}
