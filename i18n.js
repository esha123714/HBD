/* ===================================================================
   i18n.js — EVERY WORD ON THIS SITE, IN BOTH LANGUAGES
   -------------------------------------------------------------------
   This file holds all the text. script.js holds the machinery.

   Each language has three parts:
     ui     — the fixed labels in index.html (matched by data-i18n="key")
     js     — strings the code builds while it runs
     config — the content: letters, quiz, wishes, the final letter…

   To change a word, change it here. If you change something in one
   language, change its twin in the other or the two will drift apart.

   The Spanish is Venezuelan: tuteo throughout, written for a guy
   (masculine agreement), slang kept natural rather than heavy.
   =================================================================== */

const I18N = {

  /* ================================================================
     ESPAÑOL (VENEZUELA)
     ================================================================ */
  es: {
    code: "es",
    short: "ES",
    name: "Español",

    ui: {
      pageTitle: "Un Día Hecho Solo Para Ti ♡",
      noscript: "Esta aventura de cumpleaños necesita JavaScript activado para las animaciones y las sorpresas ♡",

      introEyebrow: "Un Día Hecho Solo Para Ti ♥",
      welcomeTitle: "¡Hola, Jesús cumpleañero!",
      candleHint: "Dale un toque a la torta para apagarlas",
      blowBtn: "Apágalas 🎂",
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
    },

    js: {
      makeWish: "Pide un deseo.",
      listening: "Escuchando…",
      sorryClosed: "Para decir que lo siento",
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
    },

    config: {
      friendName: "Jesús",
      yourName: "yo",

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
    }
  },

  /* ================================================================
     ENGLISH
     ================================================================ */
  en: {
    code: "en",
    short: "EN",
    name: "English",

    ui: {
      pageTitle: "A Day Made Just For You ♡",
      noscript: "This birthday adventure needs JavaScript switched on for the animations and surprises ♡",

      introEyebrow: "A Day Made Just For You ♥",
      welcomeTitle: "Hey Birthday Jesus!",
      candleHint: "Tap the cake to blow them out",
      blowBtn: "Blow them out 🎂",
      micBtn: "…or actually blow into your mic",

      giftEyebrow: "Wish logged ♥",
      giftTitle: "Now the actual present.",
      giftSub: "It has no postage, no wrapping paper and no physical form. It does, however, have animations.",
      openGift: "Open Your Surprise ✨",

      welcomeCardTitle: "Happy Birthday, {name}!",
      enterBtn: "Let’s explore ♥",

      navAria: "Sections of your day",
      navBrand: "A Day Made Just For You",
      navLetters: "Letters",
      navScrapbook: "For You",
      navSorry: "Sorry",
      navCake: "Cake",
      navAdventure: "Adventure",
      navSurprise: "Surprise",
      langAria: "Change language",

      universeEyebrow: "Choose your first stop",
      universeTitle: "Your Little Universe",
      universeLede: "Four small worlds, each hiding something for you. Wander in any order — nothing here expires.",

      worldLettersTitle: "Secret Letters",
      worldLettersText: "Sealed notes to open whenever your heart asks for one.",
      worldLettersGo: "Open the drawer →",
      worldScrapTitle: "dedicated to you",
      worldScrapText: " small notes from our corner of the internet.",
      worldScrapGo: "Turn the pages →",
      worldCakeTitle: "Birthday Cake",
      worldCakeText: "Light the candles, close your eyes, make the wish properly.",
      worldCakeGo: "Light it up →",
      worldFinaleTitle: "Final Surprise",
      worldFinaleText: "Save this one for last. It is the whole reason this page exists.",
      worldFinaleGo: "Only at the end →",

      s1Eyebrow: "Section one",
      lettersTitle: "Secret Letters",
      lettersLede: "Little envelopes for little moments. Open the one that matches your day — they stay here for whenever you come back.",

      s2Eyebrow: "Section two",
      scrapbookTitle: "Dedicated to You",
      scrapbookLede: "Things dedicated to you — some GIFs, some facts, and one dancing chicken. All officially approved. Tap a photo to see it bigger.",

      s3Eyebrow: "Section three",
      sorryTitle: "A Card That Says Sorry",
      sorryLede: "Some things don’t fit in a scrapbook. This one came in a plastic sleeve — go on, open it.",

      s4Eyebrow: "Section four",
      cakeTitle: "Your Birthday Cake",
      cakeLede: "No one else gets a slice until you have had yours.",
      cakeHint: "Tap the cake to light the candles",
      wishBtn: "Make a Wish",
      relightBtn: "Light them again",

      s5Eyebrow: "Section five",
      adventureTitle: "Mini Birthday Adventure",
      adventureLede: "Five small things to play with. All of them actually work — go on, test them. One of them should not be touched.",

      g1Kicker: "Game one",
      quizHeading: "The Birthday Quiz",
      quizRetry: "Play again",

      g2Kicker: "Game two",
      complimentHeading: "Compliment Machine",
      complimentIdle: "Press the button. It only tells the truth.",
      complimentBtn: "Tell me something nice ♡",

      g3Kicker: "Game three",
      scratchHeading: "Surprise Scratch Card",
      scratchCanvasAria: "A scratch card hiding a message",
      scratchHint: "Scratch with your finger or mouse",
      scratchReveal: "Reveal it for me",
      scratchNew: "New card",

      g4Kicker: "Game four",
      gameHeading: "Catch the Falling Hearts",
      gameCaught: "Caught",
      gameTimeLabel: "Time",
      gameBest: "Best",
      gameCanvasAria: "Move the basket to catch falling hearts. Use the left and right arrow keys, or drag.",
      gameStart: "Start",
      gameOverlayHtml: "Catch <b data-game-target></b> hearts in 30 seconds.",
      gameNote: "Drag with your finger, move the mouse, or use ← →",

      g5Kicker: "Game five",
      forbiddenHeading: "Do Not Press This",
      forbiddenBtn: "Do not press",
      forbiddenStatus: "Seriously. Leave it.",

      finaleEyebrow: "The last stop",
      finaleTitle: "One Final Surprise",
      finaleLede: "You made it to the end, which means you now have to read the bit I spent the longest on.",
      finaleTo: "To {name},",
      dedicationHeading: "And one more thing — a song for you",
      dedicationLabel: "Play the song",
      finaleHearts: "Send some hearts back ♡",
      replayBtn: "Start the day over",

      footerLine: "Built with an unreasonable number of CSS animations, from one corner of the internet to another.",

      modalCloseAria: "Close",
      trophyAria: "Show your achievements",
      trophiesTitle: "What you have found",

      musicTitle: "Birthday song",
      seekAria: "Seek through the song",
      volumeAria: "Volume",
      prevAria: "Previous song",
      nextAria: "Next song",
      musicToggleAria: "Play the birthday song",
      lyricsToggleAria: "Show the lyrics",
      lyricsCloseAria: "Hide the lyrics",
      expandAria: "Show music controls"
    },

    js: {
      makeWish: "Make a wish.",
      listening: "Listening…",
      sorryClosed: "To say I’m sorry",
      candlesLit: "Candles lit. Make the wish.",
      wishMade: "Wish made. Light them again if you like.",
      cakeHintTap: "Tap the cake to light the candles",
      wishRegistered: "Wish registered.",
      questionOf: "Question {a} of {b}",
      quizPerfect: "Perfect. Suspicious, even. Were you taking notes?",
      quizGood: "Respectable. You clearly pay attention.",
      quizMeh: "The scoring was never the point. Have some cake.",
      happyBirthday: "Happy birthday.",
      scratchHint: "Scratch with your finger or mouse",
      scratchHere: "scratch here",
      thereItIs: "There it is.",
      fineThereItIs: "Fine, no scratching. There it is.",
      youWin: "You win.",
      notQuite: "Not quite.",
      playAgain: "Play again",
      sentAgain: "Sent ♥ (again?)",
      birthdaySong: "Birthday song",
      noSongYet: "No song added yet",
      dropMp3s: "Drop your mp3s into <code>assets/music/</code> and list them in <code>music.tracks</code> in <code>i18n.js</code>.",
      pauseMusic: "Pause the music",
      playMusic: "Play the music",
      noLyrics: "No words for this song yet. Open <code>lyrics-timer.html</code>, paste the lines in and tap the spacebar along with the song — it writes <code>lyrics.js</code> for you and they show up here, in time.",
      aSongForYou: "A song for you",
      songMissing: "The song file has not been added yet",
      pauseSong: "Pause the song",
      playSong: "Play the song",
      fileNotThere: "The file is not there yet — drop it in as <code>{src}</code> and it will play from here.",
      stillLocked: "Still locked",
      keepPoking: "Keep poking around.",
      allFound: "All of them. Nothing left hidden.",
      foundSoFar: "{a} of {b} found so far.",
      lettersOpened: "{n} of {total} opened",
      lettersSealed: "All {total} still sealed."
    },

    config: {
      friendName: "Jesus",
      yourName: "me",

      intro: {
        lede: "Before anything else — these have been burning since midnight and the wax situation is getting serious.",
        nudges: [
          "Tap the cake to blow them out",
          "Go on. One good breath.",
          "The wax is winning. Any time now.",
          "I will wait. I am a website. I have nothing else on."
        ],
        blownText: "Make a wish. Do not tell me what it is — I will only judge it.",
        micSuccess: "I heard that. Genuinely impressive lung capacity.",
        micDenied: "No mic then. Button it is — equally valid, less dramatic.",
        micListening: "Listening… blow at your screen like a maniac."
      },

      welcomeText: "Welcome to the smallest website in the world, made for one person and one day only. I could have bought you a cake, but I decided to build you a whole website instead. Inside there are: letters, a wall full of pure nonsense, cake (the digital kind, sorry), and a little something at the end. Us internet friends deserve a proper birthday too. Wander wherever you feel like.",

      letters: [
        {
          label: "Open when you need a smile",
          title: "A completely scientific list of good things",
          body: [
            "Fact one: somewhere right now, a dog is being told it is a good boy, and it fully believes it.",
            "Fact two: someone on the other side of the world built a whole website because it was your birthday. That is a genuinely weird thing to have happen to you, and it happened.",
            "Fact three: you have survived every single Monday so far. Undefeated. Frankly an incredible record.",
            "That is the whole letter. It was never going to be deep. Go have a snack."
          ],
          sign: "filed under: objectively true"
        },
        {
          label: "Open when you’re feeling down",
          title: "Permission slip",
          body: [
            "This is not a pep talk. Pep talks on bad days are annoying, and we both know it.",
            "So instead: consider this official permission to have an unproductive day. Close the tabs. Eat something warm. Reply to nobody. The world keeps spinning without your input, which is rude of it, but also convenient.",
            "The only thing I will say is that bad days are famously bad at predicting the future. They are confident, but wrong — like a weather app.",
            "Come back tomorrow. This page will still be here. It does not get tired."
          ],
          sign: "signed, management"
        },
        {
          label: "Open when you need motivation",
          title: "In case you need a push",
          body: [
            "Here is the trick nobody tells you: you do not need to feel ready. Feeling ready is a bonus feature, not a requirement. Most things get done by people who were mildly unsure and started anyway.",
            "Also, the version of the thing you are avoiding is almost certainly worse in your head than it is on paper. Your brain is a drama queen with a very good special effects budget.",
            "So: pick the smallest possible first step. Embarrassingly small. Insultingly small. Do that one. The rest tends to follow out of sheer momentum.",
            "And if it goes badly — excellent, now you have a story."
          ],
          sign: "go on then"
        },
        {
          label: "Open when you want to remember how special you are",
          title: "The evidence",
          body: [
            "I am not going to get sappy on you, so let us do this with evidence instead.",
            "You are the kind of person who actually answers the question that was asked. You remember things people mentioned once. You make group chats better by being in them. These sound like small things. They are not — most people cannot do any of them.",
            "You are also funny on purpose, which is much harder than being funny by accident.",
            "That is the evidence. The conclusion writes itself. Case closed."
          ],
          sign: "the prosecution rests"
        },
        {
          label: "Open when you’re running on empty",
          title: "For the one doing two things at once",
          body: [
            "An internship and a degree at the same time is two full-time things wearing one coat and pretending to be a normal schedule. Everyone nods at this like it is reasonable. It is not reasonable.",
            "Nobody claps for this part, either. There is no ceremony for answering a work message during a lecture break, or for opening the laptop again at night when the sensible move was sleep. It just gets quietly done. Every day. By you.",
            "So let it be said once, plainly, by a website: it is being noticed. The tiredness is not a character flaw or a sign you are doing it wrong. It is a receipt.",
            "You are not behind. You are carrying two loads at the pace most people manage one, and the fact that you still turn up as yourself while doing it is the genuinely impressive part. Put one load down today. The deadlines will survive your absence — they are famously resilient."
          ],
          sign: "no advice this time, just noticed"
        },
        {
          label: "Open when it’s 2am and you’re bored",
          title: "Hello, insomniac",
          body: [
            "Nothing important happens at 2am, which is exactly why it is the best time of day. No emails. No decisions. Just you and a screen and increasingly strange thoughts.",
            "Since you are here: honey never spoils, octopuses have three hearts, and bananas are mildly radioactive. You now know three things you did not need. You are welcome.",
            "Go to sleep eventually. Not immediately. Eventually."
          ],
          sign: "same, honestly"
        }
      ],

      scrapbook: [
        { type: "note", text: "Still the only person who replies with an actual answer instead of “k”.", by: "a verified review", rot: 1.5 },
        { type: "photo", src: "assets/images/dance.gif",
          caption: "a dance for you. yes, it’s a chicken. yes, the moves are better than ours.", rot: 1.8 },
        { type: "sticker", big: "100%", label: "certified good egg", rot: -3 },
        { type: "photo", src: "assets/images/boom.gif",
          caption: "caught mid-main-character-moment", rot: -1.6 },
        { type: "note", text: "Great taste. Suspiciously great taste. Who taught you?", by: "an ongoing investigation", rot: -2.4 },
        { type: "note",
          text: "May this year give you less to juggle, and everything you’ve worked for in return.<br><br>You’ve earned a day off from being impressive. Happy birthday. 🎂",
          rot: -1.9 },
        { type: "sticker", big: "A+", label: "vibes assessment", rot: 2.6 },
        { type: "photo", src: "assets/images/birthday.gif", caption: "happy birthday, you menace", rot: 2.4 }
      ],

      sorry: {
        front: "assets/images/sorry-front.jpg",
        inside: "assets/images/sorry-inside.jpg",
        frontAlt: "The front of a heart-shaped card reading “To Say I’m Sorry”.",
        insideAlt: "The inside of the card, with its printed message and the word Sorry.",
        hint: "tap to open it",
        teaser: "It came sealed in plastic, which felt a bit cowardly. There is something printed inside it.",
        message: [
          "There are also certain people",
          "who can make our world brighter,",
          "who simply with a word of smile",
          "can make a heart feel lighter,",
          "and since you are that kind of person…"
        ],
        signoff: "Sorry",
        footnote: "One more thing on your special day: I’m sorry for the way I handled things earlier. i hope you forgive me with all of your heart. Hope your year is full of good things."
      },

      wishes: [
        "Wish registered. Processing time: unclear. Success rate: historically excellent.",
        "That one has been forwarded to the universe. It read the message. No reply yet, but it read it.",
        "Noted, stamped and filed. May this year be weirdly, suspiciously good to you.",
        "Logged. Filed with a note attached: fewer 7am alarms, and at least one weekend that is actually a weekend.",
        "Done. Here’s to a year of small wins, good food and absolutely no unnecessary meetings."
      ],

      quiz: [
        {
          q: "What is the correct way to eat birthday cake?",
          options: ["Fork, like a civilised adult", "Hands. Obviously.", "Straight from the tray at 1am", "All three, in that order"],
          answer: 3,
          right: "Correct. The only acceptable answer.",
          wrong: "Bold, but no. The answer was all three, in that order."
        },
        {
          q: "How many hours do you think went into this website?",
          options: ["Two, max", "An unreasonable number", "It was a template", "Nobody will ever know"],
          answer: 1,
          right: "Yes. And I would do it again. Probably.",
          wrong: "Generous of you. It was an unreasonable number."
        },
        {
          q: "What is the official birthday policy on responsibilities today?",
          options: ["Suspended", "Postponed", "Delegated", "Ignored with confidence"],
          answer: 0,
          right: "Suspended. Fully. There is paperwork.",
          wrong: "Close enough, but officially: suspended."
        },
        {
          q: "How many things is the birthday person currently juggling?",
          options: ["One, comfortably", "A degree and an internship, at the same time", "Two, badly", "Nobody is counting"],
          answer: 1,
          right: "Correct. A degree and an internship, simultaneously, on purpose — and still found time to click through a birthday website.",
          wrong: "A degree and an internship. At the same time. On purpose. And still turned up here."
        },
        {
          q: "The best birthday gift is…",
          options: ["Cash, let’s be honest", "Food", "Something handmade and slightly unhinged", "Attention"],
          answer: 2,
          right: "Correct, and conveniently also what you are currently looking at.",
          wrong: "Valid, but the answer was the handmade slightly unhinged option. See: this page."
        },
        {
          q: "What happens when you finish this quiz?",
          options: ["Nothing", "Confetti", "A compliment you did not ask for", "You still have three more games"],
          answer: 3,
          right: "Correct. You absolutely do. Keep going.",
          wrong: "Wrong — you have three more games. Sorry."
        }
      ],

      compliments: [
        "You reply to messages like a person who has read them. Rare. Possibly extinct elsewhere.",
        "Your taste is so consistently good it is mildly intimidating. Keep doing that.",
        "You are funny on purpose, which is significantly harder than being funny by accident.",
        "If being decent to people were a sport, you would be quietly dominating the league table.",
        "You make group chats better simply by existing in them. That is a measurable effect.",
        "You have the energy of someone who would absolutely help a stranger find their lost dog.",
        "Statistically speaking, you are in the top 1% of people I have never met in person.",
        "You remember things people only mentioned once. Slightly unsettling. Mostly very nice.",
        "You give good advice and then actually follow up on it. Who raised you? Excellent work from them.",
        "Nobody has ever had to explain a joke to you twice. That is a flex and you should use it.",
        "You are the human equivalent of a notification you are actually happy to see.",
        "You are running an internship and a degree at once and still reply like a functioning human being. Most people manage one of those badly.",
        "Tired and still kind is a much harder trick than rested and kind. You keep doing the hard version.",
        "You show up to the thing on days when it would be entirely reasonable not to. That is the whole skill. Everything else is decoration.",
        "Somewhere your weekly schedule is written down, and I am fairly sure it is illegal in several countries.",
        "Somehow you make being responsible look fun. That should not be possible."
      ],

      scratchCards: [
        "Wishing you a year where the hard parts get easier and the good parts get louder."
      ],

      game: {
        target: 18,
        seconds: 30,
        winText: "You win. Reflexes: confirmed excellent. Go collect your cake.",
        loseText: "Not quite. The hearts were moving fast and you have had a big day. Try again?"
      },

      forbidden: {
        dodges: 6,
        taunts: [
          "Seriously. Leave it.",
          "No.",
          "I said no.",
          "This is the one thing I asked.",
          "You are not going to stop, are you.",
          "Fine. FINE. Press it."
        ],
        steps: [
          "Locating confetti…",
          "Waking the hearts…",
          "Overthinking the colour palette…",
          "Pretending this took effort…",
          "Done."
        ],
        payoff: "That was it. That was the whole secret. Happy birthday."
      },

      achievements: [
        { id: "blown",     icon: "🎂", name: "Candles out",     desc: "Blew out the candles." },
        { id: "unwrapped", icon: "🎁", name: "Unwrapped",       desc: "Opened the gift box." },
        { id: "letter",    icon: "✉️", name: "Dear reader",     desc: "Opened a secret letter." },
        { id: "quiz",      icon: "🧠", name: "Quiz survivor",   desc: "Finished the quiz." },
        { id: "scratch",   icon: "🎟️", name: "Scratcher",       desc: "Scratched a card." },
        { id: "game",      icon: "💘", name: "Quick hands",     desc: "Won the heart game." },
        { id: "forbidden", icon: "🚫", name: "Told you",        desc: "Pressed the forbidden button." },
        { id: "finale",    icon: "⭐", name: "The whole thing", desc: "Reached the final surprise." }
      ],

      finale: {
        paragraphs: [
          "Right. You made it to the end, which means you clicked through all of it, which means my unreasonable plan worked.",
          "Here is the honest version: I could not get you a cake, I could not show up at your door, and posting a GIF in a chat felt like the bare minimum. So I built the only kind of gift I am actually any good at — one made of too many CSS animations and some jokes.",
          "You are one of the genuinely good parts of being online. You make the internet feel a bit less like a vending machine of bad news and a bit more like a place where people are nice to each other for no particular reason.",
          "And since it has been a year of doing two hard things at once — the internship, the studies, the days where both wanted the same hours — it should be said somewhere permanent: that takes something. Most people would have dropped one by now. You have not, and you have somehow stayed good company throughout, which is the part nobody has the energy for.",
          "So: have an excellent birthday. Eat the good thing. Ignore the boring obligations. Be insufferable about it — you have earned the right for at least one day, and frankly for several more than that."
        ],
        closingLine: "Distance means nothing when someone makes your world a little brighter.",
        sign: "happy birthday, genuinely — your friend from the internet",
        song: {
          title: "You're Never Fully Dressed Without A Smile",
          artist: "Annie (2014 film)",
          src: "assets/music/Annie OST(2014) - You're Never Fully Dressed Without A Smile(2014 Film Version).mp3",
          note: "I went back and forth on this for an embarrassingly long time, and then landed on this one. It is yours now. Play it loud, play it on a bad day, play it in the shower — I do not get a say in it any more."
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
    }
  }
};


/* ------------------------------------------------------------------
   WHICH LANGUAGE ARE WE IN?
   A saved choice wins; then the browser's own language; then Spanish.
   ------------------------------------------------------------------ */
const LANG_KEY = "birthday-lang";

function savedLang() {
  try {
    const v = localStorage.getItem(LANG_KEY);
    if (v && I18N[v]) return v;
  } catch (err) { /* private mode / blocked storage — fall through */ }
  return null;
}

function pickLang() {
  const saved = savedLang();
  if (saved) return saved;
  const nav = (navigator.language || "").toLowerCase();
  return nav.indexOf("en") === 0 ? "en" : "es";
}

const LANG = pickLang();
const UI   = I18N[LANG].ui;
const TXT  = I18N[LANG].js;

/* The rest of the site reads CONFIG exactly as it always has. */
const CONFIG = I18N[LANG].config;

/* Fill {placeholders} in a string. */
function fmt(str, vals) {
  return String(str == null ? "" : str).replace(/\{(\w+)\}/g, function (m, k) {
    return Object.prototype.hasOwnProperty.call(vals || {}, k) ? vals[k] : m;
  });
}
