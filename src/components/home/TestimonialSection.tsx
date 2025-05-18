
import React from "react";

const testimonials = [
  {
    content:
      "با استفاده از این پلتفرم توانستم به سرعت با سرمایه‌گذاران مناسب برای استارتاپم ارتباط برقرار کنم و در مدت کوتاهی سرمایه مورد نیاز را جذب کردم.",
    author: "علی محمدی",
    role: "بنیانگذار تک‌نوا",
  },
  {
    content:
      "به عنوان یک سرمایه‌گذار، این پلتفرم به من امکان می‌دهد تا استارتاپ‌های نوآور و با پتانسیل را شناسایی کنم و فرصت‌های سرمایه‌گذاری مناسبی داشته باشم.",
    author: "مریم احمدی",
    role: "مدیر صندوق سرمایه‌گذاری آینده",
  },
  {
    content:
      "سهولت استفاده و امکانات پیشرفته این پلتفرم، فرایند ارتباط با سرمایه‌گذاران را بسیار آسان کرده است. واقعاً تحول بزرگی در اکوسیستم استارتاپی ایجاد کرده است.",
    author: "حسین کریمی",
    role: "بنیانگذار دیجی‌تک",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-platform-teal">نظرات کاربران</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            از تجربیات کاربران ما بشنوید
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            بنیانگذاران و سرمایه‌گذارانی که با استفاده از پلتفرم ما به موفقیت رسیده‌اند.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-platform-blue/20 flex items-center justify-center text-platform-blue">
                  {testimonial.author[0]}
                </div>
                <div className="mr-4">
                  <h4 className="text-lg font-medium text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <blockquote>
                <p className="text-gray-600 leading-relaxed">"{testimonial.content}"</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
