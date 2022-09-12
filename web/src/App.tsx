interface ButtonProps {
  tittle: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.tittle}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button tittle="Hello"/>
      <Button tittle="World"/>
      <Button tittle="!!!!"/>
    </div>
  )
}

export default App
