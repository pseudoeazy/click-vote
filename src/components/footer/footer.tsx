import Container from "components/container";
import GithubStar from "components/github-star";
import Logo from "components/logo";
import { footerMenu1, footerMenu2, footerMenu3 } from "constants/footer-menus";
import Link from "next/link";
import styles from "./footer.module.scss";
import SocialIcons from "components/social-icons";

export default function Footer() {
  return (
    <footer className="max-w-[90rem] mx-auto lg:p-12 p-2 pb-12">
      <Container className="w-max-[63rem]">
        <section className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:justify-between mb-12">
          <Logo />
          <GithubStar />
        </section>
        <section className="flex lg:justify-between flex-col lg:flex-row">
          <div className="grid grid-cols-3 lg:gap-x-36 ">
            <ul className="">
              {footerMenu1.map((menu, idx) => (
                <li key={idx}>
                  <Link href={`/#${menu.path}`} className={styles.footer__link}>
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="">
              {footerMenu2.map((menu, idx) => (
                <li key={idx}>
                  <Link href={`/#${menu.path}`} className={styles.footer__link}>
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="">
              {footerMenu3.map((menu, idx) => (
                <li key={idx}>
                  <Link href={`/#${menu.path}`} className={styles.footer__link}>
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <SocialIcons />
        </section>
      </Container>
    </footer>
  );
}
