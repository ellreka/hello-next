import { NextPage } from "next";

const Footer: NextPage = () => (
  <footer>
    <p>footer</p>
    <style jsx>
      {`
        footer {
          width: 100%;
          text-align: center;
        }
      `}
    </style>
  </footer>
);

export default Footer;
