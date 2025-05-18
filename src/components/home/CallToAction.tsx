
import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="bg-platform-blue">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          <span className="block">آماده شروع هستید؟</span>
          <span className="block text-platform-teal">امروز به جامعه ما بپیوندید.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-platform-blue bg-white hover:bg-gray-50">
              ثبت‌نام کنید
            </Button>
          </div>
          <div className="mr-4 inline-flex rounded-md shadow">
            <Button variant="outline" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-platform-blue hover:bg-platform-blue/90 border-white">
              بیشتر بدانید
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
