import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";

import { Header } from "../components/Header";
import { Body } from "../components/Body";
import { Footer } from "../components/Footer";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen justify-between text-center">
      <NextSeo
        title="E-Gloves - a wide range of industrial and safety gloves"
        keywords="nitrile glovemanufactureres, rubber gloves, glove company, wholesale nitrile, vinyl, glove supplier, disposable, price, e-gloves"
        description="E Glove are specialist manufacturers of a wide range of high quality, high performance, disposable gloves available in nitrile and latex materials."
        canonical="https://www.canonicalurl.ie/"
        openGraph={{
          url: "https://www.canonicalurl.ie/",
          title: "Buy E-Gloves as fast as you want.",
          description: "Reseller and brokers of gloves made in malaysia",
          images: [
            {
              url: "/static/colourful-gloves.jpg",
              width: 800,
              height: 600,
              alt: "come in different colors",
            },
            {
              url: "/static/nitril-gloves.png",
              width: 900,
              height: 800,
              alt: "nitril gloves malaysia",
            },
            { url: "/static/momKid.png" },
            { url: "/static/globe.jpg" },
          ],
        }}
      />
      <Header />
      <Body>

      </Body>
      <Footer />
    </div>
  );
}
