import { BlogArticle, Bullet, H2, P, Strong } from "@/components/site/BlogArticle";

export default function BlogPost1() {
  return (
    <BlogArticle
      title="Why physical AI needs 4D synthetic data · CloudBee Robotics"
      heading="Why physical AI needs 4D synthetic data"
      description="Robot training data is still collected one demonstration at a time, mostly vision only. The missing dimensions are time and contact. What 4D synthetic data is, where it comes from, and why a model that has to touch things needs it."
      path="/blog/why-physical-ai-needs-4d-synthetic-data"
      category="Technology"
      date="15 January 2026"
      lede="Language models had the internet. Robots have no such corpus: data of a machine touching the world has to be produced, not scraped."
      closing="This is the data we generate for industrial cells: one video in, a twin and thousands of recorded runs out, with touch and force on every frame."
    >
      <P>
        Robot training data is still collected the way it was ten years ago: a person teleoperates the robot through a
        task, over and over, and every demonstration costs an hour of someone's day. The result is a dataset that is
        small, expensive, specific to one cell, and almost always vision only. Change the part, move the fixture, light
        the room differently, and the collection starts again.
      </P>

      <H2>The missing dimensions are time and contact</H2>
      <P>
        Most robot datasets are a stack of images with an action attached. That is enough to learn where an object is.
        It is not enough to learn what happens during the half second that decides the task: the fingers close, the
        object is hidden by the hand, the grip either holds or starts to slip, and the force has to be adjusted before
        anything visible goes wrong.
      </P>
      <P>
        <Strong>4D synthetic data</Strong> is our name for data that carries both of those dimensions. Not a static 3D
        scene, and not a single trajectory through it, but the task unfolding in a scene that behaves physically, with
        every moment recorded through every sensor at once:
      </P>
      <ul className="mt-5 space-y-3">
        <Bullet>what the cameras see, from the head and from the wrist;</Bullet>
        <Bullet>how far away everything is, from depth;</Bullet>
        <Bullet>what the fingertips feel, pad by pad, as contact begins;</Bullet>
        <Bullet>how much force the grip applies and what each joint carries.</Bullet>
      </ul>
      <P>
        The fourth dimension is time, and what makes the data worth generating is that contact is in it. A dataset of
        pixels teaches a robot where things are. A dataset that includes touch and force teaches it how hard to hold
        them.
      </P>

      <H2>Where the data comes from</H2>
      <P>
        It starts with one walk through the work cell with a phone. From that video we rebuild the cell as a digital
        twin: the benches, the fixtures, the parts, close enough to practise in. Then the task is played again and
        again in that twin, with the object moved and turned, the robot standing somewhere else, the part heavier or
        more slippery, the room lit differently. Thousands of runs, each recorded with vision, depth, touch and force
        at the same instant.
      </P>
      <P>
        The hard runs are kept, including the ones that fail. A dataset of clean successes teaches a robot the easy
        half of the job. The runs where the part slips, or the grasp lands slightly off, are the ones that make a
        trained model recover instead of stall.
      </P>

      <H2>Why synthetic, and why now</H2>
      <P>
        Because it scales with GPUs instead of with people. Human demonstrations scale linearly with headcount and
        patience; generated runs scale with compute, which is the one input in robotics that has been getting cheaper.
        And because the situations that matter least often happen on demand: you cannot ask a production line to drop
        a part a thousand times so the robot can learn what that feels like.
      </P>
      <P>
        What synthetic data does not do is remove the real world from the loop. The twin is built from a real cell, the
        skill is tested in that twin before it runs, and what happens on the line comes back as data that corrects both.
        That loop, not the generator on its own, is what makes the skill keep working after week one.
      </P>

      <H2>What we are aiming for</H2>
      <P>
        Our target in a pilot is about two weeks from a described task to a working skill, with one engineer on the
        customer's side rather than an R&amp;D team. Those are targets for our pilot programme, not guarantees, and we
        report the measured result per pilot rather than publishing an average we cannot stand behind. Pilot results and
        technical detail are shared with partners and investors under NDA.
      </P>
    </BlogArticle>
  );
}
