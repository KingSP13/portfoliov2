export const Navbar = () => {
    return (
        <header className="w-full h-24 bg-black text-white flex">
            <nav className="flex m-auto self-center gap-12 max-w-2xl">
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
        <section id="home-section" className="max-w-2xl m-auto text-justify">
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
        <section id="projects-section">
          <div className="max-w-2xl m-auto text-justify">
              <h1 className="text-4xl my-8">Projects</h1>
              <p className="max-w-xl mt-20 mb-12 mx-auto">
                Here I can show you a little more about what I'm most proud of in each project I've been involved in. I will point out the main technologies and learnings I obtained in each of them. Remembering that all free projects are available on my GitHub.
              </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
              <article className="m-auto text-justify">
                <h2 className="h-fit text-2xl my-8">
                    Amazon Clone
                </h2>
                <img src="/project-image/project-amazon-small.png" alt="Project Image" />
                <p className="my-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rem earum in et ipsam delectus nostrum nemo modi quam commodi deserunt adipisci aspernatur, tempore autem libero ullam neque dolore error.
                  Quae ipsa, vel dolorem possimus enim natus ab voluptatem consequuntur ad? Ad dolore fugiat suscipit aliquam molestias, natus adipisci voluptates accusamus ex nihil cum consectetur eius delectus recusandae fugit sequi.
                </p>
              </article>
              <article className="m-auto text-justify">
                <h2 className="h-fit text-2xl my-8">
                    PokeHut Forum
                </h2>
                <img src="/project-image/project-pokehut-big.png" alt="Project Image" />
                <p className="my-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rem earum in et ipsam delectus nostrum nemo modi quam commodi deserunt adipisci aspernatur, tempore autem libero ullam neque dolore error.
                  Quae ipsa, vel dolorem possimus enim natus ab voluptatem consequuntur ad? Ad dolore fugiat suscipit aliquam molestias, natus adipisci voluptates accusamus ex nihil cum consectetur eius delectus recusandae fugit sequi.
                </p>
              </article>
              <article className="m-auto text-justify">
                <h2 className="h-fit text-2xl my-8">
                    Title of the Project
                </h2>
                <img src="/project-image/project-amazon-small.png" alt="Project Image" />
                <p className="my-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rem earum in et ipsam delectus nostrum nemo modi quam commodi deserunt adipisci aspernatur, tempore autem libero ullam neque dolore error.
                  Quae ipsa, vel dolorem possimus enim natus ab voluptatem consequuntur ad? Ad dolore fugiat suscipit aliquam molestias, natus adipisci voluptates accusamus ex nihil cum consectetur eius delectus recusandae fugit sequi.
                </p>
              </article>
              <article className="m-auto text-justify">
                <h2 className="h-fit text-2xl my-8">
                    Title of the Project
                </h2>
                <img src="/project-image/project-amazon-small.png" alt="Project Image" />
                <p className="my-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rem earum in et ipsam delectus nostrum nemo modi quam commodi deserunt adipisci aspernatur, tempore autem libero ullam neque dolore error.
                  Quae ipsa, vel dolorem possimus enim natus ab voluptatem consequuntur ad? Ad dolore fugiat suscipit aliquam molestias, natus adipisci voluptates accusamus ex nihil cum consectetur eius delectus recusandae fugit sequi.
                </p>
              </article>
          </div>
        </section>
    )
}

export const WhoamiSection = () => {
    return (
        <section id="whoami-section" className="max-w-2xl m-auto text-justify">
            <h1>
                Who am I
            </h1>
            <div>
                <h1>
                    IGOR OLIVEIRA LIMA
                </h1>
                <img src="/project-image/profile-pic.jpg" alt="alt-from-photo" className="w-52" />
            </div>
            <p className="max-w-xl my-20 mx-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis labore optio dolor sapiente aut debitis assumenda quis nulla alias, ut, expedita ullam unde provident commodi animi est consequatur natus ad.
                Aperiam magnam illo a tempora error earum cum molestias dicta expedita labore, eius, molestiae tenetur dignissimos quis voluptate ullam provident dolore saepe dolorem. Ea velit iure asperiores nesciunt nobis culpa.
                Itaque tempore optio, impedit vitae aut nihil assumenda incidunt culpa quasi aperiam dolore nisi dolorum atque quaerat exercitationem! Pariatur voluptatem reiciendis deleniti nam aperiam natus numquam quam totam. Vero, at!
            </p>    
        </section>
    )
}

export const SocialSection = () => {
    return (
        <section id="social-section" className="max-w-2xl w-1/4 m-auto flex justify-around">
            <a href="https://www.linkedin.com/in/igor-oliveira-lima/" target="_blank">LinkedIn</a>
            <a href="mailto:ol.igor98@gmail.com" target="_blank">Mail</a>
            <a href="https://github.com/KingSP13" target="_blank">GitHub</a>
        </section>
    )
}