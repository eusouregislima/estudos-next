import Titulo from "@/components/Titulo";

export default function usandoTitulo() {
  return (
    <div>
      <Titulo principal="Página teste" secundario="Fazer umas coisas legais" />
      <Titulo
        pequeno
        principal="Página teste 2"
        secundario="Fazer umas coisas legais 2"
      />
      <Titulo
        pequeno={true}
        principal="Página teste 3"
        secundario="Fazer umas coisas legais 3"
      />
      <Titulo
        pequeno={false}
        principal="Página teste 3"
        secundario="Fazer umas coisas legais 3"
      />
    </div>
  );
}
