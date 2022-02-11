module.exports = {
  title: 'Just some random notes',
  description: '',
  theme: 'casper',
  base: '/petterivaarala.gitlab.io/',
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  },
  themeConfig: {
    navbar: true,
    nav: [
      { text: 'home', link: '/' },
      { text: 'about', link: '/about/' },
    ],
    footer: [
      {
        text: "Latest Posts",
        link: "/posts"
      },
      {
        text: "Tags",
        link: "/tags"
      },
      {
        text: "Categories",
        link: "/category"
      }
    ],
    social: {
      github: "https://github.com/PetteriVaarala",
      linkedin: "https://www.linkedin.com/in/petterivaarala/"
    },
    defaultAuthor: {
      link: "https://petteri.vaara.la",
      name: "Petteri Vaarala"
    },
    search: true
  }
}
