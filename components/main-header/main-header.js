import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import classes from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority />
        NextLevel food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browser meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
