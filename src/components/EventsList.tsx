import Card from "./Card";

interface EventItemProps {
  title: string;
  date: string;
  image: string;
}

function EventItem(props: EventItemProps) {
  return (
    <div class="flex items-center gap-4 group cursor-pointer hover:bg-dark-card-hover p-2 rounded-2xl transition-colors">
      <div class="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
        <img src={props.image} alt={props.title} class="w-full h-full object-cover" />
      </div>
      <div>
        <h4 class="font-bold text-white text-base leading-tight mb-1">{props.title}</h4>
        <p class="text-xs text-gray-500">{props.date}</p>
      </div>
    </div>
  );
}

interface EventsListProps {
  events: any[];
}

export default function EventsList(props: EventsListProps) {
  return (
    <div class="flex flex-col gap-4">
      {props.events.map(event => (
        <EventItem 
          title={event.title} 
          date={event.date_time} 
          image={event.image} 
        />
      ))}
    </div>
  );
}
