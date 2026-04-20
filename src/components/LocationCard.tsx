import Card from "./Card";
import Button from "./Button";

export default function LocationCard() {
  return (
    <Card class="relative h-[400px] overflow-hidden p-0 group">
      <img 
        src="https://picsum.photos/seed/buenos-aires/800/600" 
        alt="Buenos Aires" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      
      <div class="absolute bottom-6 left-6">
        <h3 class="text-xl font-bold text-white">Buenos Aires</h3>
        <p class="text-gray-300 text-sm">Argentina</p>
      </div>
      
      <div class="absolute bottom-6 right-6">
        <Button variant="primary" class="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" stroke-width="2" />
            <circle cx="12" cy="12" r="3" stroke-width="2" />
          </svg>
          Map
        </Button>
      </div>
    </Card>
  );
}
