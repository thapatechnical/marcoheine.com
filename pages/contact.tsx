import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import * as ui from '../styles/index/ui'
import { Trans, useTranslation } from 'next-i18next'
import Link from 'next/link'

const Contact = ({ data, location }) => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO
        title="Contact | Marco Heine - Freelance Web Developer"
        ogImage={
          data.personalImg?.childImageSharp?.gatsbyImageData?.images?.fallback
            ?.src
        }
        ogImageAlt="a picture of me"
        description={t('meta.contact-description')}
        location={location}
      />
      <ui.PageHeader>{t('contact.headline')}</ui.PageHeader>

      <section className="mx-auto mt-20 mb-0 max-w-2xl">
        <h3>{t('contact.subline')}</h3>
        <p>
          <Trans i18nKey={'contact.text-one'} />
          <Link href="/work/">work</Link>
        </p>
        <p>{t('contact.text-two')}</p>
        <p>
          {t('contact.text-three')}
          <a href="mailto:hello@marcoheine.com">hello@marcoheine.com</a>.
        </p>
        <p>
          {t('contact.text-four')}
          <a href="https://twitter.com/marcoheine_com">@marcoheine_com.</a>
        </p>
        <p>
          {t('contact.text-five')}
          <a href="https://github.com/marcoheine-com">GitHub</a>.
        </p>
      </section>
    </Layout>
  )
}

export default Contact