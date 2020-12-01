import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const page = () => {
  const siteDescription = 'f-save | Contact'

  return (
    <Layout>
      <Helmet>
        <title>{siteDescription}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <p>
        Kennst du andere Lebensmittel die gerettet werden können? Ist einer der
         Einträge nicht mehr aktuell? Möchtest du informiert werden, wenn es
        Essen zu retten gibt? Hast du sonstige Fragen oder Anregungen?
      </p>
      <p>
        Wir freuen uns über auf deine Nachricht. Am besten erreichst du uns
        unter <a href="mailto:hallo@f-save.ch">hallo@f-save.ch</a> oder unter{' '}
        <a href="tel:+41774466505">077 44 66 505</a>.
      </p>
    </Layout>
  )
}

export default page
