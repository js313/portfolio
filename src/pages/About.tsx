import React from "react";

const About: React.FC = () => {
  return (
    <div className="p-12">
      <h2 className="text-3xl font-bold">About Me</h2>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Brief Bio</h3>
        <p className="text-gray-600">
          I'm Jeenit Sharma, a web developer, creative coder, and game maker
          with a passion for building interactive, engaging digital experiences.
          I specialize in React, Unity, and game development, constantly
          exploring new tools and frameworks.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Skills</h3>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Web Development (React, JavaScript, TypeScript)</li>
          <li>Game Development (Unity, Godot, C#)</li>
          <li>Creative Coding (p5.js, Processing)</li>
          <li>Backend Development (Node.js, AWS, Java, Spring Boot)</li>
          <li>Responsive Design (TailwindCSS, CSS, HTML)</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">My Resume</h3>
        <p className="text-gray-600">You can download my resume below:</p>
        <a
          href="/path/to/resume.pdf"
          download
          className="text-blue-500 hover:underline mt-2 block"
        >
          Download Resume
        </a>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Connect With Me</h3>
        <div className="space-x-4">
          <a href="#" className="text-blue-500 hover:underline">
            GitHub
          </a>
          <a href="#" className="text-blue-500 hover:underline">
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-blue-500 hover:underline"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
