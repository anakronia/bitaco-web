// Diccionario central de textos del sitio. Todo el contenido bilingüe vive
// aquí (no como archivos .astro duplicados por idioma) para que agregar una
// página nueva sea llenar un objeto, no mantener dos copias del markup.
export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.soporte': 'Soporte',
    'nav.descargar': 'Descargar',

    'hero.kicker': 'Bienvenido a la colección',
    'hero.title': 'Hay una Ciudad de México que casi nadie visita',
    'hero.subtitle':
      'Está en el chiflido del camotero, en comerse un taco de pie en la calle, en un canto que termina en ¡a huevo! arriba de una trajinera. Bitáco no es una guía: es el reto de ir, vivirla y hacerla tuya.',
    'hero.tagline': 'Colonia a colonia, sello a sello.',
    'hero.cta.appstore': 'Descargar en App Store',
    'hero.cta.googleplay': 'Descargar en Google Play',
    'hero.comingSoon': 'Muy pronto — octubre',
    'hero.free': 'Gratis',

    'how.title': 'Cómo funciona',
    'how.step1.title': 'Elige un reto',
    'how.step1.body': 'Cientos repartidos por toda la ciudad: tacos, cultura, vida nocturna y más.',
    'how.step2.title': 'Vívelo en la calle',
    'how.step2.body': 'Nada de checklist desde el sillón. Vas, lo pruebas, lo escuchas, te pierdes un rato.',
    'how.step3.title': 'Gánate el sello',
    'how.step3.body': 'Cada logro cumplido es un pedacito real de la ciudad que ya es tuyo, para siempre.',

    'passport.kicker': 'Tu bitácora de viaje',
    'passport.title': 'Un pasaporte que se va llenando de sellos y experiencias vividas',
    'passport.body':
      '271 logros repartidos por toda la ciudad, cada uno con su propio sello ilustrado. Nada de casillas marcadas: es la colección de lo que ya viviste, lo que ya es tuyo.',
    'passport.stat1': 'logros por descubrir',
    'passport.stat2': 'títulos por coleccionar',

    'categories.title': 'Hay un reto para cada quien',
    'categories.subtitle': '8 categorías generales, retos de temporada y retos para gustos bien específicos.',

    'quiz.subtitle': 'Diez preguntas bien cabronas. Sales con tu calificación — y con ganas de comprobarla en la calle.',
    'quiz.cta': 'Hacer la prueba',

    'plan.title': 'Arma tu plan para CDMX',
    'plan.subtitle':
      'Descarga la app y dinos cuánto tiempo tienes, con quién vienes y qué tipo de turista eres. Te armaremos un itinerario recomendado para que aproveches cada día.',
    'plan.cta': 'Descargar la app y armar mi plan',

    'footer.legal': 'Legal',
    'footer.privacidad': 'Aviso de privacidad',
    'footer.terminos': 'Términos y condiciones',
    'footer.soporte': 'Soporte',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.credit': 'Creado por FXCK THE AD —',

    'suggest.title': '¿Tienes una experiencia chilanga que a huevo deba incluirse?',
    'suggest.subtitle': 'Cuéntanos y la revisamos para meterla a Bitáco.',
    'suggest.categoria': 'Categoría',
    'suggest.categoria.placeholder': 'Elige una',
    'suggest.categoria.comida': 'Comida',
    'suggest.categoria.lugar': 'Lugar',
    'suggest.categoria.plan': 'Plan',
    'suggest.categoria.licor': 'Licor',
    'suggest.categoria.cerca': 'Cerca a CDMX',
    'suggest.categoria.costumbre': 'Una costumbre',
    'suggest.categoria.internacional': 'Internacional (no es chilango pero está chingón)',
    'suggest.categoria.otro': 'Otro',
    'suggest.sitio': 'Sitio específico para recomendar',
    'suggest.sitio.opcional': '(si aplica)',
    'suggest.sitio.placeholder': 'Ej. Tacos El Vilsito, Narvarte',
    'suggest.contacto': 'Punto de contacto',
    'suggest.contacto.opcional': '(Web, Maps, Whats, Insta...)',
    'suggest.contacto.placeholder': 'Ej. instagram.com/elvilsito',
    'suggest.descripcion': '¿Por qué debería ser parte de Bitáco CDMX?',
    'suggest.descripcion.placeholder': 'Describe la experiencia y por qué a huevo debería estar aquí.',
    'suggest.submit': 'Mandar sugerencia',
    'suggest.ok': '¡Gracias! Ya la tenemos para revisar.',
    'suggest.err': 'Algo falló — intenta de nuevo en un rato.',
  },
  en: {
    'nav.home': 'Home',
    'nav.soporte': 'Support',
    'nav.descargar': 'Download',

    'hero.kicker': 'Welcome to the collection',
    'hero.title': "There's a Mexico City almost nobody visits",
    'hero.subtitle':
      "It's in the whistle of the sweet-potato cart, in eating a taco standing up in the street, in a song that ends in a shout of pure chilango pride on top of a trajinera. Bitáco isn't a guide — it's a dare to go live it and make it yours.",
    'hero.tagline': 'Block by block, stamp by stamp.',
    'hero.cta.appstore': 'Download on the App Store',
    'hero.cta.googleplay': 'Get it on Google Play',
    'hero.comingSoon': 'Coming soon — October',
    'hero.free': 'Free',

    'how.title': 'How it works',
    'how.step1.title': 'Pick a challenge',
    'how.step1.body': 'Hundreds spread across the city: tacos, culture, nightlife and more.',
    'how.step2.title': 'Live it for real',
    'how.step2.body': "No checklists from the couch. You go, you taste it, you hear it, you get a little lost.",
    'how.step3.title': 'Earn the stamp',
    'how.step3.body': "Every challenge completed is a real piece of the city that's now yours, for good.",

    'passport.kicker': 'Your travel log',
    'passport.title': 'A passport that fills up with stamps and stories lived',
    'passport.body':
      "271 achievements spread across the city, each with its own illustrated stamp. No checkboxes — it's the collection of everything you've already lived, everything that's already yours.",
    'passport.stat1': 'achievements',
    'passport.stat2': 'titles to collect',

    'categories.title': "There's a challenge for everyone",
    'categories.subtitle': '8 general categories, seasonal challenges, and challenges for very specific tastes.',

    'quiz.subtitle': "Ten questions with an attitude. You'll get your score — and the urge to prove it in the street.",
    'quiz.cta': 'Take the test',

    'plan.title': 'Plan your CDMX trip',
    'plan.subtitle':
      "Download the app and tell us how long you're here, who's coming, and what kind of traveler you are. We'll build a recommended itinerary so you make the most of every day.",
    'plan.cta': 'Download the app and build my plan',

    'footer.legal': 'Legal',
    'footer.privacidad': 'Privacy notice',
    'footer.terminos': 'Terms and conditions',
    'footer.soporte': 'Support',
    'footer.rights': 'All rights reserved.',
    'footer.credit': 'Made by FXCK THE AD —',

    'suggest.title': 'Have a chilango experience that should for sure be in here?',
    'suggest.subtitle': "Tell us about it and we'll review it for Bitáco.",
    'suggest.categoria': 'Category',
    'suggest.categoria.placeholder': 'Pick one',
    'suggest.categoria.comida': 'Food',
    'suggest.categoria.lugar': 'Place',
    'suggest.categoria.plan': 'Plan',
    'suggest.categoria.licor': 'Drinks',
    'suggest.categoria.cerca': 'Near CDMX',
    'suggest.categoria.costumbre': 'A tradition',
    'suggest.categoria.internacional': "International (not chilango, but it's great)",
    'suggest.categoria.otro': 'Other',
    'suggest.sitio': 'Specific place to recommend',
    'suggest.sitio.opcional': '(if it applies)',
    'suggest.sitio.placeholder': 'E.g. Tacos El Vilsito, Narvarte',
    'suggest.contacto': 'Contact point',
    'suggest.contacto.opcional': '(website, Maps, WhatsApp, Insta...)',
    'suggest.contacto.placeholder': 'E.g. instagram.com/elvilsito',
    'suggest.descripcion': 'Why should it be part of Bitáco CDMX?',
    'suggest.descripcion.placeholder': "Describe the experience and why it should for sure be here.",
    'suggest.submit': 'Send suggestion',
    'suggest.ok': "Thanks! We've got it to review.",
    'suggest.err': 'Something failed — try again in a bit.',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t<K extends keyof (typeof ui)[typeof defaultLang]>(key: K): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
