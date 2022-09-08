
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
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
      }
    },
    fontFamily: {
      'exo': ['"Exo"', 'sans-serif'],
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography')
  ],
}
