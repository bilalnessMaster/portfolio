
import { About, Contact } from "@/components/about";
import { Footer } from "@/components/footer";
import { Profile } from "@/components/profile";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Wrapper } from "@/components/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Profile />
      <About />
      <Contact />
      <Skills />
      <Projects />
      <Footer/>
    </Wrapper>
  );
}
