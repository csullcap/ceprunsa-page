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
  School,
  FileText,
  Star,
  Medal,
  Briefcase,
} from "lucide-react";

const Processes = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-70"></div>
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
      <section className="py-12 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9a1b1f] to-transparent opacity-20"></div>
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
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="bg-[#9a1b1f]/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <School className="h-8 w-8 text-[#9a1b1f]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Fase I y II</h3>
                <p className="text-gray-600 text-sm">
                  Para egresados y estudiantes del último año de secundaria que
                  buscan una preparación integral.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="bg-[#d4af37]/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-[#9a1b1f]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Ciclo Quintos</h3>
                <p className="text-gray-600 text-sm">
                  Exclusivo para estudiantes de quinto de secundaria que desean
                  prepararse mientras culminan sus estudios.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="bg-[#9a1b1f]/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-[#9a1b1f]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Extraordinario</h3>
                <p className="text-gray-600 text-sm">
                  Para postulantes con perfiles especiales, méritos académicos,
                  deportivos o situaciones particulares.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 gradient-bg opacity-85  relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9a1b1f]/20 to-transparent"></div>
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Nuestros Procesos de Admisión</h2>
          <div className="grid grid-cols-1 gap-16">
            {/* Fase I y II */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 relative">
                  <div className="h-full">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/I%20FASE%20Y%20II%20FASE.jpg-eKGhCQmFz91YEgcYipMMlvmYN7yhYZ.jpeg"
                      alt="Proceso de admisión CEPRUNSA I y II Fase"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 flex flex-col justify-end p-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm w-fit mb-2">
                        <Bookmark className="h-4 w-4 mr-1" />
                        Proceso Regular
                      </span>

                      <p className="text-white/90 text-sm">
                        El camino tradicional hacia la UNSA
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-3/5 p-8">
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-1 bg-[#9a1b1f] rounded-full mr-3"></div>
                    <h3 className="text-2xl font-bold text-[#9a1b1f]">
                      Ceprunsa I y II Fase
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-6 bg-gray-50 p-4 rounded-lg border-l-2 border-[#9a1b1f]/20">
                    El Proceso de Admisión CEPRUNSA I y II Fase está dirigido a
                    estudiantes egresados y cursantes del último año de
                    secundaria, ofreciéndoles una preparación integral para su
                    ingreso a la UNSA. Este proceso combina clases virtuales con
                    evaluaciones presenciales, garantizando flexibilidad y
                    calidad educativa. Los estudiantes acceden a contenidos
                    académicos especializados desde cualquier lugar, mientras
                    que las evaluaciones presenciales permiten medir con
                    precisión el nivel de conocimientos adquiridos.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-[#9a1b1f] mb-2" />
                      <h4 className="font-bold text-sm text-gray-800">
                        Duración
                      </h4>
                      <p className="text-gray-600 text-xs text-center">
                        10 semanas
                      </p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-[#9a1b1f] mb-2" />
                      <h4 className="font-bold text-sm text-gray-800">
                        Horarios
                      </h4>
                      <p className="text-gray-600 text-xs text-center">
                        Mañana, tarde y noche
                      </p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-[#9a1b1f] mb-2" />
                      <h4 className="font-bold text-sm text-gray-800">
                        Modalidad
                      </h4>
                      <p className="text-gray-600 text-xs text-center">
                        Virtual con exámenes presenciales
                      </p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg">
                      <BookOpen className="h-6 w-6 text-[#9a1b1f] mb-2" />
                      <h4 className="font-bold text-sm text-gray-800">
                        Material
                      </h4>
                      <p className="text-gray-600 text-xs text-center">
                        Completo digital
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-3 text-[#9a1b1f] flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Beneficios:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm">
                            Preparación completa
                          </h4>
                          <p className="text-gray-600 text-xs">
                            Clases teóricas y prácticas en todos los cursos del
                            examen
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm">
                            Examenes Simulacros
                          </h4>
                          <p className="text-gray-600 text-xs">
                            Evaluaciones que replican el formato del examen de
                            admisión
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm">
                            Asesoría personalizada
                          </h4>
                          <p className="text-gray-600 text-xs">
                            Atención a consultas académicas y orientación
                            vocacional
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm">
                            Recursos adicionales
                          </h4>
                          <p className="text-gray-600 text-xs">
                            Acceso a biblioteca virtual y materiales
                            complementarios
                          </p>
                        </div>
                      </div>
                    </div>
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

            {/* Ciclo Quintos */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="flex flex-col lg:flex-row-reverse">
                <div className="lg:w-2/5 relative">
                  <div className="h-full">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CICLO%20QUINTOS.jpg-oSHDJjVZfLKf9fh9tlZx5YyUtGMkme.jpeg"
                      alt="Proceso de admisión CEPRUNSA Ciclo Quintos"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 flex flex-col justify-end p-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm w-fit mb-2">
                        <Bookmark className="h-4 w-4 mr-1" />
                        Exclusivo 5to de Secundaria
                      </span>
                      <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-sm">
                        Ciclo Quintos
                      </h2>
                      <p className="text-white/90 text-sm">
                        Prepárate mientras terminas el colegio
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-3/5 p-8">
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-1 bg-[#d4af37] rounded-full mr-3"></div>
                    <h3 className="text-2xl font-bold text-[#9a1b1f]">
                      Ciclo Especial para 5to de Secundaria
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-6 bg-gray-50 p-4 rounded-lg border-l-2 border-[#d4af37]/40">
                    El Ciclo Quintos está diseñado exclusivamente para
                    estudiantes que cursan el quinto año de secundaria,
                    facilitando su transición hacia la educación superior
                    mientras completan sus estudios escolares. Este programa
                    fortalece las bases educativas de los postulantes,
                    brindándoles herramientas específicas para afrontar con
                    éxito el proceso de admisión a la UNSA. La combinación de
                    clases virtuales y exámenes presenciales permite a los
                    estudiantes complementar sus actividades escolares mientras
                    se preparan académica y emocionalmente para los desafíos
                    universitarios.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-[#d4af37] mb-2" />
                      <h4 className="font-bold text-sm text-gray-800">
                        Duración
                      </h4>
                      <p className="text-gray-600 text-xs text-center">
                        10 semanas
                      </p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-[#d4af37] mb-2" />
                      <h4 className="font-bold text-sm text-gray-800">
                        Horarios
                      </h4>
                      <p className="text-gray-600 text-xs text-center">
                        Tardes y fines de semana
                      </p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-[#d4af37] mb-2" />
                      <h4 className="font-bold text-sm text-gray-800">
                        Modalidad
                      </h4>
                      <p className="text-gray-600 text-xs text-center">
                        Virtual con evaluaciones presenciales
                      </p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg">
                      <BookOpen className="h-6 w-6 text-[#d4af37] mb-2" />
                      <h4 className="font-bold text-sm text-gray-800">
                        Material
                      </h4>
                      <p className="text-gray-600 text-xs text-center">
                        Completo digital
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-3 text-[#9a1b1f] flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Ventajas para estudiantes de 5to:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-[#d4af37] mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm">
                            Horarios compatibles
                          </h4>
                          <p className="text-gray-600 text-xs">
                            Diseñados para no interferir con tus clases
                            escolares
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-[#d4af37] mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm">
                            Enfoque estratégico
                          </h4>
                          <p className="text-gray-600 text-xs">
                            Contenido centrado en temas de mayor incidencia en
                            el examen
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-[#d4af37] mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm">
                            Orientación vocacional
                          </h4>
                          <p className="text-gray-600 text-xs">
                            Asesoría para elegir la carrera adecuada a tu perfil
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-[#d4af37] mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm">
                            Ventaja competitiva
                          </h4>
                          <p className="text-gray-600 text-xs">
                            Preparación anticipada para asegurar tu ingreso
                          </p>
                        </div>
                      </div>
                    </div>
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

            {/* Extraordinario */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 relative">
                  <div className="h-full">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EXTRAORDINARIO.jpg-6vbavfsAlUHYoIZU7TehfIwuSMn69p.jpeg"
                      alt="Proceso de admisión Extraordinario UNSA"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 flex flex-col justify-end p-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm w-fit mb-2">
                        <Star className="h-4 w-4 mr-1" />
                        Admisión Especial
                      </span>
                      <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-sm">
                        Extraordinario
                      </h2>
                      <p className="text-white/90 text-sm">
                        Reconocimiento al mérito y la diversidad
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-3/5 p-8">
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-1 bg-[#9a1b1f] rounded-full mr-3"></div>
                    <h3 className="text-2xl font-bold text-[#9a1b1f]">
                      Proceso de Admisión Extraordinario
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-6 bg-gray-50 p-4 rounded-lg border-l-2 border-[#9a1b1f]/20">
                    El Proceso de Admisión Extraordinario de la UNSA está
                    dirigido a postulantes con perfiles especiales, reconociendo
                    méritos académicos, deportivos y personales, así como
                    situaciones particulares contempladas en la normativa
                    nacional. Este proceso promueve la inclusión y equidad,
                    brindando oportunidades de acceso a una educación superior
                    de calidad a diversos grupos de la sociedad, valorando sus
                    logros y circunstancias específicas.
                  </p>

                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-3 text-[#9a1b1f] flex items-center">
                      <Medal className="h-5 w-5 mr-2" />
                      Perfiles elegibles:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                        <Briefcase className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm">
                            Titulados o graduados
                          </h4>
                          <p className="text-gray-600 text-xs">
                            De universidades públicas o privadas
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                        <Award className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm">
                            Primeros puestos
                          </h4>
                          <p className="text-gray-600 text-xs">
                            De instituciones educativas secundarias
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                        <Medal className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm">
                            Deportistas destacados
                          </h4>
                          <p className="text-gray-600 text-xs">
                            Acreditados por el IPD
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                        <Users className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm">
                            Personas con discapacidad
                          </h4>
                          <p className="text-gray-600 text-xs">
                            Acreditadas por CONADIS
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                        <School className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm">
                            Traslados externos e internos
                          </h4>
                          <p className="text-gray-600 text-xs">
                            De universidades nacionales o extranjeras
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                        <Star className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm">
                            Bachillerato Internacional
                          </h4>
                          <p className="text-gray-600 text-xs">
                            Y egresados de COAR
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 bg-[#9a1b1f]/5 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 italic">
                        Este proceso también incluye a víctimas del terrorismo,
                        víctimas de la violencia, postulantes bajo el Convenio
                        Andrés Bello, egresados de universidades con licencia
                        denegada y otros casos especiales determinados por el
                        Consejo Universitario.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contacto"
                      className="btn-primary inline-flex items-center justify-center group"
                    >
                      Solicitar información
                      <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
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
                  ¿Listo para asegurar tu futuro académico?
                </h2>
                <div className="w-20 h-1 bg-white rounded-full mb-4"></div>
                <p className="text-xl text-white mb-4">
                  Nuestro equipo de asesores está preparado para guiarte en la
                  elección del proceso de admisión que mejor se adapte a tu
                  perfil y objetivos.
                </p>
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
