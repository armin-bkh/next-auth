import Link from "next/link";
import { useRouter } from "next/router";
import styles from "styles/Navbar.module.css";

const links = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Blogs", href: "/blogs" },
  { id: 3, title: "Dashboard", href: "/dashboard" },
  { id: 4, title: "login", href: "#" },
  { id: 5, title: "sign out", href: "#" },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>NEXT AUTH</h1>
      <nav>
        <ul className={styles.navbarNav}>
          {links.map((link) => (
            <li className={styles.navItem} key={link.id}>
              <Link href={link.href}>
                <a
                  className={`${styles.navLink} ${
                    router.pathname === link.href && styles.activeLink
                  }`}
                >
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
