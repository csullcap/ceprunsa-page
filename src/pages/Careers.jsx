import { Link } from "react-router-dom";
import {
  Users,
  ClipboardCheck,
  FileText,
  ExternalLink,
  ChevronRight,
  CheckCircle,
  Download,
  Briefcase,
  GraduationCap,
  Eye,
  Clock,
} from "lucide-react";

const Careers = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full text-[#9a1b1f] text-sm font-medium mb-4 shadow-sm">
              Oportunidades laborales
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#9a1b1f] mb-6">
              Trabaja con Nosotros
            </h1>
            <p className="text-lg text-gray-700 bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              Únete a nuestro equipo y sé parte de la formación de los futuros
              profesionales del Perú. En CEPRUNSA valoramos el talento, la
              dedicación y el compromiso con la excelencia educativa.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#f9e6e7] p-6 rounded-lg shadow-sm border border-[#9a1b1f]/10 mb-8">
              <h2 className="text-2xl font-bold text-[#9a1b1f] mb-4">
                ¿Por qué trabajar en CEPRUNSA?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Ambiente académico estimulante y de constante aprendizaje
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Oportunidad de contribuir a la formación de futuros
                    universitarios
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Desarrollo profesional y posibilidades de crecimiento
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Vinculación con la Universidad Nacional de San Agustín
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-8 text-center">
              Actualmente estamos en búsqueda de profesionales comprometidos con
              la educación para cubrir las siguientes posiciones:
            </p>
          </div>
        </div>
      </section>

      {/* Job Positions Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Posiciones Disponibles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Position 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-[#9a1b1f] p-4">
                <div className="flex justify-center mb-4 bg-white/10 p-4 rounded-full w-16 h-16 mx-auto backdrop-blur-sm">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white text-center">
                  Prestador de Servicio de Enseñanza
                </h3>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Responsabilidades:
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Impartir clases en las áreas de especialidad</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Elaborar material didáctico y evaluaciones</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Brindar asesoría académica a los estudiantes</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    Requisitos:
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Título profesional en el área de especialidad</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Experiencia mínima de 2 años en docencia</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Dominio de estrategias pedagógicas</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Modalidad:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Presencial y virtual, según requerimiento
                  </p>
                </div>
              </div>
            </div>

            {/* Position 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-[#9a1b1f] p-4">
                <div className="flex justify-center mb-4 bg-white/10 p-4 rounded-full w-16 h-16 mx-auto backdrop-blur-sm">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white text-center">
                  Monitor
                </h3>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Responsabilidades:
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Supervisar el desarrollo de las clases virtuales
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Asistir a docentes y estudiantes en el uso de
                        plataformas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Registrar asistencia y participación de estudiantes
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    Requisitos:
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Estudiante universitario de últimos ciclos o egresado
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Dominio de herramientas digitales educativas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Excelentes habilidades de comunicación</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Modalidad:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Virtual, con posibilidad de actividades presenciales
                  </p>
                </div>
              </div>
            </div>

            {/* Position 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-[#9a1b1f] p-4">
                <div className="flex justify-center mb-4 bg-white/10 p-4 rounded-full w-16 h-16 mx-auto backdrop-blur-sm">
                  <ClipboardCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white text-center">
                  Supervisor de Monitoreo
                </h3>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Responsabilidades:
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Coordinar y supervisar el equipo de monitores</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Elaborar informes de seguimiento y evaluación</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Implementar mejoras en los procesos de monitoreo
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    Requisitos:
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Título profesional en educación o áreas afines
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>Experiencia en gestión de equipos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Capacidad de análisis y resolución de problemas
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Modalidad:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Híbrido (presencial y virtual)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#9a1b1f] mb-6">
              ¿Cómo postular?
            </h2>
            <p className="text-gray-700 mb-8">
              Si estás interesado en formar parte de nuestro equipo, completa el
              formulario de postulación con tus datos y adjunta tu CV
              actualizado. Nuestro equipo de recursos humanos revisará tu
              información y se pondrá en contacto contigo si tu perfil se ajusta
              a nuestras necesidades.
            </p>

            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center group"
            >
              Formulario de postulación
              <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-gray-600 text-sm">
                <strong>Nota:</strong> Las postulaciones son evaluadas
                periódicamente según las necesidades institucionales. Te
                recomendamos mantener tu información actualizada en nuestra base
                de datos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-gradient-to-b gradient-bg opacity-85 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9a1b1f]/20 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9a1b1f]/20 to-transparent"></div>
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Documentos de Interés</h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-l-[#9a1b1f] hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-[#f9e6e7] p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-[#9a1b1f]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#9a1b1f] mb-2">
                    Reglamento Interno
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Documento que establece las normas y procedimientos que
                    rigen el funcionamiento de CEPRUNSA.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-[#9a1b1f] font-medium hover:underline group"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-l-[#9a1b1f] hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-[#f9e6e7] p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-[#9a1b1f]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#9a1b1f] mb-2">
                    Código de Ética
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Principios y valores que guían el comportamiento de todos
                    los miembros de nuestra institución.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-[#9a1b1f] font-medium hover:underline group"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-l-[#9a1b1f] hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-[#f9e6e7] p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-[#9a1b1f]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#9a1b1f] mb-2">
                    Manual del Docente
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Guía completa sobre metodologías, evaluaciones y
                    procedimientos académicos para docentes.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-[#9a1b1f] font-medium hover:underline group"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-l-[#9a1b1f] hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-[#f9e6e7] p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-[#9a1b1f]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#9a1b1f] mb-2">
                    Protocolo de Monitoreo
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Lineamientos y procedimientos para el seguimiento y
                    evaluación de las actividades académicas.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-[#9a1b1f] font-medium hover:underline group"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#9a1b1f] mb-6">
              ¿Tienes alguna consulta adicional?
            </h2>
            <p className="text-gray-700 mb-8">
              Si necesitas más información sobre nuestras oportunidades
              laborales o el proceso de selección, no dudes en contactarnos.
              Estaremos encantados de atender tus consultas.
            </p>
            <Link
              to="/contacto"
              className="btn-primary inline-flex items-center group"
            >
              Contáctanos
              <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
