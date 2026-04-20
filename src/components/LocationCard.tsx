import Card from "./Card";
import Button from "./Button";

export default function LocationCard() {
  return (
    <Card class="relative h-[480px] overflow-hidden group">
      <img 
        src="https://picsum.photos/seed/buenos-aires/800/600" 
        alt="Buenos Aires" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
      
      <div class="absolute bottom-10 left-10">
        <h3 class="text-3xl font-black text-white mb-1 tracking-tight">Buenos Aires</h3>
        <p class="text-lg text-gray-300 font-bold opacity-80">Argentina</p>
      </div>
      
      <div class="absolute bottom-10 right-10">
        <Button variant="primary" class="flex items-center gap-3 px-8 py-4 bg-white text-black font-black text-lg shadow-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          Map
        </Button>
      </div>
    </Card>
  );
}
