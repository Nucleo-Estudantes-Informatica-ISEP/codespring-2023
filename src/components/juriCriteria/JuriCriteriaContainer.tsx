import juriCriteria from "../../data/juriCriteria.json";

const JuriCriteriaContainer: React.FC = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row lg:flex-wrap">
      {juriCriteria.map((criteria, index) => (
        <div key={index} className="pb-4 md:pr-3">
          <div className="w-64 h-96 mx-auto rounded-xl overflow-hidden bg-background shadow-lg dark:shadow-none border border-none dark:border-solid flex flex-col justify-between">
            <div className="flex flex-col justify-center h-full">
              <div className="px-4 flex flex-col items-center">
                <svg
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-24 h-24 mx-auto"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M48 88C42.4667 88 37.2667 86.9493 32.4 84.848C27.5333 82.7467 23.3 79.8973 19.7 76.3C16.1 72.7 13.2507 68.4667 11.152 63.6C9.05333 58.7333 8.00267 53.5333 8 48C8 42.4667 9.05067 37.2667 11.152 32.4C13.2533 27.5333 16.1027 23.3 19.7 19.7C23.3 16.1 27.5333 13.2507 32.4 11.152C37.2667 9.05333 42.4667 8.00267 48 8C53.5333 8 58.7333 9.05067 63.6 11.152C68.4667 13.2533 72.7 16.1027 76.3 19.7C79.9 23.3 82.7507 27.5333 84.852 32.4C86.9533 37.2667 88.0027 42.4667 88 48C88 53.5333 86.9493 58.7333 84.848 63.6C82.7467 68.4667 79.8973 72.7 76.3 76.3C72.7 79.9 68.4667 82.7507 63.6 84.852C58.7333 86.9533 53.5333 88.0027 48 88ZM48 80C56.9333 80 64.5 76.9 70.7 70.7C76.9 64.5 80 56.9333 80 48C80 39.0667 76.9 31.5 70.7 25.3C64.5 19.1 56.9333 16 48 16C39.0667 16 31.5 19.1 25.3 25.3C19.1 31.5 16 39.0667 16 48C16 56.9333 19.1 64.5 25.3 70.7C31.5 76.9 39.0667 80 48 80ZM48 72C41.3333 72 35.6667 69.6667 31 65C26.3333 60.3333 24 54.6667 24 48C24 41.3333 26.3333 35.6667 31 31C35.6667 26.3333 41.3333 24 48 24C54.6667 24 60.3333 26.3333 65 31C69.6667 35.6667 72 41.3333 72 48C72 54.6667 69.6667 60.3333 65 65C60.3333 69.6667 54.6667 72 48 72ZM48 64C52.4 64 56.1667 62.4333 59.3 59.3C62.4333 56.1667 64 52.4 64 48C64 43.6 62.4333 39.8333 59.3 36.7C56.1667 33.5667 52.4 32 48 32C43.6 32 39.8333 33.5667 36.7 36.7C33.5667 39.8333 32 43.6 32 48C32 52.4 33.5667 56.1667 36.7 59.3C39.8333 62.4333 43.6 64 48 64ZM48 56C45.8 56 43.9173 55.2173 42.352 53.652C40.7867 52.0867 40.0027 50.2027 40 48C40 45.8 40.784 43.9173 42.352 42.352C43.92 40.7867 45.8027 40.0027 48 40C50.2 40 52.084 40.784 53.652 42.352C55.22 43.92 56.0027 45.8027 56 48C56 50.2 55.2173 52.084 53.652 53.652C52.0867 55.22 50.2027 56.0027 48 56Z"
                    fill="white"
                  ></path>
                </svg>
                <p className="mt-2 font-semibold text-lg text-center">{criteria.description}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gray-300 to-gray-500 px-4 py-3">
              <p className="text-white text-center">{criteria.value}%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JuriCriteriaContainer;
