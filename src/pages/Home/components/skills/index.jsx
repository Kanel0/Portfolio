import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  // Skill categories data
  const skillCategories = [
    {
      title: "Frontend Developer",
      items: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
      ],
      animation: "zoom-in",
      duration: 500
    },
    {
      title: "Frontend Libraries & Framework",
      items: [
        "React",
        "Tailwind CSS",
        "Electron",
        "Flutter",
        "Bootstrap",
        "Three.js",
        "TypeScript"
      ],
      animation: "zoom-in",
      duration: 1000
    },
    {
      title: "Design UX/UI",
      items: ["Figma"],
      animation: "zoom-in",
      duration: 1500
    },
    {
      title: "Backend Developer",
      items: ["Firebase", "Next.js", "Node.js", "Java", "PHP"],
      animation: "zoom-in",
      duration: 2000
    },
    {
      title: "CMS",
      items: ["WordPress"],
      animation: "zoom-in",
      duration: 2500
    },
    {
      title: "Database",
      items: ["MongoDB", "MySQL"],
      animation: "zoom-in",
      duration: 3000
    },
    {
      title: "ERP",
      items: ["Odoo", "Dolibarr"],
      animation: "zoom-in",
      duration: 3000
    }
  ];

  // Skill item component
  const SkillItem = ({ name, level }) => (
    <div className="flex items-center justify-between py-2">
      <span className="text-md font-medium text-gray-700">{name}</span>
      {level && (
        <div className="w-40 h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-purple-600 rounded-full" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
      )}
    </div>
  );

  return (
    <section id="skills" className="w-full min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-12 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              data-aos={category.animation}
              data-aos-duration={category.duration}
              className="mb-8"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4 pl-2 border-l-4 border-purple-600">
                {category.title}
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="space-y-3">
                  {category.items.map((item, idx) => (
                    typeof item === 'string' 
                      ? <SkillItem key={idx} name={item} />
                      : <SkillItem key={idx} {...item} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;