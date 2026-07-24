import React from 'react'
import { ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Negocio360 | Sistema de gestión comercial para negocios',
  description:
    'Sistema de gestión comercial para ventas, stock, caja, clientes, gastos y reportes financieros. Usalo desde el celular, con lector de código mediante cámara.',
}

const NEGOCIO360_YOUTUBE_ID = 'COLOCAR_ID_DEL_VIDEO'
const NEGOCIO360_YOUTUBE_URL = `https://www.youtube.com/embed/${NEGOCIO360_YOUTUBE_ID}`
const WHATSAPP_NEGOCIO360 =
  'https://wa.me/543804661246?text=Hola%2C%20vi%20Negocio360%20y%20quiero%20saber%20c%C3%B3mo%20implementarlo%20en%20mi%20negocio.'

const features = [
  'Control de ventas',
  'Stock actualizado',
  'Caja diaria',
  'Clientes registrados',
  'Gastos ordenados',
  'Reportes financieros',
  'Lector de código con cámara',
  'Uso desde celular',
]

const tutorials = [
  'Cómo cargar un producto',
  'Cómo registrar una venta',
  'Cómo usar el lector de código',
  'Cómo cerrar caja',
  'Cómo ver reportes',
  'Cómo controlar stock',
]

export default function Negocio360Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block text-xs uppercase px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold mb-4">
              Solución destacada
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Negocio360</h1>
            <p className="text-primary font-semibold mb-3">
              Toda tu gestión comercial en un solo lugar.
            </p>
            <p className="text-muted-foreground mb-4 max-w-xl">
              Ventas, stock, caja, clientes, gastos y reportes financieros. Simple,
              rápido y seguro. Controlá tu negocio desde el celular, estés donde
              estés. Negocio360 te ayuda a ordenar tus procesos, vender mejor y
              tomar decisiones con información clara.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a
                href={WHATSAPP_NEGOCIO360}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-primary-foreground font-semibold shadow-md hover:bg-primary/90"
              >
                Lo quiero para mi negocio
              </a>

              <a
                href="https://www.negocio360.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-primary font-semibold hover:bg-primary/5"
              >
                Ver sistema
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="mb-2 text-sm text-muted-foreground">
              Mirá cómo funciona en menos de 2 minutos
            </div>
            <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={NEGOCIO360_YOUTUBE_URL}
                  title="Negocio360 Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dolor */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-3">¿Seguís manejando tu negocio a mano?</h2>
          <p className="text-muted-foreground max-w-2xl mb-6">
            Si todavía anotás ventas en cuadernos, calculás stock manualmente,
            perdés tiempo buscando precios o no sabés cuánto ganaste al final
            del día, Negocio360 es para vos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass rounded-xl p-4">
              <h3 className="font-semibold mb-1">Ventas desordenadas</h3>
              <p className="text-sm text-muted-foreground">Registrá ventas rápido y sin errores.</p>
            </div>
            <div className="glass rounded-xl p-4">
              <h3 className="font-semibold mb-1">Stock sin control</h3>
              <p className="text-sm text-muted-foreground">Controlá entradas, salidas y disponibilidad.</p>
            </div>
            <div className="glass rounded-xl p-4">
              <h3 className="font-semibold mb-1">Caja difícil de cerrar</h3>
              <p className="text-sm text-muted-foreground">Cerrá la caja del día con todo registrado.</p>
            </div>
            <div className="glass rounded-xl p-4">
              <h3 className="font-semibold mb-1">Falta de reportes claros</h3>
              <p className="text-sm text-muted-foreground">Obtené reportes para tomar mejores decisiones.</p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Todo lo que necesitás para ordenar y hacer crecer tu negocio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f} className="glass rounded-xl p-4">
                <h4 className="font-semibold mb-1">{f}</h4>
                <p className="text-sm text-muted-foreground">Descripción breve sobre {f.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ideal para */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-3">Ideal para negocios reales</h2>
          <p className="text-muted-foreground mb-4">Negocio360 se adapta a comercios y emprendimientos que necesitan ordenar su gestión sin complicarse.</p>
          <div className="flex flex-wrap gap-2">
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
              <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">{t}</span>
            ))}
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">¿Cómo funciona Negocio360?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass rounded-xl p-4">
              <h4 className="font-semibold mb-1">1. Cargás tus productos</h4>
              <p className="text-sm text-muted-foreground">Agregá nombre, precio, stock, categoría e imagen.</p>
            </div>
            <div className="glass rounded-xl p-4">
              <h4 className="font-semibold mb-1">2. Vendés de forma rápida</h4>
              <p className="text-sm text-muted-foreground">Buscás el producto, escaneás el código o lo seleccionás desde el sistema.</p>
            </div>
            <div className="glass rounded-xl p-4">
              <h4 className="font-semibold mb-1">3. Controlás caja y stock</h4>
              <p className="text-sm text-muted-foreground">Cada venta actualiza la información para que tengas el control.</p>
            </div>
            <div className="glass rounded-xl p-4">
              <h4 className="font-semibold mb-1">4. Revisás reportes</h4>
              <p className="text-sm text-muted-foreground">Consultás ventas, ganancias, gastos y movimientos para decidir mejor.</p>
            </div>
          </div>
        </section>

        {/* Módulos */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Módulos incluidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Dashboard en vivo',
              'Productos',
              'Stock',
              'Ventas / POS',
              'Caja',
              'Clientes',
              'Gastos',
              'Reportes',
              'Exportación PDF',
              'Administración desde celular',
              'Lector de código con cámara',
              'Configuración del negocio',
            ].map((m) => (
              <div key={m} className="glass rounded-xl p-4">
                <h4 className="font-semibold mb-1">{m}</h4>
                <p className="text-sm text-muted-foreground">{m} incluido.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tutoriales */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Tutoriales y acompañamiento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tutorials.map((t) => (
              <div key={t} className="glass rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold mb-2">{t}</h4>
                  <p className="text-sm text-muted-foreground">Guía práctica para {t.toLowerCase()}.</p>
                </div>
                <a href="#" className="mt-4 inline-flex items-center gap-2 text-primary font-semibold">Ver tutorial</a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="mt-16 text-center">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-3">¿Querés Negocio360 para tu negocio?</h3>
            <p className="text-muted-foreground mb-6">Escribinos y te mostramos cómo podemos adaptarlo a tu comercio. Te ayudamos a implementarlo, configurarlo y empezar a usarlo.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={WHATSAPP_NEGOCIO360} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-primary-foreground font-semibold">Lo quiero para mi negocio</a>
              <a href="https://www.negocio360.com.ar/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-primary font-semibold hover:bg-primary/5">Ver sistema <ExternalLink className="size-4" /></a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
