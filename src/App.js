import './App.css';
import Subscriber from "./components/Subscriber";
import { Provider } from "react-redux";
import store from './redux/store'
import Display from "./components/Display";
import View from "./components/View";
import Comments from "./components/Comments";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Comments/>
        <Subscriber/>
        <Display/>
        <View/>
      </div>
    </Provider>
  );
}

export default App;
