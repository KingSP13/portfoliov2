'use client'

import { useState, useEffect } from "react";

import { scrollTop } from "./script";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false)

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header id='pageHeader' className={`w-full text-white flex fixed top-0 ${
            scrolled
              ? " h-16 bg-black opacity-80 transition-all duration-300 ease-in-out "
              : "bg-marrom-bombom h-24 transition-all duration-300 ease-in-out"
          } `}>
            <nav id='navbarWideScreen' className="flex m-auto self-center gap-12 max-w-2xl max-lg:hidden">
                <a onClick={scrollTop} className='hover:text-gray-400'>Home</a>
                <a href="#projects-section" className='hover:text-gray-400'>Projects</a>
                <a href="#whoami-section" className='hover:text-gray-400'>Who am i</a>
                <a href="#social-section" className='hover:text-gray-400'>Send me Hi</a>
            </nav>
            


            <nav id='navbarMobile' className="flex h-full w-full justify-between ml-12 lg:hidden">
                <a onClick={scrollTop} className='self-center cursor-pointer'>
                    <img src="./assets/logo.png" alt="logo" className='h-14'/>
                </a>
                <button 
                    className="ml-auto lg:hidden text-white text-2xl" 
                    onClick={() => setIsOpen(true)}
                >
                    <img src="./assets/burguer.png" alt="burguer menu" className='h-10 self-center mr-3'/>
                </button>
                {isOpen && (
                 <div 
                     className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
                     onClick={closeMenu}
                 ></div>
                )}
                <aside 
                 className={`fixed top-0 right-0 w-[70%] h-full bg-black text-white transform transition-transform 
                             ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
             >
                 <button 
                     className="absolute top-4 right-4 text-2xl text-white"
                     onClick={closeMenu}
                 >
                 <img src="./assets/burguer.png" alt="burguer menu" className='h-10 self-center mr-3'/>
                 </button>
                 <nav className="flex flex-col gap-6 mt-16 px-6 text-lg" onClick={closeMenu}>
                     <a onClick={scrollTop} className="hover:text-gray-400">Home</a>
                     <a href="#projects-section" className="hover:text-gray-400">Projects</a>
                     <a href="#whoami-section" className="hover:text-gray-400">Who am I</a>
                     <a href="#social-section" className="hover:text-gray-400">Send me Hi</a>
                 </nav>
             </aside>
            </nav>
        </header>
)
}

export const HomeSection = () => {
    return (
        <section id="home-section" className="max-w-2xl mx-auto mt-28 text-justify max-lg:mx-6">
            <h1 className="text-4xl my-8">
                Freelancer WebDev.
            </h1>
            <ul className="my-16">
                <li  className="text-2xl">
                JavaScript
                </li>
                <li className="text-2xl">
                React
                </li>
                <li className="text-2xl">
                TailwindCSS
                </li>
            </ul>
            <p className="max-w-xl my-20 mx-auto">
                Here is my 'notebook' about what I study, create, work on and participate in, it's a good way I found to catalog skills and experiences.
            </p>
        </section>
    )
}

export const ProjectsSection = () => {
    return (
        <section id="projects-section" className='max-lg:mx-6'>
          <div className="max-w-2xl m-auto text-justify">
              <h1 className="text-4xl my-8">Projects</h1>
              <p className="max-w-xl mt-10 mb-10 mx-auto">
                Here I can show you a little more about what I'm most proud of in each project I've been involved in. I will point out the main technologies and learnings I obtained in each of them. Remembering that all free projects are available on my GitHub.
              </p>
          </div>
          <div className="grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-0">
              <article className="m-auto text-justify">
                <a href="https://kingsp13.github.io/amazon-clone/" target="_blank">
                    <h2 className="h-fit text-2xl my-8">
                        Amazon Clone
                    </h2>
                    <img src="/project-image/project-amazon-small.png" alt="Project Image" />
                </a>
                <p className="my-8">
                    Developed during the SuperSimpleDev JavaScript course, a clone project for the Amazon company website, starting from the initial responsive layout to implementing all functions such as interaction with the cart, local storage to preserve data when reloading the page, use of the DayJS library for calculation of dates. Implemented MVC design pattern.
                </p>
              </article>
              <article className="m-auto text-justify">
                <a href="https://projetopokedexsd.netlify.app/" target="_blank">
                    <h2 className="h-fit text-2xl my-8">
                        PokeHut Forum
                    </h2>
                    <img src="/project-image/project-pokehut-big.png" alt="Project Image" />
                </a>
                <p className="my-8">
                    Project in progress starting from a beginner project of building a "Pokedex", but with time and implementation of future improvements I hope to make it a social forum for user interactions, login, database, progression of interactions similar to those on the platform "Reddit" and data collection for the possibility of monetizing a salable project.
                </p>
              </article>
              <article className="m-auto text-justify">
                <a href="https://kingsp13.github.io/to-do-list/" target="_blank">
                    <h2 className="h-fit text-2xl my-8">
                        Todo List
                    </h2>
                    <img src="/project-image/project-todolist-big.png" alt="Project Image" />
                </a>
                <p className="my-8">
                    This is a Todo List, one of my first projects when starting more complex concepts in programming, that i made with HTML, CSS and JavaScript that helped me to understand deeply the concept of local storage and a few of their uses, on screen right under the text box are a few instructions abou how to use it.            
                </p>
              </article>
              <article className="m-auto text-justify">
                <a href="https://kingsp13.github.io/rock-paper-scissors/" target="_blank">
                    <h2 className="h-fit text-2xl my-8">
                        Rock, Paper and Scissors
                    </h2>
                    <img src="/project-image/project-rps-big.png" alt="Project Image" />
                </a>
                <p className="my-8">
                    This is a game developed as part of one of the JavaScript courses I've taken. Here, I took my first steps in automating decision-making with the autoplay function, learned a few more concepts about Local Storage and its use in some applications, explored keybinding, and gained a deeper understanding of functions.            
                </p>
              </article>

          </div>
        </section>
    )
}

export const WhoamiSection = () => {
    return (
        <section id="whoami-section" className="max-w-2xl m-auto text-justify max-lg:mx-6">
            <h1 className="text-4xl my-20 max-lg:my-10">
                Who am I
            </h1>
            <div>
                <h1 className="text-4xl text-center">
                    IGOR OLIVEIRA LIMA
                </h1>
            </div>
            <p className="max-w-xl my-20 mx-auto text-center max-lg:my-10">
                Working with technical support since 2018, I have experience as a field service technician, that is, a field technician dealing with small and large companies, ticket screening, emergency management, access management and SegInf IAM, currently in a career transition to development and in the last period of training in ADS, I create projects with JavaScript, React and TailwindCSS. I have adaptability to different themes and audiences, assertive communication and disruptive solutions as relevant qualities for the role            
            </p>
            <div className="flex">
                <button className="m-auto text-black w-full bg-white rounded-md p-2 hover:bg-marrom-bombom border-solid border-2 border-white hover:text-white transition-all duration-300">
                    <a href="/assets/IGOR OLIVEIRA LIMA - DESENVOLVEDOR.pdf" download>
                        Download my CV
                    </a>
                </button>
            </div>
        </section>
    )
}

export const SocialSection = () => {
    return (
        <section id="social-section" className="max-w-2xl w-2/4 m-auto flex justify-around items-center" >
            <a onClick={() => window.scrollTo({ top: 0})} className='self-center cursor-pointer'>
                <img src="./assets/logo.png" alt="logo" className='h-14 self-center max-lg:hidden'/>
            </a>
            <a href="https://www.linkedin.com/in/igor-oliveira-lima/" target="_blank" className='hover:text-gray-400'>LinkedIn</a>
            <a href="mailto:ol.igor98@gmail.com" target="_blank" className='hover:text-gray-400'>Mail</a>
            <a href="https://github.com/KingSP13" target="_blank" className='hover:text-gray-400'>GitHub</a>
        </section>
    )
}