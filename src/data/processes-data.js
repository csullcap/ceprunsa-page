import { Clock, Calendar, Users, BookOpen, School, FileText, Star, Medal, Briefcase, Award } from "lucide-react"

export const admissionProcesses = [
  {
    id: 1,
    title: "Fase I y II",
    subtitle: "Proceso de Admisión Regular",
    tagline: "El camino tradicional hacia la UNSA",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/I%20FASE%20Y%20II%20FASE.jpg-eKGhCQmFz91YEgcYipMMlvmYN7yhYZ.jpeg",
    description:
      "El Proceso de Admisión CEPRUNSA I y II Fase está dirigido a estudiantes egresados y cursantes del último año de secundaria, ofreciéndoles una preparación integral para su ingreso a la UNSA. Este proceso combina clases virtuales con evaluaciones presenciales, garantizando flexibilidad y calidad educativa. Los estudiantes acceden a contenidos académicos especializados desde cualquier lugar, mientras que las evaluaciones presenciales permiten medir con precisión el nivel de conocimientos adquiridos.",
    details: [
      { icon: Clock, title: "Duración", value: "10 semanas" },
      { icon: Calendar, title: "Horarios", value: "Mañana, tarde y noche" },
      { icon: Users, title: "Modalidad", value: "Virtual con exámenes presenciales" },
      { icon: BookOpen, title: "Material", value: "Completo digital" },
    ],
    benefits: [
      { title: "Preparación completa", description: "Clases teóricas y prácticas en todas las materias del examen" },
      { title: "Simulacros periódicos", description: "Evaluaciones que replican el formato del examen de admisión" },
      { title: "Asesoría personalizada", description: "Atención a consultas académicas y orientación vocacional" },
      { title: "Recursos adicionales", description: "Acceso a biblioteca virtual y materiales complementarios" },
    ],
    tag: "Proceso Regular",
    tagIcon: "Bookmark",
    accentColor: "#9a1b1f",
  },
  {
    id: 2,
    title: "Ciclo Quintos",
    subtitle: "Ciclo Especial para 5to de Secundaria",
    tagline: "Prepárate mientras terminas el colegio",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CICLO%20QUINTOS.jpg-oSHDJjVZfLKf9fh9tlZx5YyUtGMkme.jpeg",
    description:
      "El Ciclo Quintos está diseñado exclusivamente para estudiantes que cursan el quinto año de secundaria, facilitando su transición hacia la educación superior mientras completan sus estudios escolares. Este programa fortalece las bases educativas de los postulantes, brindándoles herramientas específicas para afrontar con éxito el proceso de admisión a la UNSA. La combinación de clases virtuales y exámenes presenciales permite a los estudiantes complementar sus actividades escolares mientras se preparan académica y emocionalmente para los desafíos universitarios.",
    details: [
      { icon: Clock, title: "Duración", value: "10 semanas" },
      { icon: Calendar, title: "Horarios", value: "Tardes y fines de semana" },
      { icon: Users, title: "Modalidad", value: "Virtual con evaluaciones presenciales" },
      { icon: BookOpen, title: "Material", value: "Digital optimizado" },
    ],
    benefits: [
      { title: "Horarios compatibles", description: "Diseñados para no interferir con tus clases escolares" },
      { title: "Enfoque estratégico", description: "Contenido centrado en temas de mayor incidencia en el examen" },
      { title: "Orientación vocacional", description: "Asesoría para elegir la carrera adecuada a tu perfil" },
      { title: "Ventaja competitiva", description: "Preparación anticipada para asegurar tu ingreso" },
    ],
    tag: "Exclusivo 5to de Secundaria",
    tagIcon: "Bookmark",
    accentColor: "#d4af37",
  },
  {
    id: 3,
    title: "Extraordinario",
    subtitle: "Proceso de Admisión Extraordinario",
    tagline: "Reconocimiento al mérito y la diversidad",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EXTRAORDINARIO.jpg-6vbavfsAlUHYoIZU7TehfIwuSMn69p.jpeg",
    description:
      "El Proceso de Admisión Extraordinario de la UNSA está dirigido a postulantes con perfiles especiales, reconociendo méritos académicos, deportivos y personales, así como situaciones particulares contempladas en la normativa nacional. Este proceso promueve la inclusión y equidad, brindando oportunidades de acceso a una educación superior de calidad a diversos grupos de la sociedad, valorando sus logros y circunstancias específicas.",
    profiles: [
      { icon: Briefcase, title: "Titulados o graduados", description: "De universidades públicas o privadas" },
      { icon: Award, title: "Primeros puestos", description: "De instituciones educativas secundarias" },
      { icon: Medal, title: "Deportistas destacados", description: "Acreditados por el IPD" },
      { icon: Users, title: "Personas con discapacidad", description: "Acreditadas por CONADIS" },
      {
        icon: School,
        title: "Traslados externos e internos",
        description: "De universidades nacionales o extranjeras",
      },
      { icon: Star, title: "Bachillerato Internacional", description: "Y egresados de COAR" },
    ],
    note: "Este proceso también incluye a víctimas del terrorismo, víctimas de la violencia, postulantes bajo el Convenio Andrés Bello, egresados de universidades con licencia denegada y otros casos especiales determinados por el Consejo Universitario.",
    tag: "Admisión Especial",
    tagIcon: "Star",
    accentColor: "#9a1b1f",
  },
]

export const introCards = [
  {
    id: 1,
    icon: School,
    title: "Fase I y II",
    description: "Para egresados y estudiantes del último año de secundaria que buscan una preparación integral.",
  },
  {
    id: 2,
    icon: FileText,
    title: "Ciclo Quintos",
    description:
      "Exclusivo para estudiantes de quinto de secundaria que desean prepararse mientras culminan sus estudios.",
  },
  {
    id: 3,
    icon: Star,
    title: "Extraordinario",
    description: "Para postulantes con perfiles especiales, méritos académicos, deportivos o situaciones particulares.",
  },
]

