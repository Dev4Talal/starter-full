import { NextSeo } from "next-seo";
import Link from "next/link";
// import * as fbq from "../lib/fpixel";

import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Home() {
  const handleClick = () => {
    fbq.event("Purchase", { currency: "USD", value: 10 });
  };
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div>
      <NextSeo
        title="Page Meta Title"
        description="This will be the page meta description"
        canonical="https://www.canonicalurl.ie/"
        openGraph={{
          url: "https://www.canonicalurl.ie/",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
        }}
      />
      <h1>NEXT SEO BLOCK</h1>
      <p>Take a look at the head to see what has been added.</p>
      <p>
        Or checkout how{" "}
        <Link href="/jsonld">
          <a>JSON-LD</a>
        </Link>{" "}
        (Structured Data) is added
      </p>
      {/* <div>
        <h1>
          PIXELS BLOCK
        </h1>
        <p>Click the button below to send a purchase event to Pixel</p>
        <button type="button" onClick={handleClick}>
          Buy $10
        </button>
      </div> */}
      <div>
      <main>
        <h1>NEXT-I18N BLOCK</h1>
        <Header heading={t('h1')} title={t('title')} />
        <div>
          <Link
            href='/'
            locale={router.locale === 'en' ? 'de' : 'en'}
          >
            <button>
              {t('change-locale')}
            </button>
          </Link>
          <Link href='/second-page'>
            <button
              type='button'
            >
              {t('to-second-page')}
            </button>
          </Link>
        </div>
      </main>
      <Footer />
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
