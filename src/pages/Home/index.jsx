import React from 'react'
import { Helmet } from 'react-helmet';
import Hero from '../../components/Hero'
import styles from './style.module.css'
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Home, 
  Paintbrush, 
  Warehouse, 
  Layers, 
  Palette, 
  Briefcase, 
  Sparkles 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './../../components/Button/index';
import exterior from './../../assets/images/exterior.jpg'
import carbinet from './../../assets/images/carbinet.jpg'
import wallpaper from './../../assets/images/wallpaper.jpg'
import stencil from './../../assets/images/stencil.jpg'
import PhilosophySection from '../../components/Philosophy';
import WhyChooseUs from '../../components/WhyChooseUs';
import CTA from '../../components/CTA';

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Anelka Painting Services",
  "image": "https://anelkapainting.com/logo.png",
  "@id": "https://anelkapainting.com/",
  "url": "https://anelkapainting.com/",
  "telephone": "+1-234-567-8900",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "YourCity",
    "addressRegion": "YourState",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  }],
  "sameAs": [
    "https://www.facebook.com/anelkapainting",
    "https://www.instagram.com/anelkapainting"
  ]
};

const index = () => {
    const trustItems = [
    "✔ Free Colour Consultation",
    "✔ Interior & Exterior",
    "✔ Licensed & Insured",
    "✔ Residential & Commercial",
    "✔ Satisfaction Guaranteed",
  ];

  const services = [
  {
    title: "Interior Painting",
    desc: "Meticulous application for rooms, ceilings, and high-traffic kitchens using premium, low-VOC finishes.",
    icon: Home,
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000"
  },
  {
    title: "Exterior Painting",
    desc: "Weather-resistant protection for exterior walls, gates, and fences that enhances curb appeal.",
    icon: Warehouse,
    img: exterior
  },
  {
    title: "Cabinet & Furniture",
    desc: "Bespoke refinishing for kitchen cabinets and fine furniture to achieve a factory-grade smooth finish.",
    icon: Paintbrush,
    img: carbinet
  },
  {
    title: "Wallpaper Solutions",
    desc: "Expert installation of luxury wallcoverings and careful removal of aged materials without surface damage.",
    icon: Layers,
    img: wallpaper
  },
  {
    title: "Adrey Finishes",
    desc: "Specialized decorative plaster and textured finishes for feature walls that demand architectural depth.",
    icon: Sparkles,
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000"
  },
  {
    title: "Commercial & Office",
    desc: "Scalable painting solutions for commercial spaces and offices with minimal disruption to your operations.",
    icon: Briefcase,
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000"
  },
  {
    title: "Stencil & Roller Design",
    desc: "Artistic pattern application using custom stencils and specialty rollers for a unique, wallpaper-like effect.",
    icon: Palette,
    img: stencil
  }
];

const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/services');
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Helmet>
        <title>Anelka Painting | Professional Painters in YourCity</title>
        <meta name="description" content="Anelka Painting offers expert interior, exterior, and commercial painting services in YourCity. Transform your space with our skilled team." />
        <meta name="keywords" content="painting services, professional painters, interior painting, exterior painting, commercial painting, YourCity painter" />
        <link rel="canonical" href="https://anelkapainting.com/" />
        <meta property="og:title" content="Anelka Painting | Professional Painters in YourCity" />
        <meta property="og:description" content="Expert painting services for homes and businesses. Interior, exterior, and more in YourCity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anelkapainting.com/" />
        <meta property="og:image" content="https://anelkapainting.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anelka Painting | Professional Painters in YourCity" />
        <meta name="twitter:description" content="Expert painting services for homes and businesses. Interior, exterior, and more in YourCity." />
        <meta name="twitter:image" content="https://anelkapainting.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
      </Helmet>
      <Hero />

    {/* Trust Strip */}

    <div className={styles.strip}>
      <div className={styles.inner}>
        {trustItems.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* Service Items */}

    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <div className={styles.header}>
          <span className={styles.tagline}>What We Do</span>
          <h2 className={styles.title}>
            Painting services for<br />every project
          </h2>
          <p className={styles.subtitle}>
            Whether it's a brand-new build or a room that needs refreshing, we bring precision, 
            quality materials, and craftsmanship to every job.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(0,0,0,0.1)" }}
              className={styles.card}
              onClick={handleNavigation}
            >
              <div className={styles.imageWrapper}>
                <img src={service.img} alt={service.title} className={styles.cardImage} />
                <div className={styles.imageOverlay} />
                <div className={styles.iconBadge}>
                  <service.icon size={19} color="#fff" />
                </div>
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <span className={styles.learnMore}>
                  Learn More <ChevronRight size={15} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Action */}
        <div className={styles.footer}>
          <Button variant="outline" onClick={handleNavigation}>
            View All Services
          </Button>
        </div>

      </div>
    </section>

    {/* Philosophy Section */}
    <PhilosophySection />

    {/* Why Choose Us */}
    <WhyChooseUs />

    {/* CTA Section */}
    <CTA />

    </>
  )
}

export default index
