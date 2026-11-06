# A Day Made Just For You ♡

An interactive birthday website — HTML, CSS and vanilla JavaScript. No frameworks,
no build step, no dependencies. Double-click `index.html` and it runs.

```
birthday-website/
├─ index.html      the page structure
├─ style.css       all the styling and animation
├─ script.js       all the behaviour — and ALL the text you'll want to change
└─ assets/
   ├─ images/      your photos go here (photo-1.jpg … photo-6.jpg)
   └─ music/       your song goes here (birthday-song.mp3)
```

---

## The 5-minute customisation

Open **`script.js`**. Everything personal lives in the `CONFIG` object at the very
top — you never need to touch the code below it.

| What you want to change | Where in `CONFIG` |
|---|---|
| His name | `friendName` |
| The opening candle scene | `intro` |
| How you sign off | `yourName` |
| Message when the gift box opens | `welcomeMessage` |
| The "open when…" letters | `letters` |
| Scrapbook photos, captions, notes | `scrapbook` |
| Messages after blowing out the candles | `wishes` |
| Quiz questions and answers | `quiz` |
| Compliment machine lines | `compliments` |
| Scratch-card prizes | `scratchCards` |
| Mini-game difficulty | `game.target`, `game.seconds` |
| The forbidden button | `forbidden` |
| Achievement names | `achievements` |
| The final letter | `finale` |
| Songs and volume | `music.tracks` |

Letters, photos, compliments and quiz questions are plain lists — add or remove
entries freely and the layout adjusts itself.

---

## Adding your photos

Drop six portrait-ish pictures into `assets/images/` named `photo-1.jpg` through
`photo-6.jpg`. That's it.

Until you do, the scrapbook shows pastel placeholders, so **the site never looks
broken** while you're still gathering pictures.

Want different filenames, more photos, or `.png` / `.webp`? Edit the `scrapbook`
list in `script.js` — each entry's `src` is just a path.

## Adding music

The floating player in the corner plays background songs while he explores.

**The dedicated song from the final surprise is already in it** — it is added to
the playlist automatically, so you never list it twice. With just that one song
the player simply repeats it, and the skip buttons stay hidden.

**To add more songs**, drop the files into `assets/music/` and list them in
`CONFIG.music.tracks` in `script.js`:

```js
music: {
  volume: 0.55,
  tracks: [
    { title: "Whatever it is called", src: "assets/music/song-2.mp3" },
    { title: "And another",           src: "assets/music/song-3.mp3" }
  ]
}
```

Commas between entries, none after the last one. The filename has to match
exactly, capital letters included. The moment there is more than one song, the
player grows **next** and **previous** buttons and a "1 of 3" counter on its own.

### How the player behaves

- **The music starts by itself** as soon as he blows out the candles. That first
  click is what lets the browser allow it — a page nobody has touched yet is
  never permitted to make noise, so true autoplay-on-load is impossible.
  Set `autoplay: false` in `CONFIG.music` for silence until he presses play.
- **It starts 1:00 in**, skipping the instrumental intro, via `startAt: 60` on
  the song (seconds). That applies every time it plays, loops included. Put a
  `startAt` on any track in `CONFIG.music.tracks` to do the same there.
- If his browser or tab is muted, nothing plays and the player simply waits —
  no site can get around that.
- When a song ends the next one starts, and the last one wraps back to the first.
- With only one song in the list, it just repeats and the skip buttons stay hidden.
- **Previous** restarts the current song if it is more than 3 seconds in, and
  only jumps back a song if you press it again — the usual record-player rule.
- A song whose file is missing is **skipped over**, and the rest still play. If
  none of them are there, the player quietly says so instead of breaking.
- `.wav` and `.m4a` work too. Just use the real file extension in `src`.

---

## What's in the experience

0. **Blow out the candles** — the site opens on a lit cake. Tap it, press the
   button, or actually blow into the microphone. Only then does the gift turn up.
1. **Welcome** — a CSS 3D gift box that opens, with confetti.
2. **Your Little Universe** — four destination cards.
3. **Secret Letters** — five envelopes that open to messages.
4. **Memory Scrapbook** — polaroids, tape, handwritten notes; tap a photo to enlarge.
5. **Birthday Cake** — click to light the candles, then make a wish.
6. **Mini Adventure** — a quiz, a compliment machine, a real scratch card, a
   playable "catch the falling hearts" game (keeps a high score), and a button
   that runs away from the cursor before letting itself be pressed.
7. **Final Surprise** — a sealed envelope that opens into the closing letter.

Plus a floating music player, **twelve achievements** that unlock as he explores
(saved between visits, shown in the trophy tray), and a Konami-code easter egg.

## Notes

- Works offline. The only network request is Google Fonts; without it the page
  falls back to Georgia / Segoe UI and still looks fine.
- Responsive from 320px up. Tested at 390px (phone) and 1280px (desktop).
- Respects `prefers-reduced-motion` — animations are dropped for anyone who's
  asked their system to reduce motion, and all content stays reachable.
- Keyboard accessible throughout; `Esc` closes any open letter or photo.

## Sending it to him

It's just static files — any of these work:

- Zip the `birthday-website` folder and send it; he opens `index.html`.
- Drag the folder onto [netlify.com/drop](https://app.netlify.com/drop) for an
  instant public link.
- GitHub Pages, Vercel, Cloudflare Pages — all fine, no build command needed.

---

## The microphone (optional)

The opening cake can be blown out for real, using the mic. It is strictly a
bonus — the **Blow them out** button and tapping the cake always work, and the
mic button only appears when the browser will actually allow a microphone.

Opened straight off the disk (`file://`), Chrome refuses microphone access, so
the button either stays hidden or politely gives up on the first try. If you
want the real thing to work, serve the folder instead:

```
cd birthday-website
python -m http.server 8000
```

then open `http://localhost:8000`. Netlify, Vercel and GitHub Pages are all
HTTPS, so it works there too.

## Achievements

Twelve of them, listed in `CONFIG.achievements`. They unlock as he explores and
are saved in `localStorage`, so they survive closing the tab.

Do **not** rename an `id` after he has already started — the saved list is keyed
by `id`, and renaming one makes that achievement look locked again. Changing a
`name`, `desc` or `icon` is completely safe.

To wipe the saved progress (handy while you are testing), run this in the
browser console:

```js
localStorage.removeItem("birthday-achievements");
localStorage.removeItem("bd-catch-best");
```

---

## The dedicated song (in the Final Surprise)

The closing letter ends with a little record — one song picked for him, with
whatever you want to say about why.

It does **not** have its own audio. Pressing it hands the track to the floating
player, so two songs can never play over each other, and the song joins the end
of the playlist where next/previous can reach it too.

**It is already set up** with the song you added. The config lives in
`CONFIG.finale.song` in `script.js`:

```js
song: {
  title:  "Si Te La Encuentras Por Ahí",
  artist: "Feid",
  src:    "assets/music/Feid - Si Te La Encuentras Por Ahí.mp3",
  note: "Say why you picked this one. This is the bit he will actually read."
}
```

To swap the song later: drop the new file in, and change `src` to match the
filename **exactly** — spaces, accents and capitals included.

The `note` is the whole point of the card — write it like a message, not a
caption. It renders in the handwriting font.

**Do not want one?** Delete the whole `song: { ... }` block and the card
disappears. Nothing else needs changing.

If the file is not there yet, the card still shows but the record is greyed out
and it tells you which filename it is looking for.

### Streaming it instead of using a file

**Not in use any more** — there is a real audio file now, which is better in
every way: it works offline, it works when you double-click `index.html`, it
plays through the floating player, and nobody can take it down.

If you ever need it back (no file, or a song you cannot download), add an
`embed` block inside `song`:

```js
embed: {
  url:     "https://audiomack.com/embed/ARTIST/song/SLUG",
  height:  252,
  link:    "https://audiomack.com/ARTIST/song/SLUG",
  service: "Audiomack"
}
```

When `embed` is present, the record and `src` are ignored, so the two can never
play over each other. Spotify is `https://open.spotify.com/embed/track/ID`,
YouTube is `https://www.youtube.com/embed/ID`.

**One catch, and it is why a local file is better:** opened straight off the
disk, a browser *blocks* a streaming embed outright
(`net::ERR_BLOCKED_BY_RESPONSE`). The card notices and shows a link instead of a
broken box, and the player works normally once the site is hosted — but a local
file just always works.
