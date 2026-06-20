'use client'

import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import ProcessSection from '@/components/process-section'
import SectorsSection from '@/components/sectors-section'
import AreasSection from '@/components/areas-section'
import AboutSection from '@/components/about-section'
import FAQSection from '@/components/faq-section'
import NewsletterStrip from '@/components/newsletter-strip'
import ContactSection from '@/components/contact-section'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import CookieConsent from '@/components/cookie-consent'
import AIChatbot from '@/components/ai-chatbot'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <SectorsSection />
        <AreasSection />
        <AboutSection />
        <FAQSection />
        <NewsletterStrip />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
      <AIChatbot />
    </>
  )
}
