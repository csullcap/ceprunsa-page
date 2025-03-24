import { Target, Eye } from "lucide-react";
import {
  values,
  qualityPolicyCommitments,
  authorities,
} from "../data/about-data";

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
            <div className="card border-t-4 border-t-[#9a1b1f] hover:shadow-lg transition-all hover:translate-y-[-5px]">
              <div className="flex justify-center mb-4 bg-[#f9e6e7] p-4 rounded-full w-20 h-20 mx-auto">
                <Target className="h-12 w-12 text-[#9a1b1f]" />
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

            <div className="card border-t-4 border-t-[#9a1b1f] hover:shadow-lg transition-all hover:translate-y-[-5px]">
              <div className="flex justify-center mb-4 bg-[#f9e6e7] p-4 rounded-full w-20 h-20 mx-auto">
                <Eye className="h-12 w-12 text-[#9a1b1f]" />
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
              {qualityPolicyCommitments.map((commitment) => (
                <div
                  key={commitment.id}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-center mb-3">
                    <commitment.icon className="h-6 w-6 text-[#9a1b1f] mr-3 flex-shrink-0" />
                    <h4 className="font-bold text-lg">{commitment.title}</h4>
                  </div>
                  <p className="text-gray-700">{commitment.description}</p>
                </div>
              ))}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.id}
                className="card bg-white/80 backdrop-blur-sm hover:bg-white transition-all hover:translate-y-[-5px]"
              >
                <div className="flex justify-center mb-6 bg-[#f9e6e7] p-4 rounded-full w-20 h-20 mx-auto">
                  <value.icon className="h-12 w-12 text-[#9a1b1f]" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-[#9a1b1f]">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autoridades */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9a1b1f]/20 to-transparent"></div>
        <div className="container mx-auto px-4">
          <h2 className="section-title">Autoridades</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {authorities.map((authority) => (
              <div
                key={authority.id}
                className="card border-t-4 border-t-[#9a1b1f] bg-gradient-to-b from-white to-gray-50"
              >
                <div className="relative mb-6">
                  <img
                    src={authority.image || "/placeholder.svg"}
                    alt={authority.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-1">
                  <a
                    href={authority.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[#9a1b1f]"
                  >
                    {authority.name}
                  </a>
                </h3>
                <p className="text-[#9a1b1f] font-semibold text-center mb-4 bg-[#9a1b1f]/10 py-1 px-4 rounded-full mx-auto">
                  {authority.position}
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4"></div>
                <p className="text-gray-600 text-sm p-4">{authority.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
