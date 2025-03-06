import {
  Award,
  Heart,
  Shield,
  Lightbulb,
  Target,
  Eye,
  Book,
  Workflow,
  BarChart,
  GraduationCap,
} from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full text-[#9a1b1f] text-sm font-medium mb-4 shadow-sm">
              Conoce nuestra institución
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#9a1b1f] mb-6">
              Sobre CEPRUNSA
            </h1>
            <p className="text-lg text-gray-700 bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              El Centro Preuniversitario de la Universidad Nacional de San
              Agustín (CEPRUNSA) es una centro de preparacion preuniversitaria
              dedicada a la preparación de estudiantes para el examen de
              admisión a la UNSA, una de las universidades más prestigiosas del
              sur del Perú.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9a1b1f] to-transparent opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="border-l-4 border-[#9a1b1f] pl-6 mb-6">
                <h2 className="text-3xl font-bold text-[#9a1b1f] mb-2">
                  Nuestra Historia
                </h2>
              </div>
              <div className="rounded-lg shadow-sm border p-4 border-gray-100">
                <p className="text-gray-700 mb-4 ">
                  CEPRUNSA fue fundado en 1999 con el objetivo de brindar una
                  preparación de calidad a los estudiantes que aspiran a
                  ingresar a la Universidad Nacional de San Agustín de Arequipa.
                </p>
                <p className="text-gray-700 mb-4">
                  A lo largo de más de 25 años, hemos formado a miles de
                  estudiantes que hoy son profesionales exitosos en diversas
                  áreas del conocimiento.
                </p>
                <p className="text-gray-700 mb-4">
                  Nuestra metodología de enseñanza ha evolucionado
                  constantemente, incorporando nuevas tecnologías y enfoques
                  pedagógicos, pero manteniendo siempre nuestro compromiso con
                  la excelencia académica.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#9a1b1f] to-[#d4af37] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ceprunsa_local.jpg-HdaIyJ87XBl7oV6BURcWVytBV4OPGz.jpeg"
                  alt="Historia de CEPRUNSA"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover relative z-10 transform group-hover:scale-[1.01] transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-lg z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-xl">Local CEPRUNSA</p>
                    <p className="text-sm">
                      Más de 25 años formando estudiantes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-b gradient-bg opacity-85 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9a1b1f]/20 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9a1b1f]/20 to-transparent"></div>
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Misión y Visión</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card border-t-4 border-t-[#9a1b1f] hover:shadow-lg transition-shadow">
              <div className="flex justify-center">
                <div className="flex justify-center mb-4 bg-[#f9e6e7] p-4 rounded-full w-20 h-20 mx-auto">
                  <Target className="h-12 w-12 text-[#9a1b1f]" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#9a1b1f] mb-4 text-center">
                Misión
              </h2>

              <p className="text-gray-700 mb-6 p-4">
                Brindar una preparación preuniversitaria que prepare a los
                postulantes para el examen de admisión, también promueva la
                adquisición de conocimientos y el desarrollo de competencias,
                capacidades y aptitudes necesarias para tener éxito en los
                estudios universitarios, incluyendo orientación vocacional y
                apoyo emocional.
              </p>
            </div>

            <div className="card border-t-4 border-t-[#9a1b1f] hover:shadow-lg transition-shadow ">
              <div className="flex justify-center">
                <div className="flex justify-center mb-4 bg-[#f9e6e7] p-4 rounded-full w-20 h-20 mx-auto">
                  <Eye className="h-12 w-12 text-[#9a1b1f]" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-[#9a1b1f] mb-4 text-center">
                Visión
              </h2>

              <p className="text-gray-700 mb-6  p-4">
                Nos proyectamos como un centro líder en la preparación
                preuniversitaria a nivel regional, reconocidos por nuestra
                excelencia académica y compromiso con el desarrollo personal de
                los estudiantes. Buscamos crear un ambiente de apoyo y guía que
                permita a cada estudiante alcanzar su máximo potencial y tomar
                decisiones informadas sobre su futuro académico y profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Política de Calidad */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Política de Calidad</h2>
          {/*border botom centrado*/}
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border-lg border-t-4 border-t-[#9a1b1f] mb-12">
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              En el Centro Preuniversitario de la Universidad Nacional de San
              Agustín de Arequipa nos dedicamos a brindar una preparación
              preuniversitaria a estudiantes para enfrentar con éxito el examen
              de admisión a la universidad con una planificación precisa de
              contenidos, el uso de recursos educativos innovadores y una
              atención personalizada a las necesidades individuales. Nuestro
              objetivo es ser reconocidos como líderes en la preparación
              preuniversitaria a nivel regional, destacándose por nuestra
              excelencia académica y nuestro compromiso con el desarrollo
              personal de los estudiantes.
            </p>

            <h3 className="text-2xl font-bold text-[#9a1b1f] mb-6 text-center">
              Nos comprometemos a:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center mb-3">
                  <Book className="h-6 w-6 text-[#9a1b1f] mr-3 flex-shrink-0" />
                  <h4 className="font-bold text-lg">Excelencia Académica</h4>
                </div>
                <p className="text-gray-700">
                  Ofrecer una enseñanza de alta calidad que promueva el
                  desarrollo de competencias y habilidades necesarias para el
                  éxito académico y personal.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center mb-3">
                  <Heart className="h-6 w-6 text-[#9a1b1f] mr-3 flex-shrink-0" />
                  <h4 className="font-bold text-lg">
                    Apoyo Integral al Estudiante
                  </h4>
                </div>
                <p className="text-gray-700">
                  Brindar un apoyo integral a nuestros estudiantes, incluyendo
                  orientación vocacional, apoyo emocional y asesoramiento
                  académico.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center mb-3">
                  <Shield className="h-6 w-6 text-[#9a1b1f] mr-3 flex-shrink-0" />
                  <h4 className="font-bold text-lg">Cumplimiento Normativo</h4>
                </div>
                <p className="text-gray-700">
                  Cumplir con todos los requisitos legales, reglamentarios y
                  contractuales aplicables a nuestras actividades, promoviendo
                  un ambiente de trabajo seguro y respetuoso.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center mb-3">
                  <Workflow className="h-6 w-6 text-[#9a1b1f] mr-3 flex-shrink-0" />
                  <h4 className="font-bold text-lg">Mejora Continua</h4>
                </div>
                <p className="text-gray-700">
                  Buscar la mejora continua en todos los aspectos de nuestra
                  institución, identificando oportunidades de mejora y actuando
                  proactivamente para implementar soluciones efectivas.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center mb-3">
                  <BarChart className="h-6 w-6 text-[#9a1b1f] mr-3 flex-shrink-0" />
                  <h4 className="font-bold text-lg">Atención a la Demanda</h4>
                </div>
                <p className="text-gray-700">
                  Gestionar de manera eficiente y efectiva la alta demanda de
                  nuestros servicios, optimizando nuestros recursos para
                  garantizar una atención de calidad a todos nuestros
                  estudiantes.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-6 w-6 text-[#9a1b1f] mr-3 flex-shrink-0" />
                  <h4 className="font-bold text-lg">Desarrollo Profesional</h4>
                </div>
                <p className="text-gray-700">
                  Valorar y promover el desarrollo profesional de nuestro
                  personal, proporcionando oportunidades de formación y
                  capacitación que les permitan mejorar sus habilidades y
                  mantenerse actualizados en su campo de especialización.
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-8 text-center italic">
              Esta política de calidad es comunicada, entendida y aplicada en
              todos los niveles de la organización, y todos los miembros del
              CEPRUNSA están comprometidos con su cumplimiento y contribuyen
              activamente a su implementación y mejora continua.
            </p>

            <div className="border-t border-gray-200 pt-6 text-right">
              <p className="text-gray-700">Arequipa, 01 de marzo del 2024</p>
              <p className="font-bold text-[#9a1b1f] mt-2">
                Dr. Maria Elena Rojas Zegarra
              </p>
              <p className="text-gray-700">Directora CEPRUNSA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 gradient-bg opacity-85 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9a1b1f]/20 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9a1b1f]/20 to-transparent"></div>
        <div className="absolute inset-0 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-white/80 backdrop-blur-sm hover:bg-white transition-all hover:translate-y-[-5px]">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-[#9a1b1f] to-[#7a1518] p-4 rounded-full shadow-md">
                  <Award className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-[#9a1b1f]">
                Excelencia académica
              </h3>
              <p className="text-gray-600 text-center">
                Fomentar el compromiso con la calidad en la enseñanza y el
                aprendizaje, promoviendo el esfuerzo y la dedicación hacia el
                logro de metas académicas.
              </p>
            </div>

            <div className="card bg-white/80 backdrop-blur-sm hover:bg-white transition-all hover:translate-y-[-5px]">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-[#9a1b1f] to-[#7a1518] p-4 rounded-full shadow-md">
                  <Shield className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-[#9a1b1f]">
                Confianza
              </h3>
              <p className="text-gray-600 text-center">
                Promover la seguridad y la credibilidad en las relaciones
                interpersonales, basadas en la honestidad y el respeto mutuo.
              </p>
            </div>

            <div className="card bg-white/80 backdrop-blur-sm hover:bg-white transition-all hover:translate-y-[-5px]">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-[#9a1b1f] to-[#7a1518] p-4 rounded-full shadow-md">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-[#9a1b1f]">
                Empatía
              </h3>
              <p className="text-gray-600 text-center">
                Fomentar la comprensión y la empatía hacia los demás,
                promoviendo un ambiente de respeto, compasión y apoyo mutuo
                entre los estudiantes y el personal del CEPRUNSA.
              </p>
            </div>

            <div className="card bg-white/80 backdrop-blur-sm hover:bg-white transition-all hover:translate-y-[-5px]">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-[#9a1b1f] to-[#7a1518] p-4 rounded-full shadow-md">
                  <Lightbulb className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-[#9a1b1f]">
                Innovación
              </h3>
              <p className="text-gray-600 text-center">
                Fomentar la creatividad y el pensamiento original para generar
                nuevas ideas y soluciones para los desafíos presentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Autoridades */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9a1b1f]/20 to-transparent"></div>
        <div className="container mx-auto px-4">
          <h2 className="section-title">Autoridades</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card hover:shadow-xl transition-all border-t-4 border-t-[#9a1b1f] bg-gradient-to-b from-white to-gray-50">
              <div className="relative mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mg.-Arnaldo-Valdivia-Loaiza-WJKoRNZFlxcLBYctFxuYAU22Ebwahz.jpeg"
                  alt="Mg. Arnaldo Humberto Valdivia Loaiza"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-1">
                <a
                  href="https://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=63640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#9a1b1f]"
                >
                  Mg. Arnaldo Humberto Valdivia Loaiza
                </a>
              </h3>
              <p className="text-[#9a1b1f] font-semibold text-center mb-4 bg-[#9a1b1f]/10 py-1 px-4 rounded-full mx-auto">
                COORDINADOR ACADÉMICO
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4"></div>
              <p className="text-gray-600 text-sm p-4 ">
                Docente especializado en Filosofía, con una maestría en Docencia
                Universitaria y Gestión Educativa. Actualmente es docente en la
                Universidad Nacional de San Agustín, con experiencia previa en
                diversas universidades peruanas desde 2003. En cuanto a su
                formación académica, es bachiller y licenciado en Filosofía por
                la Universidad Nacional de San Agustín de Arequipa, además de
                haber completado un diplomado en Desarrollo de Habilidades
                Digitales para el Aprendizaje y programas de formación docente
                en enseñanza e innovación.
              </p>
            </div>
            <div className="card hover:shadow-xl transition-all border-t-4 border-t-[#9a1b1f] bg-gradient-to-b from-white to-gray-50">
              <div className="relative mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr.-Maria-Elena-Rojas-Zegarra.jpg-2Q53KaD23rQ5BWytlJ1o5vNkQGOkGt.jpeg"
                  alt="Dra. Maria Elena Rojas Zegarra"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-1">
                <a
                  href="https://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=20316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#9a1b1f]"
                >
                  Dra. Maria Elena Rojas Zegarra
                </a>
              </h3>
              <p className="text-[#9a1b1f] font-semibold text-center mb-4 bg-[#9a1b1f]/10 py-1 px-4 rounded-full mx-auto">
                DIRECTORA
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4"></div>
              <p className="text-gray-600 text-sm  p-4">
                Doctora en Psicología por la Universidad Complutense de Madrid.
                Actualmente, cursa el Máster en Investigación Psicológica por la
                Universidad Internacional de La Rioja (UNIR), España. Posee un
                Diplomado Internacional en el Modelo de Terapia Breve de
                Resolución de Problemas del Brief Therapy Center de Palo Alto,
                California, y es experta en Psicoterapia Breve para Niños y
                Adolescentes por la Universidad San Jorge, España.
              </p>
            </div>

            <div className="card hover:shadow-xl transition-all border-t-4 border-t-[#9a1b1f] bg-gradient-to-b from-white to-gray-50">
              <div className="relative mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mg.-Jose-Rojas-Hualpa-1-Acs8aSpgD3EDMJdn8XnzVJxuOFd0go.jpeg"
                  alt="Mg. Jose Miguel Rojas Hualpa"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-1">
                <a
                  href="https://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=150092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#9a1b1f]"
                >
                  Mg. Jose Miguel Rojas Hualpa
                </a>
              </h3>
              <p className="text-[#9a1b1f] font-semibold text-center mb-4 bg-[#9a1b1f]/10 py-1 px-4 rounded-full mx-auto">
                COORDINADOR ADMINISTRATIVO
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4"></div>
              <p className="text-gray-600 text-sm  p-4 ">
                Posee el grado en Ciencias Biológicas por la Universidad
                Nacional de San Agustín de Arequipa (2010) y el grado en
                Ingeniería Ambiental (2018). Es Magíster en Biología Funcional y
                Molecular por la Universidad Estadual de Campinas (2014). Fue
                investigador en el Laboratorio de Química de Proteínas de la
                Universidad Estadual de Campinas (2012 – 2014).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
