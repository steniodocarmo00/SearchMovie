import "./styles.css";
export function Title() {
  return (
    <div className="container-header">
      <div className="header">
        <h1>MMOvies</h1>
      </div>
      <hr/>
      <div className="title">
        <h1>Search Movies</h1>
          <div className="paragraph">
            <p>
              Search your favorite movie below:
            </p>
          </div>
      </div>
    </div>
  );
}
