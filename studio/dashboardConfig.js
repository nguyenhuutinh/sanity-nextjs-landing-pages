export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb7f7c54a19ce2494e11f55',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-giqobyev',
                  apiId: 'a8efad18-e3bb-4836-a1a3-bd22df5679a2'
                },
                {
                  buildHookId: '5fb7f7c52d157a20d914236a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-oix17kea',
                  apiId: '3cd25132-fb14-4e89-93b2-ffca97f69bd3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nguyenhuutinh/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-oix17kea.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
