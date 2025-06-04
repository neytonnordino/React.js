export default function Jokes(props) {
  return (
    <section>
      {props.setup && <p>Setup: {props.setup}</p>}
      <p>Punchline: {props.punchline}</p>
      <hr />
    </section>
  )
}