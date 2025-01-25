// import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="navOptions">
            <li>
              <a href="home-section">Home</a>
            </li>
            <li>
              <a href="#projects-section">Projects</a>
            </li>
            <li>
              <a href="#whoami-section">Who am i</a>
            </li>
            <li>
              <a href="#social-section">Send me Hi</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="home-section" id="home-section">
          <h1>
            Freelancer WebDev.
          </h1>
            <ul className="skill-list">
              <li className="skills">
                JavaScript
              </li>
              <li className="skills">
                React
              </li>
              <li className="skills">
                TailwindCSS
              </li>
            </ul>
          <p className="intro-text">
            Here is my 'notebook' about what I study, create, work on and participate in, it's a good way I found to catalog skills and experiences.
          </p>
        </section>
        <section className="projects-section" id="projects-section">
          <h1 className="projects-title">Projects</h1>
          <p>
            Here I can show you a little more about what I'm most proud of in each project I've been involved in. I will point out the main technologies and learnings I obtained in each of them. Remembering that all free projects are available on my GitHub.
          </p>
          <article className="project-card">
            <h2>Title of the Project</h2>
            <img src="/project-image/project-amazon-small.png" alt="Project Image" />
            <p className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rem earum in et ipsam delectus nostrum nemo modi quam commodi deserunt adipisci aspernatur, tempore autem libero ullam neque dolore error.
              Quae ipsa, vel dolorem possimus enim natus ab voluptatem consequuntur ad? Ad dolore fugiat suscipit aliquam molestias, natus adipisci voluptates accusamus ex nihil cum consectetur eius delectus recusandae fugit sequi. 
            </p>
          </article>
          <article className="project-card">
            <h2>Title of the Project</h2>
            <img src="/project-image/project-amazon-small.png" alt="Project Image" />
            <p className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rem earum in et ipsam delectus nostrum nemo modi quam commodi deserunt adipisci aspernatur, tempore autem libero ullam neque dolore error.
              Quae ipsa, vel dolorem possimus enim natus ab voluptatem consequuntur ad? Ad dolore fugiat suscipit aliquam molestias, natus adipisci voluptates accusamus ex nihil cum consectetur eius delectus recusandae fugit sequi. 
            </p>
          </article>
          <article className="project-card">
            <h2>Title of the Project</h2>
            <img src="/project-image/project-amazon-small.png" alt="Project Image" />
            <p className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rem earum in et ipsam delectus nostrum nemo modi quam commodi deserunt adipisci aspernatur, tempore autem libero ullam neque dolore error.
              Quae ipsa, vel dolorem possimus enim natus ab voluptatem consequuntur ad? Ad dolore fugiat suscipit aliquam molestias, natus adipisci voluptates accusamus ex nihil cum consectetur eius delectus recusandae fugit sequi. 
            </p>
          </article>
          <article className="project-card">
            <h2>Title of the Project</h2>
            <img src="/project-image/project-amazon-small.png" alt="Project Image" />
            <p className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rem earum in et ipsam delectus nostrum nemo modi quam commodi deserunt adipisci aspernatur, tempore autem libero ullam neque dolore error.
              Quae ipsa, vel dolorem possimus enim natus ab voluptatem consequuntur ad? Ad dolore fugiat suscipit aliquam molestias, natus adipisci voluptates accusamus ex nihil cum consectetur eius delectus recusandae fugit sequi. 
            </p>
          </article>
        </section>
        <section id="whoami-section">
          <h1 className="whoami-title">
            Who am I
          </h1>
          <div className="profile">
            <h1 className="profile-pic-name">
              IGOR OLIVEIRA LIMA
            </h1>
            <img src="/project-image/profile-pic.jpg" className="profile-pic-img" alt="alt-from-photo " />
          </div>
          <p className="profile-resume">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis labore optio dolor sapiente aut debitis assumenda quis nulla alias, ut, expedita ullam unde provident commodi animi est consequatur natus ad.
            Aperiam magnam illo a tempora error earum cum molestias dicta expedita labore, eius, molestiae tenetur dignissimos quis voluptate ullam provident dolore saepe dolorem. Ea velit iure asperiores nesciunt nobis culpa.
            Itaque tempore optio, impedit vitae aut nihil assumenda incidunt culpa quasi aperiam dolore nisi dolorum atque quaerat exercitationem! Pariatur voluptatem reiciendis deleniti nam aperiam natus numquam quam totam. Vero, at!
          </p>
        </section>
        <section className="social-section" id="social-section">
            <a href="https://www.linkedin.com/in/igor-oliveira-lima/" className="social-media" target="_blank">LinkedIn</a>
            <a href="mailto:ol.igor98@gmail.com" className="social-media" target="_blank">Mail</a>
            <a href="https://github.com/KingSP13" className="social-media" target="_blank">GitHub</a>
        </section>
      </main>
    </>
  )
}
