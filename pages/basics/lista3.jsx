function gerarlista(quant = 5) {
  const lista = [];
  for (let i = 1; i <= quant; i++) {
    lista.push(<span>{i},</span>);
  }

  return lista;
}

export default function lista() {
  const quant = 32;
  return (
    <>
      <div>{gerarlista(quant)}</div>
      <div>{gerarlista()}</div>
      <div>{gerarlista(18)}</div>
    </>
  );
}
