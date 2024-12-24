import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/align-ui/',
  publicPath: '/align-ui/',
  exportStatic: {},
  themeConfig: {
    name: 'AlignUI',
    logo: 'https://rushable-public.s3.amazonaws.com/biz-site/truecost-analyzer-logo/Rushable.png',
    showLineNum: true,
  },
  favicons: [
    'https://rushable-public.s3.amazonaws.com/biz-site/truecost-analyzer-logo/Rushable.png',
  ],
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
  sassLoader: {},
  links: [
    { href: 'https://rsms.me/', rel: 'preconnect' },
    { href: 'https://rsms.me/inter/inter.css', rel: 'stylesheet' },
  ],
});
