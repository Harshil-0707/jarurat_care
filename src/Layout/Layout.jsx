import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
