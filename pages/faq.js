import { useEffect, useState } from "react"
import Link from "../src/components/Link"

export async function getStaticProps() {
  const faqUrlAPI = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
  const faqData = await fetch(faqUrlAPI)
  .then(res => {
    return res.json()
  })
  return {
    props: {
      faqData
    }
  }
}

export default function FAQPage({ faqData }) {
  return (
    <div>
      <h1>Alura Cases - FAQ</h1>
      <Link href="/">
        Voltar para a Home
      </Link>
      <ul>
        {faqData.map(({ question, answer }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}