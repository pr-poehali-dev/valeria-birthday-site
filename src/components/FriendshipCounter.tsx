
import { Card } from "@/components/ui/card";

interface FriendshipCounterProps {
  days: number;
  birthdayDate: string;
}

const FriendshipCounter = ({ days, birthdayDate }: FriendshipCounterProps) => {
  return (
    <section className="bg-purple-100 py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-purple-800">Наша дружба в цифрах</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg">
            <div className="text-5xl font-bold text-purple-600 mb-4">{days}</div>
            <h3 className="text-xl font-medium text-gray-700">Дней дружбы</h3>
            <p className="mt-4 text-gray-600">
              Это больше {Math.floor(days/365)} лет непрерывной поддержки, веселья и взаимопонимания!
            </p>
          </Card>
          
          <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg">
            <div className="text-5xl font-bold text-pink-500 mb-4">{birthdayDate}</div>
            <h3 className="text-xl font-medium text-gray-700">День рождения</h3>
            <p className="mt-4 text-gray-600">
              Особенный день, который мы всегда отмечаем с радостью и любовью!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FriendshipCounter;
