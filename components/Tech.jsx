import React from 'react';

const Tech = () => {
  return (
    <>
    <h2 className="text-center text-4xl font-bold  mt-8 -mb-1 md:mb-10">
    My Skills{" "}
  </h2>
    <div className="max-w-[1920px] w-full mx-auto overflow-hidden mt-12 h-24">
      
      <div id="tech-bar" className="flex flex-row justify-center items-center space-x-4 overflow-x-auto">
        <div className="w-16 animate-tech-stack">
          <img src="./images/css.png" alt="css" />
        </div>
        <div className="w-16 animate-tech-stack">
          <img src="./images/git.png" alt="git flow" />
        </div>
        <div className="w-16 animate-tech-stack">
          <img src="./images/github.png" alt="github" />
        </div>
        <div className="w-16 animate-tech-stack">
          <img src="./images/html.png" alt="html" />
        </div>
        <div className="w-16 animate-tech-stack">
          <img src="./images/i18next.png" alt="i18next" />
        </div>
        <div className="w-16 animate-tech-stack">
          <img src="./images/jest.png" alt="jest" />
        </div>
        <div className="w-16 animate-tech-stack">
          <img src="./images/js.png" alt="javascript" />
        </div>
        
        <div className="w-16 animate-tech-stack">
          <img src="./images/next.png" alt="next js" />
        </div>
        <div className="w-16 animate-tech-stack">
          <img src="./images/tailwind.png" alt="tailwind css" />
        </div>
        <div className="w-16 animate-tech-stack">
          <img src="./images/firebase.png" alt="firebase css" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Tech;