import Card from "./Card";

interface EventItemProps {
  title: string;
  date: string;
  image: string;
}

function EventItem(props: EventItemProps) {
  return (
    <div class="flex items-center gap-8 group cursor-pointer hover:bg-white/5 p-4 rounded-[20px] transition-all">
      <div class="w-24 h-24 rounded-[12px] overflow-hidden flex-shrink-0">
        <img src={props.image} alt={props.title} class="w-full h-full object-cover" />
      </div>
      <div>
        <h4 class="font-black text-2xl text-white leading-tight mb-2 tracking-tight">{props.title}</h4>
        <p class="text-base text-gray-500 font-bold">{props.date}</p>
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
