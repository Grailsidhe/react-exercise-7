import "./styles.css"

export default function App() {
  const buttonHover = () => {
    console.log("Hover here")
  }
  const buttonClick = () => {
    alert("Alert this")
  }

  return (
    <div className="App">
      <button onMouseEnter={() => buttonHover()} onClick={() => buttonClick()}>
        Button
      </button>
    </div>
  )
}

/*
Add a button in App component that display "Hover here"
in the console while your cursor hover the button, using
event onMouseEnter

Add a second button in App component that alert this
message "Alert this" while you click the button, using
event onClick
*/
