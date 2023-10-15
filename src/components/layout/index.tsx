import Modal from "components/modal";
import SiteLayout from "./site-layout";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => (
  <SiteLayout>
    <Modal />
    <main className="relative min-h-screen">{children}</main>
  </SiteLayout>
);

export default Layout;
