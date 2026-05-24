"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { useState } from "react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  const [lang, setLang] = useState<'th' | 'en'>('th');
  const t = {
    th: { nav: ["หน้าแรก", "เกี่ยวกับเรา", "เมนู", "ติดต่อ"], title: "Slow life, good vibes.", desc: "มุมสงบในเมืองที่คุณจะหลงรัก", btn: "จองโต๊ะ" },
    en: { nav: ["Home", "About", "Menu", "Contact"], title: "Slow life, good vibes.", desc: "Your neighborhood tropical escape.", btn: "Book Table" }
  };

  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: t[lang].nav[0], id: "hero" },
        { name: t[lang].nav[1], id: "about" },
        { name: t[lang].nav[2], id: "menu" },
        { name: t[lang].nav[3], id: "contact" },
        { name: lang === 'th' ? 'EN' : 'TH', id: "lang-toggle" }
      ]}
      brandName="Daily Drift"
      button={{ text: t[lang].btn, onClick: () => setLang(prev => prev === 'th' ? 'en' : 'th') }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title={t[lang].title}
      description={t[lang].desc}
      testimonials={[]}
      imageSrc="http://img.b2bpic.net/free-photo/girl-reading-book-cafeteria_23-2148171446.jpg?_wi=2"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[{ type: "text", content: "สร้างขึ้นเพื่อวันสบายๆ ของคุณ" }]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      title="เมนูแนะนำ"
      description="อาหารสไตล์โฮมมี่และกาแฟคุณภาพพรีเมียม"
      animationType="slide-up"
      buttons={[{ text: "สั่งเลย", href: "#contact" }]}
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardMedia
      textboxLayout="inline-image"
      animationType="slide-up"
      useInvertedBackground={false}
      features={[]}
      title="พื้นที่พักผ่อนที่ร่มรื่น"
      description="ก้าวเข้ามาในร้านของเราที่ให้บรรยากาศเหมือนอยู่เขตร้อน"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[]}
      title="เรื่องราวจากลูกค้า"
      description="อย่าเชื่อเพียงแค่ที่เราบอก ต้องลองมาสัมผัสเอง"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      names={["The Daily Sip", "City Bites", "Green Oasis Weekly"]}
      title="ร้านโปรดของคนในพื้นที่"
      description="ได้รับการแนะนำในคู่มือท่องเที่ยวท้องถิ่น"
      textboxLayout="default"
      useInvertedBackground={false}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      tag="ติดต่อเรา"
      title="มาหาเราที่ Daily Drift"
      description="123 Coffee Lane, เปิดทุกวัน 8:00 - 20:00 น."
      background={{ variant: "gradient-bars" }}
      useInvertedBackground={true}
      mediaAnimation="none"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      logoText="Daily Drift"
      columns={[{ title: "นำทาง", items: [{ label: "หน้าแรก", href: "#" }] }]} 
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}