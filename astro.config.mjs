// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://banaxi-tech.github.io',
  integrations: [
    starlight({
      title: 'Banaxi Tech',
      description: 'Banaxi Tech projects and documentation.',
      logo: { src: './src/assets/logo.svg', replacesTitle: false },
      favicon: '/favicon.svg',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Banaxi-Tech' },
      ],
      editLink: {
        baseUrl: 'https://github.com/Banaxi-Tech/banaxi-tech.github.io/edit/main/',
      },
      lastUpdated: true,
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'W32Eleven',
          items: [
            { label: 'Introduction', slug: 'w32eleven' },
            { label: 'Requirements', slug: 'w32eleven/requirements' },
            { label: 'Building', slug: 'w32eleven/building' },
            { label: 'Making the boot media', slug: 'w32eleven/boot-media' },
            { label: 'Installing Windows', slug: 'w32eleven/installing' },
            { label: 'Booting without the DVD', slug: 'w32eleven/boot-loader' },
            { label: 'Running in QEMU', slug: 'w32eleven/qemu' },
            { label: 'Troubleshooting', slug: 'w32eleven/troubleshooting' },
          ],
        },
        {
          label: 'W32Eleven reference',
          items: [
            { label: 'Slim settings', slug: 'w32eleven/slim-settings' },
            { label: 'Patch tool', slug: 'w32eleven/patch-tool' },
            { label: 'Emulator options', slug: 'w32eleven/emulator-options' },
            { label: 'Real hardware', slug: 'w32eleven/real-hardware' },
          ],
        },
        {
          label: 'W32Eleven internals',
          items: [
            { label: 'How it works', slug: 'w32eleven/how-it-works' },
            { label: 'Performance', slug: 'w32eleven/performance' },
            { label: 'Development', slug: 'w32eleven/development' },
            { label: 'License & legal', slug: 'w32eleven/license' },
          ],
        },
      ],
    }),
  ],
});
