
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import FriendshipCounter from "@/components/FriendshipCounter";
import FactsSection from "@/components/FactsSection";
import EmotionSection from "@/components/EmotionSection";
import VoiceMessages from "@/components/VoiceMessages";
import GiftSection from "@/components/GiftSection";
import { Heart } from "lucide-react";

const Index = () => {
  const [selectedTab, setSelectedTab] = useState("greeting");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Верхний баннер с поздравлением */}
      <header className="py-10 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-600 mb-4">
          С Днём Рождения, Лера! <Heart className="inline h-8 w-8 ml-2 text-pink-500 animate-pulse" />
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
          7 мая — особенный день, когда появилась такая удивительная и 
          яркая девушка как ты! Мы так рады, что ты есть в нашей жизни.
        </p>
      </header>

      {/* Галерея фото */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">Наша любимая Лера</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {[1, 2, 3, 4].map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <div className="aspect-square relative bg-purple-100 rounded-md flex items-center justify-center">
                      <img 
                        src="/placeholder.svg" 
                        alt={`Лера ${index + 1}`}
                        className="object-cover h-full w-full rounded-md"
                      />
                      <span className="absolute bottom-2 right-2 bg-white/70 px-2 py-1 rounded text-sm">
                        Фото {index + 1}
                      </span>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </section>

      {/* Счетчик дней дружбы */}
      <FriendshipCounter days={1500} birthdayDate="7 мая" />

      {/* Главный контент с табами */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Tabs defaultValue="facts" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="facts">Интересные факты</TabsTrigger>
            <TabsTrigger value="emotions">Наши эмоции</TabsTrigger>
            <TabsTrigger value="voices">Голосовые</TabsTrigger>
            <TabsTrigger value="gift">Мой подарок</TabsTrigger>
          </TabsList>
          
          <TabsContent value="facts">
            <FactsSection />
          </TabsContent>
          
          <TabsContent value="emotions">
            <EmotionSection />
          </TabsContent>
          
          <TabsContent value="voices">
            <VoiceMessages />
          </TabsContent>
          
          <TabsContent value="gift">
            <GiftSection />
          </TabsContent>
        </Tabs>
      </main>

      {/* Заверение */}
      <section className="py-16 bg-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Не сомневайся, что ты нам нужна!</h2>
          <p className="text-xl mb-8">
            Каждый день с тобой — это подарок. Спасибо, что ты с нами!
          </p>
          <Button 
            onClick={() => setSelectedTab("gift")} 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-pink-100"
          >
            Посмотреть подарок
          </Button>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-600 bg-gray-50">
        <p>С любовью от твоей лучшей подруги ❤️</p>
      </footer>
    </div>
  );
};

export default Index;
