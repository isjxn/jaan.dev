import Link from "next/link";
import BigListItem from "./components/BigListItem";
import HomePageSection from "./components/HomePageSection";
import IconLink from "./components/IconLink";
import ScalingText from "./components/ScalingText";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'jaan.dev | Home',
  description: 'Portfolio of Jan Niklas Diederich',
}

export default function Home() {
  return (
    <main className="bg-background text-text scroll-container">
      <HomePageSection>
        <div>
          <ScalingText text="Hey My Name Is Jan And I'm.." />
          <ol className="">
            <BigListItem element={<p>A <span className="text-primary">Professional</span> <span className="text-accent">Android</span> Developer</p>} />
            <BigListItem element={<p>Sometimes Building <span className="text-primary">Full-Stack</span> <span className="text-accent">Web</span> Apps</p>} />
            <BigListItem element={<p><span className="text-primary">Trying</span> To Make <span className="text-accent">Games</span></p>} />
            <BigListItem element={<p>Interested In Building <span className="text-primary">Innovative</span> <span className="text-accent">Projects</span></p>} />
          </ol>
        </div>
      </HomePageSection>

      <HomePageSection>
        <ScalingText text="You can find me here.."></ScalingText>
        <div className="flex justify-center items-center flex-col sm:flex-row gap-8">
          <IconLink href="https://www.linkedin.com/in/jan-niklas-diederich-a81725263">
            <FaLinkedin size="60" />
          </IconLink>

          <IconLink href="https://github.com/isjxn">
            <FaGithub size="60" />
          </IconLink>

          <IconLink href="https://twitter.com/jaanisdev">
            <FaXTwitter size="60" />
          </IconLink>
        </div>
      </HomePageSection>

      <HomePageSection>
        <Link href="/legalnotice">
          <ScalingText text="Legal Notice" />
        </Link>
        <Link href="/privacy">
          <ScalingText text="Privacy" />
        </Link>
      </HomePageSection>
    </main>
  )
}
