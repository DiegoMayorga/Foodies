"use client";

import Link from "next/link";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({ children, startsWith, navPath }) {
  const path = usePathname();
  const pathName = startsWith
    ? path.startsWith(`/${navPath}`)
    : path === `/${navPath}`;
  return (
    <Link
      href={`/${navPath}`}
      className={pathName ? `${classes.link} ${classes.active}` : classes.link}
    >
      {children}
    </Link>
  );
}
