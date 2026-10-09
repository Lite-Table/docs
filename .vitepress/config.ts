import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LiteTable',
  description: 'High-performance, lightweight database access across PHP, Go, .NET, and Python',
  base: '/docs/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'PHP', link: '/php/database' },
      { text: 'Go', link: '/go/database' },
      { text: '.NET', link: '/dotnet/database' },
      { text: 'Python', link: '/python/database' }
    ],
    sidebar: {
      '/php/': [
        {
          text: 'LiteTable (PHP)',
          items: [
            { text: 'Database', link: '/php/database' },
            { text: 'Table', link: '/php/table' },
            { text: 'Query', link: '/php/query' }
          ]
        }
      ],
      '/go/': [
        {
          text: 'LiteTable (Go)',
          items: [
            { text: 'Database', link: '/go/database' },
            { text: 'Table', link: '/go/table' },
            { text: 'Query', link: '/go/query' }
          ]
        }
      ],
      '/dotnet/': [
        {
          text: 'LiteTable (.NET)',
          items: [
            { text: 'Database', link: '/dotnet/database' },
            { text: 'Table', link: '/dotnet/table' },
            { text: 'Query', link: '/dotnet/query' }
          ]
        }
      ],
      '/python/': [
        {
          text: 'LiteTable (Python)',
          items: [
            { text: 'Database', link: '/python/database' },
            { text: 'Table', link: '/python/table' },
            { text: 'Query', link: '/python/query' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LiteTable' }
    ]
  }
})
