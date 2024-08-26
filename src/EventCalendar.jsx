import { useEffect, useRef } from "react";
import { EventCalendar } from "@dhx/trial-eventcalendar";
import "@dhx/trial-eventcalendar/dist/event-calendar.css";

export default function EventCalendarComponent(props) {
	let container = useRef();

	useEffect(() => {
		const calendar = new EventCalendar(container.current, {
			events: props.events,
			date: props.date
		});

		return () => {
			calendar.destructor();
		}
	});

	return <div ref={container} className="widget"></div>;
}
