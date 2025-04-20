
import { Card } from "@/components/ui/card";

const PeriodicTableSection = () => {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">Таблица Элементов Нашей Дружбы</h2>
      <p className="text-lg text-center text-gray-700 mb-8">
        Как в химии, наша дружба состоит из множества элементов, которые вместе создают нечто особенное!
      </p>
      <Card className="overflow-hidden shadow-lg">
        <div className="relative">
          <img 
            src="https://cdn.poehali.dev/files/245f83cf-98ed-48c2-b201-fefcdf098025.jpg" 
            alt="Периодическая таблица элементов" 
            className="w-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent pointer-events-none"></div>
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-xl font-medium text-purple-700 mb-2">Химия нашей дружбы</h3>
          <p className="text-gray-700">
            Лера, наша дружба как эта периодическая таблица — состоит из множества особенных моментов, 
            которые вместе создают нерушимую связь. Каждый элемент важен и имеет свое значение!
          </p>
        </div>
      </Card>
    </section>
  );
};

export default PeriodicTableSection;
