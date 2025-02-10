import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav"
import WhatsAppButton from "../components/WhatsAppButton";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>

      <Header />
      <Nav />
      {children}
      <Footer />
      <WhatsAppButton />

    </section>
  );
}
