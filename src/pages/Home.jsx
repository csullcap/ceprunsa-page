import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { features, admissionProcesses, testimonials } from "../data/home-data";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-pattern py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#9a1b1f] mb-4 relative z-10">
                  Tu camino hacia la universidad
                </h1>
              </div>
              <p className="text-lg md:text-xl text-gray-700 mb-8 border-l-4 border-[#9a1b1f] pl-4 italic">
                Prepárate con los mejores docentes y metodologías para ingresar
                a la Universidad Nacional de San Agustín de Arequipa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/programas" className="btn-primary text-center">
                  Conoce nuestros programas
                </Link>
                <Link to="/contacto" className="btn-secondary text-center">
                  Contáctanos
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#9a1b1f] to-[#d4af37] rounded-lg blur opacity-25"></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home_image.jpg-0CwYJtosGVDDu8e8zFAPcCXFleDIk8.jpeg"
                  alt="Estudiante y docente de CEPRUNSA interactuando en el campus"
                  className="rounded-lg shadow-lg max-w-full h-auto object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9a1b1f] to-transparent opacity-20"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9a1b1f]/20 to-transparent"></div>
        <div className="container mx-auto px-4">
          <h2 className="section-title">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="card border-t-4 border-t-[#9a1b1f]"
              >
                <div className="flex justify-center mb-4 bg-[#f9e6e7] p-4 rounded-full w-20 h-20 mx-auto">
                  <feature.icon className="h-12 w-12 text-[#9a1b1f]" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 gradient-bg opacity-85 relative overflow-hidden">
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9a1b1f]/20 to-transparent"></div>
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nuestros Procesos de Admisión</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {admissionProcesses.map((process) => (
              <div key={process.id} className="highlight-card">
                <div className="flex items-center mb-4">
                  <div className="bg-[#9a1b1f] text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <span className="font-bold">{process.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#9a1b1f]">
                    {process.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{process.description}</p>
                <ul className="mb-6 space-y-2">
                  {process.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#9a1b1f] mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/procesos"
                  className="text-[#9a1b1f] font-medium hover:underline flex items-center group"
                >
                  Más información
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Lo que dicen nuestros estudiantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card relative">
                <div className="absolute -top-3 -right-3 bg-[#9a1b1f] text-white p-2 rounded-full">
                  <Star className="h-5 w-5" />
                </div>
                <p className="italic text-gray-600 mb-4 border-l-4 border-[#9a1b1f] pl-4">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f9e6e7] rounded-full mr-4 flex items-center justify-center">
                    <span className="text-[#9a1b1f] font-bold">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.career}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#9a1b1f] to-[#7a1518] opacity-85 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)]'></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-md">
            ¿Listo para asegurar tu ingreso a la UNSA?
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            No pierdas la oportunidad de prepararte con los mejores. Inscríbete
            ahora y comienza tu camino hacia el éxito académico.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://apps.unsa.edu.pe/sisadmision/public/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white bg-white text-[#9a1b1f] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Inscríbete ahora
            </a>
            <Link
              to="/contacto"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-[#9a1b1f] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Más información
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
