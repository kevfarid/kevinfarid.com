import Image from 'next/image'

import Header from 'components/Header'

import { constants } from '../config/constants'
const lang = constants.language

export default function About() {
  const title = `${lang.pages.about.title} - Kev Farid`
  const description = lang.pages.about.description
  const ogType = 'website'
  const ogImage = constants.imgs.ogImage

  return (
    <section className="padding-06rem">
      <Header
        title={title}
        description={description}
        ogType={ogType}
        ogImage={ogImage}
      />
      <h1 className="about-h1">{lang.pages.about.title}</h1>
      <div className="grid-about">
        <div className="col-left">
          <div className="center-div">
            <Image
              src={constants.avatar}
              alt="kevfarid_"
              width={212}
              height={212}
              className="round"
            />
          </div>
          <div className="text-center">
            <h2 className="margin-04rem">{lang.myName}</h2>
            <p className="margin-04rem">{lang.pages.about.description}</p>
          </div>
        </div>
        <div className="text-justify">
          <Image src={constants.imgs.about} alt="kevfarid_" width={1500} height={500} />
          <h3>{lang.pages.about.sections.aboutme.title}</h3>
          <p>{lang.pages.about.sections.aboutme.text}</p>
          <h3>{lang.pages.about.sections.specialties.title}</h3>
          <p>{lang.pages.about.sections.specialties.text}</p>
          <h3>{lang.pages.about.sections.learning.title}</h3>
          <p>{lang.pages.about.sections.learning.text}</p>
          <h3>{lang.pages.about.sections.experience.title}</h3>
          <p>{lang.pages.about.sections.experience.text}</p>
        </div>
      </div>
    </section>
  )
}
