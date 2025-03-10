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
  AlertCircle,
  CheckCircle,
} from "lucide-react";

// Componente de acordeón para preguntas frecuentes
const FaqAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 ${
        isOpen ? "shadow-md" : "shadow-sm"
      }`}
    >
      <button
        className={`w-full text-left p-4 flex justify-between items-center focus:outline-none ${
          isOpen ? "bg-[#f9e6e7]" : "bg-white hover:bg-gray-50"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3
          className={`font-bold text-lg ${
            isOpen ? "text-[#9a1b1f]" : "text-gray-800"
          }`}
        >
          {question}
        </h3>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${isOpen ? "text-[#9a1b1f]" : "text-gray-500"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-white border-t border-gray-50">
          {typeof answer === "string" ? (
            <p className="text-gray-700">{answer}</p>
          ) : (
            answer
          )}
        </div>
      </div>
    </div>
  );
};

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
    loading: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Iniciar estado de carga
    setFormStatus({
      submitted: false,
      success: false,
      message: "",
      loading: true,
    });

    // Simulación de envío (reemplazar con tu lógica de envío real)
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "¡Gracias por contactarnos! Te responderemos a la brevedad.",
        loading: false,
      });

      // Resetear formulario después de envío exitoso
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
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
                    className={`p-4 mb-6 rounded-md flex items-start ${
                      formStatus.success
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {formStatus.success ? (
                      <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    )}
                    <span>{formStatus.message}</span>
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
                        disabled={formStatus.loading}
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
                        disabled={formStatus.loading}
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
                        disabled={formStatus.loading}
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
                        disabled={formStatus.loading}
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
                      disabled={formStatus.loading}
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className={`btn-primary flex items-center justify-center w-full md:w-auto ${
                        formStatus.loading
                          ? "opacity-70 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={formStatus.loading}
                    >
                      {formStatus.loading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Enviando mensaje...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar mensaje
                        </>
                      )}
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
          <div className="max-w-3xl mx-auto space-y-4">
            <FaqAccordion
              question="¿Cómo puedo ingresar a las clases del CEPRUNSA?"
              answer={
                <div className="space-y-2">
                  <p>Para ingresar a las clases, sigue estos pasos:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>
                      Utiliza la cuenta CEPRUNSA que se te brindó al momento de
                      tu inscripción.
                    </li>
                    <li>
                      Ingresa a la plataforma Google Classroom con dicha cuenta.
                    </li>
                    <li>
                      Desde el Classroom, accede al enlace de Google Meet
                      correspondiente para unirte a la sesión.
                    </li>
                  </ol>
                </div>
              }
            />

            <FaqAccordion
              question="¿Cómo puedo realizar el pago de las cuotas?"
              answer={
                <div className="space-y-2">
                  <p>
                    El pago de las cuotas se realiza con el código brindado al
                    momento de tu inscripción. Puedes realizarlo a través de
                    cualquier canal del BCP, como:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Agentes BCP</li>
                    <li>Banca móvil</li>
                    <li>Banca por internet</li>
                    <li>Yape</li>
                  </ul>
                  <p>
                    En todos estos canales, utiliza la cuenta{" "}
                    <strong>UNSA-VIRTUAL</strong> para completar la transacción.
                  </p>
                </div>
              }
            />

            <FaqAccordion
              question="¿Puedo retirarme o solicitar la exoneración de cuotas del CEPRUNSA?"
              answer={
                <div className="space-y-2">
                  <p>
                    Según el Reglamento de Admisión, aprobado con Resolución de
                    Consejo Universitario N° 219-2024, de fecha 21 de mayo del
                    2024, establece:
                  </p>
                  <p>
                    <strong>Artículo 64°:</strong> El postulante no puede
                    solicitar, bajo ningún concepto:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>64.1. Devolución y/o reembolso del monto abonado.</li>
                    <li>64.2. Exoneración de deuda.</li>
                  </ul>
                </div>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
