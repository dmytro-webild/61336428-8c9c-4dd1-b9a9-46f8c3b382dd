"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="medium"
        background="grid"
        cardStyle="glass-depth"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "HOME",
          id: "home",
        },
        {
          name: "MENU",
          id: "menu",
        },
        {
          name: "GALLERY",
          id: "gallery",
        },
        {
          name: "REVIEWS",
          id: "reviews",
        },
        {
          name: "LOCATE US",
          id: "contact",
        },
      ]}
      brandName="GHEBI (ღები)"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="გემო ნამდვილი საქართველო. ღიაა 24 საათი."
      description="აღმოაჩინეთ თბილისური კულინარიული ტრადიციის გული. ავთენტური გემოები, მყუდრო გარემო და კომფორტული კერძები ნებისმიერ დროს."
      buttons={[
        {
          text: "მენიუს ნახვა",
          href: "#menu",
        },
      ]}
      carouselItems={[
        {
          id: "h1",
          imageSrc: "http://img.b2bpic.net/free-photo/man-trading-browsing-online-stock-investments-night_169016-58033.jpg",
        },
        {
          id: "h2",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-food-table-still-life_23-2150751958.jpg",
        },
        {
          id: "h3",
          imageSrc: "http://img.b2bpic.net/free-photo/half-top-view-delicious-baked-pastry-sliced-with-greens-filling-with-seasonings-cheese-dark-background_140725-49424.jpg",
        },
        {
          id: "h4",
          imageSrc: "http://img.b2bpic.net/free-photo/meat-with-baked-apple-onion-pomegranate-chestnuts-bell-pepper-top-view_141793-3768.jpg",
        },
        {
          id: "h5",
          imageSrc: "http://img.b2bpic.net/free-photo/varieties-pickles-eggplants-cucumbers-cabbage-cherry-tomatoes_140725-8166.jpg",
        },
        {
          id: "h6",
          imageSrc: "http://img.b2bpic.net/free-photo/bread-wine-religious-ceremony_23-2150322326.jpg",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="ჩვენ შესახებ"
      title="ადგილობრივი ლეგენდა თბილისის გულში"
      description="წლების განმავლობაში, ღები იყო ადგილობრივთა საყვარელი საიდუმლო. მყუდრო სარდაფში განთავსებული, ჩვენ გთავაზობთ ავთენტურ ქართულ გამოცდილებას, სადაც ატმოსფერო ისეთივე მდიდარია, როგორც კერძები."
      subdescription="ჩვენი კარები ყოველთვის ღიაა, მიუხედავად იმისა, გსურთ გულიანი ვახშამი თუ ღამის წვეულება. მობრძანდით, შემოუერთდით ადგილობრივებს და დააგემოვნეთ ტრადიცია."
      imageSrc="http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169856.jpg"
      mediaAnimation="slide-up"
      icon={Utensils}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      products={[
        {
          id: "k1",
          name: "ხინკალი (საქონლის & ღორის)",
          price: "1.50 GEL/ც",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-khinkali-with-adjika-napkins-white-plate_176474-3386.jpg",
        },
        {
          id: "k2",
          name: "აჭარული ხაჭაპური",
          price: "15.00 GEL",
          imageSrc: "http://img.b2bpic.net/free-photo/breakfast-set-table_140725-6507.jpg",
        },
        {
          id: "k3",
          name: "ფხალის ასორტი",
          price: "12.00 GEL",
          imageSrc: "http://img.b2bpic.net/free-photo/baked-stuffed-pastry-with-sesame-sprinkles-served-with-tomato-sauce_141793-1853.jpg",
        },
        {
          id: "k4",
          name: "შქმერული",
          price: "28.00 GEL",
          imageSrc: "http://img.b2bpic.net/free-photo/leaves-khingal-with-fried-onion-chicken_140725-1805.jpg",
        },
        {
          id: "k5",
          name: "ქაბაბი",
          price: "18.00 GEL",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-tika-kebab-pita-bread-with-tomato-green-pepper-grilled-with-herbs-onions_141793-4247.jpg",
        },
        {
          id: "k6",
          name: "ქართული ღვინო",
          price: "8.00 GEL",
          imageSrc: "http://img.b2bpic.net/free-photo/white-cheese-slices-garnished-with-grape-tarragon-served-with-red-wine_140725-608.jpg",
        },
      ]}
      title="ქართული გემოვნების მოგზაურობა"
      description="აღმოაჩინეთ ჩვენი ლეგენდარული კერძების მრავალფეროვნება."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "მომხმარებელი",
          role: "ადგილობრივი",
          company: "თბილისი",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/girl-sitting-table-holding-mobile-phone-indoors_171337-17096.jpg",
        },
        {
          id: "t2",
          name: "Lu",
          role: "Local Guide",
          company: "თბილისი",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-mixed-race-black-woman-park-full-flowers-with-huge-afro-hair-contour-sunlight-watching-camera-cinema-film-colors_633478-444.jpg",
        },
        {
          id: "t3",
          name: "Alicia Rapiera",
          role: "Local Guide",
          company: "მოგზაური",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-cute-africanamerican-girl-smiling-pleased-showing-thumbsup-approval-lik_1258-149049.jpg",
        },
        {
          id: "t4",
          name: "გიორგი",
          role: "ადგილობრივი",
          company: "სტუმარი",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-standing-near-window-restaurant_23-2147936227.jpg",
        },
        {
          id: "t5",
          name: "ანა",
          role: "ადგილობრივი",
          company: "თბილისი",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-salad-cafe_1303-25274.jpg",
        },
      ]}
      title="რას ამბობენ ჩვენი მომხმარებლები"
      description="ჩვენი სტუმრების შთაბეჭდილებები, რომლებიც გვაძლევენ მოტივაციას გავაგრძელოთ ტრადიციული ქართული სტუმარმასპინძლობა."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="კონტაქტი"
      title="გვეწვიეთ ნებისმიერ დროს"
      description="მდებარეობა: PQ7W+24 თბილისი | ტელეფონი: 551 15 09 43 | მუშაობს: 24/7"
      buttonText="მისამართის ნახვა"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "GHEBI",
          items: [
            {
              label: "მენიუ",
              href: "#menu",
            },
            {
              label: "გალერეა",
              href: "#gallery",
            },
          ],
        },
        {
          title: "სერვისები",
          items: [
            {
              label: "ადგილზე მიტანა",
              href: "#",
            },
            {
              label: "გატანა",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 ღები რესტორანი"
      bottomRightText="თბილისი, საქართველო"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
