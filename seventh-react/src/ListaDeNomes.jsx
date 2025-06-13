export default function Lista(props) {
  return (
    <ul>
      {props.nomes.map((nome, index) => (
        <li key={index}>{nome}</li>
      ))}
    </ul>
  )
}