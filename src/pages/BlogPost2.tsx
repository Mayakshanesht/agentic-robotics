import { BlogArticle, Bullet, H2, P, Strong } from "@/components/site/BlogArticle";

export default function BlogPost2() {
  return (
    <BlogArticle
      title="Narrowing the sim-to-real gap · CloudBee Robotics"
      heading="Narrowing the sim-to-real gap"
      description="The sim-to-real gap is not a solved problem, and anyone who tells you otherwise is selling something. What we do about it, what it means for a pilot, and what we will and will not publish."
      path="/blog/sim-to-real-gap-solved"
      category="Research"
      date="10 January 2026"
      lede="A model that works in simulation and fails on the robot has not learned the task. It has learned the simulator."
      closing="We would rather show you the gap closing on your own cell than argue about it in a blog post. A pilot starts with one video of the cell."
    >
      <P>
        Every robotics team meets the same wall. The policy succeeds in simulation, the hardware is set up, and on the
        real robot it misses, pushes too hard, or stops the moment anything differs from what it was shown. The gap
        between the two is not one problem. It is a collection of small mismatches that each cost a few percent of
        success, and they add up.
      </P>
      <P>
        We do not claim to have closed that gap. Nobody has. What we claim is narrower and more useful to a plant
        manager: the gap is small enough, on the tasks we take, that a skill built in simulation is worth putting on
        your robot in a fortnight rather than a year.
      </P>

      <H2>Why it costs you, not just the researchers</H2>
      <P>
        The gap is the reason a robot integration quote carries months of on-site tuning. Every percent of transfer
        that is lost in the lab is paid for again on your floor, by your engineers, with your line idle. That is the
        line item we are attacking, and it is why we measure ourselves on your cell rather than on a benchmark.
      </P>

      <H2>What we do about it</H2>
      <P>
        Three things, and none of them involve making the simulation prettier.
      </P>
      <ul className="mt-5 space-y-3">
        <Bullet>
          <Strong>The twin is of your cell.</Strong> Not a generic warehouse scene from a catalogue: the bench at the
          height it actually is, the fixture, the tray, the light. The robot practises in a room that already matches
          the one it will work in.
        </Bullet>
        <Bullet>
          <Strong>Contact is in the data.</Strong> Vision tells a model where an object is; it never tells it that the
          grip is about to slip. Our data carries touch and force at the same instant as the images, so the behaviour
          that transfers is the behaviour that was grounded in contact.
        </Bullet>
        <Bullet>
          <Strong>Nothing reaches your robot untested.</Strong> A skill is put through situations in the twin that it
          never met while training, before it is allowed near hardware. After it goes live, what happens on your line
          comes back and the skill is corrected, while production keeps running.
        </Bullet>
      </ul>

      <H2>What we will and will not publish</H2>
      <P>
        <Strong>World-aware models</Strong> is the shorthand we use for models trained on data where the physics of
        contact is present rather than implied. It is a claim about the data, and it is the kind of claim that should
        be settled on a robot rather than in a chart.
      </P>
      <ul className="mt-5 space-y-3">
        <Bullet>We measure transfer per pilot, on your own task and your own hardware.</Bullet>
        <Bullet>We do not publish averaged success rates we cannot reproduce on your cell.</Bullet>
        <Bullet>Pilot results and technical detail are shared with partners and investors under NDA.</Bullet>
      </ul>
    </BlogArticle>
  );
}
