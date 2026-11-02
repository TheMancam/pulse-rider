// Copies three.js and the fonts out of node_modules into www/ so the game runs fully offline in the APK.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const www = path.join(root, 'www');
const nm = path.join(root, 'node_modules');

function copy(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
  console.log('copied', path.relative(root, to));
}

copy(path.join(nm, 'three/build/three.min.js'), path.join(www, 'three.min.js'));

const fonts = [
  ['@fontsource/monoton/files/monoton-latin-400-normal.woff2', 'monoton-latin-400-normal.woff2'],
  ['@fontsource/chakra-petch/files/chakra-petch-latin-500-normal.woff2', 'chakra-petch-latin-500-normal.woff2'],
  ['@fontsource/chakra-petch/files/chakra-petch-latin-600-normal.woff2', 'chakra-petch-latin-600-normal.woff2'],
  ['@fontsource/chakra-petch/files/chakra-petch-latin-700-normal.woff2', 'chakra-petch-latin-700-normal.woff2'],
];
for (const [from, name] of fonts) copy(path.join(nm, from), path.join(www, 'fonts', name));
