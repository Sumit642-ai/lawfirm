import './CommitmentSection.css'

function CommitmentSection() {
  return (
    <section className="commit">
      <div className="commit__ribbon">
        EVERY INDIVIDUAL WHO WALKS THROUGH OUR DOORS HOLDS SIGNIFICANT VALUE FOR US.
      </div>
      <div className="commit__bg" />
      <div className="commit__overlay" />
      <div className="commit__content">
        <div className="commit__inner">
          <h2 className="commit__title">COMMITTED TO HELPING OUR
            <br />CLIENTS SUCCEED
          </h2>
          <p className="commit__subtitle">
            More than 40,000 clients have benefited from Farani Taylor's exceptional legal services.
          </p>
          <div className="commit__cta">
            <a href="#consult" className="commit__cta-btn">SCHEDULE YOUR INITIAL CONSULTATION NOW</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommitmentSection


