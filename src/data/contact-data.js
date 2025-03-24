export const faqs = [
  {
    id: 1,
    question: "¿Cómo puedo ingresar a las clases del CEPRUNSA?",
    answer: {
      type: "list",
      intro: "Para ingresar a las clases, sigue estos pasos:",
      items: [
        "Utiliza la cuenta CEPRUNSA que se te brindó al momento de tu inscripción.",
        "Ingresa a la plataforma Google Classroom con dicha cuenta.",
        "Desde el Classroom, accede al enlace de Google Meet correspondiente para unirte a la sesión.",
      ],
      listType: "ordered",
    },
  },
  {
    id: 2,
    question: "¿Cómo puedo realizar el pago de las cuotas?",
    answer: {
      type: "complex",
      content: [
        {
          type: "paragraph",
          text: "El pago de las cuotas se realiza con el código brindado al momento de tu inscripción. Puedes realizarlo a través de cualquier canal del BCP, como:",
        },
        {
          type: "list",
          items: ["Agentes BCP", "Banca móvil", "Banca por internet", "Yape"],
          listType: "unordered",
        },
        {
          type: "paragraph",
          text: "En todos estos canales, utiliza la cuenta <strong>UNSA-VIRTUAL</strong> para completar la transacción.",
        },
      ],
    },
  },
  {
    id: 3,
    question: "¿Puedo retirarme o solicitar la exoneración de cuotas del CEPRUNSA?",
    answer: {
      type: "complex",
      content: [
        {
          type: "paragraph",
          text: "Según el Reglamento de Admisión, aprobado con Resolución de Consejo Universitario N° 219-2024, de fecha 21 de mayo del 2024, establece:",
        },
        {
          type: "paragraph",
          text: "<strong>Artículo 64°:</strong> El postulante no puede solicitar, bajo ningún concepto:",
        },
        {
          type: "list",
          items: ["64.1. Devolución y/o reembolso del monto abonado.", "64.2. Exoneración de deuda."],
          listType: "unordered",
        },
      ],
    },
  },
]

export const contactInfo = [
  {
    id: 1,
    type: "address",
    title: "Dirección",
    details: ["Calle San Agustín 108 - Arequipa", "Campus Universitario UNSA"],
    icon: "MapPin",
  },
  {
    id: 2,
    type: "phone",
    title: "Teléfono",
    details: ["054-391911 Anexos 1422-1423-1424"],
    icon: "Phone",
  },
  {
    id: 3,
    type: "email",
    title: "Email",
    details: ["ceprunsa@unsa.edu.pe"],
    icon: "Mail",
  },
  {
    id: 4,
    type: "hours",
    title: "Horario de Atención",
    details: ["Lunes a Viernes: 8:30 AM - 3:30 PM"],
    icon: "Clock",
  },
]

export const socialMedia = [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/ceprunsaoficial/",
    icon: "Facebook",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://instagram.com",
    icon: "Instagram",
  },
  {
    id: 3,
    name: "YouTube",
    url: "https://www.youtube.com/@EventosCeprunsa/",
    icon: "Youtube",
  },
]

