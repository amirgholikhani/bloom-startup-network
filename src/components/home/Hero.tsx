
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 bg-white">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">اتصال ایده‌های</span>
                <span className="block text-platform-blue">خلاقانه به سرمایه</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                پلتفرمی برای اتصال بنیانگذاران استارتاپ‌ها و سرمایه‌گذاران. ایده‌های نوآورانه را به سرمایه متصل کنید و آینده‌ای روشن بسازید.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-platform-blue hover:bg-platform-blue/90 md:py-4 md:text-lg md:px-10">
                    شروع کنید
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-platform-blue bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    بیشتر بدانید
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-platform-blue/10" />
        <div className="h-56 w-full bg-platform-blue/5 sm:h-72 md:h-96 lg:w-full lg:h-full" />
      </div>
    </div>
  );
};

export default Hero;
