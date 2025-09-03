import './TestimonialsSection.css'

type Testimonial = {
  name: string
  date: string
  text: string
  rating: number
}

const DATA: Testimonial[] = [
  {
    name: 'yanPing Wang',
    date: '2024-04-23',
    text:
      'I would like to thank Farani Taylor and in particular Soneela Chowdhry who helped me with my immigration matter. Very professional and supportive throughout.',
    rating: 5
  },
  {
    name: 'Taimoor Khan',
    date: '2024-04-20',
    text:
      'One of the best law firms in England. Mr Khalid Mehmood is one of the best solicitors in this firm. Highly recommended.',
    rating: 5
  },
  {
    name: 'Letspace',
    date: '2024-04-18',
    text:
      'Very good service, well recommended. The team were responsive and helpful from start to finish.',
    rating: 5
  }
]

function Stars({ n }: { n: number }) {
  return (
    <div className="t__stars" aria-label={`${n} star rating`}>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

function TestimonialsSection() {
  return (
    <section className="t">
      <div className="t__container">
        <p className="t__eyebrow">WHAT PEOPLE SAY ABOUT US</p>
        <h2 className="t__heading">Client Testimonials</h2>
        <div className="t__list" role="list">
          {DATA.map((d) => (
            <article className="t__card" role="listitem" key={d.name + d.date}>
              <header className="t__card-h">
                <div className="t__avatar" aria-hidden>{d.name[0]}</div>
                <div>
                  <div className="t__name">{d.name}</div>
                  <div className="t__date">{d.date}</div>
                </div>
              </header>
              <Stars n={d.rating} />
              <p className="t__text">{d.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection


