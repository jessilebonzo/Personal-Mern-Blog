/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect } from 'react';
import profileImage from '../assets/final.png';

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://apps.voc.ai/api_v2/gpt/bots/livechat/embed.js?id=19263&token=672CC18EE4B0187418032B8E";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="flex flex-col items-center mb-10 mt-10 bg-gray-800 text-white p-8 rounded-lg m-4">
      <img 
        src={profileImage} 
        alt="Jessile Bonzo" 
        className="w-32 h-32 rounded-full mb-4" 
      />
      <h2 className="text-2xl font-bold mb-2">Jessile Bonzo</h2>
      <p className="text-center mb-2">Hello! I’m Jessile, a 21-year-old IT student at PHINMA-University of Pangasinan. My passion for tech drives me to seek new knowledge and I love attending developer conferences like GDG Devfest, I/O Extended Baguio and BuildWithAI GDG Manila. I also freelance, doing website prototyping with Elementor. Visit my portfolio: <a href="https://jessilebonzo-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-indigo-500">@jessilebonzo</a>

      </p>
      I'm always exploring free coding courses and websites. When I need a break, I enjoy reading self-development, business, novels, and poetry. As a dog lover, I share my home with four wonderful dogs: Zeno, Zander, Ced, and Bigboo, who bring joy and balance to my life.
      <p className="text-center mb-4">Join me on my journey through the exciting world of tech and life with my furry family!</p>
      <div className="flex space-x-4 mb-4">
        <a href="https://leetcode.com/explore/" className="text-indigo-500" aria-label="lc">leetcode</a>
        <a href="https://www.freecodecamp.org/jessile_bonzo" className="text-indigo-500" aria-label="fcc">freecodecamp</a>
        <a href="https://app.codecrafters.io/catalog" className="text-indigo-500" aria-label="crafters">codecrafters</a>
        <a href="https://www.theodinproject.com/paths" className="text-indigo-500" aria-label="odin">Odin Project</a>
      </div>

      <div className="flex space-x-4">
      <a href="https://github.com/jessilebonzo" target="_blank" aria-label="LinkedIn">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 32 32">
      <path fill-rule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path>
      </svg></a>
      
      <a href="https://gitlab.com/jessilebonzo" target="_blank"  aria-label="GitLab">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
      <path fill="#e53935" d="M24 43L16 20 32 20z"></path>
      <path fill="#ff7043" d="M24 43L42 20 32 20z"></path>
      <path fill="#e53935" d="M37 5L42 20 32 20z"></path>
      <path fill="#ffa726" d="M24 43L42 20 45 28z"></path>
      <path fill="#ff7043" d="M24 43L6 20 16 20z"></path>
      <path fill="#e53935" d="M11 5L6 20 16 20z"></path>
      <path fill="#ffa726" d="M24 43L6 20 3 28z"></path>
      </svg></a>


      <a href="https://www.linkedin.com/in/jessile-joyce-bonzo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
        <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
        <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
        </svg></a>


      <a href="mailto:jessilebonzo.dev@gmail.com" target="_blank" aria-label="Email">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
      <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
      <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
      <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon>
      <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path>
      <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
      </svg></a>
      
      </div>
    </div>
  );
}

export default Home;
