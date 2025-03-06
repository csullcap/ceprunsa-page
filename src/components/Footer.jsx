import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#4b5563] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/349615752_199607626324527_8076311446864506776_n.jpg-ZQTrFfNyAxLaukQQ25UtjZloZu7UpB.jpeg"
                alt="UNSA Logo"
                className="h-16"
              />
            </div>
            <p className="mb-4">
              Centro Preuniversitario de la Universidad Nacional de San Agustín
              de Arequipa
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ceprunsaoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4b5563] text-white p-2 rounded-full hover:bg-[#6b7280] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4b5563] text-white p-2 rounded-full hover:bg-[#6b7280] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@EventosCeprunsa/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4b5563] text-white p-2 rounded-full hover:bg-[#6b7280] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-gray-300">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/procesos" className="hover:text-gray-300">
                  Programas
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-gray-300">
                  Contacto
                </Link>
              </li>
              <li>
                <a
                  href="https://admision.unsa.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Admisión UNSA
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>Calle San Agustín 108 - Arequipa</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>054-391911 Anexos 1422-1423-1424</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>ceprunsa@unsa.edu.pe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} CEPRUNSA - Todos los derechos
            reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
