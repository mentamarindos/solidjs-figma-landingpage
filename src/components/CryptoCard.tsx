import Card from "./Card";

export default function CryptoCard() {
  return (
    <Card class="flex flex-col gap-4">
      <div class="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <div>
        <div class="text-[10px] font-bold text-gray-500 uppercase mb-1">Payment</div>
        <h3 class="text-lg font-bold">You can now withdraw on crypto</h3>
        <p class="text-gray-400 text-sm">Add your wallet in settings to withdraw</p>
      </div>
      
      <a href="/settings" class="text-white text-sm font-medium flex items-center gap-1 hover:underline">
        Go to settings
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </Card>
  );
}
