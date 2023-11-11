import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
      <h1 className={style.logo}><Link href="/"> Dhvani's Personal Website ♥</Link></h1>
      <nav className={style.navlist}>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
} 