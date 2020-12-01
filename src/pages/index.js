import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

import { entries } from '../appData'

const SummaryEntry = ({ props }) => (
  <tr className="summary-entry">
    <th className="summary-entry__key">{props.key}</th>
    <td>
      {props.isPhone ? (
        <a href={`tel:${props.value}`}>{props.value}</a>
      ) : (
        props.value
      )}
    </td>
  </tr>
)

const page = () => {
  const siteDescription = 'f-save | Foodsave in Bern und Umgebung'

  return (
    <Layout>
      <Helmet>
        <title>f-save.ch | Startseite</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <h1>Food Save in Bern</h1>
      {entries.map((e) => (
        <div className="entry">
          <h2>
            {e.title}
            <span className="entry__detail-text"> – {e.date}</span>
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
            {e.what && (
              <SummaryEntry
                props={{ key: 'Telefon:', value: e.phone, isPhone: true }}
              />
            )}
          </table>
          <p>{e.description}</p>
        </div>
      ))}
    </Layout>
  )
}

export default page
