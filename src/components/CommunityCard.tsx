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
    <Card class="flex flex-col gap-6 p-8 min-w-[160px] flex-1 aspect-square justify-between">
      <div class="w-20 h-20 rounded-[12px] overflow-hidden">
        <img src={props.image} alt={props.name} class="w-full h-full object-cover" />
      </div>
      
      <div class="mt-4">
        <h4 class="font-black text-xl mb-1 tracking-tight">{props.name}</h4>
        <div class="text-sm text-gray-500 font-bold">{props.members} members</div>
      </div>
      
      <div class="flex items-center gap-3 mt-6">
        <div class={`w-6 h-6 rounded-full overflow-hidden ${props.author === 'John' ? 'bg-orange-500' : 'bg-blue-500'}`}>
          <img src={props.author_avatar} alt={props.author} class="w-full h-full object-cover opacity-90" />
        </div>
        <span class="text-sm text-gray-400 font-bold">By {props.author}</span>
      </div>
    </Card>
  );
}
