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
            <a href={props.googleMapsLink} target="blank">
              View on Google Maps
            </a>
          </div>
          <h2>{props.country}</h2>
          <span className="date">{props.date}</span>
          <p>{props.text}</p>
        </div>
      </div>
    </article>
  );
}
