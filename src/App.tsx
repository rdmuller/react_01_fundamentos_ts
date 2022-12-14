import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';

const posts = [
  {
      id: 1,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/46840910?v=4',
        name: 'Ronald D. Mรผller',
        role: 'System Analyst',
      },
    content: [
      { type: 'paragraph', content: "Fala galeraa ๐" },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐" },
      { type: 'link', content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date('2022-09-03 13:25:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/6643122?v=4',
      name: 'Maik Cabrito',
      role: 'Educator',
    },
  content: [
    { type: 'paragraph', content: "Fala galeraa ๐" },
    { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐" },
    { type: 'link', content: "jane.design/doctorcare" },
  ],
  publishedAt: new Date('2022-09-04 08:12:00'),
},
];

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}