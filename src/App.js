import EventCalendar from "./EventCalendar";
import { getData } from "./data";

function App() {
    const events = getData();
    return <EventCalendar events={events} date={new Date(2024, 5, 10)} />;
}

export default App;
