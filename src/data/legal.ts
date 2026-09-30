// Contenido legal real, tomado tal cual de la app (src/data/terminos.ts en
// APPbitaco) y de la política de privacidad ya publicada en la landing
// temporal (marketing/landing/privacy.html) — no es texto inventado para
// el sitio, es el mismo texto legal que ya rige la app.

export type LegalSection = {
  titulo: string;
  texto: string;
  linkUrl?: string;
  linkLabel?: string;
};

export const TERMINOS_ES: LegalSection[] = [
  {
    titulo: '1. Qué es Bitáco',
    texto:
      'Bitáco es una app de exploración gamificada para conocer la Ciudad de México (y en el futuro, otros destinos), disponible en Google Play y App Store. Es una experiencia con valor lúdico y didáctico: no obliga a nadie a hacer nada, no otorga ningún derecho legal, y su único fin es ayudarte a descubrir y disfrutar la ciudad.',
  },
  {
    titulo: '2. Es gratuita',
    texto:
      'Bitáco es gratuita para las personas usuarias. Más adelante podríamos incluir logros o categorías patrocinados por marcas que paguen por aparecer en la app; si eso sucede, ese contenido patrocinado estará siempre identificado como tal, y nunca cambiará el hecho de que usar Bitáco no tiene costo para ti.',
  },
  {
    titulo: '3. Aceptación y edad',
    texto:
      'Al crear tu perfil aceptas estos términos. Si eres menor de edad, necesitas el permiso de tu madre, padre o tutor para usar la app.',
  },
  {
    titulo: '4. Tu cuenta y tus datos',
    texto:
      'Los datos que ingresas (nombre, edad, país, ciudad, preferencias, respuestas del cuestionario de tu plan de viaje, fotos de evidencia, etc.) se guardan en tu dispositivo y, cuando inicias sesión con correo o con Google, también en servidores seguros que usamos para operar la app (como Supabase), únicamente para que puedas recuperar tu progreso. No vendemos ni compartimos tu información con terceros para fines publicitarios. Puedes solicitar el acceso, rectificación, cancelación u oposición (derechos ARCO) al tratamiento de tus datos en cualquier momento, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.',
  },
  {
    titulo: '5. Ubicación y notificaciones',
    texto:
      'Si das permiso, Bitáco usa tu ubicación solo mientras la app está abierta (nunca en segundo plano) para avisarte cuando estás cerca de un logro sin completar — esa comparación ocurre en tu propio teléfono y tu posición nunca se guarda ni se envía a nuestros servidores. Las notificaciones (recordatorios, datos curiosos, avisos de cercanía) se programan directamente en tu dispositivo, sin usar un servicio externo de push. Puedes negar o revocar estos permisos en cualquier momento desde los ajustes de tu sistema operativo sin que la app deje de funcionar.',
  },
  {
    titulo: '6. Es un honor system',
    texto:
      'Bitáco no verifica de ninguna forma que hayas completado realmente un logro — no valida fotos ni evidencia, y la ubicación (cuando das permiso) solo se usa para avisarte que hay un logro cerca, nunca para confirmar que lo cumpliste. Marcar un logro como completado es una declaración de honestidad de tu parte, y los logros y títulos que obtienes no tienen ningún valor ni efecto legal, oficial ni comercial: son parte del juego.',
  },
  {
    titulo: '7. Fotos y videos de evidencia',
    texto:
      'Cualquier foto o video que subas como evidencia es tu responsabilidad. No revisamos ni moderamos ese contenido, y no nos hacemos responsables de lo que subas.',
  },
  {
    titulo: '8. Contenido restringido por edad',
    texto:
      'Bitáco oculta el contenido relacionado con alcohol (la categoría Salucita y logros similares en otras categorías) a personas menores de 19 años. Es tu responsabilidad — o la de tu tutor — dar una fecha de nacimiento real.',
  },
  {
    titulo: '9. Cero tolerancia al turismo sexual y actividades ilegales',
    texto:
      'Bitáco no promueve, apoya ni tolera el turismo sexual, la explotación de personas, ni ninguna actividad ilegal bajo ninguna circunstancia. Todos los logros de la app giran en torno a comida, cultura, lugares, música y experiencias legítimas y legales de la ciudad. Cualquier uso de la app fuera de ese propósito no es responsabilidad de Bitáco.',
  },
  {
    titulo: '10. Las actividades pasan en la vida real',
    texto:
      'Completar un logro implica hacer algo fuera de la app: comer, viajar, visitar un lugar, etc. Tú eres el único responsable de tu seguridad, tus decisiones y de cumplir las leyes locales. Bitáco no se hace responsable de accidentes, gastos ni ninguna consecuencia derivada de completar un logro.',
  },
  {
    titulo: '11. Lugares, experiencias y recomendaciones sugeridas',
    texto:
      "Los lugares, negocios, experiencias y recomendaciones que aparecen dentro de la app (incluyendo, entre otros, los lugares sugeridos por logro, el directorio de experiencias, y el itinerario generado por \"Mi Plan CDMX\") son sugerencias informativas, no una curación garantizada ni una recomendación profesional. Bitáco no opera, controla, supervisa ni verifica de forma continua estos lugares o proveedores externos, y no garantiza su disponibilidad, calidad, precios, horarios, seguridad, ni que sigan existiendo tal como se describen. Salvo que se indique expresamente como contenido patrocinado, no existe ninguna relación comercial, afiliación ni endoso entre Bitáco y los lugares o proveedores mencionados. Usar, visitar o contratar cualquiera de estas sugerencias es una decisión exclusiva tuya, bajo tu propio riesgo y responsabilidad; Bitáco no se hace responsable de ningún daño, pérdida, disputa ni consecuencia derivada de esa decisión. Te recomendamos siempre verificar la información de forma independiente antes de asistir o contratar.",
  },
  {
    titulo: '12. Marcas, nombres e imágenes de terceros',
    texto:
      'Bitáco puede mencionar o hacer referencia a lugares, museos, monumentos, productos o marcas de terceros (por ejemplo, "Museo Nacional de Antropología" o "Coca-Cola") únicamente con fines descriptivos e informativos, para ayudarte a identificar la experiencia real. Esto no implica ninguna afiliación, patrocinio ni endoso por parte de esos terceros, y ese uso no tiene ánimo comercial. Cada nombre y marca pertenece a sus respectivos dueños.',
  },
  {
    titulo: '13. Imágenes de referencia',
    texto:
      'Las imágenes, íconos y estampas que usa Bitáco son ilustrativas y sirven como referencia visual de cada logro — no son fotografías oficiales del lugar o producto real ni garantizan cómo lo encontrarás en la vida real.',
  },
  {
    titulo: '14. Propiedad de la marca Bitáco',
    texto:
      'El nombre "Bitáco", su logo, símbolos, ilustraciones, textos, diseños y demás materiales originales de la app son propiedad exclusiva de quien la creó. No se cede ningún derecho de uso, reproducción, distribución ni explotación de estos materiales sin autorización previa por escrito.',
  },
  {
    titulo: '15. Esto puede cambiar',
    texto:
      'Bitáco está en desarrollo constante. El contenido, las funciones, la disponibilidad del servicio y estos términos pueden cambiar en cualquier momento; te avisaremos de cambios importantes dentro de la app.',
  },
  {
    titulo: '16. Ley aplicable',
    texto:
      'Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia relacionada con el uso de la app se someterá a los tribunales competentes en México.',
  },
  {
    titulo: '17. Política de privacidad',
    texto:
      'Para conocer en detalle qué información recopilamos, para qué la usamos y cómo puedes eliminarla, consulta nuestra política de privacidad completa:',
    linkUrl: '/es/privacidad',
    linkLabel: 'Ver política de privacidad',
  },
];

export const TERMINOS_EN: LegalSection[] = [
  {
    titulo: '1. What Bitáco Is',
    texto:
      "Bitáco is a gamified exploration app for getting to know Mexico City (and, in the future, other destinations), available on Google Play and the App Store. It's a playful, educational experience: it doesn't obligate anyone to do anything, it grants no legal rights, and its only purpose is to help you discover and enjoy the city.",
  },
  {
    titulo: "2. It's Free",
    texto:
      'Bitáco is free for users. Down the road we may include achievements or categories sponsored by brands that pay to appear in the app; if that happens, that sponsored content will always be clearly labeled as such, and it will never change the fact that using Bitáco costs you nothing.',
  },
  {
    titulo: '3. Acceptance and Age',
    texto:
      "By creating your profile, you agree to these terms. If you're a minor, you need permission from a parent or guardian to use the app.",
  },
  {
    titulo: '4. Your Account and Your Data',
    texto:
      "The data you enter (name, age, country, city, preferences, travel-plan questionnaire answers, evidence photos, etc.) is stored on your device and, when you sign in with email or Google, also on secure servers we use to run the app (such as Supabase), solely so you can recover your progress. We do not sell or share your information with third parties for advertising purposes. You can request access to, rectification of, cancellation of, or objection to (ARCO rights) the processing of your data at any time, in accordance with Mexico's Federal Law on Protection of Personal Data Held by Private Parties.",
  },
  {
    titulo: '5. Location and Notifications',
    texto:
      "If you grant permission, Bitáco uses your location only while the app is open (never in the background) to let you know when you're near an achievement you haven't completed — that comparison happens on your own phone, and your position is never stored or sent to our servers. Notifications (reminders, trivia, proximity alerts) are scheduled directly on your device, without using a third-party push service. You can deny or revoke these permissions at any time from your device's system settings without the app breaking.",
  },
  {
    titulo: "6. It's an Honor System",
    texto:
      "Bitáco does not verify in any way that you've actually completed an achievement — it doesn't validate photos or evidence, and location (when you grant permission) is only used to let you know an achievement is nearby, never to confirm you completed it. Marking an achievement as complete is a statement of honesty on your part, and the achievements and titles you earn have no legal, official, or commercial value or effect: they're part of the game.",
  },
  {
    titulo: '7. Evidence Photos and Videos',
    texto:
      'Any photo or video you upload as evidence is your own responsibility. We do not review or moderate that content, and we are not responsible for what you upload.',
  },
  {
    titulo: '8. Age-Restricted Content',
    texto:
      "Bitáco hides alcohol-related content (the Salucita category and similar achievements in other categories) from users under 19. It's your responsibility — or your guardian's — to provide a real date of birth.",
  },
  {
    titulo: '9. Zero Tolerance for Sex Tourism and Illegal Activity',
    texto:
      "Bitáco does not promote, support, or tolerate sex tourism, human exploitation, or any illegal activity under any circumstances. Every achievement in the app revolves around food, culture, places, music, and legitimate, legal experiences in the city. Any use of the app outside that purpose is not Bitáco's responsibility.",
  },
  {
    titulo: '10. The Activities Happen in Real Life',
    texto:
      'Completing an achievement involves doing something outside the app: eating, traveling, visiting a place, etc. You are solely responsible for your safety, your decisions, and complying with local laws. Bitáco is not responsible for accidents, expenses, or any consequence arising from completing an achievement.',
  },
  {
    titulo: '11. Suggested Places, Experiences, and Recommendations',
    texto:
      'The places, businesses, experiences, and recommendations shown within the app (including, among others, the places suggested per achievement, the experiences directory, and the itinerary generated by "Mi Plan CDMX") are informational suggestions, not a guaranteed curation or a professional recommendation. Bitáco does not operate, control, supervise, or continuously verify these third-party places or providers, and does not guarantee their availability, quality, prices, hours, safety, or that they continue to exist as described. Unless expressly labeled as sponsored content, there is no commercial relationship, affiliation, or endorsement between Bitáco and the places or providers mentioned. Using, visiting, or booking any of these suggestions is entirely your own decision, at your own risk and responsibility; Bitáco is not liable for any damage, loss, dispute, or consequence arising from that decision. We recommend always independently verifying information before attending or booking.',
  },
  {
    titulo: '12. Third-Party Trademarks, Names, and Images',
    texto:
      'Bitáco may mention or reference places, museums, monuments, products, or third-party trademarks (for example, "National Museum of Anthropology" or "Coca-Cola") solely for descriptive and informational purposes, to help you identify the real-world experience. This does not imply any affiliation, sponsorship, or endorsement by those third parties, and this use has no commercial intent. Each name and trademark belongs to its respective owner.',
  },
  {
    titulo: '13. Reference Images',
    texto:
      "The images, icons, and stamps Bitáco uses are illustrative and serve as a visual reference for each achievement — they are not official photographs of the actual place or product, and they do not guarantee how you'll find it in real life.",
  },
  {
    titulo: '14. Ownership of the Bitáco Brand',
    texto:
      'The name "Bitáco," its logo, symbols, illustrations, text, designs, and other original app materials are the exclusive property of its creator. No right to use, reproduce, distribute, or exploit these materials is granted without prior written authorization.',
  },
  {
    titulo: '15. This Can Change',
    texto:
      "Bitáco is under constant development. Content, features, service availability, and these terms may change at any time; we'll notify you of important changes within the app.",
  },
  {
    titulo: '16. Governing Law',
    texto:
      'These terms are governed by the laws of the United Mexican States. Any dispute related to the use of the app will be submitted to the competent courts in Mexico.',
  },
  {
    titulo: '17. Privacy Policy',
    texto:
      'For details on what information we collect, what we use it for, and how you can delete it, see our full privacy policy:',
    linkUrl: '/en/privacidad',
    linkLabel: 'View privacy policy',
  },
];

export const PRIVACIDAD_ES: LegalSection[] = [
  {
    titulo: '1. Quién es responsable de tus datos',
    texto:
      'Bitáco es desarrollada y operada de forma independiente por su equipo creador (contacto: hola@bitaco.app). Para efectos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), este equipo es el responsable del tratamiento de tus datos personales.',
  },
  {
    titulo: '2. Qué información recopilamos',
    texto:
      'Cuenta: si creas una cuenta, tu correo electrónico y contraseña (gestionados de forma segura por nuestro proveedor de autenticación, Supabase), o tu cuenta de Google si eliges iniciar sesión con ella.\n\nPerfil: nombre y apellido, país y ciudad de origen, fecha de nacimiento, sexo, orientación, cuántas veces has visitado la CDMX, y una foto de perfil (si eliges subir una).\n\nTu plan de viaje: si usas el cuestionario de "Mi Plan CDMX", guardamos tus respuestas — con quién viajas, tu ritmo de viaje, si tomas alcohol, tu interés en cultura, y tu "nivel guerrero", entre otras — únicamente para armar tu itinerario dentro de la app.\n\nTu progreso: qué logros has completado, la fecha, tu calificación, y cualquier nota o foto que agregues como evidencia. Las fotos de evidencia se guardan solo en tu dispositivo.\n\nUbicación: si das permiso, Bitáco usa tu ubicación aproximada solo mientras la app está abierta, para avisarte cuando estás cerca de un logro sin completar. Tus coordenadas nunca se guardan ni se envían a nuestros servidores — la comparación ocurre en tu propio teléfono.\n\nNotificaciones: se programan directamente en tu dispositivo, sin usar un servicio externo de push.\n\nBitáco funciona primero de forma local: toda tu información se guarda en tu propio dispositivo aunque nunca crees una cuenta. Solo se envía a nuestros servidores si decides iniciar sesión, para que tu progreso no se pierda si cambias de celular.',
  },
  {
    titulo: '3. Para qué usamos tu información',
    texto:
      'Para que la app funcione: mostrarte tu progreso, tus logros y tu pasaporte de viaje; generar tu plan personalizado a partir de tus respuestas; avisarte cuando un logro está cerca (si diste permiso de ubicación); dejarte compartir tus logros si tú decides hacerlo; y generar estadísticas internas agregadas para mejorar la app.\n\nDe forma opcional, y solo con tu consentimiento: enviarte comunicaciones (novedades, recordatorios). Puedes retirar este consentimiento en cualquier momento desde Ajustes.',
  },
  {
    titulo: '4. Con quién compartimos tu información',
    texto:
      'No vendemos tu información personal, y no la compartimos con terceros con fines publicitarios. Usamos proveedores de servicio para operar la app: Supabase (base de datos y autenticación, sobre infraestructura de Amazon Web Services) y, si inicias sesión con Google, Google como proveedor de autenticación. Parte de esta infraestructura puede estar alojada fuera de México; al usar Bitáco, consientes esa transferencia internacional necesaria para operar el servicio.',
  },
  {
    titulo: '5. Dónde se guarda tu información',
    texto:
      'Localmente en tu dispositivo, y — si tienes una cuenta — también en los servidores de Supabase. Tu ubicación GPS es la única excepción: nunca se guarda en ningún lado, ni local ni en la nube.',
  },
  {
    titulo: '6. Tus derechos ARCO y cómo eliminar tu cuenta',
    texto:
      'Tienes derecho a Acceder, Rectificar, Cancelar y Oponerte (derechos ARCO) al tratamiento de tus datos, y a revocar tu consentimiento en cualquier momento. Puedes borrar tu cuenta y toda tu información en cualquier momento, directamente desde la app: Ajustes → Eliminar mi perfil. Esta acción es inmediata y no se puede deshacer. Si prefieres ejercer tus derechos por correo, escríbenos a hola@bitaco.app.',
  },
  {
    titulo: '7. Menores de edad',
    texto:
      'Bitáco automáticamente oculta los logros relacionados con alcohol para los perfiles de usuarios menores de edad, según la fecha de nacimiento indicada. Si eres madre, padre o tutor y crees que un menor a tu cargo compartió información sin tu consentimiento, contáctanos para eliminarla.',
  },
  {
    titulo: '8. Cambios a esta política',
    texto:
      'Si actualizamos esta política, cambiaremos la fecha al inicio de esta página y, si el cambio es importante, te avisaremos dentro de la app.',
  },
  {
    titulo: '9. Contacto',
    texto: '¿Dudas, comentarios o solicitudes sobre tu información? Escríbenos a hola@bitaco.app.',
  },
];

export const PRIVACIDAD_EN: LegalSection[] = [
  {
    titulo: '1. Who is responsible for your data',
    texto:
      'Bitáco is developed and operated independently by its creator team (contact: hola@bitaco.app). Under Mexico\'s Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP), this team is the data controller for your personal data.',
  },
  {
    titulo: '2. What information we collect',
    texto:
      "Account: if you create an account, your email address and password (securely handled by our authentication provider, Supabase), or your Google account if you choose to sign in with it.\n\nProfile: first and last name, country and city of origin, date of birth, sex, orientation, how many times you've visited Mexico City, and a profile photo (if you choose to upload one).\n\nYour travel plan: if you use the \"My CDMX Plan\" questionnaire, we save your answers — who you're traveling with, your travel pace, whether you drink, your interest in culture, and your \"warrior level,\" among others — only to build your itinerary inside the app.\n\nYour progress: which achievements you've completed, the date, your rating, and any notes or photos you add as evidence. Evidence photos are stored only on your device.\n\nLocation: if you grant permission, Bitáco uses your approximate location only while the app is open, to notify you when you're near an uncompleted achievement. Your coordinates are never stored or sent to our servers — the comparison happens on your own phone.\n\nNotifications: scheduled directly on your device, without a third-party push service.\n\nBitáco works local-first: all your information is saved on your own device even if you never create an account. It's only sent to our servers if you choose to sign in, so your progress isn't lost if you switch phones.",
  },
  {
    titulo: '3. What we use your information for',
    texto:
      "For the app to work: showing your progress, achievements, and travel passport; generating your personalized plan from your answers; notifying you when an achievement is nearby (if you granted location permission); letting you share your achievements if you choose to; and generating internal, aggregated statistics to improve the app.\n\nOptionally, and only with your consent: sending you communications (updates, reminders). You can withdraw this consent at any time from Settings.",
  },
  {
    titulo: '4. Who we share your information with',
    texto:
      "We don't sell your personal information, and we don't share it with third parties for advertising purposes. We use service providers to run the app: Supabase (database and authentication, on Amazon Web Services infrastructure) and, if you sign in with Google, Google as an authentication provider. Some of this infrastructure may be hosted outside Mexico; by using Bitáco, you consent to that international transfer, necessary to operate the service.",
  },
  {
    titulo: '5. Where your information is stored',
    texto:
      "Locally on your device, and — if you have an account — also on Supabase's servers. Your GPS location is the one exception: it's never stored anywhere, on-device or in the cloud.",
  },
  {
    titulo: '6. Your data rights and how to delete your account',
    texto:
      "You have the right to Access, Rectify, Cancel, and Object (ARCO rights) to the processing of your data, and to withdraw consent at any time. You can delete your account and all your information at any time, directly from the app: Settings → Delete my profile. This action is immediate and cannot be undone. If you'd rather exercise these rights by email, write to us at hola@bitaco.app.",
  },
  {
    titulo: '7. Minors',
    texto:
      "Bitáco automatically hides alcohol-related achievements for profiles belonging to minors, based on the birth date entered. If you're a parent or guardian and believe a minor in your care shared personal information without your consent, contact us to have it removed.",
  },
  {
    titulo: '8. Changes to this policy',
    texto:
      "If we update this policy, we'll change the date at the top of this page and, if the change is significant, notify you within the app.",
  },
  {
    titulo: '9. Contact',
    texto: 'Questions, comments, or requests about your information? Write to us at hola@bitaco.app.',
  },
];
