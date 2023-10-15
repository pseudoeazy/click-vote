import Head from "components/Head";
import Layout from "components/layout";
import Header from "components/header";
import Embed from "components/sections/embed";
import Features from "components/sections/features";
import BuiltByCommunity from "components/sections/built-by-community";
import EmbedYourComponent from "components/sections/embed-your-component";
import Subscribe from "components/sections/subscribe/subscribe";
import Footer from "components/footer";
export default function Home() {
  return (
    <Layout>
      <Head />
      <Header />
      <Embed />
      <Features />
      <BuiltByCommunity />
      <EmbedYourComponent />
      <Subscribe />
      <Footer />
    </Layout>
  );
}
