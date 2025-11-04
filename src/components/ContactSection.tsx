'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle, Calendar } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hola@digitalsolutionsia.com",
    description: "Respuesta en menos de 24 horas"
  },
  {
    icon: Phone,
    title: "Teléfono",
    value: "+34 900 123 456",
    description: "Lun - Vie: 9:00 - 18:00"
  },
  {
    icon: MapPin,
    title: "Oficina",
    value: "Madrid, España",
    description: "Reuniones presencial/virtual"
  },
  {
    icon: Clock,
    title: "Soporte",
    value: "24/7",
    description: "Soporte técnico continuo"
  }
]

const services = [
  "Automatización con IA",
  "Diseño de Aplicaciones",
  "Desarrollo Web",
  "Soluciones E-commerce",
  "Consultoría Digital",
  "Otro"
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <section id="contacto" className="py-20 bg-dark-page relative overflow-hidden">
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
            <span className="text-gold-base text-sm font-medium">Hablemos</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            ¿Listo para{' '}
            <span className="text-gradient">Transformar</span>{' '}
            tu Negocio?
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Agenda una consulta gratuita y descubre cómo podemos impulsar tu empresa 
            con soluciones digitales innovadoras y automatización inteligente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-heading font-semibold text-text-primary mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 text-gold-base mr-3" />
                Envíanos un Mensaje
              </h3>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:border-gold-base focus:ring-1 focus:ring-gold-base transition-colors duration-300"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:border-gold-base focus:ring-1 focus:ring-gold-base transition-colors duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:border-gold-base focus:ring-1 focus:ring-gold-base transition-colors duration-300"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">
                      Servicio de Interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-text-primary focus:border-gold-base focus:ring-1 focus:ring-gold-base transition-colors duration-300"
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:border-gold-base focus:ring-1 focus:ring-gold-base transition-colors duration-300 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 bg-gold-base hover:bg-gold-light disabled:bg-gold-base/50 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-gold-glow disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2"
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-heading font-semibold text-text-primary mb-2">
                    ¡Mensaje Enviado!
                  </h4>
                  <p className="text-text-secondary">
                    Te responderemos en menos de 24 horas.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  className="glass-card p-6 flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-light to-gold-base rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-text-primary mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gold-base font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h4 className="text-xl font-heading font-semibold text-text-primary mb-4">
                ¿Prefieres una videollamada?
              </h4>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Agenda una consulta gratuita de 30 minutos donde analizaremos tu proyecto 
                y te mostraremos cómo podemos ayudarte.
              </p>
              <motion.button
                className="w-full flex items-center justify-center px-6 py-3 border border-gold-base text-gold-base hover:bg-gold-base hover:text-black font-semibold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta Gratuita
              </motion.button>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-r from-gold-base/10 to-gold-light/10 border border-gold-base/20 rounded-lg"
            >
              <Clock className="w-8 h-8 text-gold-base mx-auto mb-3" />
              <h4 className="font-heading font-semibold text-text-primary mb-2">
                Respuesta Rápida
              </h4>
              <p className="text-text-secondary text-sm">
                Típicamente respondemos en menos de <strong className="text-gold-base">4 horas</strong> 
                durante días laborables.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}