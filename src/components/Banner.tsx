import Card from "./Card";
import Button from "./Button";

export default function Banner() {
  return (
    <Card class="flex items-center gap-6 relative overflow-hidden p-6 group">
      <div class="w-32 h-32 flex-shrink-0 relative">
        <img 
          src="https://picsum.photos/seed/porsche/400/400" 
          alt="Porsche" 
          class="w-full h-full object-cover rounded-2xl"
        />
      </div>
      
      <div class="flex-grow">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">New</span>
        </div>
        <h2 class="text-xl font-bold mb-1">Get the new Porsche 911 golden edition</h2>
        <p class="text-gray-400 text-sm line-clamp-2 leading-relaxed max-w-2xl">
          Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet faucibus etiam.
        </p>
      </div>

      <div class="flex flex-col items-end gap-2 pr-4">
        <div class="text-right">
          <div class="text-lg font-bold">$36,799</div>
          <div class="text-[10px] text-gray-500 uppercase">11 available</div>
        </div>
        <Button class="mt-2">Buy now</Button>
      </div>

      <button class="absolute top-4 right-6 text-gray-500 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </Card>
  );
}
