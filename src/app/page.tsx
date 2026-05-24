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
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Daily Drift"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Slow life, good vibes."
      description="Your neighborhood tropical escape. Specialty coffee, comforting dishes, and an unpretentious atmosphere waiting just for you."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@sarah_j",
          testimonial: "The best baked pork rice in town. I come here to work and stay for the vibe.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/girl-reading-book-cafeteria_23-2148171446.jpg",
          imageAlt: "cozy cafe exterior plants",
        },
        {
          name: "Mike D.",
          handle: "@miked",
          testimonial: "Cold brew is crisp and the staff are always smiling. Pet-friendly too!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-delicious-food_23-2150645799.jpg",
          imageAlt: "cozy cafe exterior plants",
        },
        {
          name: "Emily R.",
          handle: "@emilyr",
          testimonial: "Finally, a cafe that feels like home. The eggplant stir-fry is a hidden gem.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-composition-delicious-food_23-2148948992.jpg",
          imageAlt: "cozy cafe exterior plants",
        },
        {
          name: "Kevin T.",
          handle: "@kevint",
          testimonial: "I love the warm cream tones—best aesthetic for my morning Instagram post.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/indian-butter-chicken-black-bowl-wooden-table_123827-20546.jpg",
          imageAlt: "cozy cafe exterior plants",
        },
        {
          name: "Anna W.",
          handle: "@annaw",
          testimonial: "Casual, lush, and delicious. Can't start my weekend without their coffee.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/boiled-fish-with-red-green-pepper-bowl_140725-3926.jpg",
          imageAlt: "cozy cafe exterior plants",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/girl-reading-book-cafeteria_23-2148171446.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/pineapples-ready-sale_23-2151526658.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-lounge_23-2147681033.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/composition-from-flowers-plants-lit-candles-as-part-decorations-wooden-table_181624-59023.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-couple-with-pina-colada_23-2150184007.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/teen-girls-writing-notebooks-cafe_23-2147860799.jpg",
          alt: "Customer 5",
        },
      ]}
      avatarText="Join our growing community"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Built for the ",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/hand-holding-delicious-food_23-2150645799.jpg",
          alt: "Cafe Interior",
        },
        {
          type: "text",
          content: " daily drift.",
        },
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
        {
          id: "1",
          name: "Signature Steak",
          price: "$18",
          variant: "Premium Grass-fed",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-composition-delicious-food_23-2148948992.jpg",
        },
        {
          id: "2",
          name: "Baked Pork Rice",
          price: "$12",
          variant: "Cafe Classic",
          imageSrc: "http://img.b2bpic.net/free-photo/indian-butter-chicken-black-bowl-wooden-table_123827-20546.jpg",
        },
        {
          id: "3",
          name: "Eggplant Stir-fry",
          price: "$10",
          variant: "Vegetarian",
          imageSrc: "http://img.b2bpic.net/free-photo/boiled-fish-with-red-green-pepper-bowl_140725-3926.jpg",
        },
        {
          id: "4",
          name: "Cold Brew",
          price: "$5",
          variant: "House Blend",
          imageSrc: "http://img.b2bpic.net/free-photo/hot-california-sushi-rolls-with-red-caviar_114579-2128.jpg",
        },
        {
          id: "5",
          name: "Flat White",
          price: "$4",
          variant: "Specialty",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-breakfast_23-2147985103.jpg",
        },
        {
          id: "6",
          name: "Pastry Assortment",
          price: "$6",
          variant: "Daily Baked",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-eggplants-dish-still-life_23-2150561815.jpg",
        },
      ]}
      title="Menu Highlights"
      description="Hearty comfort food meets premium specialty brews."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardMedia
      textboxLayout="inline-image"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Pet-Friendly",
          description: "Bring your furry friends along.",
          tag: "Relax",
          imageSrc: "http://img.b2bpic.net/free-photo/frame-mock-up-with-coffee_23-2148332801.jpg",
        },
        {
          id: "2",
          name: "Cozy Seating",
          title: "Cozy Seating",
          description: "Lush indoor greenery and warm tables.",
          tag: "Comfort",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-cup_74190-2977.jpg",
        },
        {
          id: "3",
          name: "Hangout Vibe",
          title: "Hangout Vibe",
          description: "The perfect spot to read or work.",
          tag: "Vibes",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-senior-women-with-tea-cups_23-2149365794.jpg",
        },
      ]}
      title="A Lush Escape"
      description="Step into our tropical-modern sanctuary."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Alice M.",
          date: "Oct 2023",
          title: "Great Vibe",
          quote: "Honestly the most relaxing spot in the city.",
          tag: "Regular",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-brunette-woman-drinks-morning-coffee-cafe_613910-12094.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/girl-reading-book-cafeteria_23-2148171446.jpg",
          imageAlt: "smiling cafe customer portrait",
        },
        {
          id: "2",
          name: "Ben K.",
          date: "Nov 2023",
          title: "Best Coffee",
          quote: "I drink coffee everywhere, but this is different.",
          tag: "Coffee Lover",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-blonde-student-woman-reading-her-notes-drinking-coffee-cafe-outdoors-waiting-her-classes-smiling_197531-22628.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-delicious-food_23-2150645799.jpg",
          imageAlt: "smiling cafe customer portrait",
        },
        {
          id: "3",
          name: "Chloe S.",
          date: "Dec 2023",
          title: "Cozy Escape",
          quote: "Love the plants and the quiet morning music.",
          tag: "Fan",
          avatarSrc: "http://img.b2bpic.net/free-photo/people-leisure-lifestyle-concept-successful-young-man-black-hat-casual-t-shirt-having-coffee-sitting-sidewalk-restaurant_273609-1754.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-composition-delicious-food_23-2148948992.jpg",
          imageAlt: "smiling cafe customer portrait",
        },
        {
          id: "4",
          name: "Dan R.",
          date: "Jan 2024",
          title: "Tasty Food",
          quote: "The steak was surprisingly good for a cafe.",
          tag: "Foodie",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-young-lady-designer-sitting-indoors-night-holding-pencil_171337-15774.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/indian-butter-chicken-black-bowl-wooden-table_123827-20546.jpg",
          imageAlt: "smiling cafe customer portrait",
        },
        {
          id: "5",
          name: "Ellen V.",
          date: "Feb 2024",
          title: "Warm Welcome",
          quote: "Everything feels so intentional here. Loved it.",
          tag: "Guest",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiley-friends-enjoying-cup-coffee_23-2148395305.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/boiled-fish-with-red-green-pepper-bowl_140725-3926.jpg",
          imageAlt: "smiling cafe customer portrait",
        },
      ]}
      title="Customer Stories"
      description="Don't just take our word for it."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "The Daily Sip",
        "City Bites",
        "Green Oasis Weekly",
        "Neighborhood Finds",
        "Coffee Culture Mag",
        "Urban Escape Journal",
        "Cafe Life Weekly",
      ]}
      title="Community Favorites"
      description="Featured in local city guides."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      tag="Contact"
      title="Visit Daily Drift"
      description="123 Coffee Lane, Downtown. Open Mon-Sun, 8am - 8pm."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Reviews",
              href: "#reviews",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Twitter",
              href: "#",
            },
            {
              label: "TikTok",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Daily Drift Cafe."
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
