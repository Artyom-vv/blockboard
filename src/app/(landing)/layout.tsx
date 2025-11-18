import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function LandingLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="wrapper h-full min-h-full overflow-x-hidden">
      <Header />
      {children}
      <Footer/>
    </div>
  );
}