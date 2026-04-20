import Card from "./Card";
import Button from "./Button";

export default function PetCard() {
  return (
    <Card class="relative h-[640px] overflow-hidden group">
      <img 
        src="https://picsum.photos/seed/dog/800/1000" 
        alt="Pet" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      
      <div class="absolute top-12 left-12">
        <div class="text-sm font-black text-gray-300 uppercase tracking-widest mb-3 opacity-80">Pet Health</div>
        <h2 class="text-4xl font-black text-white max-w-[320px] leading-[1.05] tracking-tighter">Your pet deserve the best</h2>
      </div>
      
      <div class="absolute bottom-12 left-12">
        <h4 class="text-2xl font-black text-white mb-1 tracking-tight">Available soon</h4>
        <p class="text-base text-gray-300 font-bold opacity-80">Get notified</p>
      </div>
      
      <div class="absolute bottom-12 right-12">
        <Button class="bg-white text-black hover:bg-gray-100 px-10 py-5 text-lg font-black shadow-2xl">Notify me</Button>
      </div>
    </Card>
  );
}
