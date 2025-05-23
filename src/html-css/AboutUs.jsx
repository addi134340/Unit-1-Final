import Header from "../components/Header/Footer/Header";
import BackButton from "../components/Buttons/BackBtn";

function AboutUs() {
  return (
    <>
    <Header title="About Us" />
    <BackButton />
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About Us</h1>
      <p>
        Welcome to our company! We are dedicated to providing excellent services and products.
      </p>
      <section>
        <h2>Our Mission</h2>
        <p>To deliver quality and value to our customers.</p>
      </section>
      <section>
        <h2>Our Team</h2>
        <p>We have a diverse team of experts passionate about what they do.</p>
      </section>
    </main>
    </>
  );
}

export default AboutUs;