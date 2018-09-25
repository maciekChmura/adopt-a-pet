const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed)
  ]);
}

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt a pet!'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'dog',
      breed: 'Havanese'
    }),
    React.createElement(Pet, {
      name: 'Dodo',
      animal: 'bird',
      breed: 'Cockatail'
    }),
    React.createElement(Pet, {
      name: 'Doink',
      animal: 'cat',
      breed: 'mix'
    })
  ]);
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))