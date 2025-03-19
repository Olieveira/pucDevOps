import { CardJs } from "./components/card";

function App() {
  const textos = ['Criar', 'Buscar', 'Editar', 'Delete']
  return (
    <div className="App">
      Atividade para fins academicos
      {textos.map((texto, index) => (
        <CardJs key={index} texto={texto} />
      ))}
    </div>
  );
}

export default App;
