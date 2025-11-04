'use client'

import { motion } from 'framer-motion'
import { Smartphone, Globe, ShoppingCart, Brain, ArrowRight, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: "Automatización con IA",
    description: "Implementamos soluciones de inteligencia artificial que automatizan procesos complejos, optimizan operaciones y generan insights valiosos para tu negocio.",
    image: "/imgs/ai_automation_3.jpg",
    features: ["Machine Learning", "Procesamiento de Lenguaje Natural", "Análisis Predictivo", "Automatización de Procesos"]
  },
  {
    icon: Smartphone,
    title: "Diseño de Aplicaciones",
    description: "Creamos aplicaciones móviles nativas e híbridas con diseño intuitivo, rendimiento excepcional y experiencias de usuario memorables.",
    image: "/imgs/app_development_9.jpg",
    features: ["UI/UX Design", "Desarrollo iOS/Android", "Apps Híbridas", "Testing y QA"]
  },
  {
    icon: Globe,
    title: "Desarrollo Web Profesional",
    description: "Desarrollamos sitios web modernos, escalables y seguros utilizando las últimas tecnologías y mejores prácticas de la industria.",
    image: "/imgs/web_development_4.png",
    features: ["React/Next.js", "E-commerce", "CMS Personalizados", "Optimización SEO"]
  },
  {
    icon: ShoppingCart,
    title: "Soluciones E-commerce",
    description: "Construimos plataformas de comercio electrónico completas con gestión de inventario, pagos seguros y experiencias de compra optimizadas.",
    image: "/imgs/ecommerce_solutions_8.jpg",
    features: ["Plataformas E-commerce", "Gestión de Inventario", "Pasarelas de Pago", "Analytics"]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-dark-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245, 184, 46, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-dark-card border border-gold-base/30 rounded-full backdrop-blur-card mb-6"
          >
            <Sparkles className="w-4 h-4 text-gold-base mr-2" />
            <span className="text-gold-base text-sm font-medium">Nuestros Servicios</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Soluciones{' '}
            <span className="text-gradient">Innovadoras</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Ofrecemos un conjunto completo de servicios digitales diseñados para transformar 
            tu negocio y llevarlo al siguiente nivel con tecnología de vanguardia.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="glass-card gradient-gold-border glow-hover h-full flex flex-col overflow-hidden">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-gold-base/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-3 group-hover:text-gold-base transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-text-secondary"
                      >
                        <div className="w-1.5 h-1.5 bg-gold-base rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="flex items-center text-gold-base hover:text-gold-light font-medium transition-colors duration-300 group/btn"
                    whileHover={{ x: 5 }}
                  >
                    <span>Saber más</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-card opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-card bg-gradient-to-r from-gold-base/5 via-transparent to-gold-base/5" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-text-secondary mb-6">
              Contáctanos para discutir tu proyecto y descubrir cómo podemos ayudarte 
              a alcanzar tus objetivos con tecnología de vanguardia.
            </p>
            <motion.button
              className="px-8 py-3 bg-gold-base hover:bg-gold-light text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-gold-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Consulta Gratuita
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}