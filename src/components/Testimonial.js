import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Judith Black",
    title: "CEO of Workcation",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I love DoomSpray",
    rating: 5
  },
  {
    id: 2,
    name: "John Doe",
    title: "Founder of Startly",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "This changed my life.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Ate, served so hard",
    rating: 5
  },
  {
    id: 4,
    name: "Michael Chen",
    title: "CTO of TechVille",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "WOOO",
    rating: 5
  }
];

export default function Testimonial() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-4xl font-Khand text-center text-gray-900 mb-8 md:mb-12">
          What People Are Saying
        </h2>

        <div className="relative">

          <div className="overflow-x-auto pb-8 -mx-4 no-scrollbar">
            <div className="flex gap-6 px-4 w-max">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-[85vw] md:w-[32rem] bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 fill-current text-yellow-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.955L10 0l2.946 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                
                  <p className="text-lg text-gray-700 mb-8 italic">
                    "{testimonial.text}"
                  </p>

                 
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Scroll Hint */}
          <div className="md:hidden text-center mt-4">
            <span className="inline-block px-3 py-1 text-xs text-gray-500 bg-gray-100 rounded-full">
              ← Scroll to view more →
            </span>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styling - add to your global CSS */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}