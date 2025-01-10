import React from 'react';

export function Expertise() {
  const technologies = [
    { icon: "https://cdn.simpleicons.org/nextdotjs", name: "Next.js", color: "000000" },
    { icon: "https://cdn.simpleicons.org/mongodb", name: "MongoDB", color: "47A248" },
    { icon: "https://cdn.simpleicons.org/express", name: "Express.js", color: "000000" },
    { icon: "https://cdn.simpleicons.org/react", name: "React.js", color: "61DAFB" },
    { icon: "https://cdn.simpleicons.org/nodedotjs", name: "Node.js", color: "339933" },
    { icon: "https://cdn.simpleicons.org/reactquery", name: "React Query", color: "FF4154" },
    { icon: "https://cdn.simpleicons.org/npm", name: "npm", color: "CB3837" },
    { icon: "https://cdn.simpleicons.org/tailwindcss", name: "TailwindCSS", color: "06B6D4" },
    { icon: "https://cdn.simpleicons.org/javascript", name: "JavaScript", color: "F7DF1E" },
    { icon: "https://cdn.simpleicons.org/typescript", name: "TypeScript", color: "3178C6" },
    { icon: "https://cdn.simpleicons.org/firebase", name: "Firebase", color: "FFCA28" },
    { icon: "https://cdn.simpleicons.org/flask", name: "Flask", color: "000000" },
    { icon: "https://cdn.simpleicons.org/python", name: "Python", color: "3776AB" },
    { icon: "https://cdn.simpleicons.org/docker", name: "Docker", color: "2496ED" },
    { icon: "https://cdn.simpleicons.org/redux", name: "Redux", color: "764ABC" },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Area of Expertise</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-2 group">
            <div
              className="p-4 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl w-16 h-16 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              aria-label={`Technology: ${tech.name}`}
            >
              <img
                src={`${tech.icon}/000000`}
                alt={`${tech.name} logo`}
                className="w-8 h-8 dark:hidden group-hover:hidden transition-all duration-300"
              />
              <img
                src={`${tech.icon}/FFFFFF`}
                alt={`${tech.name} logo`}
                className="w-8 h-8 hidden dark:block group-hover:hidden transition-all duration-300"
              />
              <img
                src={`${tech.icon}/${tech.color}`}
                alt={`${tech.name} logo`}
                className="w-8 h-8 hidden group-hover:block transition-all duration-300"
              />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400 text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

