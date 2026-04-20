import Card from "./Card";

interface CommunityProps {
  name: string;
  members: number;
  author: string;
  image: string;
  author_avatar: string;
}

export default function CommunityCard(props: CommunityProps) {
  return (
    <Card class="flex flex-col gap-4 p-5 min-w-[160px] flex-1">
      <div class="w-12 h-12 rounded-xl overflow-hidden">
        <img src={props.image} alt={props.name} class="w-full h-full object-cover" />
      </div>
      
      <div>
        <h4 class="font-bold text-sm mb-0.5">{props.name}</h4>
        <div class="text-[10px] text-gray-500">{props.members} members</div>
      </div>
      
      <div class="flex items-center gap-2 mt-auto">
        <div class={`w-4 h-4 rounded-full overflow-hidden ${props.author === 'John' ? 'bg-orange-500' : 'bg-blue-500'}`}>
          <img src={props.author_avatar} alt={props.author} class="w-full h-full object-cover" />
        </div>
        <span class="text-[10px] text-gray-400">By {props.author}</span>
      </div>
    </Card>
  );
}
