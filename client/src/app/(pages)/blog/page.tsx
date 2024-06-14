"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Blog() {
  const [posts, setPosts] = useState([
    {
      title: "Steps of creating this project",
      content: [
        {
          paragraph: "First of all , thank you very much for reading this small documentation for my side project 'Astro'. this is just a small practice for using NextJs and Handling API calls , to keep it short i m gonna try to explain my process of thinking and steps i took to creat this.",
          bold: false
        },
        {
        paragraph: "In this project, I built a dynamic and responsive web application using Next.js and Node.js. The application fetches real-time data from the Steam API to display various statuses and user queries. Leveraging the powerful capabilities of Next.js for server-side rendering and Node.js for handling backend operations, I ensured a seamless and efficient data flow. Tailwind CSS was utilized to style the website, enabling a clean and modern design with minimal effort. Throughout the development process, I focused on integrating APIs, handling user inputs, and creating a user-friendly interface that adapts to different screen sizes.",
        image: "/blog1.webp",
        bold: false
          },
        {
          paragraph: "As a passionate gamer who uses Steam daily, I decided to build a project centered around this platform, leveraging the Steam API. The primary API feature I developed calculates the cost of leveling up your Steam account. By simply entering your username and the desired level, the application fetches relevant data from Steam and performs the necessary calculations to provide an accurate cost estimate. Additionally, I implemented a status API that monitors and displays the current status of various Steam services.",
          image: "/blog2.webp",
          bold: false
        },
        {
          paragraph: "After deciding to integrate the Steam API into my project for functionalities like calculating account leveling costs and checking service statuses, I initially faced a CORS error while attempting to fetch data solely from the frontend. Upon researching the issue, I discovered that backend frameworks are often required to circumvent CORS restrictions, especially with certain APIs. Given my familiarity with JavaScript and ongoing learning in web development, I opted to implement Node.js for the backend. ",
          bold: false,
        }
      ]
    },
    {
        title: "Technical things i did",
        content: [
          {
            paragraph: "To ensure the security of my API keys when preparing to make this project public on GitHub, I adhered to best practices by storing sensitive information such as API keys in a .env file. This approach prevents accidental exposure of confidential data. With this initial step in place, I proceeded to structure my backend using Node.js.",
            bold: false  
        },
          {
            paragraph: "API Routes and Functionality",
            bold: true
            },
          {
            paragraph: "- Health Endpoint (/health): This endpoint verifies the operational status of my API, providing a simple check for functionality.",
            bold: false
          },
          {
            paragraph: "- Status Endpoint (/status): Utilizing the Steam API, this endpoint fetches and displays current Steam service statuses. To optimize performance and minimize API calls, I implemented a caching mechanism using cron and fs modules. This ensures data is refreshed at intervals (every five minutes), balancing real-time updates with resource efficiency.",
            bold: false
        },
        {
          paragraph: "- User Information Endpoint (/id): Designed to retrieve specific user information from Steam, this endpoint facilitates queries based on user input. Dependencies like body-parser streamline data transfer from frontend to backend, enhancing interactive capabilities.",
          bold: false
        }
        ,
        {
            paragraph: "The front end",
            bold: true
        },
        {
          paragraph: "Next.js: Chosen for its SSR capabilities, Next.js allowed for faster initial page loads and improved SEO by rendering pages on the server-side. Its file-based routing system simplified navigation and project structure.",
          bold: false
        },
        {
          paragraph: "TypeScript: Integrated to leverage static typing and better code organization. TypeScript ensured early error detection and improved code maintainability throughout the development lifecycle.",
          bold: false
        },
        {
          paragraph: "Tailwind CSS: Adopted for its utility-first approach, Tailwind CSS facilitated rapid UI prototyping and customization without the need for custom CSS. It streamlined frontend development while providing responsive design out of the box.",
          bold: false
        },
        {
          paragraph: "Shadcn: To optimize user interaction, pre-styled components from Shadcn UI were implemented. This library offered ready-to-use UI elements and dark mode support, enhancing user experience based on system preferences.",
          bold: false
        }
        ]
      },
      {
        title: "Conclusion",
        content: [
          {
            paragraph: "In concluding this project,",
            bold: false
          },
          {
          paragraph: "Throughout the development process, I relied on diverse resources such as Stack Overflow for troubleshooting and best practices, as well as leveraging ChatGPT for insights on architectural decisions and optimizing frontend performance. These tools and communities were instrumental in overcoming challenges and expanding my technical proficiency.",
          bold: false
            },
          {
            paragraph: "Looking ahead, I aim to build upon these learnings, continually refining my skills in frontend development and backend integration. By harnessing the power of modern web technologies and collaborative resources, I'm committed to delivering robust, user-centric applications in future projects.",
            bold: false
          },
          {
            paragraph: "Thank you for reading till the end , i hope you enjoyed my little story , be sure to follow my 'LEARN TO CODE' channel , it will have many projects like this in the future and it will always be free @HibaFreelance , you can find the links on the footer , Stay Safe and keep Coding.",
            bold: true,
          }
        ]
      }
  ]);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold my-6">My Blog</h1>
      {posts.map((post, index) => (
        <div key={index} className="w-full max-w-4xl p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold text-center mb-4">{post.title}</h2>
          {post.content.map((section, i) => (
            <div key={i} className="mb-8">
              <p className={`mb-4 text-justify ${section.bold ? 'font-bold' : ''}`}>{section.paragraph}</p>
              {section.image && (
                <div className="flex justify-center">
                  <Image src={section.image} alt={`Blog Image ${i + 1}`} className="rounded-lg max-w-96" />
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

}