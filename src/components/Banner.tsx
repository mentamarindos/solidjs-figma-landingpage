import Card from "./Card";
import Button from "./Button";

export default function Banner() {
  return (
    <Card class="flex items-center gap-8 relative overflow-hidden p-8 group">
      <div class="w-40 h-40 flex-shrink-0 relative">
        <img 
          src="https://picsum.photos/seed/porsche/400/400" 
          alt="Porsche" 
          class="w-full h-full object-cover rounded-[18px]"
        />
      </div>
      
      <div class="flex-grow">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">New</span>
        </div>
        <h2 class="text-3xl font-extrabold mb-2 tracking-tight">Get the new Porsche 911 golden edition</h2>
        <p class="text-gray-400 text-base line-clamp-2 leading-relaxed max-w-2xl font-medium">
          Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet faucibus etiam.
        </p>
      </div>

      <div class="flex flex-col items-end gap-3 pr-4">
        <div class="text-right">
          <div class="text-2xl font-black mb-1">$36,799</div>
          <div class="text-xs text-gray-500 font-bold uppercase tracking-wider">11 available</div>
        </div>
        <Button class="mt-2 bg-white text-black hover:bg-gray-100 px-8 py-3 text-base font-black">Buy now</Button>
      </div>

      <button class="absolute top-8 right-10 text-gray-500 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </Card>
  );
}
