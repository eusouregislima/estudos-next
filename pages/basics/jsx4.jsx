export default function jsx4() {
  const test = "Estou no Javascript";
  const trechoh3 = <h3>{3 * 3}</h3>;
  return (
    <div>
      <h1>Integração JS e JSX</h1>
      <h2>{test}</h2>
      {trechoh3}
      <h4>{Math.max(13, 39)}</h4>
      <h5>{entre(30, 5, 50)}</h5>
      <h6>{entre(10, 13, 25)}</h6>
    </div>
  );
}

// Math.max() mostra o valor maior entre os números

function entre(valor, min, max) {
  if (valor >= min && valor <= max) {
    return "Sim";
  } else {
    return "Não";
  }
}
