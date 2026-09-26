// Mismo quiz "¿Qué tan chilango eres?" de la app (src/data/chilangoQuiz.ts
// en APPbitaco) — preguntas, opciones, puntajes y resultados tal cual,
// para que la versión web sea el mismo test, no uno distinto.

export type QuizOption = { texto: string; puntos: number };
export type QuizQuestion = { pregunta: string; opciones: QuizOption[] };
export type QuizTier = { min: number; max: number; resultado: string; razon: string };

export const QUIZ_TITLE_ES = '¿Qué tan chilango eres?';
export const QUIZ_TITLE_EN = 'How Chilango Are You?';
export const QUIZ_TITLE_FR = 'T’es chilango à quel point ?';
export const QUIZ_TITLE_DE = 'Wie chilango bist du?';
export const QUIZ_TITLE_PT = 'O quanto você é chilango?';

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

// FR/DE/PT: los 4 nombres de resultado se dejan en español a propósito
// (son slang chilango puro — "Fresa de Polanco con callo", etc. — pedido
// explícito del usuario de no traducir los términos chilangos), solo se
// traduce la razón de descarga.
const QUIZ_TIER_NAMES_ES = [
  'Recién bajaste del avión',
  'Hiciste tu tarea antes de venir',
  'Fresa de Polanco con callo',
  'Ya no eres turista, eres chilango',
];

export const QUIZ_FR: QuizQuestion[] = [
  {
    pregunta:
      "C'est le 19 septembre, mais il n'est pas 13h14. Soudain, tu entends une voix dans les haut-parleurs de la ville. Toi...",
    opciones: [
      { texto: 'Tu ne sais pas ce qu’est cette voix, tu as peur', puntos: 0 },
      { texto: 'Tu reconnais la voix, mais tu ne sais pas trop quoi faire', puntos: 1 },
      { texto: 'Tu vas immédiatement au point de rassemblement', puntos: 2 },
      { texto: 'Tu lâches un « saquen el bolillo ! »', puntos: 3 },
    ],
  },
  {
    pregunta: 'Tu vois des bouteilles en plastique remplies d’eau alignées devant les maisons et les commerces, sur le trottoir. Toi...',
    opciones: [
      { texto: 'Tu ne les remarques même pas, tu penses que ce sont des déchets', puntos: 0 },
      { texto: 'Tu penses que c’est pour arroser les plantes', puntos: 1 },
      { texto: 'Tu sais que « ça a un rapport avec les chiens », mais pas exactement quoi', puntos: 2 },
      { texto: 'Tu sais déjà à quoi ça sert, même si tu n’as jamais vérifié que ça marche vraiment', puntos: 3 },
    ],
  },
  {
    pregunta: 'Tu commandes une quesadilla au champignon ou au chicharrón pressé. On te demande si tu la veux avec du fromage. Toi...',
    opciones: [
      { texto: 'Tu ne comprends pas pourquoi on pose une question aussi évidente', puntos: 0 },
      { texto: 'Tu es surpris qu’il faille préciser ça', puntos: 1 },
      { texto: 'Tu sais qu’il y a un débat national là-dessus, mais tu hésites sur la réponse', puntos: 2 },
      { texto: 'Tu réponds « avec » ou « sans » du tac au tac, sans réfléchir', puntos: 3 },
    ],
  },
  {
    pregunta: 'Le vendeur ambulant te donne tes chips déjà avec citron vert et piment en poudre. Toi...',
    opciones: [
      { texto: 'Tu les manges telles quelles', puntos: 0 },
      { texto: 'Tu trouves qu’il y en a déjà trop', puntos: 1 },
      { texto: 'Tu demandes de la salsa en plus, sans savoir laquelle demander', puntos: 2 },
      { texto: 'Tu rajoutes du Valentina, du Botanera ou du Tamazula, évidemment', puntos: 3 },
    ],
  },
  {
    pregunta: 'Tu es sur un escalator. Toi...',
    opciones: [
      { texto: 'Tu te places où c’est confortable', puntos: 0 },
      { texto: 'Tu te places à droite, sans trop savoir pourquoi', puntos: 1 },
      { texto: 'Tu te places à droite parce que tu as déjà vu que ça se fait comme ça', puntos: 2 },
      { texto: 'Tu te mets à droite, et si tu es pressé tu montes à gauche sans hésiter', puntos: 3 },
    ],
  },
  {
    pregunta: 'Tu commandes un taco al pastor « con copia ». Pour ne pas te tacher, toi...',
    opciones: [
      { texto: 'Tu ne sais pas ce que veut dire « con copia »', puntos: 0 },
      { texto: 'Tu sais que ça veut dire double tortilla, mais tu le manges normalement', puntos: 1 },
      { texto: 'Tu te penches un peu en avant, au cas où', puntos: 2 },
      { texto: 'Tu te penches carrément en avant, presque automatiquement', puntos: 3 },
    ],
  },
  {
    pregunta: 'Tu arrives à un stand de tacos de canasta. Toi...',
    opciones: [
      { texto: 'Tu demandes quels types de tacos ils ont', puntos: 0 },
      { texto: 'Tu regardes le panier ouvert pour choisir', puntos: 1 },
      { texto: 'Tu sais déjà qu’il y a haricots, chicharrón et pomme de terre, mais tu demandes quand même', puntos: 2 },
      { texto: 'Tu commandes direct « comme d’habitude », sans qu’on te dise le menu', puntos: 3 },
    ],
  },
  {
    pregunta: 'Un chilango te donne des indications du genre « juste au coin » ou « tout droit » (même si la rue fait des courbes). Toi...',
    opciones: [
      { texto: 'Tu es complètement perdu', puntos: 0 },
      { texto: 'Tu lui demandes de réexpliquer, plus clairement', puntos: 1 },
      { texto: 'Tu comprends, mais tu as du mal à te repérer', puntos: 2 },
      { texto: 'Tu comprends parfaitement et tu arrives sans problème', puntos: 3 },
    ],
  },
  {
    pregunta: 'Ça fait deux jours que tu es en ville et ton estomac ne le supporte pas bien. Toi...',
    opciones: [
      { texto: 'Tu ne sais pas quoi faire, tu attends que ça passe', puntos: 0 },
      { texto: 'Tu sais que ça s’appelle « la vengeance de Moctezuma »', puntos: 1 },
      { texto: 'Tu en avais déjà entendu parler avant de venir', puntos: 2 },
      { texto: 'Tu as déjà de quoi calmer ton estomac (genre oméprazole ou Riopan), au cas où', puntos: 3 },
    ],
  },
  {
    pregunta:
      'Un pote te sort : "¿Qué onda, qué pex hoy? Te quería pedir si te rifas a hacerme el paro de apartarme lugar en la paca del tianguis al rato. Terminando se arma el cotorreo y yo invito las helodias, ¿cómo ves?" Toi...',
    opciones: [
      { texto: 'Tu ne comprends presque rien à la phrase', puntos: 0 },
      { texto: 'Tu comprends qu’on te demande quelque chose, mais tu perds le reste', puntos: 1 },
      { texto: 'Tu comprends presque tout, sauf « hacerme el paro » et « la paca »', puntos: 2 },
      { texto: 'Tu comprends parfaitement, et tu l’utiliserais même telle quelle', puntos: 3 },
    ],
  },
];

export const QUIZ_DE: QuizQuestion[] = [
  {
    pregunta: 'Es ist der 19. September, aber nicht 13:14 Uhr. Plötzlich hörst du eine Stimme aus den Lautsprechern der Stadt. Du...',
    opciones: [
      { texto: 'Weißt nicht, was diese Stimme ist, du erschrickst', puntos: 0 },
      { texto: 'Erkennst die Stimme, weißt aber nicht genau, was zu tun ist', puntos: 1 },
      { texto: 'Gehst sofort zum Treffpunkt', puntos: 2 },
      { texto: 'Rufst spontan „saquen el bolillo!"', puntos: 3 },
    ],
  },
  {
    pregunta: 'Du siehst Plastikflaschen mit Wasser, die vor Häusern und Geschäften auf dem Gehweg aufgereiht sind. Du...',
    opciones: [
      { texto: 'Bemerkst sie gar nicht, du denkst, es ist Müll', puntos: 0 },
      { texto: 'Denkst, es ist zum Blumengießen', puntos: 1 },
      { texto: 'Weißt, dass es „irgendwas mit Hunden zu tun hat", aber nicht genau was', puntos: 2 },
      { texto: 'Weißt schon, wofür sie sind, hast aber nie geprüft, ob es wirklich funktioniert', puntos: 3 },
    ],
  },
  {
    pregunta: 'Du bestellst eine Quesadilla mit Pilzen oder mit chicharrón prensado. Man fragt dich, ob du sie mit Käse willst. Du...',
    opciones: [
      { texto: 'Verstehst nicht, warum man so etwas Offensichtliches fragt', puntos: 0 },
      { texto: 'Bist überrascht, dass man das klären muss', puntos: 1 },
      { texto: 'Weißt, dass es darüber landesweite Debatten gibt, zögerst aber bei der Antwort', puntos: 2 },
      { texto: 'Antwortest sofort „mit" oder „ohne", ohne nachzudenken', puntos: 3 },
    ],
  },
  {
    pregunta: 'Der Mann mit dem Imbisswagen gibt dir deine Chips schon mit Limette und Chilipulver. Du...',
    opciones: [
      { texto: 'Isst sie so, wie sie sind', puntos: 0 },
      { texto: 'Findest, es ist schon zu viel drauf', puntos: 1 },
      { texto: 'Bittest um extra Salsa, ohne zu wissen, welche', puntos: 2 },
      { texto: 'Packst noch Valentina, Botanera oder Tamazula obendrauf, klar', puntos: 3 },
    ],
  },
  {
    pregunta: 'Du fährst eine Rolltreppe. Du...',
    opciones: [
      { texto: 'Stellst dich hin, wo es dir bequem ist', puntos: 0 },
      { texto: 'Stellst dich rechts hin, ohne genau zu wissen warum', puntos: 1 },
      { texto: 'Stellst dich rechts hin, weil du schon gesehen hast, dass man das so macht', puntos: 2 },
      { texto: 'Stellst dich rechts an, und wenn du es eilig hast, gehst du links ohne zu zögern hoch', puntos: 3 },
    ],
  },
  {
    pregunta: 'Du bestellst einen Taco al pastor „con copia". Um dich nicht zu bekleckern, du...',
    opciones: [
      { texto: 'Weißt nicht, was „con copia" bedeutet', puntos: 0 },
      { texto: 'Weißt, dass es doppelte Tortilla bedeutet, isst ihn aber normal', puntos: 1 },
      { texto: 'Beugst dich ein bisschen nach vorne, sicherheitshalber', puntos: 2 },
      { texto: 'Beugst dich richtig weit nach vorne, fast automatisch', puntos: 3 },
    ],
  },
  {
    pregunta: 'Du kommst zu einem Stand mit tacos de canasta. Du...',
    opciones: [
      { texto: 'Fragst, welche Taco-Sorten sie haben', puntos: 0 },
      { texto: 'Schaust in den geöffneten Korb, um auszuwählen', puntos: 1 },
      { texto: 'Weißt schon, dass es Bohnen, chicharrón und Kartoffel gibt, fragst aber trotzdem', puntos: 2 },
      { texto: 'Bestellst direkt „von den üblichen", ohne dass man dir die Karte zeigt', puntos: 3 },
    ],
  },
  {
    pregunta: 'Ein chilango gibt dir Wegbeschreibungen wie „gleich um die Ecke" oder „immer geradeaus" (obwohl die Straße Kurven hat). Du...',
    opciones: [
      { texto: 'Verläufst dich komplett', puntos: 0 },
      { texto: 'Bittest ihn, es nochmal klarer zu erklären', puntos: 1 },
      { texto: 'Verstehst ihn, hast aber Mühe, dich zu orientieren', puntos: 2 },
      { texto: 'Verstehst ihn perfekt und kommst ohne Probleme an', puntos: 3 },
    ],
  },
  {
    pregunta: 'Du bist seit zwei Tagen in der Stadt und dein Magen macht nicht gut mit. Du...',
    opciones: [
      { texto: 'Weißt nicht, was du tun sollst, wartest, bis es vorbeigeht', puntos: 0 },
      { texto: 'Weißt, dass man das „Montezumas Rache" nennt', puntos: 1 },
      { texto: 'Hattest schon davon gehört, bevor du herkamst', puntos: 2 },
      { texto: 'Hast schon etwas gegen Sodbrennen dabei (wie Omeprazol oder Riopan), sicherheitshalber', puntos: 3 },
    ],
  },
  {
    pregunta:
      'Ein Kumpel sagt zu dir: "¿Qué onda, qué pex hoy? Te quería pedir si te rifas a hacerme el paro de apartarme lugar en la paca del tianguis al rato. Terminando se arma el cotorreo y yo invito las helodias, ¿cómo ves?" Du...',
    opciones: [
      { texto: 'Verstehst fast nichts von dem Satz', puntos: 0 },
      { texto: 'Verstehst, dass man dich um etwas bittet, aber verlierst den Rest', puntos: 1 },
      { texto: 'Verstehst fast alles, außer „hacerme el paro" und „la paca"', puntos: 2 },
      { texto: 'Verstehst alles perfekt und würdest es sogar selbst so benutzen', puntos: 3 },
    ],
  },
];

export const QUIZ_PT: QuizQuestion[] = [
  {
    pregunta: 'É 19 de setembro, mas não são 13h14. De repente você ouve uma voz nos alto-falantes da cidade. Você...',
    opciones: [
      { texto: 'Não sabe o que é essa voz, fica assustado', puntos: 0 },
      { texto: 'Reconhece a voz, mas não sabe bem o que fazer', puntos: 1 },
      { texto: 'Vai direto para o ponto de encontro', puntos: 2 },
      { texto: 'Solta um "saquen el bolillo!"', puntos: 3 },
    ],
  },
  {
    pregunta: 'Vê garrafas de plástico com água alinhadas na frente das casas e comércios, na calçada. Você...',
    opciones: [
      { texto: 'Nem repara, acha que é lixo', puntos: 0 },
      { texto: 'Acha que é para regar plantas', puntos: 1 },
      { texto: 'Sabe que "tem a ver com cachorros", mas não exatamente o quê', puntos: 2 },
      { texto: 'Já sabe para que servem, mesmo nunca tendo comprovado que funciona de verdade', puntos: 3 },
    ],
  },
  {
    pregunta: 'Pede uma quesadilla de cogumelo ou de chicharrón prensado. Perguntam se você quer com queijo. Você...',
    opciones: [
      { texto: 'Não entende por que perguntam algo tão óbvio', puntos: 0 },
      { texto: 'Se surpreende que precise esclarecer isso', puntos: 1 },
      { texto: 'Sabe que existe um debate nacional sobre isso, mas hesita na resposta', puntos: 2 },
      { texto: 'Responde "com" ou "sem" na hora, sem pensar', puntos: 3 },
    ],
  },
  {
    pregunta: 'O vendedor do carrinho já te dá as batatas com limão e pimenta em pó. Você...',
    opciones: [
      { texto: 'Come do jeito que está', puntos: 0 },
      { texto: 'Acha que já tem demais', puntos: 1 },
      { texto: 'Pede molho extra, sem saber qual pedir', puntos: 2 },
      { texto: 'Ainda coloca Valentina, Botanera ou Tamazula, óbvio', puntos: 3 },
    ],
  },
  {
    pregunta: 'Você está numa escada rolante. Você...',
    opciones: [
      { texto: 'Fica onde for mais confortável', puntos: 0 },
      { texto: 'Fica do lado direito, sem saber bem por quê', puntos: 1 },
      { texto: 'Fica do lado direito porque já viu que é assim que se faz', puntos: 2 },
      { texto: 'Fica do lado direito e, se estiver com pressa, sobe pela esquerda sem hesitar', puntos: 3 },
    ],
  },
  {
    pregunta: 'Pede um taco al pastor "con copia". Para não se sujar, você...',
    opciones: [
      { texto: 'Não sabe o que é "con copia"', puntos: 0 },
      { texto: 'Sabe que é tortilla dupla, mas come normal', puntos: 1 },
      { texto: 'Se inclina um pouco para frente, por precaução', puntos: 2 },
      { texto: 'Se inclina bem para frente, quase automaticamente', puntos: 3 },
    ],
  },
  {
    pregunta: 'Chega numa banca de tacos de canasta. Você...',
    opciones: [
      { texto: 'Pergunta quais tipos de taco eles têm', puntos: 0 },
      { texto: 'Olha a cesta destampada para escolher', puntos: 1 },
      { texto: 'Já sabe que tem feijão, chicharrón e batata, mas pergunta mesmo assim', puntos: 2 },
      { texto: 'Pede direto "dos de sempre", sem que digam o cardápio', puntos: 3 },
    ],
  },
  {
    pregunta: 'Um chilango te dá instruções tipo "ali na esquinha" ou "sempre em frente" (mesmo que a rua faça curvas). Você...',
    opciones: [
      { texto: 'Se perde completamente', puntos: 0 },
      { texto: 'Pede para explicarem de novo, mais claro', puntos: 1 },
      { texto: 'Entende, mas tem dificuldade de se localizar', puntos: 2 },
      { texto: 'Entende perfeitamente e chega sem problema', puntos: 3 },
    ],
  },
  {
    pregunta: 'Já faz dois dias que você está na cidade e seu estômago não está bem. Você...',
    opciones: [
      { texto: 'Não sabe o que fazer, espera passar', puntos: 0 },
      { texto: 'Sabe que chamam isso de "a vingança de Moctezuma"', puntos: 1 },
      { texto: 'Já tinha ouvido falar disso antes de vir', puntos: 2 },
      { texto: 'Já trouxe algo para azia (tipo omeprazol ou Riopan), por precaução', puntos: 3 },
    ],
  },
  {
    pregunta:
      'Um amigo solta: "¿Qué onda, qué pex hoy? Te quería pedir si te rifas a hacerme el paro de apartarme lugar en la paca del tianguis al rato. Terminando se arma el cotorreo y yo invito las helodias, ¿cómo ves?" Você...',
    opciones: [
      { texto: 'Não entende quase nada da frase', puntos: 0 },
      { texto: 'Entende que estão pedindo algo, mas perde o resto', puntos: 1 },
      { texto: 'Entende quase tudo, menos "hacerme el paro" e "la paca"', puntos: 2 },
      { texto: 'Entende perfeitamente, e até usaria a frase assim mesmo', puntos: 3 },
    ],
  },
];

export const QUIZ_TIERS_FR: QuizTier[] = [
  {
    min: 0,
    max: 7,
    resultado: QUIZ_TIER_NAMES_ES[0],
    razon: "Ni un vol, ni un guide, ni une carte ne vont te sauver de ça. Télécharge l'app et commence à vraiment découvrir la ville.",
  },
  {
    min: 8,
    max: 15,
    resultado: QUIZ_TIER_NAMES_ES[1],
    razon: "Tu t'en sors bien, mais ça, c'était juste l'apéro. L'app a 271 vrais défis qui t'attendent dans la rue.",
  },
  {
    min: 16,
    max: 22,
    resultado: QUIZ_TIER_NAMES_ES[2],
    razon: "Tu t'y connais, mais il te manque encore les colonias qu'aucun itinéraire ne mentionne. C'est exactement à ça que sert l'app.",
  },
  {
    min: 23,
    max: 30,
    resultado: QUIZ_TIER_NAMES_ES[3],
    razon:
      "Ton résultat est vraiment chingón. Maintenant prouve-le pour de vrai : seule l'app te permet de gagner le titre suprême — celui qui dit que tu es bien chilango, a huevo.",
  },
];

export const QUIZ_TIERS_DE: QuizTier[] = [
  {
    min: 0,
    max: 7,
    resultado: QUIZ_TIER_NAMES_ES[0],
    razon: 'Kein Flug, kein Reiseführer, keine Karte rettet dich davor. Lade die App herunter und fang an, die Stadt wirklich kennenzulernen.',
  },
  {
    min: 8,
    max: 15,
    resultado: QUIZ_TIER_NAMES_ES[1],
    razon: 'Du machst das gut, aber das war nur die Vorspeise. Die App hat 271 echte Challenges, die auf dich warten.',
  },
  {
    min: 16,
    max: 22,
    resultado: QUIZ_TIER_NAMES_ES[2],
    razon: 'Du kennst dich aus, aber dir fehlen noch die colonias, die in keinem Reiseplan vorkommen. Genau dafür ist die App da.',
  },
  {
    min: 23,
    max: 30,
    resultado: QUIZ_TIER_NAMES_ES[3],
    razon:
      'Dein Ergebnis ist richtig gut. Jetzt beweise es wirklich: Nur in der App kannst du dir den höchsten Titel verdienen — den, der sagt, dass du wirklich chilango bist, a huevo.',
  },
];

export const QUIZ_TIERS_PT: QuizTier[] = [
  {
    min: 0,
    max: 7,
    resultado: QUIZ_TIER_NAMES_ES[0],
    razon: 'Nem voo, nem guia, nem mapa vão te salvar dessa. Baixe o app e comece a conhecer a cidade de verdade.',
  },
  {
    min: 8,
    max: 15,
    resultado: QUIZ_TIER_NAMES_ES[1],
    razon: 'Você está indo bem, mas isso foi só o aperitivo. O app tem 271 desafios reais te esperando na rua.',
  },
  {
    min: 16,
    max: 22,
    resultado: QUIZ_TIER_NAMES_ES[2],
    razon: 'Você já manja, mas ainda te faltam as colonias que não aparecem em nenhum roteiro. É pra isso que serve o app.',
  },
  {
    min: 23,
    max: 30,
    resultado: QUIZ_TIER_NAMES_ES[3],
    razon:
      'Seu resultado está bem bom. Agora prove de verdade: só no app você ganha o título máximo — o que diz que você é bem chilango, a huevo.',
  },
];
