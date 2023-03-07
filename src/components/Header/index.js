import "./styles.css";
export function Title() {
  return (
    <div className="container-header">
      <div className="header">
        <h1>MMOvies</h1>
      </div>
      <hr/>
      <div className="title">
        <h1>Pesquisa de Filmes</h1>
          <div className="paragraph">
            <p>
              Pesquise seu filme favorito na barra de pesquisa abaixo.
            </p>
          </div>
      </div>
    </div>
  );
}
