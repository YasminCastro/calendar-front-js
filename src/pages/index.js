import Calendar from "../components/Calendar/index";
import Header from "../components/Header/index";
import SEO from "../components/SEO/index";

export default function Home() {
  return (
    <>
      <SEO title="Calendar App" />
      <Header />
      <Calendar />
    </>
  );
}
