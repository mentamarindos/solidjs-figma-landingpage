import Card from "./Card";
import Button from "./Button";

export default function PetCard() {
  return (
    <Card class="relative h-[550px] overflow-hidden p-0 group">
      <img 
        src="https://picsum.photos/seed/dog/800/1000" 
        alt="Pet" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      
      <div class="absolute top-10 left-10">
        <div class="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">Pet Health</div>
        <h2 class="text-2xl font-bold text-white max-w-[200px] leading-tight">Your pet deserve the best</h2>
      </div>
      
      <div class="absolute bottom-10 left-10">
        <h4 class="font-bold text-white mb-0.5">Available soon</h4>
        <p class="text-[10px] text-gray-300">Get notified</p>
      </div>
      
      <div class="absolute bottom-10 right-10">
        <Button class="bg-white text-black hover:bg-gray-200 px-6 py-3 text-sm">Notify me</Button>
      </div>
    </Card>
  );
}
