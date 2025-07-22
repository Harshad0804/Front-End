import Form from "./Toggle/Form";
import { ThemeProvider } from "./Toggle/ThemeContext";
import ThemeToggler from "./Toggle/ThemeToggler";

function App() {
  return (
    <div>
      <ThemeProvider>
        <ThemeToggler />
      </ThemeProvider>

      
    </div>

  );
}

export default App;
