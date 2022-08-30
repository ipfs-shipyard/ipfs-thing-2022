
// force save all colors
const colors = require('./node_modules/tailwindcss/colors');
const colorSaveList = [];
const colorExtend = {};
const deprecatedColors = ['lightBlue', 'trueGray', 'warmGray', 'coolGray', 'blueGray'];

for (const key in colors) {
  const notDeprecated = !deprecatedColors.includes(key)
  if (notDeprecated) {
    colorExtend[key] = colors[key];
  }

  [100, 200, 300, 400, 500, 600, 700, 800, 900].forEach(n => {
    colorSaveList.push(`text-${key}-${n}`);
    colorSaveList.push(`bg-${key}-${n}`);
  });
}


// tailwind config
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: colorSaveList,
  theme: {
    extend: {
      colors: colorExtend,
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography')
  ],
}
