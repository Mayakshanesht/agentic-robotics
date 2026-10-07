import { BlogArticle, Bullet, H2, P, Strong } from "@/components/site/BlogArticle";

export default function BlogPost3() {
  return (
    <BlogArticle
      title="Introducing CloudBee Robotics · CloudBee Robotics"
      heading="Introducing CloudBee Robotics"
      description="An RWTH Aachen spin-off building the self-improving OS for robotics: 4D synthetic data with touch and force, generated from one video of a work cell, and open robot models adapted to the cell they run in."
      path="/blog/introducing-cloudbee-robotics"
      category="Announcement"
      date="5 January 2026"
      lede="Describe the task. Deploy the capability. That is the company in one line, and the rest of this post is what stands behind it."
      closing="We run pilots with industrial partners now, and the first version of the web app opens in December 2026. Both start the same way: tell us the task."
    >
      <P>
        Robots on a factory floor are still taught by hand. Teaching one task takes months of specialist time, the
        result works in one cell with one part, and a change to either sends you back to the beginning. The hardware is
        not the constraint any more; robot arms, humanoids and dexterous hands are available to buy. What is missing is
        the capability that runs on them, and the data that capability has to be built from.
      </P>

      <H2>What we build</H2>
      <P>
        We turn a described task into a working skill on the customer's own robot, in their own work cell, and we keep
        it working after it goes live.
      </P>
      <ul className="mt-5 space-y-3">
        <Bullet>
          <Strong>4D synthetic data.</Strong> One walk through the cell with a phone becomes a digital twin. The task
          is then played out in that twin thousands of times, each run recorded with vision, depth, touch and force at
          the same instant. Contact is in the data, which is what separates it from a vision-only dataset.
        </Bullet>
        <Bullet>
          <Strong>World-aware model adaptation.</Strong> We do not train foundation models from scratch. We take the
          best open robot model available and adapt it to the customer's sensors, gripper and task, using data where
          the physics of contact is present rather than implied.
        </Bullet>
        <Bullet>
          <Strong>Validation in the twin.</Strong> Before a skill runs on hardware it is tested against situations it
          never saw during training, in the twin of the cell it will run in.
        </Bullet>
        <Bullet>
          <Strong>A self-improving loop.</Strong> What happens on the line comes back: a new part, a moved fixture, a
          different light. Those situations are regenerated, the data is corrected, the model is corrected, and the
          skill goes back on the robot while production continues.
        </Bullet>
      </ul>
      <P>
        That loop is what we mean when we call it an operating system for robotics. Not a simulator, not a dataset you
        buy once, but one cycle that keeps data, model and robot in step.
      </P>

      <H2>Why now</H2>
      <P>
        Three things changed at once. Open robot foundation models became good enough to be worth adapting rather than
        replacing. Rebuilding a real room as a physically behaving scene stopped being a research project. And GPU
        compute became the cheapest input in robotics, which makes generating training runs cheaper than collecting
        them by hand. The bottleneck moved from models to data, and specifically to data that contains contact.
      </P>

      <H2>Who we are</H2>
      <P>
        CloudBee Robotics is an RWTH Aachen spin-off, built by people who have deployed robots in industry rather than
        only written about them. We are funded by the EXIST Gründungsstipendium of the German Federal Ministry and by a
        WestAI compute grant, both non-dilutive, and advised by Prof. Dr. Bastian Leibe, Chair of Computer Vision at
        RWTH Aachen.
      </P>

      <H2>How to start</H2>
      <P>
        We run pilots with industrial partners: you describe the task, optionally hand us a phone video of the cell,
        and give us access during the pilot and one engineer on your side. The first version of the self-serve web app
        opens in December 2026, and the waitlist is open now. Commercial terms we discuss directly, on your task and
        your robots.
      </P>
    </BlogArticle>
  );
}
