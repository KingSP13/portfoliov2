'use client'

import {useState} from 'react'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full h-24 bg-black text-white flex max-lg:h-14">
            <nav id='navbarWideScreen' className="flex m-auto self-center gap-12 max-w-2xl max-lg:hidden">
                <a href="home-section">Home</a>
                <a href="#projects-section">Projects</a>
                <a href="#whoami-section">Who am i</a>
                <a href="#social-section">Send me Hi</a>
            </nav>
            
            <nav id='navbarMobile' className="flex m-auto self-center gap-12 max-w-2xl lg:hidden">
                <a href="home-section">Home</a>
                <a href="#projects-section">Projects</a>
                <a href="#whoami-section">Who am i</a>
                <a href="#social-section">Send me Hi</a>
            </nav>
        </header>
)
}

export const HomeSection = () => {
    return (
        <section id="home-section" className="max-w-2xl m-auto text-justify max-lg:mx-20">
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
        <section id="projects-section" className='max-lg:mx-20'>
          <div className="max-w-2xl m-auto text-justify">
              <h1 className="text-4xl my-8">Projects</h1>
              <p className="max-w-xl mt-20 mb-12 mx-auto">
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
        <section id="whoami-section" className="max-w-2xl m-auto text-justify max-lg:mx-20">
            <h1 className="text-4xl my-20 max-lg:my-10">
                Who am I
            </h1>
            <div>
                <h1 className="text-4xl text-center">
                    IGOR OLIVEIRA LIMA
                </h1>
            </div>
            <p className="max-w-xl my-20 mx-auto text-center max-lg:my-10">
                Atuando desde 2018 com suporte técnico, tenho experiência como técnico field service, ou seja, técnico de campo e lidando com pequenas e grandes empresas,  triagem de chamados, gerenciamento de urgência, gestão de acessos e SegInf IAM, atualmente em transição de carreira para desenvolvimento e no último período da formação em ADS, crio projetos com JavaScript, React e TailwindCSS. Possuo adaptabilidade a diferentes temas e audiências, comunicação assertiva e soluções disruptivas como qualidades relevantes para a função
            </p>
        </section>
    )
}

export const SocialSection = () => {
    return (
        <section id="social-section" className="max-w-2xl w-2/4 m-auto flex justify-around">
            <a href="https://www.linkedin.com/in/igor-oliveira-lima/" target="_blank">LinkedIn</a>
            <a href="mailto:ol.igor98@gmail.com" target="_blank">Mail</a>
            <a href="https://github.com/KingSP13" target="_blank">GitHub</a>
        </section>
    )
}