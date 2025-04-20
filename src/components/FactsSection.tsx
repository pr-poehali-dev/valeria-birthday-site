
import { Card } from "@/components/ui/card";
import { Heart, Cake, Dog } from "lucide-react";

const FactsSection = () => {
  const facts = [
    {
      icon: <Cake className="h-12 w-12 text-pink-500" />,
      title: "16 лет",
      description: "Прекрасный возраст, когда жизнь только начинается, а впереди столько всего интересного!",
    },
    {
      icon: <Dog className="h-12 w-12 text-amber-500" />,
      title: "Собаки живут столько же",
      description: "16 лет для собаки — это очень солидный возраст, что доказывает твою особенность и силу!",
    },
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: "Более 100 улыбок в день",
      description: "Статистика показывает, что рядом с тобой люди улыбаются чаще обычного!",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">Интересные факты о Лере</h2>
        <p className="text-gray-600">
          Несколько занимательных фактов о нашей замечательной имениннице, которые делают её такой особенной!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {facts.map((fact, index) => (
          <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              {fact.icon}
            </div>
            <h3 className="text-xl font-bold text-purple-700 mb-2">{fact.title}</h3>
            <p className="text-gray-600">{fact.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FactsSection;
