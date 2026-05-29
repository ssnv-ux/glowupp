import React, { useState, useEffect, useRef } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Star, 
  Sparkles, 
  Flower2, 
  Scissors, 
  Droplets, 
  Heart, 
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  ArrowRight
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const queryClient = new QueryClient();

// Constants
const WHATSAPP_NUMBER = "919515239819";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const PHONE_NUMBER = "+91 95152 39819";
const ADDRESS = "Rama Raja Bhushan Street, Pathebada Road, near Providence School, Eluru, Andhra Pradesh 534006";

// Navigation Links
const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

// Reusable Button
const Button = ({ children, variant = "primary", className = "", href, onClick, ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-sans text-sm font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary shadow-sm",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] focus:ring-[#25D366] shadow-sm",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary"
  };

  const style = `${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`;

  if (href) {
    return <a href={href} className={style} {...props}>{children}</a>;
  }
  
  return <button onClick={onClick} className={style} {...props}>{children}</button>;
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-2xl md:text-3xl font-bold text-primary tracking-wide">
              Swecha <span className="text-foreground">Beauty Looks</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-foreground/80 hover:text-primary font-sans text-sm font-medium tracking-wider uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="ml-4 gap-2">
              <FaWhatsapp className="w-5 h-5" /> Book on WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 px-3">
                <Button variant="whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full justify-center gap-2">
                  <FaWhatsapp className="w-5 h-5" /> Book on WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background opacity-80" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full transform translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/10 blur-[100px] rounded-full transform -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left pt-12 lg:pt-0"
        >
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary font-medium text-sm mb-6 border border-primary/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Premium Ladies-Only Salon in Eluru</span>
          </motion.div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
            Glow With Confidence at <br />
            <span className="text-primary italic">Swecha Beauty Looks</span>
          </h1>
          
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 font-sans leading-relaxed">
            A sanctuary of feminine elegance where local women and brides come to glow. Experience affordable luxury beauty services, expert bridal styling, and relaxing spa treatments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button variant="whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-lg px-8 py-4 gap-2">
              <FaWhatsapp className="w-6 h-6" /> Book on WhatsApp
            </Button>
            <Button variant="outline" href="#services" className="w-full sm:w-auto text-lg px-8 py-4">
              View Services
            </Button>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex items-center justify-center lg:justify-start gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium">
              <div className="flex items-center gap-1 text-accent">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-muted-foreground">5.0 Rated by 180+ Happy Clients</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] w-full max-w-lg mx-auto lg:max-w-none"
        >
          <div className="absolute inset-0 rounded-t-full rounded-b-3xl bg-secondary/50 transform rotate-3 scale-105 transition-transform duration-700 hover:rotate-6" />
          <div className="relative h-full w-full rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="/images/hero-salon.png" 
              alt="Luxurious Swecha Beauty Looks Salon Interior" 
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-8 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-xl border border-border/50 flex items-center gap-4 backdrop-blur-sm bg-white/90"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <div>
              <p className="font-serif font-bold text-foreground">Bridal Experts</p>
              <p className="text-xs text-muted-foreground">Making you feel like a queen</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "180+", label: "Happy Clients" },
    { value: "10+", label: "Expert Services" },
    { value: "5★", label: "Rating" },
    { value: "5+", label: "Years Experience" },
  ];

  return (
    <section className="py-12 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/20">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center px-4"
            >
              <h3 className="font-serif text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="font-sans text-primary-foreground/80 uppercase tracking-wider text-xs md:text-sm font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/about-salon.png" alt="Swecha Beauty Looks Interior" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary rounded-full -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-primary rounded-full -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Sanctuary of <span className="text-primary italic">Feminine Elegance</span> in Eluru
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans text-lg leading-relaxed mb-8">
              <p>
                At Swecha Beauty Looks, we believe every woman deserves to feel like royalty. Nestled in the heart of Eluru on Pathebada Road, our ladies-only salon offers a safe, hygienic, and deeply relaxing environment.
              </p>
              <p>
                From the scent of rose water to the soft, warm lighting, every detail is designed to give you an affordable luxury experience. Whether you're a bride preparing for her big day or simply taking time for self-care, our expert beauticians treat every client with unparalleled care and attention.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/150?img=32" alt="Owner" className="w-16 h-16 rounded-full border-2 border-primary object-cover" />
              <div>
                <p className="font-serif font-bold text-lg text-foreground">Swecha Team</p>
                <p className="text-sm text-primary uppercase tracking-wider font-semibold">Lead Beauticians</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { name: "Bridal Makeup", desc: "Flawless HD & Airbrush makeup for your special day.", icon: Flower2 },
    { name: "Hydra Facial", desc: "Deep cleansing and hydration for a radiant, glowing skin.", icon: Droplets },
    { name: "Hair Styling & Extensions", desc: "Elegant styling, cuts, and premium extensions.", icon: Scissors },
    { name: "Spa & Massage", desc: "Relaxing head and body massages to relieve stress.", icon: Heart },
    { name: "Manicure & Pedicure", desc: "Luxury nail care and spa treatments for hands and feet.", icon: Sparkles },
    { name: "Mehandi Designs", desc: "Intricate traditional and modern bridal henna.", icon: Flower2 },
    { name: "Waxing", desc: "Gentle, hygienic, and pain-free waxing services.", icon: Droplets },
    { name: "Eyebrow Threading", desc: "Precision threading and shaping for perfect brows.", icon: Scissors },
    { name: "Skin Care & Facials", desc: "Customized facials for all skin types and concerns.", icon: Sparkles },
    { name: "Tanning Services", desc: "Safe and even tan removal and glow treatments.", icon: Heart },
  ];

  return (
    <section id="services" className="pt-28 pb-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-primary font-semibold tracking-[0.2em] uppercase text-xs mb-5 px-4 py-1.5 bg-primary/10 rounded-full">Our Expertise</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-5 leading-tight">Premium Beauty <span className="text-primary italic">Services</span></h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-16 bg-primary/40" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-px w-16 bg-primary/40" />
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">Affordable luxury treatments tailored specifically for you — from bridal glam to everyday glow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const message = encodeURIComponent(`Hi, I'm interested in booking a ${service.name} service at Swecha Beauty Looks.`);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary rounded-bl-full -z-10 transition-transform group-hover:scale-150" />
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.desc}</p>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
                >
                  Book Now <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: "/images/gallery-bridal.png", alt: "Bridal Makeup", span: "md:col-span-2 md:row-span-2" },
    { src: "/images/gallery-facial.png", alt: "Hydra Facial", span: "md:col-span-1 md:row-span-1" },
    { src: "/images/gallery-hair.png", alt: "Hair Styling", span: "md:col-span-1 md:row-span-2" },
    { src: "/images/gallery-mehandi.png", alt: "Mehandi Design", span: "md:col-span-1 md:row-span-1" },
    { src: "/images/gallery-nails.png", alt: "Nail Art", span: "md:col-span-1 md:row-span-1" },
    { src: "/images/gallery-spa.png", alt: "Spa Massage", span: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Bridal & Beauty Showcase</h2>
          <p className="text-muted-foreground text-lg">A glimpse into the magical transformations at Swecha Beauty Looks.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-serif text-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    setSliderPosition((x / width) * 100);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const handleTouchDown = (e: React.TouchEvent) => {
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const onTouchEnd = () => {
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
  };

  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12">The Bridal Transformation</h2>
        
        <div 
          ref={containerRef}
          className="relative w-full aspect-[3/4] md:aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchDown}
        >
          {/* After Image (Background) */}
          <img 
            src="/images/after-makeup.png" 
            alt="After Makeup" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-serif">Glam</div>
          
          {/* Before Image (Clipped overlay) */}
          <div 
            className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="/images/before-makeup.png" 
              alt="Before Makeup" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-serif">Natural</div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="flex gap-1">
                <ChevronLeft className="w-3 h-3 text-primary" />
                <ChevronRight className="w-3 h-3 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    "Ladies Only Salon",
    "Affordable Pricing",
    "Hygienic Environment",
    "Experienced Beauticians",
    "Relaxing Spa Experience",
    "Premium Beauty Products",
    "Trusted by Local Clients"
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-white">Why Choose Swecha?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4 fill-white text-white" />
                  </div>
                  <span className="font-sans font-medium text-lg text-white/90">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl transform rotate-3" />
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
              <h3 className="font-serif text-3xl font-bold mb-4 text-white">Ready to glow?</h3>
              <p className="text-white/80 mb-8 font-sans text-lg">Join hundreds of happy women in Eluru who trust us with their beauty needs.</p>
              <Button variant="whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full text-lg py-4 gap-2 bg-white text-primary hover:bg-white/90">
                <FaWhatsapp className="w-6 h-6 text-[#25D366]" /> Message Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { text: "Super relaxing for stress relieving head massage", author: "Priya R." },
    { text: "Very affordable and great service", author: "Sunitha K." },
    { text: "Must try parlour with reasonable pricing", author: "Lakshmi D." },
    { text: "Amazing bridal makeup, felt like a queen!", author: "Divya M." },
    { text: "Best hydra facial in Eluru, skin is glowing!", author: "Anusha T." },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Client Love</h2>
          <div className="flex justify-center gap-1 text-accent mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
          </div>
        </div>

        {/* Marquee effect for testimonials */}
        <div className="relative flex overflow-x-hidden group">
          <div className="py-4 animate-marquee whitespace-nowrap flex gap-6">
            {[...reviews, ...reviews].map((review, i) => (
              <div 
                key={i} 
                className="w-[300px] md:w-[400px] inline-block bg-secondary/30 p-8 rounded-2xl border border-border/50 shrink-0 whitespace-normal"
              >
                <div className="flex gap-1 text-accent mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif text-lg md:text-xl text-foreground mb-6 italic">"{review.text}"</p>
                <p className="font-sans font-bold text-primary uppercase tracking-wider text-sm">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "Bridal Makeup", time: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${formData.name}. I would like to book an appointment for *${formData.service}*. My preferred time is ${formData.time || "flexible"}. My contact number is ${formData.phone}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          <div className="p-8 md:p-12 lg:p-16 bg-primary text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10" />
            
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Book Your Visit</h2>
              <p className="text-white/80 font-sans text-lg mb-12">Visit us for a relaxing experience. We recommend booking in advance for bridal services.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-white shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Location</h4>
                    <p className="text-white/80">{ADDRESS}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-white shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="text-white/80 hover:text-white transition-colors">{PHONE_NUMBER}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-8">Send Request</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                <input 
                  required type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-background"
                  placeholder="Jane Doe"
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input 
                  required type="tel" 
                  className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-background"
                  placeholder="+91"
                  value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service Needed</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-background"
                  value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}
                >
                  <option>Bridal Makeup</option>
                  <option>Hydra Facial</option>
                  <option>Hair Styling</option>
                  <option>Spa & Massage</option>
                  <option>Other Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Preferred Time (Optional)</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-background"
                  placeholder="e.g. Tomorrow morning, Weekend"
                  value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})}
                />
              </div>

              <Button variant="primary" type="submit" className="w-full py-4 text-lg">
                Continue to WhatsApp
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Swecha Beauty Looks</h3>
            <p className="text-white/60 mb-6 max-w-sm">
              Your premium destination for affordable luxury beauty services in Eluru. Ladies only.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/60">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-primary" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Swecha Beauty Looks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] hover:-translate-y-1 transition-all duration-300 focus:outline-none"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
      <FaWhatsapp className="w-8 h-8 relative z-10" />
    </motion.a>
  );
}

function Home() {
  return (
    <div className="min-h-screen w-full font-sans text-foreground bg-background scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <BeforeAfter />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <FloatingWhatsApp />
      
      {/* Global Marquee Styles via inline CSS since Tailwind plugin might be needed for complex keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
        html { scroll-behavior: smooth; }
      `}} />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
