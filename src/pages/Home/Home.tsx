import Banner from "../../components/Banner/Banner";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HighlightBrand from "../../components/HighlightBrand/HighlightBrand";
import Marketing from "../../components/Marketing/Marketing";
import MockupBanner from "../../components/MockupBanner/MockupBanner";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Marketing />
      <HighlightBrand />
      <MockupBanner />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
