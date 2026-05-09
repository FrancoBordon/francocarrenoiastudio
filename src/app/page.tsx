'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Globe,
  Settings,
  Palette,
  MessageCircle,
  MapPin,
  Video,
  Rocket,
  Brain,
  BarChart3,
  Target,
  ArrowDown,
  Phone,
  Mail,
  ExternalLink,
  Menu,
  X,
  ChevronUp,
  Sparkles,
  Zap,
  Shield,
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

/* ─── Data ──────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICES = [
  {
    icon: Globe,
    title: 'Diseño Web Profesional',
    description:
      'Sitios web modernos, rápidos y optimizados que convierten visitantes en clientes',
  },
  {
    icon: Settings,
    title: 'Automatización de Procesos',
    description:
      'Automatizá tareas repetitivas y dedicá tu tiempo a lo que realmente importa',
  },
  {
    icon: Palette,
    title: 'Logos e Identidad Visual',
    description:
      'Una identidad visual que te distinga y conecte con tu audiencia',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Business Profesional',
    description:
      'Configuramos tu WhatsApp Business para atender, vender y fidelizar',
  },
  {
    icon: MapPin,
    title: 'Google Business y Presencia Online',
    description: 'Aparecé en Google cuando te buscan y dominá tu zona',
  },
  {
    icon: Video,
    title: 'Imágenes y Videos para Redes',
    description:
      'Contenido visual profesional que detiene el scroll y genera interés',
  },
  {
    icon: Rocket,
    title: 'Marketing Digital para Emprendimientos',
    description:
      'Estrategias digitales que conectan tu negocio con las personas correctas',
  },
]

const PORTFOLIO = [
  {
    title: 'Sosa y Asociados',
    url: 'https://estudio-juridico-sosay-asociados.vercel.app/',
    description:
      'Sitio web profesional diseñado para un estudio jurídico de referencia. Presenta todos los servicios legales de forma clara y accesible, permitiendo que los clientes puedan solicitar una consulta en cualquier momento desde cualquier dispositivo. Una experiencia digital que transmite seriedad, confianza y cercanía.',
    color: 'from-blue-900/80 to-slate-900/80',
    accent: '#3b82f6',
  },
  {
    title: 'GianFranco Hair Art',
    url: 'https://gianfrancoportafolio.vercel.app/',
    description:
      'Portfolio interactivo para un estilista profesional. Muestra quién es, su trabajo y todo lo que hace, con un diseño que invita a conectarse directamente con él y conseguir turnos de manera simple y rápida. Una presencia digital que refleja su estilo y profesionalismo.',
    color: 'from-amber-900/80 to-rose-900/80',
    accent: '#f59e0b',
  },
  {
    title: 'Congreso Hechos 2',
    url: 'https://www.congresohechos2.com.ar/',
    description:
      'Web de evento religioso completamente responsive e interactiva. Incluye contador regresivo, implementación de video, botones interactivos, secciones de recomendaciones, galería de imágenes y toda la información necesaria. Un diseño que genera expectativa y facilita el acceso a cada detalle del congreso.',
    color: 'from-purple-900/80 to-indigo-900/80',
    accent: '#a855f7',
  },
]

const PILLARS = [
  {
    icon: Brain,
    title: 'Tecnología',
    description: 'Usamos las últimas herramientas y tendencias digitales',
  },
  {
    icon: BarChart3,
    title: 'Estrategia',
    description: 'Cada proyecto tiene un plan claro y medible',
  },
  {
    icon: Target,
    title: 'Creatividad',
    description: 'Diseños únicos que destacan en el mercado',
  },
  {
    icon: Rocket,
    title: 'Resultados',
    description: 'Nos enfocamos en lo que realmente importa: tu crecimiento',
  },
]

const STATS = [
  { value: '+10', label: 'Negocios Transformados' },
  { value: '+25', label: 'Proyectos Entregados' },
  { value: '100%', label: 'Clientes Satisfechos' },
]

const WHATSAPP_URL = 'https://wa.me/5493804661246'
const EMAIL_URL = 'mailto:francocarreno.iastudio@gmail.com'

/* ─── Animated Section Wrapper ──────────────────────────────── */

function FadeInWhenVisible({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const directionMap = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}



/* ─── Section Title ─────────────────────────────────────────── */

function SectionTitle({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <FadeInWhenVisible className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
        {title}
      </h2>
      <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4 glow-cyan" />
      {subtitle && (
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </FadeInWhenVisible>
  )
}

/* ─── Main Page Component ───────────────────────────────────── */

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* ─── NAVIGATION ──────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-lg shadow-primary/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-1.5 group"
          >
            <span className="text-sm md:text-base font-extrabold text-foreground tracking-tight">
              FC <span className="text-primary">IA</span> Studio
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/80 glow-cyan font-semibold"
              >
                Presupuesto
              </Button>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass border-t border-primary/10"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-left py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2"
                >
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80 glow-cyan font-semibold">
                    Solicitar Presupuesto
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─── HERO SECTION ────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background - Pure CSS gradient, no image */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#0a1628] to-[#050510]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,191,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          >
            Soluciones digitales para{' '}
            <span className="text-primary text-glow-cyan">
              hacer crecer
            </span>{' '}
            tu negocio
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            Creamos experiencias digitales que{' '}
            <span className="text-primary font-semibold">cautivan</span>,{' '}
            <span className="text-primary font-semibold">automatizan</span> y{' '}
            <span className="text-primary font-semibold">venden</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/80 glow-cyan text-base px-8 h-12 font-bold"
              >
                <Sparkles className="mr-2 size-5" />
                Solicitar Presupuesto
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo('#portfolio')}
              className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary text-base px-8 h-12 font-bold"
            >
              Ver Nuestros Trabajos
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16 md:mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
              onClick={() => scrollTo('#servicios')}
            >
              <span className="text-xs uppercase tracking-widest">
                Descubrí más
              </span>
              <ArrowDown className="size-5 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES SECTION ────────────────────────────── */}
      <section id="servicios" className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nuestros Servicios"
            subtitle="Todo lo que necesitás para crecer en el mundo digital"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {SERVICES.map((service, i) => (
              <FadeInWhenVisible key={service.title} delay={i * 0.08}>
                <div className="service-card glass rounded-xl p-6 h-full flex flex-col items-center text-center group cursor-default">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20">
                    <service.icon className="size-7 text-primary/70 service-icon transition-all duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ─── PORTFOLIO SECTION ───────────────────────────── */}
      <section id="portfolio" className="py-20 md:py-28 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nuestros Trabajos"
            subtitle="Proyectos reales que generan resultados reales"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PORTFOLIO.map((project, i) => (
              <FadeInWhenVisible key={project.title} delay={i * 0.15}>
                <div className="portfolio-card glass rounded-2xl overflow-hidden group h-full flex flex-col">
                  {/* Thumbnail area */}
                  <div
                    className={`relative h-48 md:h-56 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
                  >
                    {/* Decorative pattern */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `
                          linear-gradient(${project.accent}33 1px, transparent 1px),
                          linear-gradient(90deg, ${project.accent}33 1px, transparent 1px)
                        `,
                        backgroundSize: '30px 30px',
                      }}
                    />
                    <div className="text-center relative z-10">
                      <div
                        className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${project.accent}22` }}
                      >
                        <Globe className="size-8" style={{ color: project.accent }} />
                      </div>
                      <h4 className="text-xl font-bold text-white/90">
                        {project.title}
                      </h4>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 flex items-center justify-center">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                      >
                        <Button
                          size="sm"
                          className="bg-primary/90 text-primary-foreground hover:bg-primary glow-cyan"
                        >
                          <ExternalLink className="mr-2 size-4" />
                          Ver Proyecto
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
                    >
                      Visitar sitio
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ─── WHY CHOOSE US SECTION ───────────────────────── */}
      <section id="nosotros" className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="¿Por qué elegirnos?" />

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
            {PILLARS.map((pillar, i) => (
              <FadeInWhenVisible key={pillar.title} delay={i * 0.12}>
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,191,255,0.3)]">
                    <pillar.icon className="size-9 text-primary/80 transition-all duration-500 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(0,191,255,0.6)]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          {/* Stats Banner */}
          <FadeInWhenVisible delay={0.3}>
            <div className="glass rounded-2xl p-8 md:p-12 gradient-border">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl md:text-5xl font-extrabold text-primary text-glow-cyan mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm md:text-base font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ─── CONTACT SECTION ─────────────────────────────── */}
      <section id="contacto" className="py-20 md:py-28 relative">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Hablemos de tu proyecto"
            subtitle="Estamos listos para ayudarte a crecer"
          />

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* WhatsApp */}
            <FadeInWhenVisible delay={0.1}>
              <div className="glass glass-hover rounded-2xl p-6 md:p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-5">
                  <Phone className="size-8 text-green-400" />
                </div>
                <p className="text-muted-foreground text-sm mb-1">
                  Consulta directa
                </p>
                <p className="text-foreground text-lg font-bold mb-1">
                  +54 9 380 466-1246
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  WhatsApp
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold h-12"
                  >
                    <MessageCircle className="mr-2 size-5" />
                    Chateá con nosotros
                  </Button>
                </a>
              </div>
            </FadeInWhenVisible>

            {/* Email */}
            <FadeInWhenVisible delay={0.2}>
              <div className="glass glass-hover rounded-2xl p-6 md:p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <Mail className="size-8 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm mb-1">
                  Envianos un mail
                </p>
                <p className="text-foreground text-lg font-bold mb-1 break-all">
                  francocarreno.iastudio@gmail.com
                </p>
                <p className="text-muted-foreground text-sm mb-6">Email</p>
                <a href={EMAIL_URL} className="w-full">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary/40 text-primary hover:bg-primary/10 font-semibold h-12"
                  >
                    <Mail className="mr-2 size-5" />
                    Enviar Email
                  </Button>
                </a>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Motivational phrase */}
          <FadeInWhenVisible delay={0.3}>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                Tu próximo cliente está buscando lo que vos ofrecés.{' '}
                <span className="text-primary font-bold text-glow-cyan">
                  Nosotros hacemos que te encuentren.
                </span>
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────── */}
      <footer className="mt-auto border-t border-primary/10 bg-[#030812]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Left: Logo + copyright */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="font-extrabold text-foreground text-sm">
                  FC <span className="text-primary">IA</span> Studio
                </span>
              </div>
              <p className="text-muted-foreground text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} FC IA Studio. Todos los
                derechos reservados.
              </p>
            </div>

            {/* Center: Quick links */}
            <div className="flex flex-col items-center">
              <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                Navegación
              </h4>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Tagline */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Tecnología, estrategia y creatividad para llevar tu negocio al
                siguiente nivel
              </p>
            </div>
          </div>

          {/* Bottom line */}
          <div className="section-divider mt-8 mb-4" />
          <p className="text-center text-xs text-muted-foreground/60">
            Diseñado con pasión por FC IA Studio
          </p>
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP BUTTON ────────────────────── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chateá con nosotros por WhatsApp"
      >
        <div className="relative">
          {/* Pulse rings */}
          <span className="absolute inset-0 rounded-full bg-green-500/30 whatsapp-pulse" />
          {/* Button */}
          <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 transition-transform duration-300 group-hover:scale-110">
            <MessageCircle className="size-7 text-white" />
          </div>
        </div>
        {/* Tooltip */}
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 text-xs font-medium text-white bg-foreground/90 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          ¡Chateá con nosotros!
        </span>
      </a>

      {/* ─── SCROLL TO TOP BUTTON ────────────────────────── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
            aria-label="Volver arriba"
          >
            <ChevronUp className="size-5 text-primary" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
