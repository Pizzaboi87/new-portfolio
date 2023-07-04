import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({ experience, experienceSection, darkMode }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: darkMode ? '#2c2744' : '#c2dae6',
      color: darkMode ? '#ffffff' : '#000000',
    }}
    contentArrowStyle={{
      borderRight: `7px solid ${darkMode ? '#ff8d00' : '#58a9ff'}`,
    }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div
        className={`${
          darkMode ? 'border-color__dark' : 'border-color__light'
        } flex justify-center items-center w-full h-full`}
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-full h-full rounded-full object-contain"
        />
      </div>
    }
  >
    <div>
      <h3
        className={`${
          darkMode ? 'text-orange' : 'text-blue'
        } text-[24px] font-bold`}
      >
        {experience.title}
      </h3>
      <p
        className={`${
          darkMode ? 'text-secondary' : 'text-secondaryLight'
        } text-[16px] font-semibold`}
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    {experienceSection && (
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={`${
              darkMode ? 'text-white' : 'text-black'
            } text-[14px] pl-1 tracking-wider`}
          >
            {point}
          </li>
        ))}
      </ul>
    )}
  </VerticalTimelineElement>
);

export default ExperienceCard;
