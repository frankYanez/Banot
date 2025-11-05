'use client'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import ToolbarTheme from '@/components/ToolbarTheme'
import FeatureGrid from '@/components/FeatureGrid'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-dark-page">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col gap-16">
        <Navbar />
        <ToolbarTheme />
        <HeroSection />
        <FeatureGrid />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}