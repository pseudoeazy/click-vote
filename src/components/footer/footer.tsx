import Container from "components/container";
import GithubStar from "components/github-star";
import Logo from "components/logo";
import { footerMenu1, footerMenu2, footerMenu3 } from "constants/footer-menus";
import Link from "next/link";
import styles from "./footer.module.scss";
import SocialIcons from "components/social-icons";

export default function Footer() {
  return (
    <footer className="">
      <Container className=" w-max-[63rem]">
        <section className="flex justify-between mb-[2.88rem]">
          <Logo />
          <GithubStar />
        </section>
        <section className="flex ">
          <div className="flex-1 flex space-x-12" >
            <ul className="flex-1">
              {footerMenu1.map((menu, idx) => (
                <li key={idx}>
                  <Link href={`/#${menu.path}`} className={styles.footer__link}>
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {footerMenu2.map((menu, idx) => (
                <li key={idx}>
                  <Link href={`/#${menu.path}`} className={styles.footer__link}>
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
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
