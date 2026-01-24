"use client";

import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import classes from "./main-header.module.css";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

const MainHeader = () => {
  const path = usePathname();
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority />
        NextLevel food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
