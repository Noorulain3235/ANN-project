import React, { useState } from "react";

const categories = ["Art Direction", "Illustration", "Design", "Creative"];

const images = [
  // 🎨 Art Direction (7 images)
  {
    category: "Art Direction",
    src: "Screenshot 2025-10-12 103840.png",
    title: "The Convention",
    subtitle: "Art Direction",
  },
  {
    category: "Art Direction",
    src: "Screenshot 2025-10-12 103810.png",
    title: "Surfing Life",
    subtitle: "Art Direction",
  },
  {
    category: "Art Direction",
    src: "Screenshot 2025-10-12 103907.png",
    title: "Modern Aesthetics",
    subtitle: "Art Direction",
  },
  {
    category: "Art Direction",
    src: "Screenshot 2025-10-12 104008.png",
    title: "Minimal Life",
    subtitle: "Art Direction",
  },
  {
    category: "Art Direction",
    src: "Screenshot 2025-10-12 104023.png",
    title: "Digital Dreams",
    subtitle: "Art Direction",
  },
  {
    category: "Art Direction",
    src: "Screenshot 2025-10-12 104042.png",
    title: "Visual Journey",
    subtitle: "Art Direction",
  },
  {
    category: "Art Direction",
    src: "Screenshot 2025-10-12 103937.png",
    title: "Imagination",
    subtitle: "Art Direction",
  },
    // 🖌️ Illustration (7 images)
  {
    category: "Illustration",
    src: "Screenshot 2025-10-12 104314.png",
    title: "Fantasy World",
    subtitle: "Illustration",
  },
  {
    category: "Illustration",
    src: "Screenshot 2025-10-12 104249.png",
    title: "Vector City",
    subtitle: "Illustration",
  },
  {
    category: "Illustration",
    src: "Screenshot 2025-10-12 104457.png",
    title: "Abstract Portrait",
    subtitle: "Illustration",
  },
  {
    category: "Illustration",
    src: "Screenshot 2025-10-12 104428.png",
    title: "Color Splash",
    subtitle: "Illustration",
  },
  {
    category: "Illustration",
    src: "Screenshot 2025-10-12 104406.png",
    title: "Creative Lines",
    subtitle: "Illustration",
  },
  {
    category: "Illustration",
    src: "Screenshot 2025-10-12 104442.png",
    title: "Pixel Art",
    subtitle: "Illustration",
  },
  {
    category: "Illustration",
    src: "images (7).jfif",
    title: "Surreal Dreams",
    subtitle: "Illustration",
  },

  // 🧩 Design (7 images)
  {
    category: "Design",
    src: "Screenshot 2025-10-12 104555.png",
    title: "UI Concepts",
    subtitle: "Design",
  },
  {
    category: "Design",
    src: "Screenshot 2025-10-12 104537.png",
    title: "Grid Systems",
    subtitle: "Design",
  },
  {
    category: "Design",
    src: "Screenshot 2025-10-12 104621.png",
    title: "Typography Play",
    subtitle: "Design",
  },
  {
    category: "Design",
    src: "Screenshot 2025-10-12 104457.png",
    title: "Layout Balance",
    subtitle: "Design",
  },
  {
    category: "Design",
    src: "Screenshot 2025-10-12 104637.png",
    title: "Minimal Aesthetic",
    subtitle: "Design",
  },
  {
    category: "Design",
    src: "Screenshot 2025-10-12 104704.png",
    title: "Form & Function",
    subtitle: "Design",
  },
  {
    category: "Design",
    src: "Screenshot 2025-10-12 104823.png",
    title: "Clean Mockup",
    subtitle: "Design",
  },

  // 💡 Creative (7 images)
  {
    category: "Creative",
    src: "Screenshot 2025-10-12 104805.png",
    title: "Imagination Flow",
    subtitle: "Creative",
  },
  {
    category: "Creative",
    src: "Screenshot 2025-10-12 104729.png",
    title: "Cosmic Art",
    subtitle: "Creative",
  },
  {
    category: "Creative",
    src: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=800&q=60",
    title: "Dreamscape",
    subtitle: "Creative",
  },
  {
    category: "Creative",
    src: "Screenshot 2025-10-12 104911.png",
    title: "Visual Fusion",
    subtitle: "Creative",
  },
  {
    category: "Creative",
    src: "Screenshot 2025-10-12 104748.png",
    title: "Bright Minds",
    subtitle: "Creative",
  },
  {
    category: "Creative",
    src: "Screenshot 2025-10-12 104855.png",
    title: "Conceptual Flow",
    subtitle: "Creative",
  },
  {
    category: "Creative",
    src: "Screenshot 2025-10-12 104836.png",
    title: "Modern Creativity",
    subtitle: "Creative",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("Art Direction");
  const filteredImages = images.filter((img) => img.category === active);

 return (
  <section className="bg-[#141926] px-6 py-12">
    {/* Category Buttons */}
    <div className="flex flex-wrap justify-start gap-2 md:gap-8 md:mb-12 mb-16">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`text-gray-300 md:text-lg text-sm relative transition-all duration-300 
            hover:text-white ${
              active === cat ? "text-white after:w-full" : "after:w-0"
            } 
            after:block after:h-[2px] after:bg-teal-400 after:mt-1 after:transition-all after:duration-300`}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* Responsive Layout */}
    <div
      className="grid gap-4 mx-auto"
      style={{
        maxWidth: "1200px",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
    >
      {filteredImages.slice(0, 7).map((img, i) => {
        // Conditional styling for specific images
        let extraClass = "";
        if (i === 3) {
          // 4th image → taller
          extraClass = "lg:row-span-2 lg:h-[500px]";
        } else if (i === 5 ) {
          // 6th & 7th images → wider
          extraClass = "lg:col-span-2 h-[250px]";
        }

        return (
          <div
            key={i}
            className={`relative group overflow-hidden  
              transition-all duration-500 
              ${
                i === 0
                  ? "lg:col-span-2 lg:row-span-2 lg:h-[500px]"
                  : "h-[250px]"
              }
              ${extraClass}`}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-contain transform group-hover:scale-110 transition-all 
              duration-500"
            />
            {/* Hover Overlay */}
            <div
              className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
              transition-all duration-500 flex flex-col justify-end p-6"
            >
              <h3 className="text-white text-xl font-semibold">{img.title}</h3>
              <p className="text-gray-300 text-sm">{img.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
}