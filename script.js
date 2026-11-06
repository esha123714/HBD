/* ===================================================================
   A DAY MADE JUST FOR YOU
   -------------------------------------------------------------------
   Everything you might want to change lives in CONFIG, at the top.
   Below that is the machinery that drives the page.
   =================================================================== */

const CONFIG = {

  /* ---- WHO IT IS FOR -------------------------------------- */
  friendName: "you",
  yourName:   "me",

  /* ---- THE OPENING SEQUENCE -------------------------------
     The site opens on a lit cake. Blow the candles out (tap,
     press the button, or actually blow into the mic) and only
     then does the gift box turn up.                          */
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
    micDenied:  "No mic then. Button it is — equally valid, less dramatic.",
    micListening: "Listening… blow at your screen like a maniac."
  },

  /* ---- THE CARD AT THE END OF THE INTRO -------------------- */
  welcomeText: "This is the whole thing: a small corner of the internet that exists only because it is your birthday. Letters, a wall of nonsense, cake, and something at the end. Take it in any order you like.",

  /* ---- SECRET LETTERS -------------------------------------- */
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

  /* ---- THE WALL -------------------------------------------
     type: "photo"  -> assets/images/<src>, placeholder until added
     type: "note"   -> a handwritten note card; `by` is optional
     type: "sticker"-> a small decorative chip
     rot            -> how crooked the card sits, in degrees   */
  scrapbook: [
    { type: "photo",   src: "assets/images/photo-1.jpg", caption: "exhibit A: the birthday person", rot: -2.5 },
    { type: "note",    text: "Still the only person who replies with an actual answer instead of “k”.", by: "a verified review", rot: 1.5 },
    { type: "photo",   src: "assets/images/dance.gif",
      caption: "a dance for you. yes, it’s a chicken. yes, the moves are better than ours.", rot: 1.8 },
    { type: "sticker", big: "100%", label: "certified good egg", rot: -3 },
    { type: "photo",   src: "assets/images/boom.gif",
      caption: "caught mid-main-character-moment", rot: -1.6 },
    { type: "note",    text: "Great taste. Suspiciously great taste. Who taught you?", by: "an ongoing investigation", rot: -2.4 },
    { type: "note",
      text: "May this year give you less to juggle, and everything you’ve worked for in return.<br><br>You’ve earned a day off from being impressive. Happy birthday. 🎂",
      rot: -1.9 },
    { type: "sticker", big: "A+", label: "vibes assessment", rot: 2.6 },
    { type: "photo",   src: "assets/images/birthday.gif", caption: "happy birthday, you menace", rot: 2.4 }
  ],

  /* ---- THE SORRY CARD -------------------------------------
     Two photos of one real card: its front, and its inside.  */
  sorry: {
    front:  "assets/images/sorry-front.jpg",
    inside: "assets/images/sorry-inside.jpg",
    frontAlt:  "The front of a heart-shaped card reading “To Say I’m Sorry”.",
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
    footnote: "The card had one job. I am just the delivery service."
  },

  /* ---- WISHES SHOWN AFTER BLOWING THE CANDLES -------------- */
  wishes: [
    "Wish registered. Processing time: unclear. Success rate: historically excellent.",
    "That one has been forwarded to the universe. It read the message. No reply yet, but it read it.",
    "Noted, stamped and filed. May this year be weirdly, suspiciously good to you.",
    "Logged. Filed with a note attached: fewer 7am alarms, and at least one weekend that is actually a weekend.",
    "Done. Here’s to a year of small wins, good food and absolutely no unnecessary meetings."
  ],

  /* ---- THE QUIZ -------------------------------------------
     `answer` is the index of the correct option (0-based).   */
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

  /* ---- COMPLIMENT MACHINE ---------------------------------- */
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

  /* ---- SCRATCH CARD MESSAGES ------------------------------- */
  scratchCards: [
    "You get one free pass to cancel plans this month. No reason required.",
    "Coupon: one (1) unrequested compliment, redeemable at any time. Just ask.",
    "Official decree: today, whatever you want for dinner is the correct choice.",
    "This card entitles the bearer to be right in one argument of their choosing.",
    "Congratulations — you have won absolutely nothing, delivered beautifully.",
    "Prediction: something small and genuinely good happens to you this week.",
    "You are legally allowed to brag about your birthday for the next 48 hours.",
    "One guilt-free evening off. No emails, no readings, no catching up on anything. Non-negotiable.",
    "Redeemable for one nap of unreasonable length, with zero commentary from anybody.",
    "Redeemable for one long voice note where I pretend to listen. I will actually listen."
  ],

  /* ---- MINI-GAME SETTINGS ---------------------------------- */
  game: {
    target:   18,   // hearts needed to win
    seconds:  30,   // round length
    winText:  "You win. Reflexes: confirmed excellent. Go collect your cake.",
    loseText: "Not quite. The hearts were moving fast and you have had a big day. Try again?"
  },

  /* ---- THE FORBIDDEN BUTTON -------------------------------
     It dodges the cursor `dodges` times, getting more worried
     each time, then gives up and lets itself be pressed.     */
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

  /* ---- ACHIEVEMENTS ---------------------------------------- */
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

  /* ---- THE FINAL LETTER ------------------------------------ */
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

    /* The dedicated song joins the end of the playlist. Its timed
       lyrics live in lyrics.js, written by lyrics-timer.html. */
    song: {
      title:  "You're Never Fully Dressed Without A Smile",
      artist: "Annie (2014 film)",
      src:    "assets/music/Annie OST(2014) - You're Never Fully Dressed Without A Smile(2014 Film Version).mp3",
      note: "I went back and forth on this for an embarrassingly long time, and then landed on this one. It is yours now. Play it loud, play it on a bad day, play it in the shower — I do not get a say in it any more."
    }
  },

  /* ---- MUSIC ----------------------------------------------- */
  music: {
    volume: 0.55,
    /* Starts itself on the first real click of the site — the
       candle blow — because browsers will not allow it sooner. */
    autoplay: true,
    /* Open the lyrics by themselves when a song that has them
       starts. Closing the panel keeps it closed for that song. */
    showLyrics: true,
    tracks: [
      {
        title: "Si Te La Encuentras Por Ahí",
        src:   "assets/music/Feid - Si Te La Encuentras Por Ahí.mp3",
        /* The first minute is instrumental, so it starts a minute
           in — every time, loops included. 0 plays from the top. */
        startAt: 60
      }
    ]
  }
};


/* ============================================================
   ↓↓↓ FROM HERE DOWN IS THE MACHINERY. NO NEED TO EDIT. ↓↓↓
   ============================================================ */

const PALETTE = ["#AFC9DD", "#6E9CC4", "#2F6A99", "#C2D6E6", "#7E9FBE", "#DFB37C", "#EDF4F9"];

/* ---- Tiny helpers ---------------------------------------- */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const rand = (min, max) => min + Math.random() * (max - min);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Text from CONFIG is trusted, but it is still text: escape it
   before it goes anywhere near innerHTML. */
const escapeHtml = (str) => String(str == null ? "" : str).replace(
  /[&<>"']/g,
  (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch])
);

function formatTime(sec) {
  if (!isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ":" + String(s).padStart(2, "0");
}

function fillNames() {
  $$("[data-friend-name]").forEach((el) => { el.textContent = CONFIG.friendName; });
  $$("[data-your-name]").forEach((el) => { el.textContent = CONFIG.yourName; });
}


/* ============================================================
   ACHIEVEMENTS — small toasts, counted on the trophy button
   ============================================================ */
const Achievements = (() => {
  const unlocked = new Set();

  function unlock(id) {
    if (unlocked.has(id)) return;
    const a = (CONFIG.achievements || []).find((x) => x.id === id);
    if (!a) return;
    unlocked.add(id);

    const count = $("#trophyCount");
    if (count) {
      count.textContent = String(unlocked.size);
      count.hidden = false;
    }

    const host = $("#toasts");
    if (!host) return;
    const el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = '<span class="toast__icon"></span>' +
                   '<div><p class="toast__eyebrow">Achievement unlocked</p>' +
                   '<p class="toast__title"></p></div>';
    $(".toast__icon", el).textContent = a.icon;
    $(".toast__title", el).textContent = a.name;
    host.appendChild(el);
    setTimeout(() => {
      el.classList.add("is-out");
      setTimeout(() => el.remove(), 600);
    }, 3200);
  }

  return { unlock: unlock, has: (id) => unlocked.has(id), all: () => unlocked };
})();


/* ============================================================
   CONFETTI — one canvas, shared by several sections
   ============================================================ */
const Confetti = (() => {
  const canvas = $("#confettiCanvas");
  const ctx = canvas ? canvas.getContext("2d") : null;
  let bits = [];
  let running = false;

  function size() {
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  if (canvas) {
    size();
    window.addEventListener("resize", size);
  }

  function spawn(x, y, opts) {
    const o = opts || {};
    const count  = o.count  || 60;
    const power  = o.power  || 600;
    const sizePx = o.size   || 10;
    const shapes = o.shapes || ["circle", "square", "heart"];
    for (let i = 0; i < count; i++) {
      const a = rand(0, Math.PI * 2);
      const v = rand(power * 0.25, power);
      bits.push({
        x: x, y: y,
        vx: Math.cos(a) * v / 60,
        vy: Math.sin(a) * v / 60 - rand(2, 6),
        g: rand(0.18, 0.32),
        life: rand(70, 150),
        age: 0,
        size: rand(sizePx * 0.5, sizePx),
        rot: rand(0, Math.PI * 2),
        spin: rand(-0.2, 0.2),
        color: pick(PALETTE),
        shape: pick(shapes)
      });
    }
    start();
  }

  function drawHeart(c, s) {
    c.beginPath();
    c.moveTo(0, s * 0.3);
    c.bezierCurveTo(0, -s * 0.1, -s, -s * 0.1, -s, s * 0.35);
    c.bezierCurveTo(-s, s * 0.8, 0, s, 0, s * 1.3);
    c.bezierCurveTo(0, s, s, s * 0.8, s, s * 0.35);
    c.bezierCurveTo(s, -s * 0.1, 0, -s * 0.1, 0, s * 0.3);
    c.fill();
  }

  function frame() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bits = bits.filter((b) => b.age < b.life);
    bits.forEach((b) => {
      b.age++;
      b.vy += b.g;
      b.x += b.vx;
      b.y += b.vy;
      b.rot += b.spin;
      ctx.save();
      ctx.globalAlpha = Math.max(0, 1 - b.age / b.life);
      ctx.translate(b.x, b.y);
      ctx.rotate(b.rot);
      ctx.fillStyle = b.color;
      if (b.shape === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, b.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (b.shape === "heart") {
        drawHeart(ctx, b.size / 2);
      } else {
        ctx.fillRect(-b.size / 2, -b.size / 2, b.size, b.size * 0.7);
      }
      ctx.restore();
    });
    if (bits.length) {
      requestAnimationFrame(frame);
    } else {
      running = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  function start() {
    if (running || !ctx || reducedMotion()) return;
    running = true;
    requestAnimationFrame(frame);
  }

  function fromEl(el, opts) {
    if (!el) return;
    const r = el.getBoundingClientRect();
    spawn(r.left + r.width / 2, r.top + r.height / 2, opts);
  }

  function rain(ms) {
    if (reducedMotion()) return;
    const end = Date.now() + (ms || 4000);
    (function tick() {
      if (Date.now() > end) return;
      spawn(rand(0, window.innerWidth), -20, { count: 6, power: 120, size: 9 });
      setTimeout(tick, 180);
    })();
  }

  return { burst: spawn, rain: rain, fromEl: fromEl };
})();


/* ============================================================
   THE MIC — listens for an actual puff of breath
   ============================================================ */
const Mic = (() => {
  let stream = null, actx = null, analyser = null, raf = 0;

  const supported = () => !!(navigator.mediaDevices &&
                             navigator.mediaDevices.getUserMedia &&
                             (window.AudioContext || window.webkitAudioContext));

  /* A blow is a sustained burst of low-frequency energy — quite
     unlike speech, which is spikier and higher up the spectrum. */
  async function start(onBlow, onFail) {
    if (!supported()) { if (onFail) onFail(); return; }
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err) {
      if (onFail) onFail();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    actx = new AC();
    const src = actx.createMediaStreamSource(stream);
    analyser = actx.createAnalyser();
    analyser.fftSize = 1024;
    src.connect(analyser);

    const data = new Uint8Array(analyser.frequencyBinCount);
    let held = 0;

    (function listen() {
      if (!analyser) return;
      analyser.getByteFrequencyData(data);
      // average the bottom of the spectrum: that is where breath sits
      let sum = 0;
      const bins = 24;
      for (let i = 2; i < 2 + bins; i++) sum += data[i];
      const level = sum / bins;
      held = level > 90 ? held + 1 : 0;
      if (held > 6) { stop(); if (onBlow) onBlow(); return; }
      raf = requestAnimationFrame(listen);
    })();
  }

  function stop() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    analyser = null;
    if (actx && actx.state !== "closed") actx.close().catch(() => {});
    actx = null;
    if (stream) stream.getTracks().forEach((t) => t.stop());
    stream = null;
  }

  return { supported: supported, start: start, stop: stop };
})();


/* Filled in by initMusic. These keep the rest of the page safe
   if the player never starts (no songs, or missing files). */
const Music = {
  autostart: () => {},
  jumpTo:    () => false,
  isPlaying: () => false,
  isMissing: () => true,
  onChange:  null
};


/* ============================================================
   THE INTRO — candles, then the gift, then the card
   ============================================================ */
function initWelcome() {
  const cake    = $("#introCake");
  const hint    = $("#candleHint");
  const lede    = $("#candleLede");
  const blowBtn = $("#blowBtn");
  const micBtn  = $("#micBtn");
  const micNote = $("#micNote");
  const stageC  = $("#stageCandles");
  const stageG  = $("#stageGift");
  const giftbox = $("#giftbox");
  const openBtn = $("#openGift");
  const card    = $("#welcomeCard");
  const cardTxt = $("#welcomeText");
  const enter   = $("#enterBtn");
  const cue     = $("#scrollCue");
  if (!cake || !stageC) return;

  document.body.classList.add("is-intro");
  if (lede && CONFIG.intro.lede) lede.textContent = CONFIG.intro.lede;

  /* nudges, while the candles are still lit */
  let nudge = 0;
  const nudges = CONFIG.intro.nudges || [];
  const nudgeTimer = (nudges.length > 1 && hint)
    ? setInterval(() => {
        nudge = (nudge + 1) % nudges.length;
        hint.textContent = nudges[nudge];
      }, 4200)
    : 0;

  if (micBtn && Mic.supported()) micBtn.hidden = false;

  let blown = false;

  function blowOut(viaMic) {
    if (blown) return;
    blown = true;
    if (nudgeTimer) clearInterval(nudgeTimer);
    Mic.stop();

    /* the gust leans the flames over, then they die */
    cake.classList.add("is-blowing");
    setTimeout(() => {
      cake.classList.remove("is-lit", "is-blowing");
      cake.classList.add("is-wished", "is-pop");
      setTimeout(() => cake.classList.remove("is-pop"), 700);
    }, reducedMotion() ? 0 : 380);

    if (hint) hint.textContent = CONFIG.intro.blownText || "Make a wish.";
    if (micNote && viaMic) {
      micNote.hidden = false;
      micNote.textContent = CONFIG.intro.micSuccess || "";
    }
    if (blowBtn) blowBtn.disabled = true;
    if (micBtn) micBtn.hidden = true;

    Achievements.unlock("blown");
    Confetti.fromEl(cake, { count: 70, power: 620, shapes: ["heart", "circle"] });

    /* the first real click of the site: music is allowed now */
    if (Music && Music.autostart) Music.autostart();

    /* hand over to the gift box */
    setTimeout(() => {
      stageC.classList.add("is-leaving");
      setTimeout(() => {
        stageC.hidden = true;
        if (stageG) {
          stageG.hidden = false;
          stageG.classList.add("is-entering");
          requestAnimationFrame(() => {
            stageG.classList.remove("is-entering");
            stageG.classList.add("is-here");
          });
        }
      }, reducedMotion() ? 0 : 420);
    }, reducedMotion() ? 200 : 1800);
  }

  cake.addEventListener("click", () => blowOut(false));
  if (blowBtn) blowBtn.addEventListener("click", () => blowOut(false));

  if (micBtn) {
    micBtn.addEventListener("click", () => {
      if (micNote) {
        micNote.hidden = false;
        micNote.textContent = CONFIG.intro.micListening || "Listening…";
      }
      micBtn.disabled = true;
      Mic.start(
        () => blowOut(true),
        () => {
          micBtn.hidden = true;
          if (micNote) {
            micNote.hidden = false;
            micNote.textContent = CONFIG.intro.micDenied || "";
          }
        }
      );
    });
  }

  /* stage 2: the gift box */
  let opened = false;
  function openGift() {
    if (opened) return;
    opened = true;
    if (giftbox) giftbox.classList.add("is-open");
    if (openBtn) openBtn.disabled = true;
    Achievements.unlock("unwrapped");
    Confetti.fromEl(giftbox || openBtn, { count: 110, power: 820, size: 12 });

    setTimeout(() => {
      if (stageG) stageG.hidden = true;
      if (card) {
        card.hidden = false;
        if (cardTxt) cardTxt.textContent = CONFIG.welcomeText || "";
        /* .welcome__card starts at opacity 0 and only becomes
           clickable once `is-in` is on it — next frame, so the
           transition actually runs instead of being skipped. */
        requestAnimationFrame(() => card.classList.add("is-in"));
      }
      if (cue) cue.hidden = false;
    }, reducedMotion() ? 200 : 1700);
  }
  if (openBtn) openBtn.addEventListener("click", openGift);
  if (giftbox) giftbox.addEventListener("click", openGift);

  /* stage 3: into the site */
  if (enter) {
    enter.addEventListener("click", () => {
      document.body.classList.remove("is-intro");
      const welcome = $("#welcome");
      if (welcome) welcome.classList.add("is-done");
      const first = $("#universe");
      if (first) first.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth" });
    });
  }
}


/* ============================================================
   NAV + SCROLL REVEALS
   ============================================================ */
function initNavAndReveal() {
  const nav = $("#siteNav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* highlight whichever section is on screen */
  const links = $$(".nav__link");
  const byId = {};
  links.forEach((a) => {
    const href = a.getAttribute("href") || "";
    byId[href.replace("#", "")] = a;
  });
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.classList.remove("is-active"));
      const a = byId[e.target.id];
      if (a) a.classList.add("is-active");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  Object.keys(byId).forEach((id) => {
    const sec = document.getElementById(id);
    if (sec) spy.observe(sec);
  });

  /* fade things in as they arrive */
  const revealObs = new IntersectionObserver((entries, obs) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-in");
      obs.unobserve(e.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  $$("[data-reveal]").forEach((el) => revealObs.observe(el));
}


/* ============================================================
   MODAL (used by the letters and the photo lightbox)
   ============================================================ */
const Modal = (() => {
  const root  = $("#modal");
  const panel = $("#modalPanel");
  const body  = $("#modalBody");
  const closeBtn = $("#modalClose");
  let lastFocused = null;

  function open(html) {
    if (!root) return;
    lastFocused = document.activeElement;
    body.innerHTML = html;
    root.hidden = false;
    document.body.style.overflow = "hidden";
    if (panel) { panel.scrollTop = 0; panel.focus(); }
  }

  function close() {
    if (!root) return;
    root.hidden = true;
    document.body.style.overflow = "";
    if (body) body.innerHTML = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  if (closeBtn) closeBtn.addEventListener("click", close);
  if (root) {
    root.addEventListener("click", (e) => {
      if (e.target.hasAttribute("data-modal-close")) close();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && root && !root.hidden) close();
  });

  return { open: open, close: close };
})();


/* ============================================================
   BOOT
   Each section starts inside its own try/catch, so one broken
   section can never take the rest of the page down with it.
   ============================================================ */
function boot() {
  const steps = [
    ["names",       fillNames],
    ["welcome",     initWelcome],
    ["nav",         initNavAndReveal],
    ["letters",     initLetters],
    ["scrapbook",   initScrapbook],
    ["sorry",       initSorry],
    ["cake",        initCake],
    ["quiz",        initQuiz],
    ["compliments", initCompliments],
    ["scratch",     initScratchCard],
    ["game",        initCatchGame],
    ["forbidden",   initForbidden],
    ["finale",      initFinale],
    ["music",       initMusic],
    ["dedication",  initDedication],
    ["lyrics",      initLyrics],
    ["trophies",    initTrophies]
  ];

  steps.forEach(([name, fn]) => {
    try {
      fn();
    } catch (err) {
      console.error('[birthday] the "' + name + '" section failed to start:', err);
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}


/* ============================================================
   SECRET LETTERS — envelopes that open into the modal
   ============================================================ */
function initLetters() {
  const grid = $("#lettersGrid");
  const counter = $("#lettersCounter");
  if (!grid) return;

  const read = new Set();

  function paintCounter() {
    if (!counter) return;
    const total = CONFIG.letters.length;
    counter.textContent = read.size
      ? read.size + " of " + total + " opened"
      : "All " + total + " still sealed.";
  }

  CONFIG.letters.forEach((letter, i) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "envelope";
    btn.innerHTML =
      '<span class="envelope__art" aria-hidden="true">' +
        '<span class="envelope__back"></span>' +
        '<span class="envelope__paper"></span>' +
        '<span class="envelope__pocket"></span>' +
        '<span class="envelope__flap"></span>' +
        '<span class="envelope__seal">&hearts;</span>' +
      '</span>' +
      '<span class="envelope__label"></span>' +
      '<span class="envelope__meta">Unopened</span>';

    $(".envelope__label", btn).textContent = letter.label;

    btn.addEventListener("click", () => {
      btn.classList.add("is-opening");
      setTimeout(() => btn.classList.remove("is-opening"), 700);

      Modal.open(
        '<article class="letter-read">' +
          '<p class="letter-read__label"></p>' +
          '<h2 class="letter-read__title" id="modalTitle"></h2>' +
          '<div class="letter-read__body"></div>' +
          '<hr class="letter-read__rule">' +
          '<p class="letter-read__sign"></p>' +
        '</article>'
      );
      const box = $("#modalBody");
      $(".letter-read__label", box).textContent = letter.label;
      $(".letter-read__title", box).textContent = letter.title;
      $(".letter-read__sign", box).textContent = letter.sign || "";
      const body = $(".letter-read__body", box);
      (letter.body || []).forEach((para) => {
        const p = document.createElement("p");
        p.textContent = para;
        body.appendChild(p);
      });

      if (!read.has(i)) {
        read.add(i);
        btn.classList.add("is-read");
        $(".envelope__meta", btn).textContent = "Opened";
        paintCounter();
      }
      Achievements.unlock("letter");
    });

    li.appendChild(btn);
    grid.appendChild(li);
  });

  paintCounter();
}


/* ============================================================
   THE WALL — photos, notes and stickers, slightly crooked
   ============================================================ */
function initScrapbook() {
  const grid = $("#scrapbookGrid");
  if (!grid) return;

  CONFIG.scrapbook.forEach((item) => {
    const wrap = document.createElement("div");
    wrap.className = "scrap scrap--" + item.type;
    wrap.style.setProperty("--rot", (item.rot != null ? item.rot : 0) + "deg");

    if (item.type === "photo") {
      const filename = String(item.src).split("/").pop();

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "polaroid";
      btn.innerHTML =
        '<span class="polaroid__frame">' +
          '<img alt="" loading="lazy" decoding="async">' +
        '</span>' +
        '<span class="polaroid__caption"></span>';

      const img = $("img", btn);
      img.alt = item.caption || "";
      img.src = item.src;
      $(".polaroid__caption", btn).textContent = item.caption || "";

      /* No file there yet? Say which one is missing, rather than
         showing a broken image icon. */
      img.addEventListener("error", () => {
        const frame = $(".polaroid__frame", btn);
        frame.innerHTML =
          '<span class="polaroid__ghost">' +
            '<span class="polaroid__ghost-mark" aria-hidden="true">&hearts;</span>' +
            '<span class="polaroid__ghost-name"></span>' +
            '<span class="polaroid__ghost-hint">your photo goes here</span>' +
          '</span>';
        $(".polaroid__ghost-name", frame).textContent = filename;
        btn.classList.add("is-empty");
      });

      btn.addEventListener("click", () => {
        if (btn.classList.contains("is-empty")) return;
        Modal.open(
          '<div class="lightbox">' +
            '<h2 class="sr-only" id="modalTitle"></h2>' +
            '<img alt="">' +
            '<p class="lightbox__caption"></p>' +
          '</div>'
        );
        const box = $("#modalBody");
        $("h2", box).textContent = item.caption || "";
        $("p", box).textContent = item.caption || "";
        const big = $("img", box);
        big.src = item.src;
        big.alt = item.caption || "";
      });

      wrap.appendChild(btn);

    } else if (item.type === "note") {
      /* `by` is optional — a note without one gets no empty line. */
      wrap.innerHTML =
        '<div class="note">' +
          '<p>' + item.text + '</p>' +
          (item.by ? '<p class="note__by">' + escapeHtml(item.by) + '</p>' : '') +
        '</div>';

    } else {
      wrap.innerHTML =
        '<div class="sticker">' +
          '<span class="sticker__big"></span>' +
          '<p class="sticker__label"></p>' +
        '</div>';
      $(".sticker__big", wrap).textContent = item.big || "";
      $(".sticker__label", wrap).textContent = item.label || "";
    }

    grid.appendChild(wrap);
  });
}


/* ============================================================
   THE SORRY CARD
   A real card photographed front and inside. Clicking flips it
   on a horizontal hinge, the way the paper one opens.
   ============================================================ */
function initSorry() {
  const stage = $("#sorryStage");
  const data  = CONFIG.sorry;
  if (!stage || !data || !data.front) return;

  const wrap = document.createElement("div");
  wrap.className = "sorry__stage";

  const card = document.createElement("button");
  card.type = "button";
  card.className = "sorrycard";
  card.setAttribute("aria-expanded", "false");
  card.innerHTML =
    '<span class="sorrycard__inner">' +
      '<span class="sorrycard__face sorrycard__face--front">' +
        '<img alt="" loading="lazy" decoding="async">' +
      '</span>' +
      '<span class="sorrycard__face sorrycard__face--inside">' +
        '<img alt="" loading="lazy" decoding="async">' +
      '</span>' +
    '</span>';

  const frontImg  = $(".sorrycard__face--front img", card);
  const insideImg = $(".sorrycard__face--inside img", card);
  frontImg.src  = data.front;
  frontImg.alt  = data.frontAlt || "";
  insideImg.src = data.inside;
  insideImg.alt = data.insideAlt || "";

  const hearts = document.createElement("div");
  hearts.className = "sorry__hearts";
  hearts.setAttribute("aria-hidden", "true");

  const hint = document.createElement("p");
  hint.className = "sorry__hint";
  hint.innerHTML = '<span aria-hidden="true">&hearts;</span>' +
                   escapeHtml(data.hint || "tap to open it");

  const lines = data.message || [];
  const signDelay = (0.52 + lines.length * 0.14 + 0.1).toFixed(2);

  const note = document.createElement("div");
  note.className = "sorry__note";
  note.innerHTML =
    lines.map((l, i) => '<p class="sorry__line" style="--i:' + i + '">' +
                        escapeHtml(l) + '</p>').join("") +
    '<p class="sorry__signoff" style="--sign-delay:' + signDelay + 's">' +
      escapeHtml(data.signoff || "Sorry") +
    '</p>' +
    (data.footnote
      ? '<p class="sorry__line" style="--i:' + (lines.length + 1) + '">' +
        '<em>' + escapeHtml(data.footnote) + '</em></p>'
      : "");

  const teaser = document.createElement("p");
  teaser.className = "sorry__teaser";
  teaser.textContent = data.teaser || "";

  /* teaser and message share one grid cell and cross-fade, so the
     column is never empty and the layout never jumps */
  const slot = document.createElement("div");
  slot.className = "sorry__slot";
  slot.appendChild(teaser);
  slot.appendChild(note);

  const actions = document.createElement("div");
  actions.className = "sorry__actions";

  const biggerBtn = document.createElement("button");
  biggerBtn.type = "button";
  biggerBtn.className = "sorry__btn";
  biggerBtn.textContent = "see it bigger";

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "sorry__btn sorry__btn--ghost";
  closeBtn.textContent = "close the card";

  actions.appendChild(biggerBtn);
  actions.appendChild(closeBtn);

  const side = document.createElement("div");
  side.className = "sorry__side";
  side.appendChild(slot);
  side.appendChild(actions);

  wrap.appendChild(card);
  wrap.appendChild(hearts);
  wrap.appendChild(hint);
  stage.appendChild(wrap);
  stage.appendChild(side);

  let open = false;

  function setOpen(next) {
    open = next;
    stage.classList.toggle("is-open", open);
    card.classList.toggle("is-open", open);
    card.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      floatHearts();
      $$(".sorry__line, .sorry__signoff", stage).forEach((el) => {
        el.style.animation = "none";
        void el.offsetWidth;
        el.style.animation = "";
      });
    }
  }

  function floatHearts() {
    if (reducedMotion()) return;
    const glyphs = ["♡", "♥", "✿"];
    for (let i = 0; i < 9; i++) {
      const h = document.createElement("span");
      h.className = "sorry__heart";
      h.textContent = glyphs[i % glyphs.length];
      h.style.left = (12 + Math.random() * 76) + "%";
      h.style.setProperty("--dx",    (Math.random() * 90 - 45).toFixed(0) + "px");
      h.style.setProperty("--dur",   (2.2 + Math.random() * 1.6).toFixed(2) + "s");
      h.style.setProperty("--delay", (Math.random() * 0.7).toFixed(2) + "s");
      h.style.setProperty("--size",  (14 + Math.random() * 16).toFixed(0) + "px");
      h.style.setProperty("--rot",   (Math.random() * 60 - 30).toFixed(0) + "deg");
      h.style.color = i % 2 ? "var(--pink-deep)" : "var(--lavender-deep)";
      hearts.appendChild(h);
      h.addEventListener("animationend", () => h.remove());
    }
  }

  card.addEventListener("click", () => setOpen(!open));
  closeBtn.addEventListener("click", () => { setOpen(false); card.focus(); });

  biggerBtn.addEventListener("click", () => {
    const src = open ? data.inside : data.front;
    const alt = open ? (data.insideAlt || "") : (data.frontAlt || "");
    Modal.open(
      '<div class="lightbox">' +
        '<h2 class="sr-only" id="modalTitle"></h2>' +
        '<img alt="">' +
        '<p class="lightbox__caption"></p>' +
      '</div>'
    );
    const box = $("#modalBody");
    $("h2", box).textContent = alt;
    $("p",  box).textContent = open ? (data.signoff || "") : "To say I'm sorry";
    const big = $("img", box);
    big.src = src;
    big.alt = alt;
  });
}


/* ============================================================
   SECTION — THE BIRTHDAY CAKE
   Light it, then make a wish. The wish puts the candles out.
   ============================================================ */
function initCake() {
  const cake   = $("#cakeFigure");
  const hint   = $("#cakeHint");
  const wishBt = $("#wishBtn");
  const relight= $("#relightBtn");
  const msg    = $("#wishMessage");
  if (!cake) return;

  let lit = false;
  let wished = false;

  function paint() {
    cake.classList.toggle("is-lit", lit);
    cake.classList.toggle("is-wished", wished && !lit);
    if (wishBt) wishBt.disabled = !lit;
    if (relight) relight.hidden = lit || !wished;
    if (hint) {
      hint.textContent = lit
        ? "Candles lit. Make the wish."
        : (wished ? "Wish made. Light them again if you like."
                  : "Tap the cake to light the candles");
    }
  }

  function light() {
    if (lit) return;
    lit = true;
    wished = false;
    if (msg) { msg.hidden = true; msg.textContent = ""; }
    paint();
  }

  function makeWish() {
    if (!lit) return;
    lit = false;
    wished = true;
    cake.classList.add("is-pop");
    setTimeout(() => cake.classList.remove("is-pop"), 700);
    paint();

    if (msg) {
      msg.hidden = false;
      msg.textContent = pick(CONFIG.wishes || ["Wish registered."]);
    }
    Confetti.fromEl(cake, { count: 80, power: 700, shapes: ["heart", "circle"] });
  }

  cake.addEventListener("click", () => (lit ? makeWish() : light()));
  if (wishBt) wishBt.addEventListener("click", makeWish);
  if (relight) relight.addEventListener("click", light);

  paint();
}


/* ============================================================
   GAME ONE — THE QUIZ
   ============================================================ */
function initQuiz() {
  const card   = $("#quizCard");
  const prog   = $("#quizProgress");
  const qEl    = $("#quizQuestion");
  const optsEl = $("#quizOptions");
  const fbEl   = $("#quizFeedback");
  const result = $("#quizResult");
  const scoreEl= $("#quizScore");
  const verdict= $("#quizVerdict");
  const retry  = $("#quizRetry");
  if (!qEl || !optsEl) return;

  const quiz = CONFIG.quiz || [];
  let at = 0, score = 0, locked = false;

  function render() {
    const item = quiz[at];
    if (!item) return finish();

    locked = false;
    if (prog) prog.textContent = "Question " + (at + 1) + " of " + quiz.length;
    qEl.textContent = item.q;
    if (fbEl) fbEl.textContent = "";
    optsEl.innerHTML = "";

    item.options.forEach((text, i) => {
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.type = "button";
      b.className = "quiz__option";
      b.textContent = text;
      b.addEventListener("click", () => choose(i, b, item));
      li.appendChild(b);
      optsEl.appendChild(li);
    });
  }

  function choose(i, btn, item) {
    if (locked) return;
    locked = true;
    const right = i === item.answer;
    if (right) score++;

    $$(".quiz__option", optsEl).forEach((b, idx) => {
      b.disabled = true;
      if (idx === item.answer) b.classList.add("is-right");
      else if (idx === i) b.classList.add("is-wrong");
    });

    if (fbEl) fbEl.textContent = right ? item.right : item.wrong;
    if (right) Confetti.fromEl(btn, { count: 26, power: 340, size: 8 });

    setTimeout(() => { at++; render(); }, 1400);
  }

  function finish() {
    if (card) card.hidden = true;
    if (result) result.hidden = false;
    if (scoreEl) scoreEl.textContent = score + " out of " + quiz.length;
    if (verdict) {
      verdict.textContent = score === quiz.length
        ? "Perfect. Suspicious, even. Were you taking notes?"
        : (score >= quiz.length - 2
            ? "Respectable. You clearly pay attention."
            : "The scoring was never the point. Have some cake.");
    }
    Achievements.unlock("quiz");
    if (result) Confetti.fromEl(result, { count: 70, power: 620 });
  }

  if (retry) {
    retry.addEventListener("click", () => {
      at = 0; score = 0;
      if (result) result.hidden = true;
      if (card) card.hidden = false;
      render();
    });
  }

  render();
}


/* ============================================================
   GAME TWO — THE COMPLIMENT MACHINE
   Shuffles, then works through the pack, so nothing repeats
   until every one of them has been used.
   ============================================================ */
function initCompliments() {
  const out = $("#complimentText");
  const btn = $("#complimentBtn");
  if (!out || !btn) return;

  let pack = [];
  function refill() {
    pack = (CONFIG.compliments || []).slice();
    for (let i = pack.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = pack[i]; pack[i] = pack[j]; pack[j] = t;
    }
  }
  refill();

  btn.addEventListener("click", () => {
    if (!pack.length) refill();
    out.style.opacity = "0";
    setTimeout(() => {
      out.textContent = pack.pop();
      out.style.opacity = "1";
    }, 180);
    Confetti.fromEl(btn, { count: 18, power: 300, size: 8, shapes: ["heart"] });
  });
}


/* ============================================================
   GAME THREE — THE SCRATCH CARD
   A canvas of foil over the message; scratching erases it.
   ============================================================ */
function initScratchCard() {
  const wrap   = $("#scratchWrap");
  const msgEl  = $("#scratchMessage");
  const canvas = $("#scratchCanvas");
  const hint   = $("#scratchHint");
  const revealBtn = $("#scratchReveal");
  const newBtn = $("#scratchNew");
  if (!wrap || !canvas || !msgEl) return;

  const ctx = canvas.getContext("2d");
  let drawing = false;
  let done = false;

  function newCard() {
    done = false;
    msgEl.textContent = pick(CONFIG.scratchCards || ["Happy birthday."]);
    if (hint) hint.textContent = "Scratch with your finger or mouse";

    const r = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = Math.max(1, Math.round(r.width  * dpr));
    canvas.height = Math.max(1, Math.round(r.height * dpr));
    canvas.style.width  = r.width + "px";
    canvas.style.height = r.height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const g = ctx.createLinearGradient(0, 0, r.width, r.height);
    g.addColorStop(0,   "#C2D6E6");
    g.addColorStop(0.5, "#AFC9DD");
    g.addColorStop(1,   "#7E9FBE");
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, r.width, r.height);

    ctx.fillStyle = "rgba(255,255,255,.55)";
    ctx.font = "600 15px Quicksand, system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("scratch here", r.width / 2, r.height / 2);

    canvas.style.opacity = "1";
  }

  function pointAt(e) {
    const r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  function scratch(e) {
    if (done) return;
    const p = pointAt(e);
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 22, 0, Math.PI * 2);
    ctx.fill();
  }

  /* How much has actually been cleared? Sampled coarsely - there is
     no need to read every pixel to know when it is mostly gone. */
  function clearedRatio() {
    const w = canvas.width, h = canvas.height;
    if (!w || !h) return 0;
    const data = ctx.getImageData(0, 0, w, h).data;
    let clear = 0, total = 0;
    for (let i = 3; i < data.length; i += 160) {
      total++;
      if (data[i] < 20) clear++;
    }
    return total ? clear / total : 0;
  }

  function finishCard(text) {
    done = true;
    canvas.style.transition = "opacity .5s ease";
    canvas.style.opacity = "0";
    if (hint) hint.textContent = text;
    Achievements.unlock("scratch");
  }

  function check() {
    if (done) return;
    if (clearedRatio() > 0.55) {
      finishCard("There it is.");
      Confetti.fromEl(wrap, { count: 50, power: 520 });
    }
  }

  canvas.addEventListener("pointerdown", (e) => { drawing = true; scratch(e); });
  canvas.addEventListener("pointermove", (e) => { if (drawing) scratch(e); });
  window.addEventListener("pointerup", () => {
    if (!drawing) return;
    drawing = false;
    check();
  });
  canvas.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });

  if (revealBtn) revealBtn.addEventListener("click", () => finishCard("Fine, no scratching. There it is."));
  if (newBtn) newBtn.addEventListener("click", () => {
    canvas.style.transition = "none";
    newCard();
  });

  newCard();
  window.addEventListener("resize", () => { if (!done) newCard(); });
}


/* ============================================================
   GAME FOUR — CATCH THE FALLING HEARTS
   ============================================================ */
function initCatchGame() {
  const canvas  = $("#gameCanvas");
  const scoreEl = $("#gameScore");
  const timeEl  = $("#gameTime");
  const bestEl  = $("#gameBest");
  const overlay = $("#gameOverlay");
  const overTxt = $("#gameOverlayText");
  const startBt = $("#gameStart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const G = CONFIG.game || {};
  const target = G.target || 18;
  const length = G.seconds || 30;

  $$("[data-game-target]").forEach((el) => { el.textContent = String(target); });

  let W = 0, H = 0;
  function size() {
    const r = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    W = r.width; H = r.height;
    canvas.width  = Math.max(1, Math.round(W * dpr));
    canvas.height = Math.max(1, Math.round(H * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size();
  window.addEventListener("resize", size);

  let running = false, raf = 0;
  let score = 0, best = 0, left = length;
  const basket = { x: 0, w: 74, h: 16 };
  let hearts = [];
  let last = 0, spawnAt = 0, tick = 0;

  function reset() {
    score = 0;
    left = length;
    hearts = [];
    basket.x = W / 2 - basket.w / 2;
    if (scoreEl) scoreEl.textContent = "0";
    if (timeEl) timeEl.textContent = String(length);
  }

  function drawHeart(x, y, s, rot) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.fillStyle = "#6E9CC4";
    ctx.beginPath();
    ctx.moveTo(0, s * 0.3);
    ctx.bezierCurveTo(0, -s * 0.1, -s, -s * 0.1, -s, s * 0.35);
    ctx.bezierCurveTo(-s, s * 0.8, 0, s, 0, s * 1.25);
    ctx.bezierCurveTo(0, s, s, s * 0.8, s, s * 0.35);
    ctx.bezierCurveTo(s, -s * 0.1, 0, -s * 0.1, 0, s * 0.3);
    ctx.fill();
    ctx.restore();
  }

  function frame(now) {
    if (!running) return;
    if (!last) last = now;
    const dt = Math.min(48, now - last);
    last = now;

    tick += dt;
    if (tick >= 1000) {
      tick -= 1000;
      left--;
      if (timeEl) timeEl.textContent = String(Math.max(0, left));
    }

    spawnAt -= dt;
    if (spawnAt <= 0) {
      hearts.push({
        x: rand(14, Math.max(16, W - 14)),
        y: -14,
        v: rand(1.5, 3.2),
        s: rand(9, 15),
        rot: rand(0, Math.PI * 2),
        spin: rand(-0.05, 0.05)
      });
      spawnAt = rand(260, 520);
    }

    ctx.clearRect(0, 0, W, H);
    const by = H - basket.h - 6;

    hearts.forEach((h) => {
      h.y += h.v * (dt / 16);
      h.rot += h.spin;
      const caught = h.y + h.s >= by && h.y - h.s <= by + basket.h &&
                     h.x > basket.x - 6 && h.x < basket.x + basket.w + 6;
      if (caught && !h.got) {
        h.got = true;
        score++;
        if (scoreEl) scoreEl.textContent = String(score);
      }
      if (!h.got) drawHeart(h.x, h.y, h.s, h.rot);
    });
    hearts = hearts.filter((h) => !h.got && h.y < H + 30);

    ctx.fillStyle = "#2F6A99";
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(basket.x, by, basket.w, basket.h, 8);
    else ctx.rect(basket.x, by, basket.w, basket.h);
    ctx.fill();

    if (left <= 0) { stop(); return; }
    raf = requestAnimationFrame(frame);
  }

  function start() {
    size();
    reset();
    running = true;
    last = 0; spawnAt = 0; tick = 0;
    if (overlay) overlay.hidden = true;
    canvas.focus();
    raf = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    const won = score >= target;
    if (score > best) {
      best = score;
      if (bestEl) bestEl.textContent = String(best);
    }
    if (overlay) overlay.hidden = false;
    if (overTxt) overTxt.textContent = won ? (G.winText || "You win.") : (G.loseText || "Not quite.");
    if (startBt) startBt.textContent = "Play again";
    if (won) {
      Achievements.unlock("game");
      Confetti.fromEl(canvas, { count: 90, power: 700, shapes: ["heart"] });
    }
  }

  if (startBt) startBt.addEventListener("click", start);

  canvas.addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    basket.x = clamp(e.clientX - r.left - basket.w / 2, 0, Math.max(0, W - basket.w));
  });
  canvas.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft")  basket.x = clamp(basket.x - 26, 0, W - basket.w);
    if (e.key === "ArrowRight") basket.x = clamp(basket.x + 26, 0, W - basket.w);
  });

  reset();
}


/* ============================================================
   GAME FIVE — THE FORBIDDEN BUTTON
   It dodges the cursor a few times, getting more worried each
   time, then gives up and lets itself be pressed.
   ============================================================ */
function initForbidden() {
  const zone   = $("#forbiddenZone");
  const btn    = $("#forbiddenBtn");
  const status = $("#forbiddenStatus");
  const loader = $("#forbiddenLoader");
  const fill   = $("#forbiddenFill");
  const stepEl = $("#forbiddenStep");
  const pctEl  = $("#forbiddenPct");
  if (!zone || !btn) return;

  const F = CONFIG.forbidden || {};
  const maxDodges = F.dodges || 6;
  const taunts = F.taunts || [];
  const steps  = F.steps  || [];
  let dodges = 0;
  let spent = false;

  function dodge() {
    if (spent) return;
    const zr = zone.getBoundingClientRect();
    const br = btn.getBoundingClientRect();
    const padX = Math.max(0, zr.width  - br.width  - 12);
    const padY = Math.max(0, zr.height - br.height - 12);
    btn.style.position = "relative";
    btn.style.left = (rand(-padX / 2, padX / 2)).toFixed(0) + "px";
    btn.style.top  = (rand(-padY / 2, padY / 2)).toFixed(0) + "px";

    dodges++;
    if (status && taunts.length) {
      status.textContent = taunts[Math.min(dodges - 1, taunts.length - 1)];
    }
    if (dodges >= maxDodges) {
      spent = true;
      btn.style.left = "0px";
      btn.style.top = "0px";
      btn.classList.add("is-caught");
    }
  }

  btn.addEventListener("mouseenter", dodge);
  btn.addEventListener("focus", dodge);

  btn.addEventListener("click", () => {
    if (!spent) { dodge(); return; }
    btn.disabled = true;
    if (status) status.textContent = "…fine.";
    if (loader) loader.hidden = false;

    let i = 0;
    const total = Math.max(1, steps.length);
    (function next() {
      if (i >= total) {
        if (status) status.textContent = F.payoff || "Happy birthday.";
        if (loader) loader.hidden = true;
        Achievements.unlock("forbidden");
        Confetti.fromEl(btn, { count: 140, power: 900, size: 13 });
        Confetti.rain(5000);
        return;
      }
      if (stepEl) stepEl.textContent = steps[i];
      const pct = Math.round(((i + 1) / total) * 100);
      if (fill) fill.style.width = pct + "%";
      if (pctEl) pctEl.textContent = pct + "%";
      i++;
      setTimeout(next, 700);
    })();
  });
}


/* ============================================================
   THE FINAL SURPRISE
   ============================================================ */
function initFinale() {
  const sky       = $("#finaleSky");
  const giftWrap  = $("#finaleGift");
  const openBtn   = $("#finaleOpen");
  const letter    = $("#finaleLetter");
  const bodyEl    = $("#finaleBody");
  const closing   = $("#finaleClosing");
  const signEl    = $("#finaleSign");
  const heartsBtn = $("#finaleHearts");
  const replayBtn = $("#replayBtn");
  if (!openBtn) return;

  if (sky && !reducedMotion()) {
    for (let i = 0; i < 60; i++) {
      const star = document.createElement("span");
      star.className = "star";
      const s = rand(1.5, 3.6);
      star.style.left = rand(0, 100) + "%";
      star.style.top  = rand(0, 100) + "%";
      star.style.width  = s + "px";
      star.style.height = s + "px";
      star.style.animationDuration = rand(1.6, 4.4) + "s";
      star.style.animationDelay = rand(0, 3) + "s";
      sky.appendChild(star);
    }
  }

  let opened = false;

  openBtn.addEventListener("click", () => {
    if (opened) return;
    opened = true;

    openBtn.classList.add("is-opening");
    Confetti.fromEl(openBtn, { count: 90, power: 760, size: 11 });
    Confetti.rain(9000);
    Achievements.unlock("finale");

    const delay = reducedMotion() ? 0 : 900;
    setTimeout(() => {
      if (giftWrap) giftWrap.classList.add("is-gone");

      if (bodyEl) {
        bodyEl.innerHTML = "";
        (CONFIG.finale.paragraphs || []).forEach((text, i) => {
          const p = document.createElement("p");
          p.textContent = text;
          p.style.animationDelay = (0.25 + i * 0.3) + "s";
          bodyEl.appendChild(p);
        });
      }

      const tail = 0.25 + (CONFIG.finale.paragraphs || []).length * 0.3;
      if (closing) {
        closing.textContent = CONFIG.finale.closingLine || "";
        closing.style.animationDelay = (tail + 0.2) + "s";
      }
      if (signEl) {
        signEl.textContent = CONFIG.finale.sign || "";
        signEl.style.animationDelay = (tail + 0.5) + "s";
      }

      if (letter) {
        letter.hidden = false;
        letter.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "center" });
      }

      /* Start the dedicated song with the letter. jumpTo() toggles,
         so it would pause the song if it happened to be playing
         already - hence the isPlaying guard. */
      const ded = CONFIG.finale && CONFIG.finale.song;
      if (ded && ded.src && !Music.isMissing(ded.src) && !Music.isPlaying(ded.src)) {
        Music.jumpTo(ded.src);
      }

      if (closing) {
        setTimeout(
          () => Confetti.fromEl(closing, { count: 70, power: 640, shapes: ["heart", "circle"] }),
          (tail + 0.4) * 1000
        );
      }
    }, delay);
  });

  if (heartsBtn) {
    heartsBtn.addEventListener("click", () => {
      Confetti.fromEl(heartsBtn, { count: 80, power: 820, size: 14, shapes: ["heart"] });
      heartsBtn.textContent = "Sent ♥ (again?)";
    });
  }
  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reducedMotion() ? "auto" : "smooth" });
    });
  }
}


/* ============================================================
   THE MUSIC PLAYER
   ============================================================ */
function initMusic() {
  const audio   = $("#bgm");
  const player  = $("#musicPlayer");
  const toggle  = $("#musicToggle");
  const prevBtn = $("#musicPrev");
  const nextBtn = $("#musicNext");
  const expand  = $("#musicExpand");
  const panel   = $("#musicPanel");
  const titleEl = $("#musicTitle");
  const countEl = $("#musicCount");
  const seek    = $("#seek");
  const timeEl  = $("#musicTime");
  const durEl   = $("#musicDur");
  const volume  = $("#volume");
  const note    = $("#musicNote");
  if (!audio || !toggle) return;

  const M = CONFIG.music || {};

  const tracks = (Array.isArray(M.tracks) && M.tracks.length)
    ? M.tracks.slice()
    : (M.src ? [{ title: M.title || "Birthday song", src: M.src }] : []);

  /* The dedicated song from the final surprise rides along at the
     end of the playlist, so next/previous can reach it too. */
  const dedication = CONFIG.finale && CONFIG.finale.song;
  if (dedication && dedication.src) {
    tracks.push({
      title: dedication.title,
      src: dedication.src,
      startAt: dedication.startAt,
      dedication: true
    });
  }

  const vol = M.volume != null ? M.volume : 0.55;
  audio.volume = vol;
  if (volume) volume.value = Math.round(vol * 100);

  const missing = new Set();
  let current = 0;
  let seeking = false;
  let wasPlaying = false;
  let autostarted = false;

  /* Where the current song should begin. Held until it is actually
     applied: at loadedmetadata the duration is sometimes not known
     yet, and dropping it then would silently ignore startAt. */
  let pendingStart = 0;
  const startOf = (i) => {
    const v = Number(tracks[i] && tracks[i].startAt) || 0;
    return v > 0 ? v : 0;
  };

  function noSongs() {
    player && player.classList.remove("is-playing");
    toggle.setAttribute("aria-pressed", "false");
    toggle.disabled = true;
    if (titleEl) titleEl.textContent = "No song added yet";
    if (countEl) countEl.hidden = true;
    if (prevBtn) prevBtn.hidden = true;
    if (nextBtn) nextBtn.hidden = true;
    if (note) {
      note.innerHTML = "Drop your mp3s into <code>assets/music/</code> and list them in " +
                       "<code>CONFIG.music.tracks</code> in <code>script.js</code>.";
    }
  }

  function paint() {
    const playing = !audio.paused;
    if (player) player.classList.toggle("is-playing", playing);
    toggle.setAttribute("aria-pressed", playing ? "true" : "false");
    toggle.setAttribute("aria-label", playing ? "Pause the music" : "Play the music");
    if (titleEl) titleEl.textContent = (tracks[current] && tracks[current].title) || "";
    if (countEl) {
      countEl.hidden = tracks.length < 2;
      countEl.textContent = (current + 1) + " / " + tracks.length;
    }
    if (prevBtn) prevBtn.hidden = tracks.length < 2;
    if (nextBtn) nextBtn.hidden = tracks.length < 2;
    if (Music.onChange) Music.onChange();
  }

  function play() {
    const attempt = audio.play();
    if (attempt && attempt.catch) attempt.catch(() => {});
  }

  function load(i, andPlay) {
    current = (i + tracks.length) % tracks.length;
    pendingStart = startOf(current);
    audio.src = tracks[current].src;
    audio.load();
    if (seek) seek.value = 0;
    if (timeEl) timeEl.textContent = "0:00";
    if (durEl) durEl.textContent = "0:00";
    paint();
    if (andPlay) play();
  }

  function step(dir, andPlay) {
    for (let n = 1; n <= tracks.length; n++) {
      const i = (current + dir * n + tracks.length * n) % tracks.length;
      if (!missing.has(i)) { load(i, andPlay); return; }
    }
    noSongs();
  }

  if (!tracks.length) { noSongs(); return; }

  audio.addEventListener("error", () => {
    missing.add(current);
    if (missing.size >= tracks.length) { noSongs(); return; }
    step(1, wasPlaying);
  });

  function applyPendingStart() {
    if (pendingStart <= 0) return;
    if (!isFinite(audio.duration) || audio.duration <= 0) return;   // try again later
    if (pendingStart < audio.duration - 1) {
      audio.currentTime = pendingStart;
      if (timeEl) timeEl.textContent = formatTime(pendingStart);
      if (seek) seek.value = (pendingStart / audio.duration) * 100;
    }
    pendingStart = 0;
  }

  audio.addEventListener("loadedmetadata", () => {
    missing.delete(current);
    if (durEl) durEl.textContent = formatTime(audio.duration);
    applyPendingStart();
    paint();
  });
  audio.addEventListener("durationchange", applyPendingStart);
  audio.addEventListener("canplay", applyPendingStart);

  audio.addEventListener("timeupdate", () => {
    if (seeking || !audio.duration) return;
    if (seek) seek.value = (audio.currentTime / audio.duration) * 100;
    if (timeEl) timeEl.textContent = formatTime(audio.currentTime);
  });

  audio.addEventListener("ended", () => {
    if (tracks.length === 1) { load(current, true); return; }
    step(1, true);
  });

  ["play", "pause"].forEach((evt) => audio.addEventListener(evt, paint));

  toggle.addEventListener("click", () => {
    if (audio.paused) play(); else audio.pause();
    wasPlaying = !audio.paused;
  });
  if (prevBtn) prevBtn.addEventListener("click", () => step(-1, !audio.paused));
  if (nextBtn) nextBtn.addEventListener("click", () => step(1, !audio.paused));

  if (expand && panel) {
    expand.addEventListener("click", () => {
      const open = panel.hidden;
      panel.hidden = !open;
      expand.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  if (seek) {
    seek.addEventListener("input", () => { seeking = true; });
    seek.addEventListener("change", () => {
      if (audio.duration) audio.currentTime = (seek.value / 100) * audio.duration;
      seeking = false;
    });
  }
  if (volume) {
    volume.addEventListener("input", () => {
      audio.volume = clamp(volume.value / 100, 0, 1);
    });
  }

  /* Let the rest of the page drive the player, so there is only
     ever one audio element playing. */
  Music.jumpTo = (src) => {
    const i = tracks.findIndex((t) => t.src === src);
    if (i < 0 || missing.has(i)) return false;
    if (i === current && !audio.paused) { audio.pause(); return true; }
    if (i === current) { play(); return true; }
    load(i, true);
    return true;
  };
  Music.isPlaying = (src) => {
    const i = tracks.findIndex((t) => t.src === src);
    return i >= 0 && i === current && !audio.paused;
  };
  Music.isMissing = (src) => {
    const i = tracks.findIndex((t) => t.src === src);
    return i < 0 || missing.has(i);
  };
  Music.autostart = () => {
    if (!M.autoplay || autostarted) return;
    autostarted = true;
    if (missing.size >= tracks.length) return;
    if (!audio.paused) return;
    play();
  };

  load(0, false);
}


/* ============================================================
   LIVE LYRICS
   Reads timed lines and highlights them against the music.

   A song's lines can be either:
     - LRC text, the format every lyrics tool exports:
         "[00:12.40]first line\n[00:16.10]second line"
     - or a plain array: [{ t: 12.4, text: "first line" }, ...]
       where `t` is seconds from the start of the song.

   They come from lyrics.js (written by lyrics-timer.html), keyed
   by the audio filename, or from a `lyrics` entry on the track.
   ============================================================ */
const LRC_STAMP = /\[(\d{1,3}):(\d{1,2})(?:[.:](\d{1,3}))?\]/g;

function parseLyrics(input) {
  if (!input) return [];

  if (Array.isArray(input)) {
    return input
      .filter((l) => l && typeof l.t === "number")
      .map((l) => ({ t: l.t, text: String(l.text == null ? "" : l.text) }))
      .sort((a, b) => a.t - b.t);
  }

  const out = [];
  String(input).split(/\r?\n/).forEach((raw) => {
    LRC_STAMP.lastIndex = 0;
    const stamps = [];
    let m;
    while ((m = LRC_STAMP.exec(raw)) !== null) {
      const frac = m[3] ? Number("0." + m[3]) : 0;
      stamps.push(Number(m[1]) * 60 + Number(m[2]) + frac);
    }
    if (!stamps.length) return;                 // [ar:] / [ti:] and the like
    const text = raw.replace(LRC_STAMP, "").trim();
    stamps.forEach((t) => out.push({ t: t, text: text }));
  });
  return out.sort((a, b) => a.t - b.t);
}

function initLyrics() {
  const pane   = $("#lyricsPane");
  const list   = $("#lyricsList");
  const title  = $("#lyricsTitle");
  const toggle = $("#lyricsToggle");
  const closeB = $("#lyricsClose");
  const audio  = $("#bgm");
  if (!pane || !audio || !toggle || !list) return;

  let lines = [];
  let nodes = [];
  let at = -1;
  let open = false;
  let lastSrc = null;
  let userClosed = false;

  /* Lyrics can come from two places: a `lyrics` entry on the song
     in CONFIG, or lyrics.js sitting next to this file, keyed by the
     audio filename. The separate file wins, so the timer tool can
     drop one in without anybody editing CONFIG by hand. */
  function lyricsFor(track, filename) {
    const ext = window.LYRICS;
    if (ext && typeof ext === "object") {
      if (ext[filename]) return ext[filename];
      const bare = filename.replace(/\.[^.]+$/, "");
      if (ext[bare]) return ext[bare];
    }
    return track && track.lyrics;
  }

  function currentTrack() {
    const src = audio.getAttribute("src") || "";
    if (!src) return null;
    const name = decodeURIComponent(src).split("/").pop();
    const pool = (CONFIG.music && CONFIG.music.tracks ? CONFIG.music.tracks.slice() : []);
    if (CONFIG.finale && CONFIG.finale.song) pool.push(CONFIG.finale.song);
    return pool.find((t) => t && t.src &&
      decodeURIComponent(t.src).split("/").pop() === name) || null;
  }

  function render() {
    list.innerHTML = "";
    nodes = [];

    if (!lines.length) {
      const p = document.createElement("p");
      p.className = "lyrics__empty";
      p.innerHTML = "No words for this song yet. Open " +
                    "<code>lyrics-timer.html</code>, paste the lines in and tap " +
                    "the spacebar along with the song &mdash; it writes " +
                    "<code>lyrics.js</code> for you and they show up here, in time.";
      list.appendChild(p);
      return;
    }

    lines.forEach((line, i) => {
      const li = document.createElement("li");
      li.className = "lyrics__line" + (line.text ? "" : " lyrics__line--gap");
      li.textContent = line.text || "• • •";
      li.addEventListener("click", () => {
        audio.currentTime = line.t;
        if (audio.paused) audio.play().catch(() => {});
      });
      list.appendChild(li);
      nodes[i] = li;
    });
  }

  /* Binary search for the last line at or before `time`. */
  function lineAt(time) {
    let lo = 0, hi = lines.length - 1, found = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (lines[mid].t <= time) { found = mid; lo = mid + 1; }
      else hi = mid - 1;
    }
    return found;
  }

  function setOpen(next) {
    open = next;
    pane.hidden = !open;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function sync() {
    if (!lines.length) return;
    const i = lineAt(audio.currentTime);
    if (i === at) return;
    at = i;
    nodes.forEach((n, idx) => {
      n.classList.toggle("is-now", idx === at);
      n.classList.toggle("is-past", idx < at);
    });
    const now = nodes[at];
    if (now && open && !reducedMotion()) {
      now.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function refresh() {
    const src = audio.getAttribute("src") || "";
    if (src === lastSrc) return;
    lastSrc = src;
    at = -1;
    userClosed = false;

    const name = decodeURIComponent(src).split("/").pop();
    const track = currentTrack();
    lines = parseLyrics(lyricsFor(track, name));

    if (title) title.textContent = (track && track.title) || name;
    toggle.hidden = !lines.length;
    render();

    if (!lines.length) { setOpen(false); return; }
    const M = CONFIG.music || {};
    if (M.showLyrics && !audio.paused) setOpen(true);
  }

  toggle.addEventListener("click", () => {
    setOpen(!open);
    if (!open) userClosed = true;
  });
  if (closeB) {
    closeB.addEventListener("click", () => { setOpen(false); userClosed = true; });
  }

  audio.addEventListener("timeupdate", sync);
  audio.addEventListener("loadedmetadata", refresh);
  audio.addEventListener("play", () => {
    refresh();
    const M = CONFIG.music || {};
    if (M.showLyrics && lines.length && !userClosed) setOpen(true);
  });
  Music.onChange = refresh;

  refresh();
}


/* ============================================================
   THE DEDICATED SONG CARD, inside the final letter
   ============================================================ */
function initDedication() {
  const song = CONFIG.finale && CONFIG.finale.song;
  const card = $("#dedication");
  if (!card || !song || !song.src) return;

  const row      = $("#dedicationRow");
  const playBtn  = $("#dedicationPlay");
  const labelEl  = $("#dedicationLabel");
  const titleEl  = $("#dedicationTitle");
  const artistEl = $("#dedicationArtist");
  const noteEl   = $("#dedicationNote");
  const missEl   = $("#dedicationMissing");

  if (titleEl)  titleEl.textContent  = song.title || "A song for you";
  if (artistEl) { artistEl.textContent = song.artist || ""; artistEl.hidden = !song.artist; }
  if (noteEl)   { noteEl.textContent = song.note || ""; noteEl.hidden = !song.note; }
  card.hidden = false;
  if (row) row.hidden = false;

  function paint() {
    const gone = Music.isMissing(song.src);
    const playing = Music.isPlaying(song.src);
    card.classList.toggle("is-spinning", playing);
    if (playBtn) {
      playBtn.setAttribute("aria-pressed", String(playing));
      playBtn.disabled = gone;
    }
    if (labelEl) {
      labelEl.textContent = gone
        ? "The song file has not been added yet"
        : (playing ? "Pause the song" : "Play the song");
    }
    if (missEl) {
      missEl.hidden = !gone;
      if (gone) {
        missEl.innerHTML = "The file is not there yet — drop it in as <code>" +
                           escapeHtml(song.src) + "</code> and it will play from here.";
      }
    }
  }

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      Music.jumpTo(song.src);
      paint();
    });
  }

  /* repaint whenever the player changes song or state */
  const prev = Music.onChange;
  Music.onChange = () => {
    if (prev) prev();
    paint();
  };
  paint();
}


/* ============================================================
   THE TROPHY SHELF
   ============================================================ */
function initTrophies() {
  const btn = $("#trophyBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const list = CONFIG.achievements || [];
    Modal.open(
      '<div class="trophies">' +
        '<h2 class="trophies__title" id="modalTitle">What you have found</h2>' +
        '<div class="trophies__list"></div>' +
        '<p class="trophies__score"></p>' +
      '</div>'
    );
    const box = $("#modalBody");
    const host = $(".trophies__list", box);
    let got = 0;

    list.forEach((a) => {
      const has = Achievements.has(a.id);
      if (has) got++;
      const row = document.createElement("div");
      row.className = "trophy" + (has ? " is-got" : "");
      row.innerHTML = '<span class="trophies__icon"></span>' +
                      '<div><p class="trophies__name"></p>' +
                      '<p class="trophies__desc"></p></div>';
      $(".trophies__icon", row).textContent = has ? a.icon : "\u{1F512}";
      $(".trophies__name", row).textContent = has ? a.name : "Still locked";
      $(".trophies__desc", row).textContent = has ? a.desc : "Keep poking around.";
      host.appendChild(row);
    });

    const score = $(".trophies__score", box);
    score.textContent = got === list.length
      ? "All of them. Nothing left hidden."
      : got + " of " + list.length + " found so far.";
  });
}
