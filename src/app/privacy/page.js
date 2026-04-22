import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../terms/page.module.css";

export const metadata = {
  title: "Privacy Policy | Spacetime",
  description: "Privacy Policy for Spacetime coworking spaces — how we collect, use and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.breadcrumb}>Home &rsaquo; Privacy Policy</p>
            <h1 className={styles.heroTitle}>Privacy Policy</h1>
          </div>
        </div>

        <div className={styles.container}>

          <section className={styles.intro}>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <p>This notice sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your sensitive information and how we will deal with it.</p>
            <p>By visiting the Spacetime website you accept and consent to the practices described in this Privacy Notice, including the processing of your personal data under this lawful basis.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>Who We Are</h2>
            <p>The Spacetime idea was conceived to bridge the gap between the benefits and fallouts of working remotely. The idea was to replace &ldquo;work from home&rdquo; with &ldquo;cowork near home&rdquo; &mdash; to provide a shared inspirational space with a home-like atmosphere very near your home where you can work to bring out the best in you.</p>
            <p>We therefore decided to build very modern medium-sized co-working spaces surrounded by dense residential communities so that people from those communities have a very viable alternative to working from home.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>What We Do With Your Information</h2>
            <p>We will use your information to:</p>
            <ul className={styles.list}>
              <li>Deliver our newsletters to you and to send you information about the services that we offer and other related topics.</li>
              <li>Allow you to attend our range of events and workshops.</li>
              <li>Provide our business support mentoring and services to you.</li>
              <li>Send you information and updates about Spacetime and our other associated companies by other agreed means.</li>
            </ul>
            <p>We compile statistics about user trends on our Website, which are used by third-party organisations to understand how users interact with businesses, brands and one another online. These statistics are drawn from a dataset which does not contain any information from which you can be identified.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>Information We Collect From You</h2>
            <p>We will collect and process the following information about you:</p>

            <h3 className={styles.subHeading}>Information You Give Us</h3>
            <p>This is information about you that you give us by filling in forms on our Website, one of our partner websites or by corresponding with us by phone, email or otherwise. We only request from you the minimum data required for you to use our service.</p>
            <p>The only information we require from you to sign up to our mailing list is your email address, but you may also want to provide us with your first and last names should you wish. We may also interact with you using our Social Media accounts.</p>

            <h3 className={styles.subHeading}>Information We Collect About You</h3>
            <p>Whenever you visit our Website we will automatically collect the following information:</p>
            <ul className={styles.list}>
              <li><strong>Technical information</strong> — including the Internet protocol (IP) address used to connect your computer to the Internet, your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.</li>
              <li><strong>Information about your visit</strong> — this includes the full Uniform Resource Locators (URL), clickstream to, through and from our Website (including date and time), pages you have visited, page response times, download errors, length of visits to certain pages and page interaction information (such as scrolling, clicks, and mouse-overs).</li>
            </ul>

            <h3 className={styles.subHeading}>Information We Receive From Other Sources</h3>
            <p>This is information we receive about you if you use any of the other websites we operate or the other services we provide. We are working closely with third parties (including, for example, business partners, sub-contractors in technical, payment and delivery services, advertising networks, analytics providers, search information providers, credit reference agencies). We will notify you when we receive information about you from them and the purposes for which we intend to use that information.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>Security of Your Personal Information</h2>
            <p>We take the security of your personal data very seriously. Our approach to information security is constantly evolving and continually reviewed.</p>
            <p>We have adopted industry best practices from both technological and business process perspectives in order to make the security of your data a key part of the way we do business.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>Your Rights</h2>
            <p>We may contact you via email with updates about the services that we offer or any changes that we have made to our Website. You can opt in or out at any time by clicking the &lsquo;Unsubscribe&rsquo; link in our emails.</p>
            <p>Our Website may, from time to time, contain links to and from the websites of our partner networks, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we are not responsible or liable for these policies or for any personal data that may be collected through them. Please check these policies before you submit any personal data to these websites or use these services.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>Our Cookie Policy</h2>
            <p>Our Website uses cookies to distinguish you from other users of our Website. This helps us to provide you with a good experience when you browse our Website and also allows us to improve our site. By continuing to browse the Website, you agree and consent to our use of cookies.</p>
            <p>A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer&rsquo;s hard drive.</p>
            <p>We use the following types of cookies:</p>
            <ul className={styles.definitionList}>
              <li><strong>Strictly necessary cookies</strong> — these are cookies that are required for the operation of our Website. They include cookies that enable you to log into secure areas of our Website, use a shopping cart or make use of an e-payment system.</li>
              <li><strong>Analytical / performance cookies</strong> — these allow us to recognise and count the number of visitors and to see how visitors move around our Website when they are using it. This helps us to improve the way our Website works.</li>
              <li><strong>Functionality cookies</strong> — these are used to recognise you when you return to our Website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region).</li>
              <li><strong>Targeting cookies</strong> — these cookies record your visit to our Website, the pages you have visited and the links you have followed. We will use this information to make our Website and the advertising displayed on it more relevant to your interests. These cookies will contain no information capable of identifying you personally.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>Third-Party Services We Use</h2>

            <h3 className={styles.subHeading}>Google Analytics</h3>
            <p>We use Google Analytics to understand general trends about our content and traffic sources &mdash; for example, where users come from, which pages are most popular, which sites provide the most traffic, and how our marketing efforts impact the number of visits we receive.</p>

            <h3 className={styles.subHeading}>Facebook Button</h3>
            <p>We use the Facebook button to allow you to share our platform with your friends and other Facebook users.</p>

            <h3 className={styles.subHeading}>YouTube Button</h3>
            <p>We use a LinkedIn button to allow you to share our platform and the services we offer with your connections.</p>

            <h3 className={styles.subHeading}>Instagram Button</h3>
            <p>We use an Instagram button to allow you to easily follow our Instagram account.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at <a href="mailto:akash@myspacetime.in" className={styles.link}>akash@myspacetime.in</a>.</p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
