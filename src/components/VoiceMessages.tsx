
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoiceMessage {
  id: number;
  name: string;
  avatar: string;
  duration: string;
  audioSrc: string;
}

const VoiceMessages = () => {
  const [playing, setPlaying] = useState<number | null>(null);

  const messages: VoiceMessage[] = [
    { id: 1, name: "Маша", avatar: "/placeholder.svg", duration: "0:45", audioSrc: "#" },
    { id: 2, name: "Катя", avatar: "/placeholder.svg", duration: "1:20", audioSrc: "#" },
    { id: 3, name: "Саша", avatar: "/placeholder.svg", duration: "0:32", audioSrc: "#" },
    { id: 4, name: "Миша", avatar: "/placeholder.svg", duration: "2:10", audioSrc: "#" },
  ];

  const togglePlay = (id: number) => {
    if (playing === id) {
      setPlaying(null);
    } else {
      setPlaying(id);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">Голосовые поздравления</h2>
        <p className="text-gray-600">
          Много тёплых слов и пожеланий для тебя от тех, кто тебя любит!
        </p>
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <Card key={message.id} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-purple-200">
                <AvatarImage src={message.avatar} alt={message.name} />
                <AvatarFallback className="bg-purple-100 text-purple-700">
                  {message.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-grow">
                <h3 className="text-lg font-medium text-gray-800">{message.name}</h3>
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="h-1 flex-grow bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-purple-500 ${playing === message.id ? "animate-pulse" : ""}`} style={{ width: "30%" }}></div>
                  </div>
                  <span className="text-sm">{message.duration}</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full"
                onClick={() => togglePlay(message.id)}
              >
                {playing === message.id ? (
                  <Pause className="h-5 w-5 text-purple-600" />
                ) : (
                  <Play className="h-5 w-5 text-purple-600" />
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">Хочешь добавить своё поздравление?</p>
        <Button className="bg-purple-600 hover:bg-purple-700">
          Записать голосовое
        </Button>
      </div>
    </div>
  );
};

export default VoiceMessages;
