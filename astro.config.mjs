// @ts-check
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cosmoscout.github.io',
  integrations: [
    icon(),
    starlight({
      title: 'CosmoScout VR',
      logo: {
        src: './src/assets/cosmoscout.svg',
        alt: 'CosmoScout VR Logo',
      },
      editLink: {
        baseUrl: 'https://github.com/cosmoscout/cosmoscout.github.io/edit/main/',
      },
      social: {
        github: 'https://github.com/cosmoscout/cosmoscout-vr',
      },
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'Getting Involved',
          autogenerate: { directory: 'getting-involved' },
        },
        {
          label: 'Plugins',
          autogenerate: { directory: 'plugins' },
        },
        {
          label: 'Issue Tracker 🗗',
          link: 'https://github.com/cosmoscout/cosmoscout-vr/issues',
          attrs: { target: '_blank' },
        },
        {
          label: 'Changelog 🗗',
          link: 'https://github.com/cosmoscout/cosmoscout-vr/blob/main/docs/changelog.md',
          attrs: { target: '_blank' },
        },
        {
          label: 'Code of Conduct 🗗',
          link: 'https://github.com/cosmoscout/cosmoscout-vr/blob/main/docs/code_of_conduct.md',
          attrs: { target: '_blank' },
        },
      ],
      lastUpdated: true,
      customCss: ['./src/styles/custom.css'],
      components: {
        Footer: './src/components/Footer.astro',
        Hero: './src/components/Hero.astro',
      },
    }),
  ],
});
