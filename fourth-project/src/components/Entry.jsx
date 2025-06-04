// const entryCards = [
//   {
//     id: 1,
//     img: {
//       src: "https://scrimba.com/links/travel-journal-japan-image-url",
//       alt: "Mount Fuji",
//     },
//     title: "Mount Fuji",
//     country: "Japan",
//     googleMapsLink: "https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9",
//     dates: "12 Jan, 2021 - 24 Jan, 2021",
//     text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//   },
//   {
//     id: 2,
//     img: {
//       src: "https://scrimba.com/links/travel-journal-australia-image-url",
//       alt: "Sydney Opera House",
//     },
//     title: "Sydney Opera House",
//     country: "Australia",
//     googleMapsLink: "https://maps.app.goo.gl/Zr17SCrsJeCEKMd36",
//     dates: "27 May, 2021 - 8 Jun, 2021",
//     text: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
//   },
//   {
//     id: 3,
//     img: {
//       src: "https://scrimba.com/links/travel-journal-norway-image-url",
//       alt: "Geirangerfjord",
//     },
//     title: "Geirangerfjord",
//     country: "Norway",
//     googleMapsLink: "https://maps.app.goo.gl/fhkJuBhmFDv47tiB7",
//     dates: "01 Oct, 2021 - 18 Nov, 2021",
//     text: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
//   },
// ];

// Location:
// Japan

// Google Maps Link:
// https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu

// Dates:
// 12 Jan, 2021 - 24 Jan, 2021

// Text:
// Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.

export default function Entry(props) {
  return (
    <article>
      <div className="container">
        <div className="image">
          <img src={props.img.src} width={100} alt={props.img.alt} />
        </div>
        <div className="card">
          <div className="location">
            <img src="/assets/marker.png" alt="" />
            <h4>{props.title}</h4>
            <a
              href={props.googleMapsLink}
              target="blank"
            >
              View on Google Maps
            </a>
          </div>
          <h2>{props.country}</h2>
          <span className="date">{props.date}</span>
          <p>
            {props.text}
          </p>
        </div>
      </div>
    </article>
  );
}
