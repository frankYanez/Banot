'use client'

import { motion } from 'framer-motion'
import { Users, Target, Award, Lightbulb, CheckCircle, Star } from 'lucide-react'

const stats = [
  { icon: Users, number: "500+", label: "Proyectos Exitosos" },
  { icon: Award, number: "99%", label: "Satisfacción Cliente" },
  { icon: Target, number: "5+", label: "Años Experiencia" },
  { icon: Star, number: "4.9/5", label: "Rating Promedio" }
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "Utilizamos las últimas tecnologías y metodologías para crear soluciones que marcan la diferencia en el mercado."
  },
  {
    icon: Users,
    title: "Enfoque Colaborativo",
    description: "Trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades y superar sus expectativas."
  },
  {
    icon: Target,
    title: "Resultados Medibles",
    description: "Cada proyecto está diseñado para generar un impacto positivo y medible en el crecimiento de tu negocio."
  },
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Mantenemos los más altos estándares de calidad en cada línea de código y cada pixel de diseño."
  }
]

const process = [
  {
    step: "01",
    title: "Análisis y Estrategia",
    description: "Estudiamos tu negocio, objetivos y desafíos para diseñar la mejor estrategia digital."
  },
  {
    step: "02", 
    title: "Diseño y Prototipado",
    description: "Creamos prototipos interactivos y diseños que validamos contigo antes del desarrollo."
  },
  {
    step: "03",
    title: "Desarrollo Ágil",
    description: "Desarrollamos tu solución con metodologías ágiles, manteniendo comunicación constante."
  },
  {
    step: "04",
    title: "Lanzamiento y Soporte",
    description: "Lanzamos tu solución y proporcionamos soporte continuo para asegurar el éxito."
  }
]

const testimonials = [
  {
    name: "María González",
    company: "CEO, TechStart",
    content: "Digital Solutions IA transformó completamente nuestro negocio. Su solución de automatización aumentó nuestra eficiencia en un 300%.",
    rating: 5
  },
  {
    name: "Carlos Rodríguez",
    company: "CTO, InnovateCorp",
    content: "El equipo demuestra un nivel técnico excepcional y una comprensión profunda de las necesidades del negocio.",
    rating: 5
  },
  {
    name: "Ana Martín",
    company: "Founder, EcoTech",
    content: "Profesionales de primer nivel que entregan resultados que superan las expectativas. Totalmente recomendados.",
    rating: 5
  }
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-dark-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-gold-base/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gold-light/5 rounded-full blur-3xl" />
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
            <span className="text-gold-base text-sm font-medium">Sobre Nosotros</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Construyendo el{' '}
            <span className="text-gradient">Futuro Digital</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Somos una empresa especializada en transformar negocios a través de soluciones digitales innovadoras, 
            automatización inteligente y experiencias de usuario excepcionales.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold-light to-gold-base rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-heading font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-text-secondary font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          <div className="glass-card p-8">
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-6 flex items-center">
              <Target className="w-6 h-6 text-gold-base mr-3" />
              Nuestra Misión
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Democratizar el acceso a la tecnología de inteligencia artificial y soluciones digitales avanzadas, 
              permitiendo que empresas de todos los tamaños puedan competir en la economía digital del siglo XXI.
            </p>
            <ul className="space-y-3">
              {[
                "Automatización accesible para todos",
                "Innovación sin complejidad",
                "Resultados medibles y sostenibles"
              ].map((item) => (
                <li key={item} className="flex items-center text-text-secondary">
                  <CheckCircle className="w-5 h-5 text-gold-base mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-6 flex items-center">
              <Lightbulb className="w-6 h-6 text-gold-base mr-3" />
              Nuestra Visión
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Ser el socio tecnológico de confianza que impulse la transformación digital de empresas, 
              creando un futuro donde la inteligencia artificial y la creatividad humana se complementen perfectamente.
            </p>
            <ul className="space-y-3">
              {[
                "Líderes en IA aplicada",
                "Pioneros en experiencias digitales",
                "Catalizadores de crecimiento empresarial"
              ].map((item) => (
                <li key={item} className="flex items-center text-text-secondary">
                  <CheckCircle className="w-5 h-5 text-gold-base mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-heading font-bold text-text-primary text-center mb-12">
            Nuestros <span className="text-gradient">Valores</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-light to-gold-base rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-text-primary mb-3">
                  {value.title}
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-heading font-bold text-text-primary text-center mb-12">
            Nuestro <span className="text-gradient">Proceso</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-card p-6 h-full">
                  <div className="text-4xl font-heading font-bold text-gold-base mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-text-primary mb-3">
                    {step.title}
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gold-base to-transparent transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-heading font-bold text-text-primary text-center mb-12">
            Lo que dicen nuestros <span className="text-gradient">Clientes</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card p-6"
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-base fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-text-secondary leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="border-t border-dark-border pt-4">
                  <div className="font-semibold text-text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}