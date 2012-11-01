# Webmbed

`Webmbed` detects the existence of a webm video appended to the end of a JPG
(regular EXIF-format) with the special sentinel separator `webembed` and pulls
out the video as Blob, which is then playable in `<video>` elements.

Image formats ignore junk after the end of their file format, so the JPG image
with an embedded (well, appended) video remains valid.

Making such files is easy:

```sh
$ echo -n "webmbed" > MAGIC
$ cat image.jpg MAGIC video.webm > embedded-video.jpg
```

# Inspiration

The 4chanSounds userscript extracts appended ogg files on images uploaded to
4chan using the same technique, expanded with support for multiple appended
files (and UI/4chan bindings).

# What now?

I'd like build out a similar 4chan userscript from this code, but since short
\<3MB video clips are a lot harder to create and find than audio or GIFs,
I don't think there's much of an audience until somebody creates an easy tool
to cut and edit short clips out of videos (and automatically prepend a valid
JPG so they can be uploaded to 4chan).

Short video clips certainly have advantages over GIF files (sound, full-color,
pausable, better JS API), so if such tooling is becomes available, it'll be
interesting to see if there's a niche for more ephemeral, image board-style
video sharing, as opposed to the longer, more permanent format of Youtube.

