import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

import { entries } from '../appData'

const SummaryEntry = ({ props }) => (
  <tr className="summary-entry">
    <th>{props.key}</th>
    <td>{props.value}</td>
  </tr>
)

const page = () => {
  const siteDescription = 'f-save | Foodsave in Bern und Umgebung'

  return (
    <Layout>
      <Helmet>
        <title>f-save.ch | Foodsave in Bern</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <h1>Food Save in Bern</h1>
      {entries.map((e) => (
        <div class="entry">
          <h2>
            {e.what} in {e.where}
          </h2>
          <table className="entry__summary">
            {e.what && <SummaryEntry props={{ key: 'Was:', value: e.what }} />}
            {e.howMuch && (
              <SummaryEntry props={{ key: 'Wieviel:', value: e.howMuch }} />
            )}
            {e.what && <SummaryEntry props={{ key: 'Wo:', value: e.where }} />}
            {e.what && (
              <SummaryEntry props={{ key: 'Preis:', value: e.price }} />
            )}
            {e.date && (
              <SummaryEntry props={{ key: 'Erstellt am', value: e.date }} />
            )}
          </table>
          <p>{e.description}</p>
        </div>
      ))}
    </Layout>
  )
}

export default page
