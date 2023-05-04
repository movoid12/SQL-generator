
import MessageDisplay from "./components/MessageDisplay/MessageDisplay";
import CodeDisplay from "./components/CodeDisplay/CodeDisplay";

const App = () => {
  return (
    <div>
      <MessageDisplay />
      <input type="text" />
      <CodeDisplay />
      <div className="button-container">
        <button>Get Query!</button>
        <button>Clear Chat</button>

      </div>
    </div>
  );
};

export default App;
