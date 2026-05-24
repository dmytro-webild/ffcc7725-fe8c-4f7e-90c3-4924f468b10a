"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
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
        {
          name: "หน้าแรก",          id: "hero"},
        {
          name: "เกี่ยวกับเรา",          id: "about"},
        {
          name: "เมนู",          id: "menu"},
        {
          name: "ติดต่อ",          id: "contact"},
      ]}
      brandName="Daily Drift"
      button={{ text: "จองโต๊ะ" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Slow life, good vibes."
      description="Your neighborhood tropical escape. Specialty coffee, comforting dishes, and an unpretentious atmosphere waiting just for you."
      testimonials={[
        {
          name: "Sarah J.",          handle: "@sarah_j",          testimonial: "หมูอบอร่อยที่สุดในเมือง ฉันมาทำงานที่นี่และชอบบรรยากาศมาก",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/girl-reading-book-cafeteria_23-2148171446.jpg?_wi=1",          imageAlt: "cozy cafe exterior plants"},
        {
          name: "Mike D.",          handle: "@miked",          testimonial: "กาแฟสกัดเย็นสดชื่นมาก พนักงานยิ้มแย้มตลอด เป็นมิตรกับสัตว์เลี้ยงด้วย!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-delicious-food_23-2150645799.jpg?_wi=1",          imageAlt: "cozy cafe exterior plants"},
        {
          name: "Emily R.",          handle: "@emilyr",          testimonial: "ในที่สุดก็เจอร้านที่รู้สึกเหมือนบ้าน มะเขือยาวผัดอร่อยมาก",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-composition-delicious-food_23-2148948992.jpg?_wi=1",          imageAlt: "cozy cafe exterior plants"},
        {
          name: "Kevin T.",          handle: "@kevint",          testimonial: "ชอบโทนสีครีมของร้านนี้มาก เหมาะกับการถ่ายลง Instagram สุดๆ",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/indian-butter-chicken-black-bowl-wooden-table_123827-20546.jpg?_wi=1",          imageAlt: "cozy cafe exterior plants"},
        {
          name: "Anna W.",          handle: "@annaw",          testimonial: "สบายๆ ร่มรื่น และอาหารอร่อย เริ่มต้นวันหยุดด้วยกาแฟของที่นี่ขาดไม่ได้เลย",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/boiled-fish-with-red-green-pepper-bowl_140725-3926.jpg?_wi=1",          imageAlt: "cozy cafe exterior plants"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/girl-reading-book-cafeteria_23-2148171446.jpg?_wi=2"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/pineapples-ready-sale_23-2151526658.jpg",          alt: "Customer 1"},
        {
          src: "http://img.b2bpic.net/free-photo/woman-lounge_23-2147681033.jpg",          alt: "Customer 2"},
        {
          src: "http://img.b2bpic.net/free-photo/composition-from-flowers-plants-lit-candles-as-part-decorations-wooden-table_181624-59023.jpg",          alt: "Customer 3"},
        {
          src: "http://img.b2bpic.net/free-photo/side-view-couple-with-pina-colada_23-2150184007.jpg",          alt: "Customer 4"},
        {
          src: "http://img.b2bpic.net/free-photo/teen-girls-writing-notebooks-cafe_23-2147860799.jpg",          alt: "Customer 5"},
      ]}
      avatarText="เข้าร่วมคอมมูนิตี้ของเรา"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "สร้างขึ้นเพื่อ "},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/hand-holding-delicious-food_23-2150645799.jpg",          alt: "Cafe Interior"},
        {
          type: "text",          content: " วันสบายๆ ของคุณ"},
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        { id: "1", name: "สเต็กซิกเนเจอร์", price: "$18", variant: "เนื้อวัวพรีเมียม", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-composition-delicious-food_23-2148948992.jpg?_wi=2" },
        { id: "2", name: "ข้าวอบหมู", price: "$12", variant: "สูตรคลาสสิก", imageSrc: "http://img.b2bpic.net/free-photo/indian-butter-chicken-black-bowl-wooden-table_123827-20546.jpg?_wi=2" },
        { id: "3", name: "มะเขือยาวผัด", price: "$10", variant: "มังสวิรัติ", imageSrc: "http://img.b2bpic.net/free-photo/boiled-fish-with-red-green-pepper-bowl_140725-3926.jpg?_wi=2" },
        { id: "4", name: "กาแฟสกัดเย็น", price: "$5", variant: "สูตรพิเศษ", imageSrc: "http://img.b2bpic.net/free-photo/hot-california-sushi-rolls-with-red-caviar_114579-2128.jpg" },
        { id: "5", name: "แฟลตไวท์", price: "$4", variant: "สเปเชียลตี้", imageSrc: "http://img.b2bpic.net/free-photo/top-view-breakfast_23-2147985103.jpg" },
        { id: "6", name: "ขนมหวานรวม", price: "$6", variant: "อบสดใหม่", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-eggplants-dish-still-life_23-2150561815.jpg" },
      ]}
      title="เมนูแนะนำ"
      description="อาหารสไตล์โฮมมี่และกาแฟคุณภาพพรีเมียม"
      buttons={[{ text: "สั่งเลย", href: "#contact" }, { text: "ดูเมนูทั้งหมด", href: "/menu" }]}
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardMedia
      textboxLayout="inline-image"
      animationType="slide-up"
      useInvertedBackground={false}
      features={[
        {
          id: "1",          title: "เป็นมิตรกับสัตว์เลี้ยง",          description: "พาเพื่อนสี่ขาของคุณมาด้วยได้เลย",          tag: "ผ่อนคลาย",          imageSrc: "http://img.b2bpic.net/free-photo/frame-mock-up-with-coffee_23-2148332801.jpg"},
        {
          id: "2",          title: "ที่นั่งสบาย",          description: "เต็มไปด้วยไม้ประดับและโต๊ะอบอุ่น",          tag: "ความสบาย",          imageSrc: "http://img.b2bpic.net/free-photo/coffee-cup_74190-2977.jpg"},
        {
          id: "3",          title: "มุมพักผ่อน",          description: "เหมาะสำหรับการอ่านหนังสือหรือนั่งทำงาน",          tag: "บรรยากาศ",          imageSrc: "http://img.b2bpic.net/free-photo/smiley-senior-women-with-tea-cups_23-2149365794.jpg"},
      ]}
      title="พื้นที่พักผ่อนที่ร่มรื่น"
      description="ก้าวเข้ามาในร้านของเราที่ให้บรรยากาศเหมือนอยู่เขตร้อน"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Alice M.",          date: "ต.ค. 2023",          title: "บรรยากาศดี",          quote: "เป็นร้านที่ผ่อนคลายที่สุดในเมืองเลย",          tag: "ลูกค้าประจำ",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-brunette-woman-drinks-morning-coffee-cafe_613910-12094.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/girl-reading-book-cafeteria_23-2148171446.jpg?_wi=3",          imageAlt: "smiling cafe customer portrait"},
        {
          id: "2",          name: "Ben K.",          date: "พ.ย. 2023",          title: "กาแฟอร่อย",          quote: "ผมดื่มกาแฟมาหลายที่ แต่ที่นี่ไม่เหมือนใคร",          tag: "คอกาแฟ",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-blonde-student-woman-reading-her-notes-drinking-coffee-cafe-outdoors-waiting-her-classes-smiling_197531-22628.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-delicious-food_23-2150645799.jpg?_wi=2",          imageAlt: "smiling cafe customer portrait"},
        {
          id: "3",          name: "Chloe S.",          date: "ธ.ค. 2023",          title: "มุมพักผ่อนที่แสนสบาย",          quote: "ชอบต้นไม้และดนตรีตอนเช้าเบาๆ ที่นี่มาก",          tag: "แฟนคลับ",          avatarSrc: "http://img.b2bpic.net/free-photo/people-leisure-lifestyle-concept-successful-young-man-black-hat-casual-t-shirt-having-coffee-sitting-sidewalk-restaurant_273609-1754.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-composition-delicious-food_23-2148948992.jpg?_wi=3",          imageAlt: "smiling cafe customer portrait"},
        {
          id: "4",          name: "Dan R.",          date: "ม.ค. 2024",          title: "อาหารอร่อย",          quote: "สเต็กอร่อยเกินคาดสำหรับร้านกาแฟ",          tag: "นักชิม",          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-young-lady-designer-sitting-indoors-night-holding-pencil_171337-15774.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/indian-butter-chicken-black-bowl-wooden-table_123827-20546.jpg?_wi=3",          imageAlt: "smiling cafe customer portrait"},
        {
          id: "5",          name: "Ellen V.",          date: "ก.พ. 2024",          title: "ต้อนรับอย่างอบอุ่น",          quote: "ทุกอย่างในร้านดูใส่ใจมาก ชอบมากค่ะ",          tag: "ลูกค้า",          avatarSrc: "http://img.b2bpic.net/free-photo/smiley-friends-enjoying-cup-coffee_23-2148395305.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/boiled-fish-with-red-green-pepper-bowl_140725-3926.jpg?_wi=3",          imageAlt: "smiling cafe customer portrait"},
      ]}
      title="เรื่องราวจากลูกค้า"
      description="อย่าเชื่อเพียงแค่ที่เราบอก ต้องลองมาสัมผัสเอง"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "The Daily Sip",        "City Bites",        "Green Oasis Weekly",        "Neighborhood Finds",        "Coffee Culture Mag",        "Urban Escape Journal",        "Cafe Life Weekly"]}    
      title="ร้านโปรดของคนในพื้นที่"
      description="ได้รับการแนะนำในคู่มือท่องเที่ยวท้องถิ่น"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars"}}
      tag="ติดต่อเรา"
      title="มาหาเราที่ Daily Drift"
      description="123 Coffee Lane, ใจกลางเมือง เปิดทุกวัน 8:00 - 20:00 น. โทร (555) 123-4567 เพื่อจองโต๊ะวันนี้!"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "นำทาง",          items: [
            {
              label: "เมนู",              href: "#menu"},
            {
              label: "เกี่ยวกับเรา",              href: "#about"},
            {
              label: "รีวิว",              href: "#reviews"},
          ],
        },
        {
          title: "โซเชียลมีเดีย",          items: [
            {
              label: "Instagram",              href: "#"},
            {
              label: "Twitter",              href: "#"},
            {
              label: "TikTok",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Daily Drift Cafe."
      bottomRightText="สงวนลิขสิทธิ์"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
