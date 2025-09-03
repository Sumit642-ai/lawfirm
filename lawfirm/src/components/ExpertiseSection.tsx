import './ExpertiseSection.css'

const items = [
  { img: '/ex1.jpg', title: 'IMMIGRATION LAW', sub: 'Immigration Services' },
  { img: '/ex2.jpg', title: 'WILLS & PROBATE', sub: 'Estate Planning' },
  { img: '/ex3.jpg', title: 'CONVEYANCING', sub: 'Commercial / Residential' },
  { img: '/ex4.jpg', title: 'CRIME', sub: 'Criminal Defence' },
  { img: '/ex5.jpg', title: 'CORPORATE LAW', sub: 'Corporate Law' },
  { img: '/ex6.jpg', title: 'HOUSING', sub: 'Housing & Property' },
  { img: '/ex7.jpg', title: 'LITIGATION', sub: 'Litigation Services' },
  { img: '/ex8.jpg', title: 'FAMILY LAW', sub: 'Family Law' }
]

function ExpertiseSection() {
  return (
    <section className="expertise">
      <div className="expertise__container">
        <h2 className="expertise__heading">Areas We Cover</h2>
        <p className="expertise__sub">Clear, commercial and human advice – wherever you need it most.</p>
        <div className="expertise__grid">
          {items.map((it) => (
            <a key={it.title} href="#" className="expertise__card">
              <div className="expertise__image" style={{ backgroundImage: `url(${it.img})` }} />
              <div className="expertise__label">
                <div className="expertise__title">{it.title}</div>
                <div className="expertise__desc">{it.sub}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection


