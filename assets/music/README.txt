MUSIC GOES HERE
===============

Drop one audio file in this folder and name it:

  birthday-song.mp3

The floating player in the bottom-right corner will find it.

Using a different name or format? Open script.js and change:

  music: {
    title: "Birthday song",
    src:   "assets/music/birthday-song.mp3",
    volume: 0.55
  }

Notes
-----
* .mp3 is the safest format. .m4a and .ogg also work in most browsers.
* Nothing ever autoplays - the visitor has to press play. That is
  deliberate: browsers block autoplay anyway, and surprise audio is
  rude.
* If no file is present the player politely says so instead of
  throwing an error.
