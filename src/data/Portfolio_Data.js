import dodgeGif from '../images/DTB.gif'
import dodgeImg from '../images/dodge.png'

import animeGif from '../images/AnimeSearch.gif'
import animeImg from '../images/anime_search.jpg'

import blogGif from '../images/MyBlog.gif'
import blogImg from '../images/myblog.png'

import storeGif from '../images/StoreSearch.gif'
import storeImg from '../images/store.png'

// import nextGif from '../images/NextSearch.gif'
import nextimg from '../images/Next.png'

const data_list = [
    {
      'name': 'Dodge The Block',
      'summary': `
        ⋆ Made significant contributions to the successful completion of the project by developing complex frontend game features.
        ⋆ Used Vanilla JavaScript to create a dodge game with a shop that utilized DOM manipulation.
      `,
      'gif': dodgeGif,
      'image': dodgeImg,
      'link': {
        'site': 'https://dodge-the-block.netlify.app',
        'frontend': 'https://github.com/TypeLuis/Dodge-The-Block',
        'backend': ''
      },
      'skills': {
        'frontend': ['Javascript', 'HTML', 'CSS'],
        'backend': [],
        'libraries': [],
      }
    },
  
    {
      'name': 'Nextjs Store',
      'summary': `
        ⋆ Developed a Full-Stack store web application using Next.js \n
        ⋆ Implemented an intersection observer which allowed for different blocks of code to be executed when a user scrolled. This improved the user experience by reducing the amount of time required to load new content.\n
        ⋆ Developed component-scoped styles using CSS module and SASS to create consistent, reusable code. \n
        ⋆ Optimized front-end performance by reducing file size and implementing caching strategies. \n
      
      `,
      // 'gif': storeGif,
      'image': nextimg,
      'link': {
        'site': 'https://shopify-nextjs-app.netlify.app',
        'frontend': 'https://github.com/TypeLuis/Nextjs-Shopify-Project',
        'backend': ''
      },
      'skills': {
        'frontend': ['Javascript', 'HTML', 'CSS', 'SCSS'],
        'backend': [],
        'libraries': ['Next.js', 'MUI'],
      }
    },
  
    {
      'name': 'MY BLOG',
      'summary': `
        ⋆ Developed a blog page that allowed users to view and interact with the blog page and YouTube videos.
        ⋆ Worked with a team of 3 to develop the blog page and ensure that it met all the requirements.
        ⋆ Accomplished increased task inefficiency by 40% through the development of the blog page.
        ⋆ Developed a dynamic and responsive web application using vanilla JavaScript, HTML, and CSS
        ⋆ Implemented a PostgreSQL database to store information for the web application and node.js to establish connection between the frontend and backend.
        ⋆ Utilized Express.Js on the backend to develop REST API routes for CRUD operations which interact with Postgres database.
      `,
      'gif': blogGif,
      'image': blogImg,
      'link': {
        'site': 'https://my-page-blog.netlify.app',
        'frontend': 'https://github.com/TypeLuis/unit-two-frontend',
        'backend': 'https://github.com/TypeLuis/unit-two-backend'
      },
      'skills': {
        'frontend': ['Javascript', 'HTML', 'CSS'],
        'backend': ['PostgreSQL', 'Node.js'],
        'libraries': ['Express.js'],
      }
    },
  
    {
      'name': 'ANIME SEARCH',
      'summary': "Anime Search is a full stack web application that queries anime shows from a third party api. A user can add shows to their watched and favorites list and download images of their show. The chart page displays a graph of all user's favorite shows.",
      'gif': animeGif,
      'image': animeImg,
      'link': {
        'site': 'https://anime-query.netlify.app',
        'frontend': 'https://github.com/TypeLuis/unit-3-solo-projects-frontend',
        'backend': 'https://github.com/TypeLuis/Unit-3-Solo-Projects-Backend'
      },
      'skills': {
        'frontend': ['Javascript', 'HTML', 'CSS'],
        'backend': ['PostgreSQL', 'Node.js'],
        'libraries': ['Express.js', 'React.js', 'Axios', 'ChartJs', 'Dotenv'],
      }
    },
  
    {
      'name': 'STORE SEARCH',
      'summary': "Store Search is a full stack web application that  scrapes websites like Ebay and NewEgg for products With Beautiful Soup. A user can add Items to their cart and Checkout their Items using Stripe. Different Themes can be switched depending on user's preference.",
      'gif': storeGif,
      'image': storeImg,
      'link': {
        'site': 'https://store-search.netlify.app',
        'frontend': 'https://github.com/TypeLuis/Unit-4-project-frontend',
        'backend': 'https://github.com/TypeLuis/Unit-4-project-backend'
      },
      'skills': {
        'frontend': ['Javascript', 'HTML', 'CSS', 'SCSS'],
        'backend': ['PostgreSQL', 'Python'],
        'libraries': ['Flask', 'React.js', 'Axios', 'Stripe', 'Beautiful Soup', 'Dotenv'],
      }
    },
  
  
]

export default data_list