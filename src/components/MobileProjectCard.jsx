import { Icon } from "@iconify/react";

const MobileProjectCard = ({
  title,
  alt,
  link,
  github,
  cover,
  youTube,
  details,
}) => {
  return (
    <div className="bg-tertiary p-5 sm:w-[360px] w-full min-h-[530px]">
      <div className="relative w-full h-[230px]">
        <img src={cover} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex justify-start m-3">
          <div
            onClick={() => window.open(link, "_blank")}
            className="yellow-purple-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-10"
          >
            <Icon icon="vaadin:eye" style={{ fontSize: "2rem" }} />
          </div>
        </div>
        {youTube && (
          <div className="absolute inset-0 flex justify-center m-3">
            <div
              onClick={() => window.open(youTube, "_blank")}
              className="yellow-purple-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-10"
            >
              <Icon icon="openmoji:youtube" style={{ fontSize: "2rem" }} />
            </div>
          </div>
        )}
        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={() => window.open(github, "_blank")}
            className="yellow-purple-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-10"
          >
            <Icon icon="mdi:github" style={{ fontSize: "2rem" }} />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
        <p className="mt-2 text-secondary text-[14px] text-justify">
          {details}
        </p>
      </div>
    </div>
  );
};

export default MobileProjectCard;
