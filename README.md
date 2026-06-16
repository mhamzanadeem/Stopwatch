# Stopwatch

A minimal stopwatch web app built with plain HTML, CSS and JavaScript. Features include Start/Stop/Reset controls, a persistent Dark/Light theme toggle, and a watermark credit.

## Files
- `index.html` — main page
- `style.css` — styles, uses CSS variables and supports light/dark themes
- `script.js` — stopwatch logic and theme persistence

## Features
- Start / Stop / Reset stopwatch
- Dark mode (default) and Light mode toggle
- Theme selection is saved to `localStorage`
- Watermark: "made by muhammad hamza nadeem" displayed at the bottom

## Colors used (default dark)
- Background: `#131619`
- Accent (heading & buttons): `#10B981`
- Text: `#FFFFFF`

## Run locally
You can open `index.html` directly in a browser, or run a simple static server (recommended for consistent behavior):

```bash
# from the project folder
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

## How to use
- Click `Start` to begin the stopwatch
- Click `Stop` to pause
- Click `Reset` to reset to `00 : 00 : 00`
- Use the `Toggle Theme` button (top-right) to switch between Dark and Light modes. Your selection will be saved across page reloads.

## Customization
- To change the dark-mode colors, edit `style.css` variables in the `:root` section:
	- `--bg`, `--card`, `--text`, `--accent`
- Light-theme overrides live in `body[data-theme="light"]`.
- Watermark text is in `index.html` inside the `.watermark` element.

## Development notes
- Theme is applied by setting `data-theme="light"` on the `<body>` element. The JS code initializes the theme from `localStorage` and toggles it on button click.
- `script.js` contains the stopwatch logic and theme handlers.

## License & Credits
Made by Muhammad Hamza Nadeem.

Feel free to modify and improve this project.