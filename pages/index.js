import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Section from '../components/Section'
import PageWrapper from '../components/PageWrapper'
import Hero from "../components/Hero"


export default function Home() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <PageWrapper>
        <Hero></Hero>
        <main>
          <Section></Section>
        </main>
      </PageWrapper>  
    </div>
  )
}
