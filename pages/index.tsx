import About from '@/components/About';
import ButtomNav from '@/components/ButtomNav';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-[rgba(7,29,54,0.99)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Sunny portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <ButtomNav />
      {/* Hero Section */}
      <section id="hero" className="snap-center scroll-smooth">
        <Hero />
      </section>
      {/* About Section */}
      <section id="about" className="snap-center scroll-smooth">
        <About />
      </section>
      {/* Experience Section */}
      <section id="experience" className="snap-center scroll-smooth">
        <Experience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-center scroll-smooth">
        <Skills />
      </section>
    </div>
  );
}
