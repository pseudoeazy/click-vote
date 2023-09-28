import SiteLayout from "./site-layout";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => (
  <SiteLayout>
    <main className="relative min-h-screen">{children}</main>
  </SiteLayout>
);

export default Layout;
