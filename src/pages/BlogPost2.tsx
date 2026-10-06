import { BlogArticle, Bullet, H2, P, Strong } from "@/components/site/BlogArticle";

export default function BlogPost2() {
  return (
    <BlogArticle
      title="Narrowing the sim-to-real gap · CloudBee Robotics"
      heading="Narrowing the sim-to-real gap"
      description="The sim-to-real gap is not a solved problem. What closes most of it in practice: a twin built from the real cell, variation along the things that actually vary, contact in the data, and failures kept rather than filtered out."
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
        We do not claim to have closed that gap. We claim something narrower and more useful: most of it comes from
        four decisions about the data, and those decisions are ours to make.
      </P>

      <H2>Build the twin from the real cell, not from a catalogue</H2>
      <P>
        A generic warehouse scene teaches a robot about a generic warehouse. We rebuild the actual cell from one phone
        video: this bench at this height, this fixture, this tray, this lighting. The robot then practises in a room
        that already matches the one it will work in, which removes a whole class of mismatch before training starts.
      </P>

      <H2>Vary what actually varies</H2>
      <P>
        Randomising everything is a blunt instrument: it costs compute and produces runs no factory will ever see. We
        vary along the dimensions that move in a real cell, and keep the rest fixed. Where a part is placed and how it
        is turned. How heavy or slippery it is. Where the robot stands. How the room is lit through the day. The model
        learns which parts of the world are allowed to change, instead of learning that everything changes at random.
      </P>

      <H2>Put contact in the data</H2>
      <P>
        <Strong>World-aware models</Strong> is the shorthand we use for models trained on data where the physics is
        present rather than implied. Vision tells a model where an object is; it never tells it that the grip is about
        to slip. When touch and force are recorded at the same instant as the images, the model has something to learn
        the physical part of the task from, and the behaviour that transfers is the behaviour that was grounded in
        contact.
      </P>

      <H2>Keep the failures</H2>
      <P>
        A dataset filtered down to successes is a dataset with the interesting half removed. We keep the runs where the
        object slips out, where the grasp lands off-centre, where the approach is a few centimetres short, and label
        what went wrong. Recovery is a behaviour that has to be learned from examples of things going wrong.
      </P>

      <H2>Then test in the twin, and keep testing after deployment</H2>
      <P>
        Before a skill touches the robot it is run in the twin against situations it never saw while training. After it
        goes live, what happens in the cell comes back: a new part, a moved fixture, a different light. Those
        situations are regenerated, the data is corrected, the model is adapted again and retested. The gap is not
        closed once; it is kept closed.
      </P>
      <ul className="mt-8 space-y-3">
        <Bullet>We measure transfer per pilot, on the customer's own task and hardware.</Bullet>
        <Bullet>We do not publish averaged success rates we cannot reproduce on your cell.</Bullet>
        <Bullet>Pilot results and technical detail are shared with partners and investors under NDA.</Bullet>
      </ul>
    </BlogArticle>
  );
}
