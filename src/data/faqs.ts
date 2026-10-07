export interface Faq {
  q: string
  a: string
}

// Homepage / NYC FAQ. Answers are grounded in real pricing and capabilities and
// target high-intent queries ("how much does a wedding band cost in nyc").
export const homepageFaqs: Faq[] = [
  {
    q: 'How much does a wedding band cost in NYC?',
    a: 'Our reception packages start at $8,000 for a 6-piece band. Most NYC weddings land between $10,000 and $14,000 once you factor in band size, ceremony and cocktail-hour sets, and how long you want us playing. We put the starting price right on the site so you can plan without chasing a quote.',
  },
  {
    q: 'How many musicians are in the band?',
    a: 'We scale from 6 to 12 pieces with male and female lead vocals and a full horn section of sax, trumpet and trombone. A smaller lineup suits an intimate loft; a 10 to 12 piece band fills a ballroom.',
  },
  {
    q: 'Can you cover the ceremony and cocktail hour too?',
    a: 'Yes. We can play a trio for your ceremony, a jazz set for cocktail hour, and the full band for the reception, so the music stays live from the first look to the last dance.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'Prime Saturdays book 9 to 14 months out. If your date is set, reach out early so we can hold it before someone else grabs it.',
  },
  {
    q: 'Do you take song requests?',
    a: 'Always. We build the setlist around your night and learn your first dance and the songs that matter to you. Couples routinely tell us we nailed the requests that made their reception feel like theirs.',
  },
  {
    q: 'What areas do you serve?',
    a: 'All five boroughs plus Westchester, Long Island, the Hudson Valley and New Jersey. If your venue is in the New York metro, we can get there.',
  },
]

// Price-intent FAQ for the cost guide. Grounded in real pricing: packages start
// at $8,000, most NYC weddings land $10,000 to $14,000, 6 to 12 pieces, boutique
// (book the band, not an agency) model.
export const costFaqs: Faq[] = [
  {
    q: 'How much does a wedding band cost in NYC?',
    a: 'Reception packages start at $8,000 for a 6-piece band. Most NYC weddings land between $10,000 and $14,000 once you add band size, ceremony and cocktail-hour sets, and a longer reception. We publish the starting number so you can budget before you ever send an inquiry.',
  },
  {
    q: 'Why do NYC wedding band prices vary so much?',
    a: 'Three things move the number: how many musicians you want (a 6-piece costs less than a 12-piece), how many hours we play, and whether you add ceremony or cocktail-hour music. Date, season and travel matter too. A Saturday in October costs more than a Friday in February.',
  },
  {
    q: 'What is the average wedding band cost in NYC?',
    a: 'Averages get quoted anywhere from $9,000 to $15,000 depending on who you ask. For a full live band with horns and two lead singers, plan on $10,000 to $14,000. Anything far below that usually means a smaller lineup, fewer hours, or a pickup group assembled for one night.',
  },
  {
    q: 'Is it cheaper to book a band directly instead of through an agency?',
    a: 'Usually, yes. A corporate agency adds a booking-desk markup on top of the band fee. With us you book the band directly and work with bandleader Will from the first call to the last dance. No middleman, one point of contact, and the money goes to the musicians on stage.',
  },
  {
    q: 'What is included in the price?',
    a: 'A 6 to 12 piece band with male and female lead vocals, a full horn section, pro sound, MC duties, setup and travel inside the metro. We can add a ceremony trio and a cocktail-hour set. You get a written package, so there are no surprise line items later.',
  },
]
