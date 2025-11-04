'use client'

import { motion } from 'framer-motion'
import { Sparkles, Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram, ArrowUp } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Automatización con IA', href: '#servicios' },
    { name: 'Diseño de Apps', href: '#servicios' },
    { name: 'Desarrollo Web', href: '#servicios' },
    { name: 'E-commerce', href: '#servicios' }
  ],
  company: [
    { name: 'Sobre Nosotros', href: '#nosotros' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#' },
    { name: 'Carreras', href: '#' }
  ],
  support: [
    { name: 'Contacto', href: '#contacto' },
    { name: 'Soporte', href: '#' },
    { name: 'Documentación', href: '#' },
    { name: 'Estado del Sistema', href: '#' }
  ],
  legal: [
    { name: 'Privacidad', href: '#' },
    { name: 'Términos', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'GDPR', href: '#' }
  ]
}

const socialLinks = [
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Github, href: '#', name: 'GitHub' },
  { icon: Instagram, href: '#', name: 'Instagram' }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-surface border-t border-dark-border relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold-base/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gold-light/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Logo */}
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gold-light to-gold-base rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-black" />
                </div>
                <span className="font-heading font-bold text-2xl text-text-primary">
                  Digital<span className="text-gradient">IA</span>
                </span>
              </motion.div>

              <p className="text-text-secondary leading-relaxed">
                Transformamos negocios con soluciones digitales innovadoras y automatización inteligente. 
                Construimos el futuro de tu empresa con tecnología de vanguardia.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-text-secondary">
                  <Mail className="w-5 h-5 text-gold-base" />
                  <span>hola@digitalsolutionsia.com</span>
                </div>
                <div className="flex items-center space-x-3 text-text-secondary">
                  <Phone className="w-5 h-5 text-gold-base" />
                  <span>+34 900 123 456</span>
                </div>
                <div className="flex items-center space-x-3 text-text-secondary">
                  <MapPin className="w-5 h-5 text-gold-base" />
                  <span>Madrid, España</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center text-text-secondary hover:text-gold-base hover:border-gold-base/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {/* Services */}
              <div>
                <h4 className="font-heading font-semibold text-text-primary mb-4">
                  Servicios
                </h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-text-secondary hover:text-gold-base transition-colors duration-200"
                        whileHover={{ x: 5 }}
                        onClick={(e) => {
                          e.preventDefault()
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                        }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-heading font-semibold text-text-primary mb-4">
                  Empresa
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-text-secondary hover:text-gold-base transition-colors duration-200"
                        whileHover={{ x: 5 }}
                        onClick={(e) => {
                          e.preventDefault()
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                        }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-heading font-semibold text-text-primary mb-4">
                  Soporte
                </h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-text-secondary hover:text-gold-base transition-colors duration-200"
                        whileHover={{ x: 5 }}
                        onClick={(e) => {
                          e.preventDefault()
                          if (link.href === '#contacto') {
                            document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                          }
                        }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-heading font-semibold text-text-primary mb-4">
                  Legal
                </h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-text-secondary hover:text-gold-base transition-colors duration-200"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8 border-t border-dark-border"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-heading font-semibold text-text-primary mb-4">
              Mantente al día con nuestras novedades
            </h4>
            <p className="text-text-secondary mb-6">
              Recibe insights sobre IA, tendencias tecnológicas y casos de éxito directamente en tu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:border-gold-base focus:ring-1 focus:ring-gold-base transition-colors duration-300"
              />
              <motion.button
                className="px-6 py-3 bg-gold-base hover:bg-gold-light text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-gold-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Suscribirse
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text-secondary text-sm">
              © {currentYear} Digital Solutions IA. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-text-secondary">
              <span>Hecho con ❤️ en España</span>
              <motion.button
                onClick={scrollToTop}
                className="w-8 h-8 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center text-text-secondary hover:text-gold-base hover:border-gold-base/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}