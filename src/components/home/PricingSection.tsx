
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "رایگان",
    price: "۰",
    description: "همه امکانات اصلی برای شروع",
    features: [
      "ایجاد پروفایل پایه",
      "جستجوی محدود استارتاپ‌ها و سرمایه‌گذاران",
      "دسترسی به مقالات آموزشی",
      "پشتیبانی ایمیلی",
    ],
    cta: "ثبت‌نام رایگان",
    mostPopular: false,
  },
  {
    name: "استاندارد",
    price: "۲۹",
    description: "برای کاربران حرفه‌ای",
    features: [
      "تمامی امکانات پلن رایگان",
      "جستجوی پیشرفته",
      "درخواست‌های ارتباط نامحدود",
      "اعلان‌های سفارشی",
      "پشتیبانی اولویت‌دار",
    ],
    cta: "شروع کنید",
    mostPopular: true,
  },
  {
    name: "پیشرفته",
    price: "۹۹",
    description: "برای شرکت‌ها و سرمایه‌گذاران بزرگ",
    features: [
      "تمامی امکانات پلن استاندارد",
      "پروفایل ویژه",
      "دسترسی به رویدادهای اختصاصی",
      "گزارش‌های تحلیلی",
      "مشاوره اختصاصی",
      "پشتیبانی VIP",
    ],
    cta: "تماس با ما",
    mostPopular: false,
  },
];

const PricingSection = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl sm:text-center">پلن‌های اشتراک</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            پلن مناسب خود را انتخاب کنید و از امکانات پلتفرم بهره‌مند شوید.
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:mx-auto xl:max-w-none">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 bg-white ${
                tier.mostPopular ? "ring-2 ring-platform-teal" : ""
              }`}
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                  <span className="text-base font-medium text-gray-500">/ماهانه</span>
                </p>
                <Button
                  className={`mt-8 w-full ${
                    tier.mostPopular ? "bg-platform-teal hover:bg-platform-teal/90" : "bg-platform-blue hover:bg-platform-blue/90"
                  }`}
                >
                  {tier.cta}
                </Button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">ویژگی‌ها</h3>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="mr-3 text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
