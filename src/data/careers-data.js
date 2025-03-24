// Importamos los iconos que necesitamos
import { GraduationCap, Users, ClipboardCheck } from "lucide-react"

// Datos de los puestos disponibles
export const jobPositions = [
  {
    id: 1,
    title: "Personal de Servicio de Enseñanza",
    icon: GraduationCap,
    mission: "Brindar un servicio de enseñanza de calidad para la preparación académico de los postulantes.",
    functions: [
      "Planificar y ejecutar los temas asignados",
      "Elaborar material académico y evaluaciones",
      "Desarrollar estrategias de enseñanza-aprendizaje",
      "Elaborar preguntas para exámenes simulacros",
      "Entregar material académico al área correspondiente",
      "Cumplir con la planificación académica establecida",
    ],
    requirements: [
      "Experiencia en enseñanza y/o docencia",
      "Bachiller universitario y/o titulado registrado en SUNEDU o titulado de instituto pedagógico registrado en DRE",
      "Cursos en estrategias pedagógicas y recursos educativos digitales",
    ],
    applicationFormUrl: "https://forms.google.com",
    documentUrl: "#",
  },
  {
    id: 2,
    title: "Personal de Servicio de Monitoreo",
    icon: Users,
    mission:
      "Brindar soporte administrativo en el desarrollo de las actividades diarias académicas en el proceso de admisión correspondiente del CEPRUNSA.",
    functions: [
      "Programar sesiones virtuales del salón asignado",
      "Orientar a postulantes sobre procedimientos",
      "Verificar cumplimiento del contenido temático",
      "Monitorear avance curricular",
      "Mantener el orden en las sesiones de clase",
      "Controlar asistencia de docentes y estudiantes",
    ],
    requirements: [
      "Ser alumno regular, mayor de edad, con matrícula vigente de la Universidad Nacional de San Agustín que no presente otros beneficios del estado.",
    ],
    applicationFormUrl: "https://forms.google.com",
    documentUrl: "#",
  },
  {
    id: 3,
    title: "Coordinador de Monitoreo",
    icon: ClipboardCheck,
    mission: "Asegurar el correcto desempeño del equipo de monitores y el cumplimiento de los estándares de monitoreo.",
    functions: [
      "Supervisar el trabajo de los monitores",
      "Informar incidencias graves",
      "Verificar puntualidad en los salones",
      "Presentar informes de control y avance",
      "Organizar equipos de trabajo",
      "Reportar desarrollo del temario",
      "Comunicar disposiciones institucionales",
      "Participar en reuniones semanales",
    ],
    requirements: ["Egresados y/o bachilleres universitarios."],
    applicationFormUrl: "https://forms.google.com",
    documentUrl: "#",
  },
]

