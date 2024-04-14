import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import "./home.css";

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};
export default Home;
