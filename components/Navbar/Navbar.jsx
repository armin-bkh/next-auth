import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "styles/Navbar.module.css";

const links = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Blogs", href: "/blogs" },
  { id: 3, title: "Dashboard", href: "/dashboard" },
  {
    id: 4,
    title: "sign in",
    href: "/api/auth/signin",
    onClick: (e) => {
      e.preventDefault();
      signIn("github");
    },
  },
  {
    id: 5,
    title: "sign out",
    href: "/api/auth/signout",
    onClick: (e) => {
      e.preventDefault();
      signOut();
    },
  },
];

const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>NEXT AUTH</h1>
      <nav>
        <ul
          className={`${styles.navbarNav} ${
            status === "loading" ? styles.loading : styles.loaded
          }`}
        >
          {links.map((link) =>
            (status === "authenticated" && link.title === "sign in") ||
            (status === "unauthenticated" &&
              link.title === "sign out") ? null : (
              <li className={styles.navItem} key={link.id}>
                <Link href={link.href}>
                  <a
                    className={`${styles.navLink} ${
                      router.pathname === link.href && styles.activeLink
                    }`}
                    onClick={link?.onClick}
                  >
                    {link.title}
                  </a>
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
