import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectCard";
// import { projectOne, projectTwo, projectThree } from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="AI Chat bot - Genai"
          des=" An AI-powered chatbot built with the MERN stack, featuring secure authentication and chat storage in a database. Leveraging the Google Gemini API for cutting-edge generative AI capabilities, it provides intelligent and engaging conversational experiences."
          src="/genai.jpeg"
          githubLink="https://github.com/probin-dhakal/ai-chatbot-GenieAI.git"
          liveLink="https://ai-chatbot-genieai-frontend.onrender.com"

        />
        <ProjectsCard
          title="A time capsule website -Samayyatra"
          des=" A MERN-based Time Capsule platform with authentication, OTP-based password recovery, and capsule creation. Features include scheduling opening dates, sending messages, 5-day prior reminders, and capsule deletion for a personalized and secure experience."
          src="/samay.jpeg"
          githubLink="https://github.com/probin-dhakal/samayyatra.git"
          liveLink="https://samayyatra-1.onrender.com/"

        />
        <ProjectsCard
          title="A blog website"
          des=" A blog website built with MERN stack, featuring full CRUD functionality. Users can create, update, delete, and manage blogs seamlessly, providing an intuitive platform for sharing and managing content effortlessly."
          src="/blog.jpeg"
          githubLink="https://github.com/probin-dhakal/FinalBlog.git"
          liveLink=""

        />
        <ProjectsCard
          title="AN AI Sales Agent"
          des=" The `AI Phone Agent` handles cold calls and sales using AI, incorporating speech-to-text (STT), text-to-speech (TTS), and large language models (LLMs). It processes user inputs, generates responses, handles tasks like scheduling, and allows real-time voice recording and interaction with AI."
          src="/hack.jpeg"
          githubLink="https://github.com/bignya23/ai-phone-agent"
          liveLink="https://ai-phone-agent-1.onrender.com/"

        />
        <ProjectsCard
          title="Freelanced Portfolio Website"
          des=" A frontend freelance portfolio website built with React, utilizing hooks for state management. It features dynamic navigation, project showcase, contact form, and a theme toggle, offering a professional and interactive user experience."
          src="/freelanced.jpeg"
         
          liveLink="https://www.bibekdhakal.in/"

        />
      </div>
    </section>
  );
};

export default Projects;
