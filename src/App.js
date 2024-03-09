import "./styles.css";

import Calendar from "./Calendar";
import { getData } from "./data";

function App() {
  const events = getData();
  return <Calendar events={events} date={new Date(2021, 5, 10)} />;
}

export default App;
