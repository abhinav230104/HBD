export default function Home() {
  return (
    <main className="birthday-page">
      <div className="confetti confetti-one" />
      <div className="confetti confetti-two" />
      <div className="confetti confetti-three" />

      <section className="birthday-card" aria-labelledby="birthday-title">
        <div className="card-topline">
          <span className="eyebrow">A very good day</span>
          <span className="paw-mark" aria-hidden="true">✦</span>
        </div>

        <div className="dog-portrait" aria-label="A happy illustrated brown dog" role="img">
          <span className="dog-ear dog-ear-left" />
          <span className="dog-ear dog-ear-right" />
          <span className="dog-face">
            <span className="dog-eye dog-eye-left" />
            <span className="dog-eye dog-eye-right" />
            <span className="dog-muzzle">
              <span className="dog-nose" />
              <span className="dog-smile" />
            </span>
          </span>
          <span className="dog-collar"><span className="collar-tag">★</span></span>
        </div>

        <p className="kicker">Today we celebrate</p>
        <h1 id="birthday-title">Happy birthday, <em>Kalu!</em></h1>
        <p className="message">
          To the sweetest soul with the biggest heart: may your day be full of
          crunchy treats, long walks, belly rubs, and all the love you give us
          every single day.
        </p>

        <div className="wish-row" aria-label="Birthday wishes">
          <span>extra treats</span>
          <i />
          <span>big adventures</span>
          <i />
          <span>endless cuddles</span>
        </div>

        <p className="signature">With all our love <span aria-hidden="true">♥</span></p>
      </section>

      <p className="footer-note">Made especially for Kalu</p>
      </main>
  );
}
