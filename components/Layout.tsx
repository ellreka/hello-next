import Header from "./Header";
import Footer from "./Footer";
import { NextPage } from "next";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout: NextPage = ({ children }) => (
  <>
    <Header />
    <div style={layoutStyle}>{children}</div>
    <Footer />
  </>
);

export default Layout;
