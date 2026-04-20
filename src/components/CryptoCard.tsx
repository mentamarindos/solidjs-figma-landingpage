import Card from "./Card";

export default function CryptoCard() {
  return (
    <Card class="flex flex-col gap-10 p-10">
      <div class="bg-white/5 w-14 h-14 rounded-full flex items-center justify-center border border-white/10 shadow-inner">
        <span class="text-2xl font-black text-white">$</span>
      </div>
      
      <div>
        <div class="text-xs font-black text-gray-500 uppercase mb-3 tracking-widest">Payment</div>
        <h3 class="text-2xl font-black mb-2 tracking-tight">You can now withdraw on crypto</h3>
        <p class="text-gray-400 text-base font-medium">Add your wallet in settings to withdraw</p>
      </div>
      
      <a href="/settings" class="text-white text-base font-bold flex items-center gap-1 hover:opacity-70 transition-opacity">
        Go to settings <span class="text-sm">↗</span>
      </a>
    </Card>
  );
}
