// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'PaingChan', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Ecommerce Website With Admin Panel',
          description:
            'This is my First of Big Project for my Sister Online Business',
          imageUrl:
            'https://i.ibb.co/VjTxCHD/wepik-export-202403201212303-V1y.png',
          //link: 'https://example.com',
        },
        {
          title: 'Laravel Filament POS System',
          description:
            'This is my Second of Big Project For my Uncle Bicycle Shop',
          imageUrl:
            'https://i.ibb.co/VjTxCHD/wepik-export-202403201212303-V1y.png',
          //link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of PaingChan',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'paingchan',
    twitter: '@paingchan45',
    facebook: 'paingchan3218',
    instagram: '@paingchan1',
    stackoverflow: '', // example: '1/jeff-atwood'
    website: 'https://paingchan.github.io',
    //email: 'arifulalamszn@gmail.com',
  },
  // resume: {
  //   fileUrl:
  //     'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  // },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'Vue.js',
    'MySQL',
    'Git',
    'PHPUnit',
    'CSS',
    'Tailwind',
    'Linux',
    'AWS Lightsail',
    'Linux VPS'
  ],
  experiences: [
    {
      company: '继电器e购',
      position: 'vuejs 前端',
      from: '2023-09',
      to: '2023-11',
      //companyLink: 'https://example.com',
    },
    {
      company: 'ShinShin Online',
      position: 'Mini E-commerce Website',
      from: '2020-04',
      to: '2020-05',
      //companyLink: 'https://example.com',
    },
     {
      company: 'U Chaw Bicycle Shop',
      position: 'Build a POS Software include Warehouse',
      from: 'Currying',
      //to: '2020-05',
      //companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'HSK 2 and 3',
      body: 'HSK pass certificate',
      year: 'March 2018',
      Score: '300/300',
    },
    {
      name: 'BA BACS50T',
      body: 'CS50T Understanding Technology',
      year: 'December 27, 2022',
      link: 'https://burma.ac/certificates/4c6df6f887c64fcd9f61af64ef6b54f9',
    },
  ],
  educations: [
    {
      institution: '华侨大学 (China)',
      degree: '本科',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Mawlamyine University (Myanmar)',
      degree: 'Bachelor',
      from: '2018',
      to: '2022',
    },
  ],
  publications: [
    {
      title: 'About Me',
      FullName: 'Aung Paing Chan',
      ChineseName: '涂正刚',
      Born: 'Myanmar',
      link: 'https://paingchan.github.com',
      description:
        'Im Paing Chan (涂正刚), a 24-year-old student from Myanmar studying at Huaqiao University in Xiamen, China. Im passionate about computer science and dream of working as a software engineer in a major overseas company. I have skills in web development, particularly in UI/UX design, Laravel, and Vue.js, and I enjoy contributing to open-source projects on GitHub',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/paingchan"
      target="_blank"
      rel="noreferrer"
    >PaingChan</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
