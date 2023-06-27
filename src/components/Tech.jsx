import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="w-[200%] h-20 mt-20 bg-[#feffee] border-t-2 border-b-2 border-orange overflow-hidden">
      <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-12 animate">
        {technologies.map((tech, index) => {
          return (
            <img
              key={`${tech.name}-${index}`}
              src={tech.icon}
              alt={tech.name}
              className="h-[80%] w-[80%]"
            />
          );
        })}

        {technologies.map((tech, index) => {
          return (
            <img
              key={`${tech.name}-${index}`}
              src={tech.icon}
              alt={tech.name}
              className="h-[80%] w-[80%]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
