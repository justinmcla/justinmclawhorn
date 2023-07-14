import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <section>
      <Helmet>
        <meta name="description" content="Justin McLawhorn is a software engineer interested in authentication, authorization, cloud-first development, and software design principles."/>
        <meta name="author" content="Justin Mclawhorn"/>
        <meta name="canonical" content="https://justinmclawhorn.com"/>
        <meta name="og:title" content="Justin McLawhorn - Software Engineer"/>
        <meta name="og:type" content="website"/>
        <meta name="og:image" content="https://jwmrjustinmclawhorn.blob.core.windows.net/images/Justin_McLawhorn_Natural_Bridge_c.png"/>
        <meta name="og:url" content="https://justinmclawhorn.com"/>
        <meta name="og:description" content="Justin McLawhorn is a software engineer interested in authentication, authorization, cloud-first development, and software design principles."/>
        <title>Justin McLawhorn | Software Engineer</title>
      </Helmet>
      <h2>Hi there.</h2>
      <p>Welcome to where I keep my blog posts on various topics in software engineering.</p>
      <p>Some topics of interest include:</p>
      <ul>
        <li>Web Authorization (OAuth)</li>
        <li>Cloud-First Development</li>
        <li>Design Patterns and Architecture</li>
      </ul>
      <p>Feel free to reach out to me via the social links above. Give me a follow there to stay up to date on new posts and ongoings.</p>
      {/* <p>There is also a bit of a treasure hunt that will take you on a journey through some of the 
        cool software projects I've been able to contribute to in my time in the industry so far.</p>
      <p>Feel free to give it a go.</p> */}
    </section>
  )
}