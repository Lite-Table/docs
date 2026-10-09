import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LiteTable',
  description: 'High-performance, lightweight database access across PHP, Go, .NET, and Python',
  base: '/docs/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'PHP', link: '/packages/php/database' },
      { text: 'Go', link: '/packages/go/database' },
      { text: '.NET', link: '/packages/dotnet/database' },
      { text: 'Python', link: '/packages/python/database' }
    ],
    sidebar: {
      '/packages/php/': [
        {
          text: 'LiteTable (PHP)',
          items: [
            { text: 'Database', link: '/packages/php/database' },
            { text: 'Table', link: '/packages/php/table' },
            { text: 'Query', link: '/packages/php/query' }
          ]
        }
      ],
      '/packages/go/': [
        {
          text: 'LiteTable (Go)',
          items: [
            { text: 'Database', link: '/packages/go/database' },
            { text: 'Table', link: '/packages/go/table' },
            { text: 'Query', link: '/packages/go/query' }
          ]
        }
      ],
      '/packages/dotnet/': [
        {
          text: 'LiteTable (.NET)',
          items: [
            { text: 'Database', link: '/packages/dotnet/database' },
            { text: 'Table', link: '/packages/dotnet/table' },
            { text: 'Query', link: '/packages/dotnet/query' }
          ]
        }
      ],
      '/packages/python/': [
        {
          text: 'LiteTable (Python)',
          items: [
            { text: 'Database', link: '/packages/python/database' },
            { text: 'Table', link: '/packages/python/table' },
            { text: 'Query', link: '/packages/python/query' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LiteTable' }
    ]
  }
})
