// Mismo quiz "¿Qué tan chilango eres?" de la app (src/data/chilangoQuiz.ts
// en APPbitaco) — preguntas, opciones, puntajes y resultados tal cual,
// para que la versión web sea el mismo test, no uno distinto.

export type QuizOption = { texto: string; puntos: number };
export type QuizQuestion = { pregunta: string; opciones: QuizOption[] };
export type QuizTier = { min: number; max: number; resultado: string; razon: string };

export const QUIZ_TITLE_ES = '¿Qué tan chilango eres?';
export const QUIZ_TITLE_EN = 'How Chilango Are You?';

export const QUIZ_ES: QuizQuestion[] = [
  {
    pregunta:
      'Es 19 de septiembre, pero no son las 13:14h. De pronto escuchas una voz por los altavoces de la ciudad. Tú...',
    opciones: [
      { texto: 'No sabes qué es esa voz, te asustas', puntos: 0 },
      { texto: 'Reconoces la voz, pero no sabes bien qué hacer', puntos: 1 },
      { texto: 'Vas de inmediato al punto de reunión', puntos: 2 },
      { texto: 'Sueltas un "¡saquen el bolillo!"', puntos: 3 },
    ],
  },
  {
    pregunta: 'Ves botellas de plástico con agua alineadas afuera de las casas y negocios, en la banqueta. Tú...',
    opciones: [
      { texto: 'Ni las notas, piensas que es basura', puntos: 0 },
      { texto: 'Crees que es para regar plantas', puntos: 1 },
      { texto: 'Sabes que "algo tiene que ver con perros", pero no exactamente qué', puntos: 2 },
      { texto: 'Ya sabes para qué son, aunque nunca has comprobado que de verdad funcione', puntos: 3 },
    ],
  },
  {
    pregunta: 'Pides una quesadilla de hongo o de chicharrón prensado. Te preguntan si la quieres con queso. Tú...',
    opciones: [
      { texto: 'No entiendes por qué preguntan algo tan obvio', puntos: 0 },
      { texto: 'Te sorprende que haya que aclarar eso', puntos: 1 },
      { texto: 'Sabes que hay debate nacional al respecto, pero dudas qué contestar', puntos: 2 },
      { texto: 'Contestas "con" o "sin" de volada, sin pensarlo', puntos: 3 },
    ],
  },
  {
    pregunta: 'El señor del carrito te da tus papitas ya con limón y chile en polvo. Tú...',
    opciones: [
      { texto: 'Las comes tal cual', puntos: 0 },
      { texto: 'Sientes que ya traen demasiado', puntos: 1 },
      { texto: 'Le pides salsa extra, sin saber cuál pedir', puntos: 2 },
      { texto: 'Le encimas Valentina, Botanera o Tamazula, obvio', puntos: 3 },
    ],
  },
  {
    pregunta: 'Vas en una escalera eléctrica. Tú...',
    opciones: [
      { texto: 'Te paras donde te quede cómodo', puntos: 0 },
      { texto: 'Te paras a la derecha, sin saber muy bien por qué', puntos: 1 },
      { texto: 'Te paras a la derecha porque ya viste que así se hace', puntos: 2 },
      { texto: 'Te formas a la derecha, y si vas de prisa subes por la izquierda sin dudarlo', puntos: 3 },
    ],
  },
  {
    pregunta: 'Pides un taco al pastor "con copia". Para no mancharte, tú...',
    opciones: [
      { texto: 'No sabes qué es "con copia"', puntos: 0 },
      { texto: 'Sabes que es doble tortilla, pero lo comes normal', puntos: 1 },
      { texto: 'Te inclinas un poco hacia adelante, por si las dudas', puntos: 2 },
      { texto: 'Te inclinas bien hacia adelante, casi en automático', puntos: 3 },
    ],
  },
  {
    pregunta: 'Llegas a un puesto de tacos de canasta. Tú...',
    opciones: [
      { texto: 'Preguntas qué tipos de taco tienen', puntos: 0 },
      { texto: 'Ves la canasta destapada para elegir', puntos: 1 },
      { texto: 'Ya sabes que hay de frijol, chicharrón y papa, pero preguntas de todos modos', puntos: 2 },
      { texto: 'Pides directo "de los que ya sabes", sin que te digan el menú', puntos: 3 },
    ],
  },
  {
    pregunta:
      'Un chilango te da indicaciones tipo "a la vueltecita" o "todo derecho" (aunque la calle tenga curvas). Tú...',
    opciones: [
      { texto: 'Te pierdes por completo', puntos: 0 },
      { texto: 'Le pides que te explique de nuevo, más claro', puntos: 1 },
      { texto: 'Le entiendes, pero te cuesta ubicarte', puntos: 2 },
      { texto: 'Le entiendes perfecto y llegas sin bronca', puntos: 3 },
    ],
  },
  {
    pregunta: 'Llevas dos días en la ciudad y tu estómago no la está pasando bien. Tú...',
    opciones: [
      { texto: 'No sabes qué hacer, esperas a que se te pase', puntos: 0 },
      { texto: 'Sabes que le dicen "la venganza de Moctezuma"', puntos: 1 },
      { texto: 'Ya habías oído de esto antes de venir', puntos: 2 },
      { texto: 'Ya traes algo para la acidez (tipo omeprazol o Riopan), por si las dudas', puntos: 3 },
    ],
  },
  {
    pregunta:
      'Un cuate te suelta: "¿Qué onda, qué pex hoy? Te quería pedir si te rifas a hacerme el paro de apartarme lugar en la paca del tianguis al rato. Terminando se arma el cotorreo y yo invito las helodias, ¿cómo ves?" Tú...',
    opciones: [
      { texto: 'No entiendes casi nada de la frase', puntos: 0 },
      { texto: 'Entiendes que te está pidiendo algo, pero se te pierde el resto', puntos: 1 },
      { texto: 'Entiendes casi todo, salvo "hacerme el paro" y "la paca"', puntos: 2 },
      { texto: 'Entiendes perfecto, y hasta la usarías tal cual', puntos: 3 },
    ],
  },
];

export const QUIZ_EN: QuizQuestion[] = [
  {
    pregunta:
      "It's September 19th, but it's not 1:14 PM. Suddenly you hear a voice over the city's loudspeakers. You...",
    opciones: [
      { texto: "Don't know what that voice is, you get scared", puntos: 0 },
      { texto: "Recognize the voice, but aren't sure what to do", puntos: 1 },
      { texto: 'Head immediately to the meeting point', puntos: 2 },
      { texto: 'Blurt out "grab the bolillo!"', puntos: 3 },
    ],
  },
  {
    pregunta: 'You see plastic water bottles lined up outside houses and businesses, on the sidewalk. You...',
    opciones: [
      { texto: "Don't even notice them, you think it's trash", puntos: 0 },
      { texto: "Think it's for watering plants", puntos: 1 },
      { texto: 'Know "it has something to do with dogs," but not exactly what', puntos: 2 },
      { texto: "Already know what they're for, even though you've never actually confirmed it works", puntos: 3 },
    ],
  },
  {
    pregunta: 'You order a mushroom or pressed pork-rind quesadilla. They ask if you want it with cheese. You...',
    opciones: [
      { texto: "Don't understand why they'd ask something so obvious", puntos: 0 },
      { texto: 'Are surprised that needs clarifying', puntos: 1 },
      { texto: "Know there's a national debate about this, but you're unsure how to answer", puntos: 2 },
      { texto: 'Answer "with" or "without" right away, without thinking', puntos: 3 },
    ],
  },
  {
    pregunta: 'The cart guy hands you your chips already with lime and chili powder. You...',
    opciones: [
      { texto: 'Eat them as is', puntos: 0 },
      { texto: 'Feel like they already have too much on them', puntos: 1 },
      { texto: 'Ask for extra salsa, without knowing which one to ask for', puntos: 2 },
      { texto: 'Pile on Valentina, Botanera, or Tamazula, obviously', puntos: 3 },
    ],
  },
  {
    pregunta: "You're on an escalator. You...",
    opciones: [
      { texto: "Stand wherever's comfortable", puntos: 0 },
      { texto: 'Stand on the right, without really knowing why', puntos: 1 },
      { texto: "Stand on the right because you've already seen that's how it's done", puntos: 2 },
      { texto: "Line up on the right, and if you're in a hurry you walk up on the left without hesitating", puntos: 3 },
    ],
  },
  {
    pregunta: 'You order a taco al pastor "with a copy." To avoid getting messy, you...',
    opciones: [
      { texto: 'Don\'t know what "with a copy" means', puntos: 0 },
      { texto: 'Know it means double tortilla, but eat it normally', puntos: 1 },
      { texto: 'Lean forward a little, just in case', puntos: 2 },
      { texto: 'Lean way forward, almost automatically', puntos: 3 },
    ],
  },
  {
    pregunta: 'You get to a taco de canasta stand. You...',
    opciones: [
      { texto: 'Ask what types of tacos they have', puntos: 0 },
      { texto: 'Look at the uncovered basket to choose', puntos: 1 },
      { texto: "Already know there's bean, pork rind, and potato, but ask anyway", puntos: 2 },
      { texto: 'Order straight up "the usual," without them telling you the menu', puntos: 3 },
    ],
  },
  {
    pregunta:
      'A chilango gives you directions like "just around the corner" or "straight ahead" (even though the street curves). You...',
    opciones: [
      { texto: 'Get completely lost', puntos: 0 },
      { texto: 'Ask them to explain again, more clearly', puntos: 1 },
      { texto: 'Understand them, but have trouble getting your bearings', puntos: 2 },
      { texto: 'Understand them perfectly and get there with no trouble', puntos: 3 },
    ],
  },
  {
    pregunta: "You've been in the city two days and your stomach isn't handling it well. You...",
    opciones: [
      { texto: "Don't know what to do, you wait for it to pass", puntos: 0 },
      { texto: 'Know it\'s called "Moctezuma\'s revenge"', puntos: 1 },
      { texto: 'Had already heard about this before coming', puntos: 2 },
      { texto: 'Already brought something for it (like omeprazole or Riopan), just in case', puntos: 3 },
    ],
  },
  {
    pregunta:
      'A buddy tells you: "What\'s wave, how\'s the pex today? I wanted to ask you if you raffle yourself to make me the stop of setting aside place in the bale of the tianguis at the little while. Finishing, the parroting gets armed and I invite the ice-days, how do you see?" You...',
    opciones: [
      { texto: "Don't understand almost anything in that sentence", puntos: 0 },
      { texto: "Understand they're asking you for something, but lose the rest", puntos: 1 },
      { texto: 'Understand almost everything, except "make me the stop" and "the bale"', puntos: 2 },
      { texto: "Understand perfectly, and you'd even use it yourself", puntos: 3 },
    ],
  },
];

// `razon` es contenido nuevo del sitio (no vive en la app): el motivo para
// bajar la app que se muestra junto a cada resultado, acordado con el
// usuario — entre más o menos chilango salgas, cambia la razón, nunca el
// hecho de que la app te sirve.
export const QUIZ_TIERS_ES: QuizTier[] = [
  {
    min: 0,
    max: 7,
    resultado: 'Recién bajaste del avión',
    razon:
      'Ni un vuelo, ni una guía, ni un mapa te salvan de esto. Bájate la app y arranca a conocer la ciudad de verdad.',
  },
  {
    min: 8,
    max: 15,
    resultado: 'Hiciste tu tarea antes de venir',
    razon: 'Vas bien, pero esto fue solo el aperitivo. La app tiene 271 retos reales esperándote en la calle.',
  },
  {
    min: 16,
    max: 22,
    resultado: 'Fresa de Polanco con callo',
    razon:
      'Ya le sabes, pero te faltan las colonias que no salen en ningún itinerario. Para eso es la app.',
  },
  {
    min: 23,
    max: 30,
    resultado: 'Ya no eres turista, eres chilango',
    razon:
      'Está bien cabrón tu resultado. Ahora compruébalo de verdad: solo en la app te ganas el título máximo — el que dice que eres bien chilango, a huevo.',
  },
];

export const QUIZ_TIERS_EN: QuizTier[] = [
  {
    min: 0,
    max: 7,
    resultado: 'You just got off the plane',
    razon: "No flight, no guidebook, no map is going to save you from this one. Download the app and start actually getting to know the city.",
  },
  {
    min: 8,
    max: 15,
    resultado: 'You did your homework before coming',
    razon: "You're doing fine, but that was just the appetizer. The app has 271 real challenges waiting for you out there.",
  },
  {
    min: 16,
    max: 22,
    resultado: "You're a callused Polanco strawberry",
    razon: "You know your stuff, but you're still missing the neighborhoods no itinerary ever mentions. That's exactly what the app is for.",
  },
  {
    min: 23,
    max: 30,
    resultado: "You're not a tourist anymore, you're a chilango",
    razon:
      "That's a seriously good score. Now prove it for real — only inside the app can you earn the ultimate title, the one that says you're truly chilango.",
  },
];
