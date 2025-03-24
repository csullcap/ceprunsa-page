import { Link } from "react-router-dom";
import { ChevronRight, GraduationCap, Bookmark, Star } from "lucide-react";
import { admissionProcesses, introCards } from "../data/processes-data";

const Processes = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%239a1b1f%22 fillOpacity=%220.03%22 fillRule=%22evenodd%22%3E%3Ccircle cx=%223%22 cy=%223%22 r=%223%22/%3E%3Ccircle cx=%2213%22 cy=%2213%22 r=%223%22/%3E%3C/g%3E%3C/svg%3E')] opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full text-[#9a1b1f] text-sm font-medium mb-4 shadow-sm">
              Tu camino hacia la excelencia académica
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#9a1b1f] mb-6">
              Procesos de Admisión
            </h1>
            <p className="text-lg text-gray-700 bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              CEPRUNSA te ofrece diferentes modalidades de preparación adaptadas
              a tus necesidades específicas. Conoce nuestros procesos y elige el
              que mejor se ajuste a tu situación académica y objetivos
              profesionales.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#9a1b1f] mb-6">
              ¿Cómo elegir tu proceso de admisión?
            </h2>
            <p className="text-gray-700 mb-8">
              En la Universidad Nacional de San Agustín de Arequipa, ofrecemos
              diferentes vías de ingreso para adaptarnos a las diversas
              necesidades y perfiles de nuestros postulantes. Cada proceso tiene
              características específicas diseñadas para evaluar tus
              conocimientos y habilidades de manera justa y efectiva.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {introCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="bg-[#9a1b1f]/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <card.icon className="h-8 w-8 text-[#9a1b1f]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9a1b1f] to-transparent opacity-20"></div>
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Nuestros Procesos de Admisión</h2>
          <div className="grid grid-cols-1 gap-16">
            {admissionProcesses.map((process, index) => (
              <div
                key={process.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
              >
                <div className="flex flex-col lg:flex-row">
                  <div
                    className={`lg:w-2/5 relative ${
                      index % 2 !== 0 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="h-full">
                      <img
                        src={process.image || "/placeholder.svg"}
                        alt={`Proceso de admisión CEPRUNSA ${process.title}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 flex flex-col justify-end p-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm w-fit mb-2">
                          <Bookmark className="h-4 w-4 mr-1" />
                          {process.tag}
                        </span>
                        <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-sm">
                          {process.title}
                        </h2>
                        <p className="text-white/90 text-sm">
                          {process.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`lg:w-3/5 p-8 ${
                      index % 2 !== 0 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="h-8 w-1 bg-[#9a1b1f] rounded-full mr-3"></div>
                      <h3 className="text-2xl font-bold text-[#9a1b1f]">
                        {process.subtitle}
                      </h3>
                    </div>

                    <p className="text-gray-700 mb-6 bg-gray-50 p-4 rounded-lg border-l-2 border-[#9a1b1f]/20">
                      {process.description}
                    </p>

                    {process.details && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {process.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center bg-gray-50 p-3 rounded-lg"
                          >
                            <detail.icon className="h-6 w-6 text-[#9a1b1f] mb-2" />
                            <h4 className="font-bold text-sm text-gray-800">
                              {detail.title}
                            </h4>
                            <p className="text-gray-600 text-xs text-center">
                              {detail.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {process.benefits && (
                      <div className="mb-6">
                        <h3 className="font-bold text-lg mb-3 text-[#9a1b1f] flex items-center">
                          <Star className="h-5 w-5 mr-2" />
                          Beneficios:
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {process.benefits.map((benefit, idx) => (
                            <div
                              key={idx}
                              className="flex items-start bg-gray-50 p-3 rounded-lg"
                            >
                              <Star className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-sm">
                                  {benefit.title}
                                </h4>
                                <p className="text-gray-600 text-xs">
                                  {benefit.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {process.profiles && (
                      <div className="mb-6">
                        <h3 className="font-bold text-lg mb-3 text-[#9a1b1f] flex items-center">
                          <Star className="h-5 w-5 mr-2" />
                          Perfiles elegibles:
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {process.profiles.map((profile, idx) => (
                            <div
                              key={idx}
                              className="flex items-start bg-gray-50 p-3 rounded-lg"
                            >
                              <profile.icon className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-sm">
                                  {profile.title}
                                </h4>
                                <p className="text-gray-600 text-xs">
                                  {profile.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {process.note && (
                          <div className="mt-4 bg-[#9a1b1f]/5 p-4 rounded-lg">
                            <p className="text-sm text-gray-700 italic">
                              {process.note}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    <Link
                      to="/contacto"
                      className="btn-primary inline-flex items-center group"
                    >
                      Solicitar información
                      <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#9a1b1f] to-[#7a1518] opacity-85 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto p-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-sm">
                  ¿Listo para asegurar tu futuro académico?
                </h2>
                <div className="w-20 h-1 bg-white rounded-full mb-4"></div>
                <p className="text-xl text-white mb-4">
                  Nuestro equipo de asesores está preparado para guiarte en la
                  elección del proceso de admisión que mejor se adapte a tu
                  perfil y objetivos.
                </p>
                <div className="flex items-center space-x-2 text-white/80">
                  <GraduationCap className="h-5 w-5" />
                  <span>
                    Más del 70% de nuestros estudiantes logran ingresar a la
                    UNSA en su primer intento
                  </span>
                </div>
              </div>
              <div className="md:w-1/3 md:pl-8">
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/contacto"
                    className="bg-white text-[#9a1b1f] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center group"
                  >
                    Contáctanos ahora
                    <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://admision.unsa.edu.pe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center group"
                  >
                    Visitar web de admisión UNSA
                    <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Processes;
