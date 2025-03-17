import { Link } from "react-router-dom";
import {
  Users,
  ClipboardCheck,
  FileText,
  ExternalLink,
  ChevronRight,
  CheckCircle,
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

          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Position 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row">
                <div className="bg-[#9a1b1f] p-6 md:w-1/4 flex flex-col items-center justify-center">
                  <div className="flex justify-center mb-4 bg-white/10 p-4 rounded-full w-16 h-16 backdrop-blur-sm">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">
                    Personal de Servicio de Enseñanza
                  </h3>
                </div>

                <div className="p-6 md:w-3/4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="mb-4">
                        <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                          <Eye className="h-4 w-4 mr-2" />
                          Misión del puesto:
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Brindar un servicio de enseñanza de calidad para la
                          preparación académico de los postulantes.
                        </p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          Funciones específicas:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>
                              Planificar y ejecutar los temas asignados
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>
                              Elaborar material académico y evaluaciones
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>
                              Desarrollar estrategias de enseñanza-aprendizaje
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>
                              Elaborar preguntas para exámenes simulacros
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>
                              Entregar material académico al área
                              correspondiente
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>
                              Cumplir con la planificación académica establecida
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="mb-4">
                        <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          Requisitos:
                        </h4>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                              <span>Experiencia en enseñanza y/o docencia</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                              <span>
                                Bachiller universitario y/o titulado registrado
                                en SUNEDU o titulado de instituto pedagógico
                                registrado en DRE
                              </span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                              <span>
                                Cursos en estrategias pedagógicas y recursos
                                educativos digitales
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-3">
                        <a
                          href="https://forms.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center group text-sm justify-center"
                        >
                          Postular a esta posición
                          <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                          href="#"
                          className="text-[#9a1b1f] border border-[#9a1b1f] inline-flex items-center group text-sm justify-center py-2 rounded-md hover:bg-[#f9e6e7] transition-colors"
                        >
                          Mas Información
                          <FileText className="h-4 w-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Position 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row">
                <div className="bg-[#9a1b1f] p-6 md:w-1/4 flex flex-col items-center justify-center">
                  <div className="flex justify-center mb-4 bg-white/10 p-4 rounded-full w-16 h-16 backdrop-blur-sm">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">
                    Personal de Servicio de Monitoreo
                  </h3>
                </div>

                <div className="p-6 md:w-3/4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="mb-4">
                        <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                          <Eye className="h-4 w-4 mr-2" />
                          Misión del puesto:
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Brindar soporte administrativo en el desarrollo de las
                          actividades diarias académicas en el proceso de
                          admisión correspondiente del CEPRUNSA.
                        </p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          Funciones específicas:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>
                              Programar sesiones virtuales del salón asignado
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>
                              Orientar a postulantes sobre procedimientos
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>
                              Verificar cumplimiento del contenido temático
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>Monitorear avance curricular</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>
                              Mantener el orden en las sesiones de clase
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>
                              Controlar asistencia de docentes y estudiantes
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="mb-4">
                        <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          Requisitos:
                        </h4>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-gray-700 text-sm">
                            Ser alumno regular, mayor de edad, con matrícula
                            vigente de la Universidad Nacional de San Agustín
                            que no presente otros beneficios del estado.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-3">
                        <a
                          href="https://forms.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center group text-sm justify-center"
                        >
                          Postular a esta posición
                          <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                          href="#"
                          className="text-[#9a1b1f] border border-[#9a1b1f] inline-flex items-center group text-sm justify-center py-2 rounded-md hover:bg-[#f9e6e7] transition-colors"
                        >
                          Mas Información
                          <FileText className="h-4 w-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Position 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row">
                <div className="bg-[#9a1b1f] p-6 md:w-1/4 flex flex-col items-center justify-center">
                  <div className="flex justify-center mb-4 bg-white/10 p-4 rounded-full w-16 h-16 backdrop-blur-sm">
                    <ClipboardCheck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">
                    Coordinador de Monitoreo
                  </h3>
                </div>

                <div className="p-6 md:w-3/4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="mb-4">
                        <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                          <Eye className="h-4 w-4 mr-2" />
                          Misión del puesto:
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Asegurar el correcto desempeño del equipo de monitores
                          y el cumplimiento de los estándares de monitoreo.
                        </p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          Funciones específicas:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>Supervisar el trabajo de los monitores</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>Informar incidencias graves</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>Verificar puntualidad en los salones</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>Presentar informes de control y avance</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>Organizar equipos de trabajo</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>Reportar desarrollo del temario</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>Comunicar disposiciones institucionales</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2 mt-1 flex-shrink-0" />
                            <span>Participar en reuniones semanales</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="mb-4">
                        <h4 className="font-bold text-[#9a1b1f] mb-2 flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          Requisitos:
                        </h4>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-gray-700 text-sm">
                            Egresados y/o bachilleres universitarios.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-3">
                        <a
                          href="https://forms.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center group text-sm justify-center"
                        >
                          Postular a esta posición
                          <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                          href="#"
                          className="text-[#9a1b1f] border border-[#9a1b1f] inline-flex items-center group text-sm justify-center py-2 rounded-md hover:bg-[#f9e6e7] transition-colors"
                        >
                          Mas Información
                          <FileText className="h-4 w-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
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
