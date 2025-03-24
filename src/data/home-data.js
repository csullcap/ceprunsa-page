import { BookOpen, Users, Calendar } from "lucide-react"

export const features = [
  {
    id: 1,
    icon: BookOpen,
    title: "Material Exclusivo",
    description: "Material didáctico actualizado y diseñado por docentes universitarios.",
  },
  {
    id: 2,
    icon: Users,
    title: "Docentes Calificados",
    description: "Profesores con amplia experiencia en preparación preuniversitaria.",
  },
  {
    id: 3,
    icon: Calendar,
    title: "Horarios Flexibles",
    description: "Diferentes turnos y modalidades para adaptarse a tus necesidades.",
  },
]

export const admissionProcesses = [
  {
    id: 1,
    number: "1",
    title: "Fase I y II",
    description:
      "Proceso regular dirigido a estudiantes egresados y cursantes del último año de secundaria, con clases virtuales y exámenes presenciales.",
    benefits: [
      "Preparación integral en todas las materias",
      "Simulacros tipo examen de admisión",
      "Duración de 10 semanas",
    ],
  },
  {
    id: 2,
    number: "2",
    title: "Ciclo Quintos",
    description:
      "Exclusivo para estudiantes de 5to de secundaria, con horarios compatibles con sus estudios escolares.",
    benefits: [
      "Horarios adaptados a escolares",
      "Enfoque en temas clave del examen",
      "Orientación vocacional incluida",
    ],
  },
  {
    id: 3,
    number: "3",
    title: "Extraordinario",
    description:
      "Proceso especial para postulantes con perfiles específicos, reconociendo méritos académicos, deportivos y situaciones particulares.",
    benefits: ["Titulados y primeros puestos", "Deportistas destacados", "Bachillerato Internacional y COAR"],
  },
]

export const testimonials = [
  {
    id: 1,
    initials: "MR",
    name: "María Rodríguez",
    career: "Medicina - UNSA",
    testimonial:
      "Gracias a CEPRUNSA pude ingresar a la carrera de Medicina en mi primer intento. Los profesores son excelentes y el material de estudio es muy completo.",
  },
  {
    id: 2,
    initials: "CM",
    name: "Carlos Mendoza",
    career: "Ingeniería Civil - UNSA",
    testimonial:
      "El método de enseñanza de CEPRUNSA es muy efectivo. Los simulacros semanales me ayudaron a familiarizarme con el examen real y a mejorar mi rendimiento.",
  },
  {
    id: 3,
    initials: "AG",
    name: "Ana Gutiérrez",
    career: "Derecho - UNSA",
    testimonial:
      "Lo que más me gustó de CEPRUNSA fue el apoyo constante de los profesores. Siempre estaban disponibles para resolver mis dudas y me motivaron a seguir adelante.",
  },
]

