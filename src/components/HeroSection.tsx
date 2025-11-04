'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'

// 3D Neural Network Component (CSS Based)
function NeuralNetwork3D() {
  const [hovered, setHovered] = useState(false)

  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    angle: (i / 12) * Math.PI * 2,
    radius: 80 + Math.sin(i * 0.5) * 20,
    size: Math.random() * 8 + 4
  }))

  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Central Core */}
      <motion.div
        className={`absolute w-24 h-24 rounded-full bg-gradient-to-br from-gold-light to-gold-base flex items-center justify-center shadow-2xl ${
          hovered ? 'shadow-gold-glow' : ''
        }`}
        animate={{
          rotateY: hovered ? 360 : 0,
          scale: hovered ? 1.2 : 1
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm" />
      </motion.div>

      {/* Orbiting Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-gold-light to-gold-base shadow-lg"
          animate={{
            x: Math.cos(node.angle) * node.radius,
            y: Math.sin(node.angle) * node.radius,
          }}
          transition={{
            duration: 10 + node.id,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: `${node.size}px`,
            height: `${node.size}px`
          }}
        />
      ))}

      {/* Connection Lines */}
      {nodes.slice(0, 8).map((node, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-0.5 bg-gradient-to-r from-gold-base to-transparent origin-left"
          animate={{
            width: node.radius * 0.8,
            rotate: (node.angle * 180) / Math.PI,
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            transformOrigin: 'left center'
          }}
        />
      ))}
    </div>
  )
}

// Floating Particles
function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 15 + 5,
    opacity: Math.random() * 0.8 + 0.2
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-gold-light to-gold-base"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [particle.opacity, 0, particle.opacity],
            x: [0, Math.random() * 50 - 25, 0]
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

// 3D Hexagon Ring
function HexagonRing() {
  const hexagons = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    angle: (i / 6) * Math.PI * 2,
    radius: 120
  }))

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {hexagons.map((hex) => (
        <motion.div
          key={hex.id}
          className="absolute w-12 h-12 border-2 border-gold-base/30 rounded-lg backdrop-blur-sm"
          animate={{
            x: Math.cos(hex.angle) * hex.radius,
            y: Math.sin(hex.angle) * hex.radius,
            rotateZ: 45,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-gold-base/10 to-gold-light/5 rounded-lg" />
        </motion.div>
      ))}
    </div>
  )
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5)
      mouseY.set(e.clientY / window.innerHeight - 0.5)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const stats = [
    { number: "500+", label: "Proyectos Completados" },
    { number: "99%", label: "Satisfacción del Cliente" },
    { number: "24/7", label: "Soporte Técnico" }
  ]

  return (
    <section 
      ref={containerRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-page"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-10" />
        <img 
          src="/imgs/hero_ai_background_6.png"
          alt="AI Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* 3D CSS Animations */}
      <div className="absolute inset-0 z-10 opacity-70 flex items-center justify-center">
        <div className="relative w-full h-full">
          <NeuralNetwork3D />
          <HexagonRing />
        </div>
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center px-4 py-2 bg-dark-card border border-gold-base/30 rounded-full backdrop-blur-card"
          >
            <span className="text-gold-base text-sm font-medium">
              ✨ Revolucionando el futuro digital
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-hero font-heading font-bold text-text-primary leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Soluciones Digitales con{' '}
            <span className="text-gradient glow-hover">
              Inteligencia Artificial
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Transformamos tu negocio con automatización inteligente, desarrollo web profesional, 
            diseño de aplicaciones móviles y soluciones ecommerce innovadoras.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="px-8 py-4 bg-gold-base hover:bg-gold-light text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-gold-glow glow-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explorar Soluciones
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border border-gold-base/50 text-gold-base hover:bg-gold-base/10 font-semibold rounded-lg transition-all duration-300 backdrop-blur-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Portfolio
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl sm:text-4xl font-heading font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-text-secondary font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold-base/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gold-base rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}