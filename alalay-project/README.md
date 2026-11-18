# ALALAY – Frontend Prototype

Senior Citizen and PWD Discount Monitoring and Management System (frontend only, mock data).

## Run it
Double-click `index.html` (needs internet once for React and the Public Sans font), or serve the folder:

    npx serve .

## Files
- `index.html` – page shell and script/style links
- `css/styles.css` – all styling (colors are CSS variables at the top of the file)
- `js/app.jsx` – readable source: every page, component and the mock data
- `js/app.js` – plain-JavaScript build of `app.jsx` (this is what `index.html` loads)
- `assets/` – `logo.png`, `login-photo.jpg`

## Editing
Change `js/app.jsx`, then rebuild `js/app.js`:

    npm i @babel/core @babel/preset-react
    npx babel js/app.jsx --presets=@babel/preset-react -o js/app.js

(Use the classic runtime: `--presets=[["@babel/preset-react",{"runtime":"classic"}]]` in a `.babelrc` if your Babel version defaults to the automatic runtime.)

## Notes
Prototype only: no database, backend or real authentication. Data resets on refresh (only the theme and remembered username are stored).
