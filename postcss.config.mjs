/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  "files.associations": {
    "*.css": "postcss",
  },
};

export default config;
