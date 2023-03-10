export default function Titulo(props) {
  return props.pequeno ? (
    <>
      <h3>{props.principal}</h3>
      <p>{props.secundario}</p>
    </>
  ) : (
    <>
      <h1>{props.principal}</h1>
      <h2>{props.secundario}</h2>
    </>
  );
}
