"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageSquare,
  Send,
  HelpCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de envío de formulario
    setFormStatus({
      submitted: true,
      success: true,
      message: "¡Gracias por contactarnos! Te responderemos a la brevedad.",
    });
    // Resetear formulario después de envío exitoso
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full text-[#9a1b1f] text-sm font-medium mb-4 shadow-sm">
              Estamos aquí para ayudarte
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#9a1b1f] mb-6">
              Contáctanos
            </h1>
            <p className="text-lg text-gray-700 bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              Estamos aquí para responder tus preguntas y brindarte la
              información que necesitas sobre nuestros programas y servicios.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9a1b1f] to-transparent opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#9a1b1f] mb-6 border-b border-[#9a1b1f]/20 pb-2">
                  Información de Contacto
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <div className="bg-[#9a1b1f]/10 p-3 rounded-full group-hover:bg-[#9a1b1f] group-hover:text-white transition-colors">
                      <MapPin className="h-6 w-6 text-[#9a1b1f] group-hover:text-white transition-colors" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold mb-1 text-gray-800">
                        Dirección
                      </h3>
                      <p className="text-gray-700">
                        Calle San Agustín 108 - Arequipa
                      </p>
                      <p className="text-gray-700">Campus Universitario UNSA</p>
                    </div>
                  </div>

                  <div className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <div className="bg-[#9a1b1f]/10 p-3 rounded-full group-hover:bg-[#9a1b1f] group-hover:text-white transition-colors">
                      <Phone className="h-6 w-6 text-[#9a1b1f] group-hover:text-white transition-colors" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold mb-1 text-gray-800">Teléfono</h3>
                      <p className="text-gray-700">
                        054-391911 Anexos 1422-1423-1424
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <div className="bg-[#9a1b1f]/10 p-3 rounded-full group-hover:bg-[#9a1b1f] group-hover:text-white transition-colors">
                      <Mail className="h-6 w-6 text-[#9a1b1f] group-hover:text-white transition-colors" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold mb-1 text-gray-800">Email</h3>
                      <p className="text-gray-700">ceprunsa@unsa.edu.pe</p>
                    </div>
                  </div>

                  <div className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <div className="bg-[#9a1b1f]/10 p-3 rounded-full group-hover:bg-[#9a1b1f] group-hover:text-white transition-colors">
                      <Clock className="h-6 w-6 text-[#9a1b1f] group-hover:text-white transition-colors" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold mb-1 text-gray-800">
                        Horario de Atención
                      </h3>
                      <p className="text-gray-700">
                        Lunes a Viernes: 8:30 AM - 3:30 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="font-bold text-lg mb-4 text-[#9a1b1f]">
                    Síguenos en redes sociales
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/ceprunsaoficial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#9a1b1f] to-[#7a1518] text-white p-3 rounded-full hover:shadow-lg transition-all transform hover:-translate-y-1"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#9a1b1f] to-[#7a1518] text-white p-3 rounded-full hover:shadow-lg transition-all transform hover:-translate-y-1"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.youtube.com/@EventosCeprunsa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#9a1b1f] to-[#7a1518] text-white p-3 rounded-full hover:shadow-lg transition-all transform hover:-translate-y-1"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-[#9a1b1f] mr-3" />
                  <h2 className="text-2xl font-bold text-[#9a1b1f]">
                    Envíanos un mensaje
                  </h2>
                </div>

                {formStatus.submitted && (
                  <div
                    className={`p-4 mb-6 rounded-md ${
                      formStatus.success
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : "bg-red-100 text-red-700 border border-red-200"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2 group-hover:text-[#9a1b1f] transition-colors"
                      >
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9a1b1f] focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
                        placeholder="Ingresa tu nombre completo"
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2 group-hover:text-[#9a1b1f] transition-colors"
                      >
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9a1b1f] focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
                        placeholder="ejemplo@correo.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-medium mb-2 group-hover:text-[#9a1b1f] transition-colors"
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9a1b1f] focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
                        placeholder="(Opcional) 999-999-999"
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 font-medium mb-2 group-hover:text-[#9a1b1f] transition-colors"
                      >
                        Asunto *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9a1b1f] focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
                        placeholder="¿En qué podemos ayudarte?"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2 group-hover:text-[#9a1b1f] transition-colors"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9a1b1f] focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="btn-primary flex items-center justify-center w-full md:w-auto"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Enviar mensaje
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-b gradient-bg opacity-85 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9a1b1f]/20 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9a1b1f]/20 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <h2 className="section-title mb-0">Nuestra ubicación</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-3 rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="h-96 rounded-lg overflow-hidden relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.6548710753!2d-71.53800492394826!3d-16.399097337347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a59ffb7c68d%3A0x7ea3e65fe4a9b9bd!2sCalle%20San%20Agust%C3%ADn%20108%2C%20Arequipa%2004001!5e0!3m2!1ses-419!2spe!4v1709606848048!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de CEPRUNSA"
                  aria-label="Mapa de ubicación de CEPRUNSA"
                  className="z-0"
                ></iframe>
              </div>
            </div>
            <div className="text-center mt-4 text-gray-600">
              <p>
                Visítanos en{" "}
                <span className="font-medium text-[#9a1b1f]">
                  Calle San Agustín 108, Arequipa
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-8">
            <h2 className="section-title mb-0">Preguntas frecuentes</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card hover:shadow-lg transition-all border-l-4 border-l-[#9a1b1f] bg-gradient-to-r from-[#9a1b1f]/5 to-white">
              <h3 className="text-xl font-bold text-[#9a1b1f] mb-2">
                ¿Cuándo inician las inscripciones?
              </h3>
              <p className="text-gray-700">
                Las inscripciones para nuestros diferentes ciclos se abren
                aproximadamente un mes antes del inicio de clases. Te
                recomendamos estar atento a nuestras redes sociales y página web
                para conocer las fechas exactas.
              </p>
            </div>

            <div className="card hover:shadow-lg transition-all border-l-4 border-l-[#d4af37] bg-gradient-to-r from-[#d4af37]/5 to-white">
              <h3 className="text-xl font-bold text-[#9a1b1f] mb-2">
                ¿Qué documentos necesito para inscribirme?
              </h3>
              <p className="text-gray-700">
                Para inscribirte necesitas presentar tu DNI, una fotografía
                tamaño carnet y, en caso de ser menor de edad, debes venir
                acompañado de un apoderado.
              </p>
            </div>

            <div className="card hover:shadow-lg transition-all border-l-4 border-l-[#9a1b1f] bg-gradient-to-r from-[#9a1b1f]/5 to-white">
              <h3 className="text-xl font-bold text-[#9a1b1f] mb-2">
                ¿Ofrecen becas o descuentos?
              </h3>
              <p className="text-gray-700">
                Sí, ofrecemos becas por rendimiento académico y descuentos para
                hermanos, hijos de docentes UNSA y para estudiantes de bajos
                recursos. Para más información, puedes acercarte a nuestras
                oficinas o contactarnos directamente.
              </p>
            </div>

            <div className="card hover:shadow-lg transition-all border-l-4 border-l-[#d4af37] bg-gradient-to-r from-[#d4af37]/5 to-white">
              <h3 className="text-xl font-bold text-[#9a1b1f] mb-2">
                ¿Puedo cambiar de horario durante el ciclo?
              </h3>
              <p className="text-gray-700">
                Sí, es posible cambiar de horario durante el ciclo, siempre y
                cuando haya disponibilidad en el horario al que deseas
                cambiarte. Debes solicitar el cambio en la oficina de
                coordinación académica.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#9a1b1f] to-[#7a1518] text-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <HelpCircle className="h-5 w-5 mr-2" />
              Ver más preguntas frecuentes
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
