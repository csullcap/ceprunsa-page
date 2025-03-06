import { Link } from "react-router-dom";
import {
  CheckCircle,
  Clock,
  Calendar,
  Users,
  BookOpen,
  ChevronRight,
  Bookmark,
  Award,
  GraduationCap,
} from "lucide-react";

const Processes = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%239a1b1f%22 fillOpacity=%220.03%22 fillRule=%22evenodd%22%3E%3Ccircle cx=%223%22 cy=%223%22 r=%223%22/%3E%3Ccircle cx=%2213%22 cy=%2213%22 r=%223%22/%3E%3C/g%3E%3C/svg%3E')] opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full text-[#9a1b1f] text-sm font-medium mb-4 shadow-sm">
              Elige tu camino hacia el éxito
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#9a1b1f] mb-6">
              Nuestros Procesos
            </h1>
            <p className="text-lg text-gray-700 bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              En CEPRUNSA ofrecemos diferentes procesos de preparación durante
              el año, adaptados a las necesidades de cada estudiante. Conoce
              nuestras opciones y elige la que mejor se ajuste a tus objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9a1b1f] to-transparent opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {/* Ciclo Regular */}
            <div className="flex flex-col md:flex-row gap-8 bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="md:w-1/3 relative">
                <div className="absolute -top-8 -left-8 bg-[#9a1b1f] text-white px-4 py-2 rounded-lg shadow-md z-10 transform rotate-[-5deg]">
                  <span className="font-bold">Más Popular</span>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
                    <div className="p-4 w-full">
                      <span className="text-white font-medium">
                        Programa completo de preparación
                      </span>
                    </div>
                  </div>
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Ciclo Regular"
                    className="rounded-lg w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#9a1b1f]/10 text-[#9a1b1f] text-sm font-medium">
                    <Bookmark className="h-4 w-4 mr-1" />
                    Ciclo Regular
                  </span>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-1 bg-[#9a1b1f] rounded-full mr-3"></div>
                  <h2 className="text-3xl font-bold text-[#9a1b1f]">
                    Ciclo Regular
                  </h2>
                </div>
                <p className="text-gray-700 mb-6 bg-white p-4 rounded-lg border-l-2 border-[#9a1b1f]/20">
                  Nuestro programa más completo, diseñado para brindar una
                  preparación integral en todas las materias del examen de
                  admisión. Con una duración de 4 meses, este ciclo te permitirá
                  desarrollar todas las habilidades y conocimientos necesarios
                  para afrontar con éxito el examen.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#9a1b1f]/10 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-[#9a1b1f]" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-800">Duración</h3>
                      <p className="text-gray-600">4 meses</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#9a1b1f]/10 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-[#9a1b1f]" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-800">Horarios</h3>
                      <p className="text-gray-600">Mañana, tarde y noche</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#9a1b1f]/10 p-2 rounded-full">
                      <Users className="h-5 w-5 text-[#9a1b1f]" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-800">Modalidad</h3>
                      <p className="text-gray-600">Presencial y virtual</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#9a1b1f]/10 p-2 rounded-full">
                      <BookOpen className="h-5 w-5 text-[#9a1b1f]" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-800">Material</h3>
                      <p className="text-gray-600">
                        Completo (físico y digital)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#9a1b1f]/5 to-white p-4 rounded-lg mb-6">
                  <h3 className="font-bold text-lg mb-3 text-[#9a1b1f] flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Beneficios:
                  </h3>
                  <ul className="space-y-2 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <li className="flex items-start bg-white p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Clases teóricas y prácticas en todas las materias
                      </span>
                    </li>
                    <li className="flex items-start bg-white p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Simulacros semanales tipo examen de admisión</span>
                    </li>
                    <li className="flex items-start bg-white p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Asesoría personalizada</span>
                    </li>
                    <li className="flex items-start bg-white p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Acceso a biblioteca y laboratorios</span>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/contacto"
                  className="btn-primary inline-flex items-center group"
                >
                  Solicitar información
                  <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Ciclo Intensivo */}
            <div className="flex flex-col md:flex-row gap-8 bg-gradient-to-br from-white to-[#f5efd6]/30 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="md:w-1/3 md:order-2 relative">
                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
                    <div className="p-4 w-full">
                      <span className="text-white font-medium">
                        Preparación acelerada y efectiva
                      </span>
                    </div>
                  </div>
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Ciclo Intensivo"
                    className="rounded-lg w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#9a1b1f] text-sm font-medium">
                    <Bookmark className="h-4 w-4 mr-1" />
                    Ciclo Intensivo
                  </span>
                </div>
              </div>
              <div className="md:w-2/3 md:order-1">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-1 bg-[#d4af37] rounded-full mr-3"></div>
                  <h2 className="text-3xl font-bold text-[#9a1b1f]">
                    Ciclo Intensivo
                  </h2>
                </div>
                <p className="text-gray-700 mb-6 bg-white p-4 rounded-lg border-l-2 border-[#d4af37]/40">
                  Programa acelerado diseñado para estudiantes que necesitan una
                  preparación rápida pero efectiva. Con una duración de 2 meses,
                  este ciclo se enfoca en los temas más importantes y frecuentes
                  del examen de admisión.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#d4af37]/10 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-[#9a1b1f]" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-800">Duración</h3>
                      <p className="text-gray-600">2 meses</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#d4af37]/10 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-[#9a1b1f]" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-800">Horarios</h3>
                      <p className="text-gray-600">Mañana y tarde</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#d4af37]/10 p-2 rounded-full">
                      <Users className="h-5 w-5 text-[#9a1b1f]" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-800">Modalidad</h3>
                      <p className="text-gray-600">Presencial y virtual</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#d4af37]/10 p-2 rounded-full">
                      <BookOpen className="h-5 w-5 text-[#9a1b1f]" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-800">Material</h3>
                      <p className="text-gray-600">Compendio de temas clave</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#d4af37]/5 to-white p-4 rounded-lg mb-6">
                  <h3 className="font-bold text-lg mb-3 text-[#9a1b1f] flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Beneficios:
                  </h3>
                  <ul className="space-y-2 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <li className="flex items-start bg-white p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Enfoque en temas de mayor incidencia en el examen
                      </span>
                    </li>
                    <li className="flex items-start bg-white p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Simulacros semanales</span>
                    </li>
                    <li className="flex items-start bg-white p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Técnicas de resolución rápida de problemas</span>
                    </li>
                    <li className="flex items-start bg-white p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Asesoría personalizada</span>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/contacto"
                  className="btn-primary inline-flex items-center group"
                >
                  Solicitar información
                  <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Ciclo de Verano */}
            <div className="flex flex-col md:flex-row gap-8 bg-gradient-to-br from-white to-[#f9e6e7]/30 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="md:w-1/3 relative">
                <div className="absolute -top-8 -right-8 bg-[#d4af37] text-white px-4 py-2 rounded-lg shadow-md z-10 transform rotate-[5deg]">
                  <span className="font-bold">Vacaciones productivas</span>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
                    <div className="p-4 w-full">
                      <span className="text-white font-medium">
                        Aprovecha tu tiempo libre
                      </span>
                    </div>
                  </div>
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Ciclo de Verano"
                    className="rounded-lg w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#9a1b1f]/10 text-[#9a1b1f] text-sm font-medium">
                    <Bookmark className="h-4 w-4 mr-1" />
                    Ciclo de Verano
                  </span>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-1 bg-[#9a1b1f] rounded-full mr-3"></div>
                  <h2 className="text-3xl font-bold text-[#9a1b1f]">
                    Ciclo de Verano
                  </h2>
                </div>
                <p className="text-gray-700 mb-6 bg-white p-4 rounded-lg border-l-2 border-[#9a1b1f]/20">
                  Aprovecha tus vacaciones para prepararte para el examen de
                  admisión. Este programa está diseñado especialmente para
                  estudiantes que han culminado la secundaria y desean iniciar
                  su preparación durante el verano.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#9a1b1f]/10 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-[#9a1b1f]" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-800">Duración</h3>
                      <p className="text-gray-600">3 meses (enero - marzo)</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#9a1b1f]/10 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-[#9a1b1f]" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-800">Horarios</h3>
                      <p className="text-gray-600">Mañana y tarde</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#9a1b1f]/10 p-2 rounded-full">
                      <Users className="h-5 w-5 text-[#9a1b1f]" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-800">Modalidad</h3>
                      <p className="text-gray-600">Presencial</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#9a1b1f]/10 p-2 rounded-full">
                      <BookOpen className="h-5 w-5 text-[#9a1b1f]" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-800">Material</h3>
                      <p className="text-gray-600">
                        Completo (físico y digital)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#9a1b1f]/5 to-white p-4 rounded-lg mb-6">
                  <h3 className="font-bold text-lg mb-3 text-[#9a1b1f] flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Beneficios:
                  </h3>
                  <ul className="space-y-2 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <li className="flex items-start bg-white p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Grupos reducidos para atención personalizada</span>
                    </li>
                    <li className="flex items-start bg-white p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Actividades complementarias (visitas a la universidad,
                        charlas vocacionales)
                      </span>
                    </li>
                    <li className="flex items-start bg-white p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Simulacros semanales</span>
                    </li>
                    <li className="flex items-start bg-white p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Acceso a biblioteca y laboratorios</span>
                    </li>
                  </ul>
                </div>
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
                  ¿Necesitas más información sobre nuestros programas?
                </h2>
                <div className="w-20 h-1 bg-white rounded-full mb-4"></div>
                <p className="text-xl text-white mb-4">
                  Nuestro equipo está listo para resolver todas tus dudas y
                  ayudarte a elegir el programa que mejor se adapte a tus
                  necesidades.
                </p>
                <div className="flex items-center space-x-2 text-white/80">
                  <GraduationCap className="h-5 w-5" />
                  <span>
                    Más del 70% de nuestros estudiantes logran ingresar a la
                    UNSA
                  </span>
                </div>
              </div>
              <div className="md:w-1/3 md:pl-8">
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/contacto"
                    className="bg-white text-[#9a1b1f] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center group"
                  >
                    Contáctanos
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
