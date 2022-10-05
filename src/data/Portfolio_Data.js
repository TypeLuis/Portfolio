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
        ⋆ Made significant contributions to the successful completion of the project by developing complex frontend game features
        ⋆ Used Vanilla JavaScript to create a dodge game with a shop that utilized DOM manipulation
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
      'name': 'Nextjs Store (In progress)',
      'summary': "Nextjs Store is a full stack web application that utilizes Nextjs. Inspired by 'https://aylabag.com', creating components as close as 1 to 1 as possible",
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
      'summary': "A blog page that displays a user's post and youtube videos that uses the database to manipulate the DOM. Utilizes PostgreSQL and node.js for the backend and vanilla Javascript, HTML, CSS for the frontend. My blog is a blog post that allows a user to perform CRUD operation.",
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