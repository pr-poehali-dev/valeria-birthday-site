
import { Card } from "@/components/ui/card";
import { Smile, Frown, Heart } from "lucide-react";

const EmotionSection = () => {
  const emotions = [
    {
      icon: <Smile className="h-12 w-12 text-yellow-500" />,
      title: "Радость",
      description: "Сколько счастливых моментов мы разделили вместе — от смешных историй до незабываемых праздников!",
      memories: "Помнишь, как мы смеялись до слёз на той вечеринке? Или наши спонтанные прогулки по городу?",
    },
    {
      icon: <Frown className="h-12 w-12 text-blue-500" />,
      title: "Поддержка",
      description: "В трудные моменты мы всегда были рядом, поддерживая друг друга и помогая пережить сложности.",
      memories: "Я никогда не забуду, как ты была рядом, когда мне было тяжело. Твои слова поддержки значат очень много.",
    },
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: "Любовь",
      description: "Истинная дружба строится на безусловной любви и принятии — именно таковы наши отношения.",
      memories: "Спасибо за то, что ты просто есть, за твою искренность и за то особое тепло, которое ты привносишь в мою жизнь.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">Эмоции, что мы прошли вместе</h2>
        <p className="text-gray-600">
          За 1500 дней нашей дружбы мы испытали целый спектр эмоций, и каждая из них сделала нашу дружбу крепче.
        </p>
      </div>

      <div className="space-y-6">
        {emotions.map((emotion, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-white p-4 rounded-full shadow-md">
                {emotion.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-700 mb-2">{emotion.title}</h3>
                <p className="text-gray-600 mb-4">{emotion.description}</p>
                <p className="text-gray-500 italic">{emotion.memories}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmotionSection;
