import Link from "next/link";
import Like from "components/like";
import Logo from "components/logo";
import menus from "constants/menus";
import styles from "./menu.module.scss";
import GithubStar from "components/github-star";
import MobileMenu from "./mobile-menu";

const classes = {
  nav: `flex justify-between items-center `,
  ul: `flex`,
  link: `inline-block no-underline 
  hover:text-secondary-100 focus:outline-none focus:shadow-outline`,
};

const Menu = () => (
  <nav className={`flex justify-between ${styles.menu}`}>
    <div className="hidden lg:flex items-center space-x-[1.88rem]">
      <Logo />
      <Like />
    </div>
    <div className="hidden lg:flex">
      <ul className={`${classes.ul} ${styles.menu__list}`}>
        {menus.map((menu, idx) => (
          <li key={idx} className={styles.menu__item}>
            <Link href={`/${menu.path}`} className={`${styles.menu__link}`}>
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
      <GithubStar />
    </div>
    <MobileMenu />
  </nav>
);

export default Menu;
