const base = process.env.GH ? '/vuepress/' : '/'

module.exports = {
  title: 'DEVNAGRI',
  description: 'We Celebrate INDIAN Languages',
  dest: 'vuepress',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'FourtekIT/devnagri-docs',
    editLinks: true,
    logo: '/logo-dark.png',
    docsDir: 'docs',
    nav: [
      {
        text: 'Home',
        link: 'http://www.devnagri.com',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            'create-project',
            'translator',
          ]
        }
      ]
    }
  }
}
