import Footer from "../components/footer";
import Meta from "../components/meta";
import Container from "./container";
import Header from "./header";
import SectionSeparator from "./section-separator";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="bg-[#F5F5F5] mx-0 px-0">
        <div className="min-h-screen">
          {/* <Alert preview={preview} /> */}
          <Container>
            <div className="flex flex-row py-4">
              <div className="w-3/4 m-4">{children}</div>
              <div className="w-1/4 m-4">
                Placeholder for ads
                <SectionSeparator />
                <div className="flex flex-wrap justify-center">
                  <div className="text-center text-xs">
                    <div className="text-[#949494]">©2022 New School Sports, Inc.</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}
