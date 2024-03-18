import Dashboard from "../components/dashboard/Dashboard";
import DashboardUser from "../components/dashboard/DashboardUser";
import PropTypes from "prop-types";

function DashboardPage(props) {
  return <div>{props.adminloggedIn ? <Dashboard /> : <DashboardUser />}</div>;
}

export default DashboardPage;

DashboardPage.propTypes = {
  adminloggedIn: PropTypes.bool,
};
