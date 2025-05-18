
import React from "react";
import { Users, DollarSign, Briefcase } from "lucide-react";

const features = [
  {
    name: "ارتباط با سرمایه‌گذاران",
    description: "به راحتی با سرمایه‌گذاران معتبر و علاقه‌مند به حوزه کاری شما ارتباط برقرار کنید.",
    icon: Users,
  },
  {
    name: "معرفی استارتاپ",
    description: "استارتاپ خود را با جزئیات کامل معرفی کنید و در معرض دید سرمایه‌گذاران مناسب قرار دهید.",
    icon: Briefcase,
  },
  {
    name: "فرصت‌های سرمایه‌گذاری",
    description: "به عنوان سرمایه‌گذار، به طیف وسیعی از فرصت‌های سرمایه‌گذاری در استارتاپ‌های نوآور دسترسی داشته باشید.",
    icon: DollarSign,
  },
];

const FeatureSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-platform-teal">ویژگی‌ها</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            راهی بهتر برای ارتباط و رشد
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            پلتفرم ما امکانات متنوعی را برای بنیانگذاران استارتاپ‌ها و سرمایه‌گذاران فراهم می‌کند.
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative animate-fade-in">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-platform-blue text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mr-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 mr-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
