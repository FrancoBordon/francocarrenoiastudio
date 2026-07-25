import React from 'react'
import {
  ExternalLink,
  Smartphone,
  Camera,
  BarChart3,
  ShoppingCart,
  Box,
  CreditCard,
  Users,
  FileText,
  CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Negocio360 | Sistema de gestión comercial para negocios',
  description:
    'Sistema de gestión comercial para ventas, stock, caja, clientes, gastos y reportes financieros. Usalo desde el celular, con lector de código mediante cámara.',
}

const NEGOCIO360_YOUTUBE_ID = 'PEGAR_ID_DEL_VIDEO'
const NEGOCIO360_YOUTUBE_URL = `https://www.youtube.com/embed/${NEGOCIO360_YOUTUBE_ID}`
const WHATSAPP_NEGOCIO360 =
  'https://wa.me/543804661246?text=Hola%2C%20vi%20Negocio360%20y%20quiero%20saber%20c%C3%B3mo%20implementarlo%20en%20mi%20negocio.'

const featureBlocks = [
  {
    title: 'Control de ventas',
    icon: ShoppingCart,
    text: 'Registrá ventas de manera rápida, clara y con historial de operaciones.',
  },
  {
    title: 'Stock actualizado',
    icon: Box,
    text: 'Cada venta actualiza stock automáticamente para evitar faltantes.',
  },
  {
    title: 'Caja diaria',
    icon: CreditCard,
    text: 'Administrá ingresos, egresos y cierres de caja desde un solo lugar.',
  },
  {
    title: 'Clientes registrados',
    icon: Users,
    text: 'Guardá datos de clientes y mejorá el seguimiento comercial.',
  },
  {
    title: 'Gastos ordenados',
    icon: FileText,
    text: 'Registrá gastos para conocer la rentabilidad real del negocio.',
  },
  {
    title: 'Reportes financieros',
    icon: BarChart3,
    text: 'Visualizá ventas, ganancias y datos clave para decidir mejor.',
  },
  {
    title: 'Lector de código con cámara',
    icon: Camera,
    text: 'Escaneá productos usando la cámara del celular, sin hardware adicional.',
  },
  {
    title: 'Uso desde celular',
    icon: Smartphone,
    text: 'Accedé desde cualquier celular, tablet o computadora con conexión.',
  },
]

const tutorialList = [
  { title: 'Cómo cargar un producto', youtubeUrl: '' },
  { title: 'Cómo registrar una venta', youtubeUrl: '' },
  { title: 'Cómo usar el lector con cámara', youtubeUrl: '' },
  { title: 'Cómo cerrar caja', youtubeUrl: '' },
  { title: 'Cómo ver reportes', youtubeUrl: '' },
  { title: 'Cómo controlar stock', youtubeUrl: '' },
]

function Img({ src, alt, fallback, className }: { src: string; alt: string; fallback: string; className?: string }) {
  // Use onError to swap to fallback if image missing
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement
        if (target.src !== fallback) target.src = fallback
      }}
    />
  )
}

export default function Negocio360Page() {
  const heroBg = 'bg-gradient-to-b from-[#031025] via-[#071228] to-[#02040a]'
  const primaryBorder = 'border border-cyan-400/20'
  const fallbackImage = '/images/portafolio/negocio360.jpg'
  const imgBase = '/images/soluciones/negocio360'

  const thumbDashboard = `${imgBase}/negocio360-dashboard.jpg`
  const thumbPos = `${imgBase}/negocio360-pos.jpg`
  const thumbMobile = `${imgBase}/negocio360-celular.jpg`

  const showIframe = NEGOCIO360_YOUTUBE_ID && NEGOCIO360_YOUTUBE_ID !== 'PEGAR_ID_DEL_VIDEO'

  return (
    <div className={`min-h-screen text-foreground ${heroBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="inline-block text-xs uppercase px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                Solución destacada
              </span>
              <span className="text-sm text-muted-foreground">Sistema integral para comercios</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-4">Negocio360</h1>
            <h2 className="text-xl text-primary font-semibold mb-4">Toda tu gestión comercial en un solo lugar.</h2>

            <p className="text-muted-foreground max-w-2xl leading-relaxed mb-6">
              Controlá ventas, stock, caja, clientes, gastos y reportes financieros desde cualquier celular, tablet o computadora. Simple, rápido y seguro.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-[#06202a] border border-cyan-500/10 px-3 py-1 rounded-full text-sm text-primary">
                <CheckCircle className="size-4 text-cyan-300" /> Funciona desde celular
              </span>
              <span className="inline-flex items-center gap-2 bg-[#06202a] border border-cyan-500/10 px-3 py-1 rounded-full text-sm text-primary">
                <Camera className="size-4 text-cyan-300" /> Lector con cámara
              </span>
              <span className="inline-flex items-center gap-2 bg-[#06202a] border border-cyan-500/10 px-3 py-1 rounded-full text-sm text-primary">
                <BarChart3 className="size-4 text-cyan-300" /> Reportes claros
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_NEGOCIO360}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-3 rounded-full font-semibold shadow-lg"
              >
                Lo quiero para mi
              </a>
              <a
                href="https://www.negocio360.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 px-4 py-3 text-cyan-300 font-semibold hover:bg-white/2"
              >
                Ver sistema
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="mb-3 text-sm text-muted-foreground">Mirá cómo funciona en menos de 2 minutos</div>
            <div className={`rounded-2xl overflow-hidden ${primaryBorder} shadow-[0_20px_60px_rgba(0,191,255,0.06)] bg-[#020614]`}> 
              <div className="w-full" style={{ aspectRatio: '16/9' }}>
                {showIframe ? (
                  <iframe
                    src={NEGOCIO360_YOUTUBE_URL}
                    title="Negocio360 Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    style={{ minHeight: 220 }}
                  />
                ) : (
                  <Img
                    src={thumbDashboard}
                    alt="Negocio360 demo"
                    fallback={fallbackImage}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Capturas */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-2">Un sistema simple, claro y pensado para negocios reales</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl">Todo lo importante de tu negocio queda ordenado en una sola plataforma, accesible desde el celular o la computadora.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg p-0 border border-cyan-500/10">
              <Img src={thumbDashboard} alt="Dashboard" fallback={fallbackImage} className="w-full h-56 object-cover rounded-xl" />
              <div className="p-4 bg-[#030617]">
                <h4 className="font-semibold mb-1">Dashboard principal</h4>
                <p className="text-sm text-muted-foreground">Resumen visual de ventas, caja y alertas del día para decisiones rápidas.</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg p-0 border border-cyan-500/10">
              <Img src={thumbPos} alt="POS" fallback={fallbackImage} className="w-full h-56 object-cover rounded-xl" />
              <div className="p-4 bg-[#030617]">
                <h4 className="font-semibold mb-1">Ventas / POS</h4>
                <p className="text-sm text-muted-foreground">Pantalla de venta rápida, cobros y comprobantes en segundos.</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg p-0 border border-cyan-500/10">
              <Img src={thumbMobile} alt="Desde celular" fallback={fallbackImage} className="w-full h-56 object-cover rounded-xl" />
              <div className="p-4 bg-[#030617]">
                <h4 className="font-semibold mb-1">Uso desde celular</h4>
                <p className="text-sm text-muted-foreground">Gestioná tu negocio desde cualquier lugar con la app web responsiva.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dolor mejorado */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-3">¿Tu negocio crece, pero el control sigue siendo manual?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl">Cuando las ventas, el stock y la caja dependen de cuadernos, notas o memoria, es fácil perder tiempo, dinero e información importante.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-xl p-6">
              <h4 className="font-semibold mb-2">Ventas desordenadas</h4>
              <p className="text-sm text-muted-foreground">Registrá cada venta de forma clara y evitá errores al cobrar.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h4 className="font-semibold mb-2">Stock sin control</h4>
              <p className="text-sm text-muted-foreground">Sabé qué productos tenés disponibles y cuáles necesitás reponer.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h4 className="font-semibold mb-2">Caja difícil de cerrar</h4>
              <p className="text-sm text-muted-foreground">Controlá ingresos, egresos y cierres diarios sin complicarte.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h4 className="font-semibold mb-2">Decisiones sin datos</h4>
              <p className="text-sm text-muted-foreground">Consultá reportes para saber qué se vende, cuánto entra y qué conviene mejorar.</p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-4">Todo lo que necesitás para ordenar y hacer crecer tu negocio</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureBlocks.map((b) => (
              <div key={b.title} className="glass rounded-xl p-5 hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-3 mb-3">
                  <b.icon className="size-6 text-cyan-300" />
                  <h4 className="font-semibold">{b.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ideal para */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-3">Ideal para comercios y emprendimientos</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl">Negocio360 se adapta a negocios que venden productos, manejan stock y necesitan ordenar su día a día.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
            {[
              'Kioscos',
              'Tiendas de ropa',
              'Cotillones',
              'Regalerías',
              'Perfumerías',
              'Minimercados',
              'Librerías',
              'Emprendimientos',
              'Locales comerciales',
              'Tiendas con stock variado',
            ].map((t) => (
              <div key={t} className="bg-[#03131a] rounded-full py-2 px-3 text-center text-sm text-primary/90 border border-cyan-500/8">
                {t}
              </div>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden w-full max-w-sm border border-cyan-500/10 shadow-lg">
            <Img src={thumbMobile} alt="Negocio360 celular" fallback={fallbackImage} className="w-full h-56 object-cover rounded-xl" />
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">¿Cómo funciona Negocio360?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-[#02101a] rounded-xl border border-cyan-500/8 text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 mx-auto flex items-center justify-center mb-3 text-cyan-300 font-bold">1</div>
              <h4 className="font-semibold mb-2">Cargás tus productos</h4>
              <p className="text-sm text-muted-foreground">Agregá nombre, precio, stock, categoría, imagen y código.</p>
            </div>
            <div className="p-6 bg-[#02101a] rounded-xl border border-cyan-500/8 text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 mx-auto flex items-center justify-center mb-3 text-cyan-300 font-bold">2</div>
              <h4 className="font-semibold mb-2">Vendés más rápido</h4>
              <p className="text-sm text-muted-foreground">Buscás el producto, lo seleccionás o escaneás el código con la cámara.</p>
            </div>
            <div className="p-6 bg-[#02101a] rounded-xl border border-cyan-500/8 text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 mx-auto flex items-center justify-center mb-3 text-cyan-300 font-bold">3</div>
              <h4 className="font-semibold mb-2">Controlás caja y stock</h4>
              <p className="text-sm text-muted-foreground">Cada movimiento queda registrado para que tengas el negocio ordenado.</p>
            </div>
            <div className="p-6 bg-[#02101a] rounded-xl border border-cyan-500/8 text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 mx-auto flex items-center justify-center mb-3 text-cyan-300 font-bold">4</div>
              <h4 className="font-semibold mb-2">Revisás tus reportes</h4>
              <p className="text-sm text-muted-foreground">Consultás ventas, gastos, ganancias y datos importantes para tomar decisiones.</p>
            </div>
          </div>
        </section>

        {/* Módulos */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-4">Módulos incluidos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureBlocks.map((m) => (
              <div key={m.title} className="p-5 bg-[#02101a] rounded-xl border border-cyan-500/8">
                <div className="flex items-center gap-3 mb-2">
                  <m.icon className="size-5 text-cyan-300" />
                  <h4 className="font-semibold">{m.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tutoriales */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-4">Tutoriales y acompañamiento</h3>
          <p className="text-muted-foreground mb-4">No solo te damos el sistema. Te acompañamos para que aprendas a usarlo paso a paso.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorialList.map((t) => (
              <div key={t.title} className="glass rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold mb-2">{t.title}</h4>
                  <p className="text-sm text-muted-foreground">Guía práctica para {t.title.toLowerCase()}.</p>
                </div>
                <div className="mt-4">
                  {t.youtubeUrl ? (
                    <a href={t.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold">Ver tutorial</a>
                  ) : (
                    <button disabled className="inline-flex items-center gap-2 text-muted-foreground">Próximamente</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="mt-16 text-center">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-3">Ordená tu negocio con una solución simple y profesional</h3>
            <p className="text-muted-foreground mb-6">Negocio360 está pensado para comerciantes que quieren dejar de manejar todo a mano y empezar a tomar decisiones con información clara.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={WHATSAPP_NEGOCIO360} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-cyan-500 px-5 py-3 rounded-full text-black font-semibold">Quiero implementarlo</a>
              <a href="https://www.negocio360.com.ar/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 px-4 py-3 text-cyan-300 font-semibold hover:bg-white/2">Ver sistema <ExternalLink className="size-4" /></a>
            </div>
            <p className="text-muted-foreground mt-4">Te asesoramos sin compromiso.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
