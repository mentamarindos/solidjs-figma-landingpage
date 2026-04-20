import { createAsync } from "@solidjs/router";
import Banner from "@/components/Banner";
import CryptoCard from "@/components/CryptoCard";
import CommunityCard from "@/components/CommunityCard";
import LocationCard from "@/components/LocationCard";
import PetCard from "@/components/PetCard";
import EventsList from "@/components/EventsList";
import { getCommunities, getEvents } from "@/lib/api";
import { For, Suspense } from "solid-js";

export default function Home() {
  console.log("Home route rendering...");
  const communities = createAsync(() => getCommunities());
  const events = createAsync(() => getEvents());

  return (
    <main class="min-h-screen bg-dark-bg text-white p-4 md:p-8 lg:p-12">
      <div class="max-w-7xl mx-auto space-y-6 md:space-y-8">
        {/* Top Section */}
        <Banner />

        {/* Main Area (2 columns) */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Left Side (Column Span 7) */}
          <div class="lg:col-span-7 space-y-6 md:space-y-8">
            <CryptoCard />
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Suspense fallback={<div>Loading communities...</div>}>
                <For each={communities()}>
                  {(community) => (
                    <CommunityCard 
                      name={community.name}
                      members={community.members}
                      author={community.author}
                      image={community.image}
                      author_avatar={community.author_avatar}
                    />
                  )}
                </For>
              </Suspense>
            </div>

            <LocationCard />
          </div>

          {/* Right Side (Column Span 5) */}
          <div class="lg:col-span-5 space-y-6 md:space-y-8">
            <PetCard />
            
            <div class="bg-dark-card rounded-[2.5rem] p-8">
              <h3 class="text-xl font-bold mb-6">Events</h3>
              <Suspense fallback={<div>Loading events...</div>}>
                <EventsList events={events() || []} />
              </Suspense>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
