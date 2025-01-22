{
  /* Previous code remains the same until Achievement component */
}
import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "./layouts/Title";
// import Title from "../layouts/Title";

const ResumeCard = ({ title, subTitle, result, des }) => (
  <div className="w-full h-1/3 group flex">
    <div className="w-10 h-[6px] bgOpacity mt-16 relative">
      <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
        <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
      </span>
    </div>
    <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
      <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
            {title}
          </h3>
          <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
            {subTitle}
          </p>
        </div>
        <div>
          <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
            {result}
          </p>
        </div>
      </div>
      <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
        {des}
      </p>
    </div>
  </div>
);
const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  // Previous code remains the same...
  const SkillBar = ({ skill, percentage }) => (
    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">{skill}</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
          style={{ width: `${percentage}%` }} // Set width dynamically here
        >
          <span className="absolute -top-7 right-0">{percentage}%</span>
        </motion.span>
      </span>
    </div>
  );
  

  const Education = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2018-Till date
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Electronic & Communication Engineering"
            subTitle="National Institute of Technology, Silchar (2023-2027)"
            result="8.46/10 (upto 3rd sem)"
            des="B.Tech ECE student passionate about electronics, communication, programming, innovation, and solving real-world challenges."
          />
          <ResumeCard
            title="Science student with PCMB"
            subTitle="Utopian Academy, Silapathar (2020 - 2022)"
            result="87%"
            des="Successfully completed my 12th grade in PCMB with 87%, showcasing a strong foundation in science and academics."
          />
          <ResumeCard
            title="High School Graduate"
            subTitle="Diamond English School, Dimow (2018 - 2020)"
            result="85%"
            des="Successfully completed my 10th grade with 85%, building a strong academic foundation and excelling in core subjects."
          />
        </div>
      </div>
    </motion.div>
  );

  const Skills = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Frontend Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar skill="HTML 5" percentage={100} />
          <SkillBar skill="CSS" percentage={90} />
          <SkillBar skill="Javascript" percentage={70} />
          <SkillBar skill="React" percentage={80} />
          <SkillBar skill="Tailwind CSS" percentage={85} />
          <SkillBar skill="BootStrap" percentage={90} />
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Backend Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar skill="Node.js" percentage={70} />
          <SkillBar skill="Express" percentage={85} />
          <SkillBar skill="Mongodb" percentage={80} />
          <SkillBar skill="Authentication & Authorization" percentage={90} />
          <SkillBar skill="Deployment" percentage={80} />
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Others Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar skill="C" percentage={70} />
          <SkillBar skill="C++" percentage={90} />
          <SkillBar skill="Generative AI" percentage={70} />
          <SkillBar skill="Python" percentage={70} />
          <SkillBar skill="Github" percentage={90} />
          <SkillBar skill="Web Hosting" percentage={85
            
          } />
          <SkillBar skill="VS Code" percentage={80} />
        </div>
      </div>
    </motion.div>
  );

//   const Experience = () => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="py-12 font-titleFont flex gap-20"
//     >
//       <div>
//         <div className="flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
//           <h2 className="text-4xl font-bold">Job Experience</h2>
//         </div>
//         <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="Sr. Software Engineer"
//             subTitle="Google Out Tech - (2017 - Present)"
//             result="USA"
//             des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
//           />
//           <ResumeCard
//             title="Web Developer & Trainer"
//             subTitle="Apple Developer Team - (2012 - 2016)"
//             result="MALAYSIA"
//             des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
//           />
//           <ResumeCard
//             title="Front-end Developer"
//             subTitle="Nike - (2020 - 2011)"
//             result="Oman"
//             des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
//           />
//         </div>
//       </div>
//       <div>
//         <div className="flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
//           <h2 className="text-4xl font-bold">Trainer Experience</h2>
//         </div>
//         <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="Gym Instructor"
//             subTitle="Rainbow Gym Center (2015 - 2020)"
//             result="DHAKA"
//             des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
//           />
//           <ResumeCard
//             title="Web Developer and Instructor"
//             subTitle="SuperKing College (2010 - 2014)"
//             result="CANADA"
//             des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
//           />
//           <ResumeCard
//             title="School Teacher"
//             subTitle="Kingstar Secondary School (2001 - 2010)"
//             result="NEVADA"
//             des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
//           />
//         </div>
//       </div>
//     </motion.div>
//   );

//   const Achievement = () => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="py-12 font-titleFont flex gap-20"
//     >
//       {/* Achievement content same as before */}
//       <div>
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
//           <h2 className="text-4xl font-bold">Company Experience</h2>
//         </div>
//         <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="Lorem ipsum dolor sit amet."
//             subTitle="Lorem ipsum dolor sit amet alternative."
//             result="Success"
//             des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//           />
//           <ResumeCard
//             title="Lorem ipsum dolor sit amet."
//             subTitle="Lorem ipsum dolor sit amet alternative."
//             result="Success"
//             des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//           />
//           <ResumeCard
//             title="Lorem ipsum dolor sit amet."
//             subTitle="Lorem ipsum dolor sit amet alternative."
//             result="Success"
//             des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//           />
//         </div>
//       </div>
//       <div>
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
//           <h2 className="text-4xl font-bold">Job Experience</h2>
//         </div>
//         <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="Lorem ipsum dolor sit amet."
//             subTitle="Lorem ipsum dolor sit amet alternative."
//             result="Success"
//             des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//           />
//           <ResumeCard
//             title="Lorem ipsum dolor sit amet."
//             subTitle="Lorem ipsum dolor sit amet alternative."
//             result="Success"
//             des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//           />
//           <ResumeCard
//             title="Lorem ipsum dolor sit amet."
//             subTitle="Lorem ipsum dolor sit amet alternative."
//             result="Success"
//             des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {["education", "skills"].map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full mt-10">
        {activeTab === "education" && <Education />}
        {activeTab === "skills" && <Skills />}
        {/* {activeTab === "experience" && <Experience />}
        {activeTab === "achievement" && <Achievement />} */}
      </div>
    </section>
  );
};

export default Resume;
