import Link from "next/link";
import { NextPage } from "next";

const linkStyle = {
  marginRight: 15
};

const Header: NextPage = () => (
  <header>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </header>
);

export default Header;
