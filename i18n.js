/* ===================================================================
   i18n.js — TODAS LAS PALABRAS DE ESTA PÁGINA
   -------------------------------------------------------------------
   Aquí viven los textos. script.js tiene la maquinaria.

   Tres partes:
     UI     — las etiquetas fijas de index.html (por data-i18n="clave")
     TXT    — los textos que el código arma mientras corre
     CONFIG — el contenido: cartas, quiz, deseos, la carta final…

   Para cambiar una palabra, cámbiala aquí.

   Español venezolano, tuteo, escrito para un chamo
   (concordancia masculina).
   =================================================================== */

/* ---- ETIQUETAS FIJAS DE index.html ------------------------- */
const UI = {
  pageTitle: "Un Día Hecho Solo Para Ti ♡",
  noscript: "Esta aventura de cumpleaños necesita JavaScript activado para las animaciones y las sorpresas ♡",

  introEyebrow: "Un Día Hecho Solo Para Ti ♥",
  welcomeTitle: "¡Hola, Jesús cumpleañero!",
  candleHint: "Dale un toque a la torta para apagarlas",
  blowBtn: "Apágalas 🎂",
  blowSr: "Apagar las velas",
  lightSr: "Prender las velas de la torta",
  micBtn: "…o sopla de verdad en tu micrófono",

  giftEyebrow: "Deseo registrado ♥",
  giftTitle: "Ahora sí, el regalo.",
  giftSub: "No tiene estampilla, ni papel de regalo, ni forma física. Eso sí, tiene animaciones.",
  openGift: "Abre tu sorpresa ✨",

  welcomeCardTitle: "¡Feliz cumpleaños, {name}!",
  enterBtn: "Vamos a explorar ♥",

  navAria: "Secciones de tu día",
  navBrand: "Un Día Hecho Solo Para Ti",
  navLetters: "Cartas",
  navScrapbook: "Para Ti",
  navSorry: "Perdón",
  navCake: "Torta",
  navAdventure: "Aventura",
  navSurprise: "Sorpresa",
  langAria: "Cambiar idioma",

  universeEyebrow: "Escoge tu primera parada",
  universeTitle: "Tu Pequeño Universo",
  universeLede: "Cuatro mundos pequeños, cada uno escondiendo algo para ti. Recórrelos en el orden que quieras — aquí nada se vence.",

  worldLettersTitle: "Cartas Secretas",
  worldLettersText: "Notas selladas para abrir cuando el corazón te lo pida.",
  worldLettersGo: "Abre la gaveta →",
  worldScrapTitle: "dedicado a ti",
  worldScrapText: " notas pequeñas desde nuestro rincón de internet.",
  worldScrapGo: "Pasa las páginas →",
  worldCakeTitle: "Torta de Cumpleaños",
  worldCakeText: "Prende las velas, cierra los ojos, pide el deseo como se debe.",
  worldCakeGo: "Préndela →",
  worldFinaleTitle: "Sorpresa Final",
  worldFinaleText: "Deja esta de última. Es la razón entera por la que existe esta página.",
  worldFinaleGo: "Solo al final →",

  s1Eyebrow: "Sección uno",
  lettersTitle: "Cartas Secretas",
  lettersLede: "Sobres pequeños para momentos pequeños. Abre el que combine con tu día — se quedan aquí para cuando vuelvas.",

  s2Eyebrow: "Sección dos",
  scrapbookTitle: "Dedicado a Ti",
  scrapbookLede: "Cosas dedicadas a ti — unos GIFs, unos datos, y un pollo bailando. Todo oficialmente aprobado. Dale un toque a una foto para verla más grande.",

  s3Eyebrow: "Sección tres",
  sorryTitle: "Una Tarjeta Que Dice Perdón",
  sorryLede: "Algunas cosas no caben en un álbum. Esta vino en una bolsita de plástico — dale, ábrela.",

  s4Eyebrow: "Sección cuatro",
  cakeTitle: "Tu Torta de Cumpleaños",
  cakeLede: "Nadie más agarra un pedazo hasta que tú agarres el tuyo.",
  cakeHint: "Dale un toque a la torta para prender las velas",
  wishBtn: "Pide un deseo",
  relightBtn: "Préndelas otra vez",

  s5Eyebrow: "Sección cinco",
  adventureTitle: "Mini Aventura de Cumpleaños",
  adventureLede: "Cinco cositas para jugar. Todas funcionan de verdad — dale, pruébalas. Una de ellas no se debe tocar.",

  g1Kicker: "Juego uno",
  quizHeading: "El Quiz de Cumpleaños",
  quizRetry: "Jugar otra vez",

  g2Kicker: "Juego dos",
  complimentHeading: "Máquina de Cumplidos",
  complimentIdle: "Presiona el botón. Solo dice la verdad.",
  complimentBtn: "Dime algo bonito ♡",

  g3Kicker: "Juego tres",
  scratchHeading: "Tarjeta Raspadita Sorpresa",
  scratchCanvasAria: "Una tarjeta de raspar escondiendo un mensaje",
  scratchHint: "Raspa con el dedo o el mouse",
  scratchReveal: "Revélamela",
  scratchNew: "Tarjeta nueva",

  g4Kicker: "Juego cuatro",
  gameHeading: "Atrapa los Corazones",
  gameCaught: "Atrapados",
  gameTimeLabel: "Tiempo",
  gameBest: "Mejor",
  gameCanvasAria: "Mueve la cesta para atrapar los corazones que caen. Usa las flechas izquierda y derecha, o arrastra.",
  gameStart: "Empezar",
  gameOverlayHtml: "Atrapa <b data-game-target></b> corazones en 30 segundos.",
  gameNote: "Arrastra con el dedo, mueve el mouse, o usa ← →",

  g5Kicker: "Juego cinco",
  forbiddenHeading: "No Presiones Esto",
  forbiddenBtn: "No presionar",
  forbiddenStatus: "En serio. Déjalo quieto.",

  finaleEyebrow: "La última parada",
  finaleTitle: "Una Sorpresa Final",
  finaleLede: "Llegaste hasta el final, lo que significa que ahora te toca leer la parte en la que más me tardé.",
  sealedLabel: "Abre tu último regalo",
  finaleTo: "Para {name},",
  dedicationHeading: "Y una cosa más — una canción para ti",
  dedicationLabel: "Reproducir la canción",
  finaleHearts: "Devuélvele unos corazones ♡",
  replayBtn: "Empezar el día otra vez",

  footerLine: "Hecho con un número poco razonable de animaciones CSS, desde un rincón de internet hasta otro.",

  modalCloseAria: "Cerrar",
  trophyAria: "Muestra tus logros",
  trophiesTitle: "Lo que has encontrado",

  musicTitle: "Canción de cumpleaños",
  seekAria: "Avanzar en la canción",
  volumeAria: "Volumen",
  prevAria: "Canción anterior",
  nextAria: "Canción siguiente",
  musicToggleAria: "Reproducir la canción de cumpleaños",
  lyricsToggleAria: "Mostrar la letra",
  lyricsCloseAria: "Ocultar la letra",
  expandAria: "Mostrar los controles de música"
};

/* ---- TEXTOS QUE ARMA EL CÓDIGO ----------------------------- */
const TXT = {
  makeWish: "Pide un deseo.",
  listening: "Escuchando…",
  sorryClosed: "Para decir que lo siento",
  closeCard: "cerrar la tarjeta",
  candlesLit: "Velas prendidas. Pide el deseo.",
  wishMade: "Deseo pedido. Préndelas otra vez si quieres.",
  cakeHintTap: "Dale un toque a la torta para prender las velas",
  wishRegistered: "Deseo registrado.",
  questionOf: "Pregunta {a} de {b}",
  quizPerfect: "Perfecto. Sospechoso, incluso. ¿Estabas tomando notas?",
  quizGood: "Respetable. Claramente prestas atención.",
  quizMeh: "El puntaje nunca fue el punto. Cómete un pedazo de torta.",
  happyBirthday: "Feliz cumpleaños.",
  scratchHint: "Raspa con el dedo o el mouse",
  scratchHere: "raspa aquí",
  thereItIs: "Ahí está.",
  fineThereItIs: "Bueno, nada de raspar. Ahí está.",
  youWin: "Ganaste.",
  notQuite: "Casi.",
  playAgain: "Jugar otra vez",
  sentAgain: "Enviados ♥ (¿otra vez?)",
  birthdaySong: "Canción de cumpleaños",
  noSongYet: "Todavía no has agregado ninguna canción",
  dropMp3s: "Mete tus mp3 en <code>assets/music/</code> y agrégalos en <code>music.tracks</code> dentro de <code>i18n.js</code>.",
  pauseMusic: "Pausar la música",
  playMusic: "Reproducir la música",
  noLyrics: "Todavía no hay letra para esta canción. Abre <code>lyrics-timer.html</code>, pega las líneas y dale a la barra espaciadora al ritmo de la canción — eso escribe <code>lyrics.js</code> por ti y la letra aparece aquí, en tiempo.",
  aSongForYou: "Una canción para ti",
  songMissing: "El archivo de la canción todavía no está",
  pauseSong: "Pausar la canción",
  playSong: "Reproducir la canción",
  fileNotThere: "El archivo todavía no está — mételo como <code>{src}</code> y se reproduce desde aquí.",
  stillLocked: "Todavía bloqueado",
  keepPoking: "Sigue explorando.",
  allFound: "Todos. No queda nada escondido.",
  foundSoFar: "{a} de {b} encontrados hasta ahora.",
  lettersOpened: "{n} de {total} abiertas",
  lettersSealed: "Las {total} siguen selladas."
};

/* ---- EL CONTENIDO ------------------------------------------ */
const CONFIG = {
  friendName: "Jesús",
  yourName: "Eshi",

  intro: {
    lede: "Antes que nada — estas velas llevan prendidas desde medianoche y la cosa con la cera ya se está poniendo seria.",
    nudges: [
      "Dale un toque a la torta para apagarlas",
      "Dale pues. Un buen soplido.",
      "La cera va ganando. Cuando quieras.",
      "Yo espero. Soy una página web. No tengo más nada que hacer."
    ],
    blownText: "Pide un deseo. No me lo digas — solo lo voy a juzgar.",
    micSuccess: "Eso lo escuché. Capacidad pulmonar de verdad, chamo.",
    micDenied: "Sin micrófono entonces. El botón sirve igual — menos dramático, pero sirve.",
    micListening: "Escuchando… sóplale a la pantalla como un loco."
  },

  welcomeText: "Bienvenida a la página web más pequeña del mundo, hecha para una sola persona y para un solo día. Pude haberte comprado una torta, pero decidí hacerte una página web completa. Adentro hay: cartas, una pared llena de puras locuras, torta (la digital, perdona), y una cosita al final. Las amigas del internet también merecemos cumpleaños como Dios manda. Anda por donde te dé la gana.",

  letters: [
    {
      label: "Ábrela cuando necesites sonreír",
      title: "Una lista completamente científica de cosas buenas",
      body: [
        "Dato uno: en algún lugar, ahorita mismo, a un perro le están diciendo que es un buen muchacho, y él se lo cree completico.",
        "Dato dos: alguien del otro lado del mundo te armó una página web entera porque era tu cumpleaños. Esa es una vaina genuinamente rara que te pase, y pasó.",
        "Dato tres: has sobrevivido todos los lunes hasta ahora. Invicto. Francamente, un récord increíble.",
        "Esa es toda la carta. Nunca iba a ser profunda. Anda a comerte algo."
      ],
      sign: "archivado bajo: objetivamente cierto"
    },
    {
      label: "Ábrela cuando andes de bajón",
      title: "Permiso oficial",
      body: [
        "Esto no es un discurso motivacional. Los discursos motivacionales en los días malos son una ladilla, y los dos lo sabemos.",
        "Así que mejor: considera esto un permiso oficial para tener un día improductivo. Cierra las pestañas. Come algo caliente. No le respondas a nadie. El mundo sigue girando sin tu aporte, lo cual es una grosería, pero también es conveniente.",
        "Lo único que te voy a decir es que los días malos son famosamente malos prediciendo el futuro. Son bien seguros de sí mismos, pero están equivocados — como la app del clima.",
        "Vuelve mañana. Esta página va a seguir aquí. No se cansa."
      ],
      sign: "firmado, la gerencia"
    },
    {
      label: "Ábrela cuando necesites motivación",
      title: "Por si te hace falta un empujón",
      body: [
        "Este es el truco que nadie te dice: no necesitas sentirte listo. Sentirte listo es una función extra, no un requisito. La mayoría de las cosas las terminan haciendo personas que estaban medio inseguras y arrancaron igual.",
        "Además, la versión de la vaina que estás evitando casi seguro es peor en tu cabeza que en el papel. Tu cerebro es un dramático con un presupuesto de efectos especiales buenísimo.",
        "Entonces: agarra el primer paso más pequeño posible. Vergonzosamente pequeño. Insultantemente pequeño. Haz ese. El resto se viene solo por puro impulso.",
        "Y si sale mal — excelente, ya tienes una historia que contar."
      ],
      sign: "dale pues"
    },
    {
      label: "Ábrela cuando quieras recordar lo especial que eres",
      title: "La evidencia",
      body: [
        "No te voy a poner meloso, así que hagamos esto con evidencia.",
        "Eres de esas personas que de verdad responden la pregunta que les hicieron. Te acuerdas de cosas que la gente mencionó una sola vez. Haces que los grupos de chat sean mejores nada más por estar ahí. Suenan como cosas pequeñas. No lo son — la mayoría de la gente no puede hacer ninguna.",
        "También eres gracioso a propósito, que es mucho más difícil que ser gracioso por accidente.",
        "Esa es la evidencia. La conclusión se escribe sola. Caso cerrado."
      ],
      sign: "la fiscalía descansa"
    },
    {
      label: "Ábrela cuando andes en las últimas",
      title: "Para el que hace dos cosas a la vez",
      body: [
        "Una pasantía y una carrera al mismo tiempo son dos cosas de tiempo completo metidas en un solo abrigo, haciéndose pasar por un horario normal. Todo el mundo asiente como si eso fuera razonable. No es razonable.",
        "Nadie aplaude esta parte tampoco. No hay ceremonia para responder un mensaje de trabajo en el break de una clase, ni para abrir la laptop otra vez de noche cuando lo sensato era dormir. Simplemente se hace, calladito. Todos los días. Tú.",
        "Así que que quede dicho una vez, clarito, por una página web: se está notando. El cansancio no es un defecto de carácter ni una señal de que lo estás haciendo mal. Es un recibo.",
        "No estás atrasado. Estás cargando dos bultos al ritmo que la mayoría lleva uno, y el hecho de que todavía aparezcas siendo tú mientras lo haces es la parte genuinamente impresionante. Suelta un bulto hoy. Las fechas de entrega van a sobrevivir tu ausencia — son famosamente resistentes."
      ],
      sign: "sin consejos esta vez, solo me di cuenta"
    },
    {
      label: "Ábrela cuando sean las 2am y estés ladillado",
      title: "Hola, insomne",
      body: [
        "A las 2am no pasa nada importante, que es justamente por lo que es la mejor hora del día. Sin correos. Sin decisiones. Solo tú, una pantalla y pensamientos cada vez más raros.",
        "Ya que estás aquí: la miel nunca se daña, los pulpos tienen tres corazones, y los cambures son ligeramente radiactivos. Ahora sabes tres cosas que no necesitabas. De nada.",
        "Duérmete en algún momento. No ya mismo. En algún momento."
      ],
      sign: "igual yo, la verdad"
    }
  ],

  scrapbook: [
    { type: "note", text: "Sigue siendo la única persona que responde con una respuesta de verdad en vez de un “ok”.", by: "una reseña verificada", rot: 1.5 },
    { type: "photo", src: "assets/images/dance.gif",
      caption: "un baile para ti. sí, es un pollo. sí, se mueve mejor que nosotros.", rot: 1.8 },
    { type: "sticker", big: "100%", label: "pana certificado", rot: -3 },
    { type: "photo", src: "assets/images/boom.gif",
      caption: "captado en pleno momento de protagonista", rot: -1.6 },
    { type: "note", text: "Buen gusto. Sospechosamente buen gusto. ¿Quién te enseñó?", by: "una investigación en curso", rot: -2.4 },
    { type: "note",
      text: "Que este año te dé menos cosas que malabarear, y todo lo que te has ganado a cambio.<br><br>Te ganaste un día libre de ser impresionante. Feliz cumpleaños. 🎂",
      rot: -1.9 },
    { type: "sticker", big: "A+", label: "evaluación de vibra", rot: 2.6 },
    { type: "photo", src: "assets/images/birthday.gif", caption: "feliz cumpleaños, peste", rot: 2.4 }
  ],

  sorry: {
    front: "assets/images/sorry-front.jpg",
    inside: "assets/images/sorry-inside.jpg",
    frontAlt: "El frente de una tarjeta en forma de corazón que dice “To Say I’m Sorry”.",
    insideAlt: "El interior de la tarjeta, con su mensaje impreso y la palabra Sorry.",
    hint: "tócala para abrirla",
    teaser: "Vino sellada en plástico, lo cual se sintió un poco cobarde. Hay algo impreso adentro.",
    message: [
      "También hay ciertas personas",
      "que pueden hacer nuestro mundo más brillante,",
      "que con solo una palabra o una sonrisa",
      "pueden hacer que un corazón se sienta más liviano,",
      "y como tú eres esa clase de persona…"
    ],
    signoff: "Perdón",
    footnote: "Una cosa más en tu día especial: perdón por la forma en que manejé las cosas antes. espero que me perdones con todo tu corazón. Que tu año esté lleno de cosas buenas."
  },

  wishes: [
    "Deseo registrado. Tiempo de procesamiento: incierto. Tasa de éxito: históricamente excelente.",
    "Ese ya se lo reenvié al universo. Leyó el mensaje. Todavía no responde, pero lo leyó.",
    "Anotado, sellado y archivado. Que este año sea raramente, sospechosamente bueno contigo.",
    "Registrado. Archivado con una nota: menos alarmas de las 7am, y por lo menos un fin de semana que sea de verdad un fin de semana.",
    "Listo. Por un año de victorias pequeñas, buena comida y absolutamente ninguna reunión innecesaria."
  ],

  quiz: [
    {
      q: "¿Cuál es la forma correcta de comerse la torta de cumpleaños?",
      options: ["Con tenedor, como un adulto civilizado", "Con las manos. Obvio.", "Directo de la bandeja a la 1am", "Las tres, en ese orden"],
      answer: 3,
      right: "Correcto. La única respuesta aceptable.",
      wrong: "Atrevido, pero no. La respuesta era las tres, en ese orden."
    },
    {
      q: "¿Cuántas horas crees que se fueron en esta página web?",
      options: ["Dos, máximo", "Un número poco razonable", "Era una plantilla", "Nadie lo sabrá jamás"],
      answer: 1,
      right: "Sí. Y lo volvería a hacer. Probablemente.",
      wrong: "Qué generoso. Fue un número poco razonable."
    },
    {
      q: "¿Cuál es la política oficial de cumpleaños sobre las responsabilidades de hoy?",
      options: ["Suspendidas", "Pospuestas", "Delegadas", "Ignoradas con confianza"],
      answer: 0,
      right: "Suspendidas. Completamente. Hay papeleo.",
      wrong: "Casi, pero oficialmente: suspendidas."
    },
    {
      q: "¿Cuántas cosas está malabareando el cumpleañero ahorita?",
      options: ["Una, cómodamente", "Una carrera y una pasantía, al mismo tiempo", "Dos, mal", "Nadie está contando"],
      answer: 1,
      right: "Correcto. Una carrera y una pasantía, simultáneamente, a propósito — y todavía sacó tiempo para hacer clic en una página de cumpleaños.",
      wrong: "Una carrera y una pasantía. Al mismo tiempo. A propósito. Y aun así apareció por aquí."
    },
    {
      q: "El mejor regalo de cumpleaños es…",
      options: ["Efectivo, seamos honestos", "Comida", "Algo hecho a mano y medio desquiciado", "Atención"],
      answer: 2,
      right: "Correcto, y convenientemente también es lo que estás viendo ahorita.",
      wrong: "Válido, pero la respuesta era la opción hecha a mano y medio desquiciada. Ver: esta página."
    },
    {
      q: "¿Qué pasa cuando terminas este quiz?",
      options: ["Nada", "Confeti", "Un cumplido que no pediste", "Todavía te quedan tres juegos más"],
      answer: 3,
      right: "Correcto. Claro que sí. Sigue.",
      wrong: "Incorrecto — te quedan tres juegos más. Lo siento."
    }
  ],

  compliments: [
    "Respondes los mensajes como alguien que de verdad los leyó. Raro. Posiblemente extinto en otras partes.",
    "Tu gusto es tan consistentemente bueno que intimida un poco. Sigue así.",
    "Eres gracioso a propósito, que es significativamente más difícil que ser gracioso por accidente.",
    "Si ser buena gente fuera un deporte, estarías dominando la tabla calladito.",
    "Haces que los grupos de chat sean mejores nada más por existir en ellos. Eso es un efecto medible.",
    "Tienes la energía de alguien que sin duda ayudaría a un desconocido a encontrar su perro perdido.",
    "Estadísticamente hablando, estás en el top 1% de las personas que nunca he conocido en persona.",
    "Te acuerdas de cosas que la gente mencionó una sola vez. Un poco inquietante. Mayormente muy chévere.",
    "Das buenos consejos y después de verdad les haces seguimiento. ¿Quién te crió? Excelente trabajo de su parte.",
    "Nadie ha tenido que explicarte un chiste dos veces. Eso es un flex y deberías usarlo.",
    "Eres el equivalente humano de una notificación que de verdad te alegra ver.",
    "Estás llevando una pasantía y una carrera a la vez y todavía respondes como un ser humano funcional. La mayoría lleva una sola y mal.",
    "Cansado y todavía amable es un truco mucho más difícil que descansado y amable. Tú sigues haciendo la versión difícil.",
    "Apareces en la vaina los días en que sería totalmente razonable no hacerlo. Esa es toda la habilidad. Lo demás es decoración.",
    "En algún lugar está escrito tu horario semanal, y estoy casi seguro de que es ilegal en varios países.",
    "De alguna manera haces que ser responsable se vea divertido. Eso no debería ser posible."
  ],

  scratchCards: [
    "Que tengas un año donde las partes difíciles se pongan más fáciles y las partes buenas se pongan más fuertes."
  ],

  game: {
    target: 18,
    seconds: 30,
    winText: "Ganaste. Reflejos: confirmados excelentes. Anda a buscar tu torta.",
    loseText: "Casi. Los corazones iban rapidísimo y has tenido un día largo. ¿Otra vez?"
  },

  forbidden: {
    dodges: 6,
    taunts: [
      "En serio. Déjalo quieto.",
      "No.",
      "Dije que no.",
      "Esta es la única vaina que te pedí.",
      "No vas a parar, ¿verdad?",
      "Bueno. BUENO. Dale, presiónalo."
    ],
    steps: [
      "Localizando el confeti…",
      "Despertando los corazones…",
      "Pensando demasiado en la paleta de colores…",
      "Fingiendo que esto costó esfuerzo…",
      "Listo."
    ],
    payoff: "Eso era. Ese era todo el secreto. Feliz cumpleaños."
  },

  achievements: [
    { id: "blown",     icon: "🎂", name: "Velas apagadas",       desc: "Apagaste las velas." },
    { id: "unwrapped", icon: "🎁", name: "Desenvuelto",          desc: "Abriste la caja de regalo." },
    { id: "letter",    icon: "✉️", name: "Querido lector",       desc: "Abriste una carta secreta." },
    { id: "quiz",      icon: "🧠", name: "Sobreviviste el quiz", desc: "Terminaste el quiz." },
    { id: "scratch",   icon: "🎟️", name: "Raspador",             desc: "Raspaste una tarjeta." },
    { id: "game",      icon: "💘", name: "Manos rápidas",        desc: "Ganaste el juego de corazones." },
    { id: "forbidden", icon: "🚫", name: "Te lo dije",           desc: "Presionaste el botón prohibido." },
    { id: "finale",    icon: "⭐", name: "Todo completo",        desc: "Llegaste a la sorpresa final." }
  ],

  finale: {
    paragraphs: [
      "Listo. Llegaste hasta el final, lo que significa que hiciste clic en todo, lo que significa que mi plan absurdo funcionó.",
      "Aquí va la versión honesta: no podía conseguirte una torta, no podía aparecerme en tu puerta, y mandar un GIF por el chat se sentía como lo mínimo. Así que armé el único tipo de regalo en el que de verdad soy bueno — uno hecho de demasiadas animaciones de CSS y unos cuantos chistes.",
      "Eres una de las partes genuinamente buenas de estar en internet. Haces que la red se sienta un poco menos como una máquina expendedora de malas noticias y un poco más como un lugar donde la gente es chévere con los demás sin razón particular.",
      "Y ya que ha sido un año de hacer dos cosas difíciles a la vez — la pasantía, los estudios, los días en que las dos querían las mismas horas — hay que decirlo en algún lugar permanente: eso cuesta. La mayoría ya habría soltado una. Tú no, y de alguna manera te las arreglaste para seguir siendo buena compañía mientras tanto, que es la parte para la que nadie tiene energía.",
      "Así que: ten un cumpleaños excelente. Cómete la cosa buena. Ignora las obligaciones aburridas. Ponte insoportable con el tema — te ganaste el derecho por lo menos un día, y francamente por varios más."
    ],
    closingLine: "La distancia no significa nada cuando alguien te hace el mundo un poquito más brillante.",
    sign: "feliz cumpleaños, en serio — tu pana de internet",
    song: {
      title: "You're Never Fully Dressed Without A Smile",
      artist: "Annie (película de 2014)",
      src: "assets/music/Annie OST(2014) - You're Never Fully Dressed Without A Smile(2014 Film Version).mp3",
      note: "Estuve yendo y viniendo con esto por un tiempo vergonzosamente largo, y al final me quedé con esta. Ahora es tuya. Ponla fuerte, ponla en un día malo, ponla en la ducha — ya no tengo nada que decir al respecto."
    }
  },

  music: {
    volume: 0.55,
    autoplay: true,
    showLyrics: true,
    tracks: [
      {
        title: "Si Te La Encuentras Por Ahí",
        src: "assets/music/Feid - Si Te La Encuentras Por Ahí.mp3",
        startAt: 60
      }
    ]
  }
};


/* Rellena los {marcadores} de un texto. */
function fmt(str, vals) {
  return String(str == null ? "" : str).replace(/\{(\w+)\}/g, function (m, k) {
    return Object.prototype.hasOwnProperty.call(vals || {}, k) ? vals[k] : m;
  });
}
