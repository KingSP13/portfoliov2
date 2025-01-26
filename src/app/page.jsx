// import Image from "next/image";
import {Navbar, HomeSection, ProjectsSection, WhoamiSection, SocialSection} from './components.jsx'

export default function Home() {
  return (
    <body>
      <Navbar />
      <main className='max-w-3xl m-auto mt-16 mb-20'>
        <HomeSection />
        <ProjectsSection />
        <WhoamiSection />
      </main>
      <footer className='h-24 w-full bg-black text-white flex'>
        <SocialSection />
      </footer>
    </body>
  )
}