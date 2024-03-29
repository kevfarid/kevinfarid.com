import PropTypes from 'prop-types'

import { getAllFilesMetadata } from '../lib/mdx'

import Hero from '../components/Hero'
import Card from '../components/Card'
import Header from 'components/Header'

import { constants } from '../config/constants'
const lang = constants.language

export default function Home({ posts, projects }) {
  const title = `Kev Farid`
  const description = lang.description
  const ogType = 'website'
  const ogImage = constants.imgs.ogImage

  return (
    <div>
      <Header
        title={title}
        description={description}
        ogType={ogType}
        ogImage={ogImage}
      />
      <Hero />
      <article className="padding-06rem">
        <section>
          <h1 className="h1-with-sizeh2">
            {lang.pages.home.my}
            <span className="text-primary-color"> {lang.pages.home.projectsTitle}</span>
          </h1>
          <div className="flexbox-space-around">
            {projects.map((project) => (
              <Card key={project.slug} {...project} type="projects" />
            ))}
          </div>
        </section>
        <section>
          <h1 className="h1-with-sizeh2">
            {lang.pages.home.my}
            <span className="text-primary-color"> {lang.pages.home.latestPostsTitle}</span>
          </h1>
          <div className="flexbox-space-around">
            {posts.map((post) => (
              <Card key={post.slug} {...post} type="blog" />
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata('blog')
  const projects = await getAllFilesMetadata('projects')

  return {
    props: {
      posts: posts.slice(0, 3),
      projects: projects.slice(0, 3),
    },
  }
}

Home.prototypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}
