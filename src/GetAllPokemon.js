

let listOfGifs = [];

function ImportAll(r) {
  return r.keys().map(r);
}

function componentWillMount() {
  listOfGifs = ImportAll(require.context("./Assets/animated/", false, /.(gif)$/))
}

export default function RenderPokemon() {
  componentWillMount();
  return listOfGifs.map((x, index) => <img src={x} key={index} alt={`this is gif ${index}`}></img>)
}
