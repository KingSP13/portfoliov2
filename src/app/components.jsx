export const Navbar = () => {
    return (
        <header className="w-full h-24 bg-black text-white">
            <nav>
                <ul>
                    <a href="home-section">Home</a>
                    <a href="#projects-section">Projects</a>
                    <a href="#whoami-section">Who am i</a>
                    <a href="#social-section">Send me Hi</a>
                </ul>
            </nav>
        </header>
)
}

export const HomeSection = () => {
    return (
        <section id="home-section">
          <h1>
            Freelancer WebDev.
          </h1>
            <ul>
              <li>
                JavaScript
              </li>
              <li>
                React
              </li>
              <li>
                TailwindCSS
              </li>
            </ul>
          <p>
            Here is my 'notebook' about what I study, create, work on and participate in, it's a good way I found to catalog skills and experiences.
          </p>
        </section>
    )
}

export const ProjectsSection = () => {
    return (
        <section id="projects-section">
          <h1>Projects</h1>
          <p>
            Here I can show you a little more about what I'm most proud of in each project I've been involved in. I will point out the main technologies and learnings I obtained in each of them. Remembering that all free projects are available on my GitHub.
          </p>
          <article>
            <h2>Title of the Project</h2>
            <img src="/project-image/project-amazon-small.png" alt="Project Image" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rem earum in et ipsam delectus nostrum nemo modi quam commodi deserunt adipisci aspernatur, tempore autem libero ullam neque dolore error.
              Quae ipsa, vel dolorem possimus enim natus ab voluptatem consequuntur ad? Ad dolore fugiat suscipit aliquam molestias, natus adipisci voluptates accusamus ex nihil cum consectetur eius delectus recusandae fugit sequi. 
            </p>
          </article>
          <article>
            <h2>Title of the Project</h2>
            <img src="/project-image/project-amazon-small.png" alt="Project Image" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rem earum in et ipsam delectus nostrum nemo modi quam commodi deserunt adipisci aspernatur, tempore autem libero ullam neque dolore error.
              Quae ipsa, vel dolorem possimus enim natus ab voluptatem consequuntur ad? Ad dolore fugiat suscipit aliquam molestias, natus adipisci voluptates accusamus ex nihil cum consectetur eius delectus recusandae fugit sequi. 
            </p>
          </article>
          <article>
            <h2>Title of the Project</h2>
            <img src="/project-image/project-amazon-small.png" alt="Project Image" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rem earum in et ipsam delectus nostrum nemo modi quam commodi deserunt adipisci aspernatur, tempore autem libero ullam neque dolore error.
              Quae ipsa, vel dolorem possimus enim natus ab voluptatem consequuntur ad? Ad dolore fugiat suscipit aliquam molestias, natus adipisci voluptates accusamus ex nihil cum consectetur eius delectus recusandae fugit sequi. 
            </p>
          </article>
          <article>
            <h2>Title of the Project</h2>
            <img src="/project-image/project-amazon-small.png" alt="Project Image" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rem earum in et ipsam delectus nostrum nemo modi quam commodi deserunt adipisci aspernatur, tempore autem libero ullam neque dolore error.
              Quae ipsa, vel dolorem possimus enim natus ab voluptatem consequuntur ad? Ad dolore fugiat suscipit aliquam molestias, natus adipisci voluptates accusamus ex nihil cum consectetur eius delectus recusandae fugit sequi. 
            </p>
          </article>
        </section>
    )
}

export const WhoamiSection = () => {
    return (
        <section id="whoami-section">
            <h1>
                Who am I
            </h1>
            <div>
                <h1>
                    IGOR OLIVEIRA LIMA
                </h1>
                <img src="/project-image/profile-pic.jpg" alt="alt-from-photo " />
            </div>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis labore optio dolor sapiente aut debitis assumenda quis nulla alias, ut, expedita ullam unde provident commodi animi est consequatur natus ad.
                Aperiam magnam illo a tempora error earum cum molestias dicta expedita labore, eius, molestiae tenetur dignissimos quis voluptate ullam provident dolore saepe dolorem. Ea velit iure asperiores nesciunt nobis culpa.
                Itaque tempore optio, impedit vitae aut nihil assumenda incidunt culpa quasi aperiam dolore nisi dolorum atque quaerat exercitationem! Pariatur voluptatem reiciendis deleniti nam aperiam natus numquam quam totam. Vero, at!
            </p>    
        </section>
    )
}

export const SocialSection = () => {
    return (
        <section id="social-section">
            <a href="https://www.linkedin.com/in/igor-oliveira-lima/" target="_blank">LinkedIn</a>
            <a href="mailto:ol.igor98@gmail.com" target="_blank">Mail</a>
            <a href="https://github.com/KingSP13" target="_blank">GitHub</a>
        </section>
    )
}