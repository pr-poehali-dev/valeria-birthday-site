
import { Card } from "@/components/ui/card";
import { Gift, Film } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const GiftSection = () => {
  const giftImages = [1, 2, 3, 4, 5];

  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex justify-center items-center p-4 mb-6 bg-pink-100 rounded-full">
          <Gift className="h-10 w-10 text-pink-500" />
        </div>
        <h2 className="text-3xl font-bold text-purple-600 mb-4">А мой подарок — это...</h2>
        <p className="text-gray-600">
          Невозможно выразить всю мою благодарность за нашу дружбу одним подарком,
          но я очень надеюсь, что тебе понравится этот маленький сюрприз!
        </p>
      </div>

      {/* Галерея изображений подарка */}
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {giftImages.map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div className="p-1">
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-pink-50 rounded-md flex items-center justify-center">
                    <img 
                      src="/placeholder.svg" 
                      alt={`Подарок ${index + 1}`}
                      className="object-cover h-full w-full rounded-md"
                    />
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      {/* Место для видео */}
      <div className="mt-12">
        <div className="text-center mb-6">
          <div className="inline-flex justify-center items-center p-4 mb-4 bg-purple-100 rounded-full">
            <Film className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-purple-700">Специальное видео для тебя</h3>
        </div>

        <div className="aspect-video max-w-4xl mx-auto bg-black/5 rounded-lg flex items-center justify-center border-2 border-dashed border-purple-200">
          <div className="text-center p-8">
            <Film className="h-12 w-12 mx-auto mb-4 text-purple-300" />
            <p className="text-purple-600 font-medium">Здесь будет твоё особенное видео</p>
            <p className="text-gray-500 text-sm mt-2">Нажми, чтобы загрузить</p>
          </div>
        </div>
      </div>

      <div className="pt-8 text-center text-xl text-purple-700 font-medium">
        С днём рождения, Лерочка! Люблю тебя! ❤️
      </div>
    </div>
  );
};

export default GiftSection;
