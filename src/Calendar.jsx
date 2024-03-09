import { useEffect, useRef } from "react";
import { EventCalendar } from "@dhx/trial-eventcalendar";
import "@dhx/trial-eventcalendar/dist/event-calendar.css";

export default function CalendarView(props) {
  let container = useRef();

  useEffect(() => {
    new EventCalendar(container.current, {
      events: props.events,
      date: props.date,
    });

    return () => (container.current.innerHTML = "");
  }, []);

  return <div ref={container} style={{ width: "100%", height: "100%" }}></div>;
}
