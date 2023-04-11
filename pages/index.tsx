import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sunny portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
    </div>
  );
}
