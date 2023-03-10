export default function SomaUma(props) {
  // props.numero++; não posso fazer isso
  return (
    <div>
      <h1>{props.numero + 1}</h1>
    </div>
  );
}
