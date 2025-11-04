'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Calendar, Users, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: "Sistema de IA para E-commerce",
    category: "Automatización IA",
    description: "Plataforma inteligente que optimiza automáticamente precios, inventarios y recomendaciones personalizadas usando machine learning.",
    image: "/imgs/ai_automation_2.png",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
    results: [
      { icon: TrendingUp, label: "Incremento de Ventas", value: "340%" },
      { icon: Users, label: "Satisfacción Cliente", value: "94%" },
      { icon: Calendar, label: "ROI en", value: "6 meses" }
    ],
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 2,
    title: "App Móvil de Salud",
    category: "Desarrollo Móvil",
    description: "Aplicación de seguimiento de salud con análisis de datos biométricos, recordatorios inteligentes y reportes médicos automatizados.",
    image: "/imgs/app_development_4.png",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    results: [
      { icon: Users, label: "Usuarios Activos", value: "50K+" },
      { icon: TrendingUp, label: "Rating", value: "4.8/5" },
      { icon: Calendar, label: "Descargas", value: "100K+" }
    ],
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 3,
    title: "Marketplace B2B",
    category: "Desarrollo Web",
    description: "Plataforma de comercio electrónico B2B con gestión avanzada de usuarios, integración ERP y sistema de pagos personalizado.",
    image: "/imgs/web_development_9.jpg",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    results: [
      { icon: TrendingUp, label: "Transacciones", value: "$2M+" },
      { icon: Users, label: "Empresas", value: "500+" },
      { icon: Calendar, label: "Uptime", value: "99.9%" }
    ],
    link: "#",
    github: "#",
    featured: false
  },
  {
    id: 4,
    title: "Plataforma Educativa IA",
    category: "Soluciones E-commerce",
    description: "Sistema de aprendizaje personalizado que adapta contenido según el progreso del estudiante usando algoritmos de IA.",
    image: "/imgs/ecommerce_solutions_0.jpg",
    technologies: ["Vue.js", "Python", "FastAPI", "Redis"],
    results: [
      { icon: TrendingUp, label: "Mejora Rendimiento", value: "85%" },
      { icon: Users, label: "Estudiantes", value: "25K+" },
      { icon: Calendar, label: "Países", value: "12" }
    ],
    link: "#",
    github: "#",
    featured: false
  },
  {
    id: 5,
    title: "Dashboard Analítico",
    category: "Automatización IA",
    description: "Panel de control inteligente que procesa big data en tiempo real y genera insights automatizados para la toma de decisiones.",
    image: "/imgs/ai_automation_5.png",
    technologies: ["React", "D3.js", "Python", "Elasticsearch"],
    results: [
      { icon: TrendingUp, label: "Reducción Tiempo", value: "75%" },
      { icon: Users, label: "KPIs Monitoreados", value: "200+" },
      { icon: Calendar, label: "Alertas Automáticas", value: "24/7" }
    ],
    link: "#",
    github: "#",
    featured: false
  },
  {
    id: 6,
    title: "App de Delivery",
    category: "Desarrollo Móvil",
    description: "Aplicación de entrega con rutas optimizadas por IA, tracking en tiempo real y sistema de recomendaciones de restaurantes.",
    image: "/imgs/app_development_3.jpg",
    technologies: ["Flutter", "Firebase", "Google Maps API", "ML Kit"],
    results: [
      { icon: TrendingUp, label: "Eficiencia Rutas", value: "60%" },
      { icon: Users, label: "Usuarios", value: "75K+" },
      { icon: Calendar, label: "Deliveries", value: "500K+" }
    ],
    link: "#",
    github: "#",
    featured: false
  }
]

const categories = ["Todos", "Automatización IA", "Desarrollo Móvil", "Desarrollo Web", "Soluciones E-commerce"]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-dark-page relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gold-base/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-light/5 rounded-full blur-3xl" />
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
            <span className="text-gold-base text-sm font-medium">Nuestro Trabajo</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Portfolio de{' '}
            <span className="text-gradient">Proyectos</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Descubre cómo hemos transformado negocios con soluciones innovadoras, 
            creando experiencias digitales que generan resultados reales.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold-base text-black shadow-gold-glow'
                  : 'bg-dark-card text-text-secondary border border-dark-border hover:text-gold-base hover:border-gold-base/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-heading font-semibold text-text-primary mb-8 text-center">
            Proyectos Destacados
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="glass-card gradient-gold-border overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <motion.button
                          className="w-12 h-12 bg-gold-base/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-5 h-5 text-black" />
                        </motion.button>
                        <motion.button
                          className="w-12 h-12 bg-dark-card/90 backdrop-blur-sm border border-gold-base/50 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-5 h-5 text-gold-base" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-gold-base/20 text-gold-base text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-text-secondary group-hover:text-gold-base transition-colors duration-300" />
                    </div>
                    
                    <h4 className="text-xl font-heading font-semibold text-text-primary group-hover:text-gold-base transition-colors duration-300">
                      {project.title}
                    </h4>
                    
                    <p className="text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-surface text-text-secondary text-sm rounded-lg border border-dark-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-dark-border">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <result.icon className="w-5 h-5 text-gold-base mx-auto mb-1" />
                          <div className="text-sm font-semibold text-text-primary">{result.value}</div>
                          <div className="text-xs text-text-secondary">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        {filteredProjects.filter(project => !project.featured).length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-8 text-center">
              Otros Proyectos
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.filter(project => !project.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="glass-card overflow-hidden h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="mb-2">
                        <span className="text-xs text-gold-base font-medium">{project.category}</span>
                      </div>
                      
                      <h4 className="text-lg font-heading font-semibold text-text-primary mb-2 group-hover:text-gold-base transition-colors duration-300">
                        {project.title}
                      </h4>
                      
                      <p className="text-text-secondary text-sm mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-dark-surface text-text-secondary text-xs rounded border border-dark-border"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-dark-surface text-text-secondary text-xs rounded border border-dark-border">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Results Preview */}
                      <div className="flex justify-between text-center border-t border-dark-border pt-3">
                        {project.results.slice(0, 2).map((result, resultIndex) => (
                          <div key={resultIndex}>
                            <div className="text-sm font-semibold text-gold-base">{result.value}</div>
                            <div className="text-xs text-text-secondary">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              ¿Tienes una idea de proyecto?
            </h3>
            <p className="text-text-secondary mb-6">
              Convertimos ideas innovadoras en soluciones digitales que impulsan el crecimiento 
              y transforman la manera en que las empresas operan.
            </p>
            <motion.button
              className="px-8 py-3 bg-gold-base hover:bg-gold-light text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-gold-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Iniciar Mi Proyecto
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}