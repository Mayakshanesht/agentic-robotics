import { BlogArticle, Bullet, H2, P, Strong } from "@/components/site/BlogArticle";

const gaps = [
  {
    t: "An interface between sensors.",
    b: "Optical sensors give high resolution but are bulky; magnetic skins are fast and small but coarser. A real robot will need different sensors on different body parts, and today they do not speak a common language. A unified tactile representation is the missing building block.",
  },
  {
    t: "Cost and consistency together.",
    b: "Many sensors are still mixed, painted and coated by hand. Prices must fall, but unit-to-unit consistency matters just as much, so that one model works across a fleet.",
  },
  {
    t: "Open data and shared benchmarks.",
    b: "Tactile data is scarce and siloed; every lab re-collects the same physical interactions. Tactile sensing needs its ImageNet moment: agreed collection protocols (standard stimuli, forces and contact trajectories), shared datasets and reproducible benchmarks, ideally stewarded by a consortium rather than one company.",
  },
];

export default function BlogPostTouch() {
  return (
    <BlogArticle
      title="The last mile is touch · CloudBee Robotics"
      heading="The last mile is touch: why robots need to feel to finish the job"
      description="Vision gets a robot to the object. Touch is what lets it finish the job. Where tactile sensing is a requirement, why robot skin wears out, and what has to happen before touch reaches every production robot."
      path="/blog/the-last-mile-is-touch"
      category="Research"
      date="6 October 2026"
      lede="Vision gets a robot to the object. Touch is what lets it finish the job."
      closing="This is the part of the task we build data for: the moment of contact, recorded with touch and force alongside vision, and generated at a scale no one can reach by hand."
    >
      <P>
        Watch almost any manipulation demo and you will see the same pattern. A camera locates the cup, plans a grasp,
        and the gripper closes. Then, at the moment of contact, the robot goes blind. The fingers hide the object, the
        object hides the table, and what actually matters next (how hard it is pressing, whether the cup is slipping,
        whether the plug has seated) is invisible to the camera.
      </P>
      <P>
        Humans solve this without thinking. We find keys in a pocket, judge a fabric by rubbing it, and push a USB plug
        in by feel. Robots mostly cannot, yet. Tactile sensing is the missing sense, and over the last five years the
        research has moved from "can a robot feel?" to "what can a robot learn from feeling?" This post covers where
        touch is non-negotiable, the engineering problems that keep it out of production, and the research from Prof.
        Shan Luo's group at King's College London that is starting to solve them.
      </P>

      <H2>Where touch is a requirement, not an upgrade</H2>
      <P>
        A useful test: if the information you need only exists at the contact point, no camera will give it to you.
        Four task families pass that test.
      </P>
      <ul className="mt-5 space-y-3">
        <Bullet>
          <Strong>Material assessment.</Strong> A camera sees hair or fabric; it cannot tell you how smooth, stiff or
          grippy it is. Consumer-goods companies still pay human panels to judge products by hand, which is slow,
          costly and subjective. Vision-based tactile sensors capture fiber distribution and surface texture that a
          simple friction measurement misses, and that richer signal can be mapped onto the scores human assessors
          give.
        </Bullet>
        <Bullet>
          <Strong>Contact-rich cleaning.</Strong> When a robot wipes a table, its own hand blocks the view. Applied
          force, residual dirt and coverage have to be sensed through the wipe.
        </Bullet>
        <Bullet>
          <Strong>Insertion and assembly.</Strong> Plugging in a connector is governed by reaction forces from the
          socket. The final millimetres are a force problem, not a vision problem.
        </Bullet>
        <Bullet>
          <Strong>Transparent and hard-to-see objects.</Strong> Depth cameras return almost nothing on glass. In Luo's
          group's work, vision supplies only sparse cues, such as the rim of a cup, and touch then confirms the edges
          and estimates how the object stands before completing the grasp.
        </Bullet>
      </ul>
      <P>
        The common thread: vision can get a robot most of the way through a task. Touch is the last-mile solver that
        turns an attempt into a completion.
      </P>

      <H2>The hidden cost: robot skin wears out</H2>
      <P>
        The part of a tactile sensor that touches the world is a soft elastomer, and it wears like skin. Painted layers
        thin, shear loads tear the surface, and the contact layer may need replacing every few months, or after about a
        year with gentle use. The pad itself costs a few dollars. That is not the problem.
      </P>
      <P>
        The problem is the model. A force-prediction model is calibrated to one specific skin: its stiffness, its
        thickness, its exact alignment on the sensor. Swap the skin and those properties shift slightly, and the model
        that was accurate yesterday is quietly wrong today. Even an unchanged sensor drifts from its factory
        calibration with use. Multiply that by every fingertip on every robot in a fleet and recalibration becomes an
        operations burden.
      </P>
      <P>
        <Strong>GenForce</Strong> reframes this. Instead of recalibrating each sensor from scratch, it treats
        calibration as a transfer problem: a force model trained on one sensor is adapted to another with far less new
        data. The transfer works across elastomer changes on the same sensor, across different vision-based sensors
        such as GelSight and TacTip, and even across sensing principles, for example from an optical sensor to a
        magnetic skin like XELA's uSkin. The same mechanism lets a deployed sensor keep its force predictions accurate
        as it ages.
      </P>
      <P>
        The implication is significant. If knowledge learned on one sensor carries over to the next, tactile data stops
        being locked to a single piece of hardware. The dataset becomes the durable asset, and sensors become
        interchangeable inputs to it. Hardware still matters, since no model can recover a signal the sensor never
        measured, but it becomes part of an interoperable ecosystem rather than a silo.
      </P>

      <H2>Learn with touch, deploy with vision</H2>
      <P>
        <Strong>ViTacGen</Strong> asks a different question: once a robot has learned from touch, does it always need
        the tactile hardware at deployment?
      </P>
      <P>
        For some tasks, no. In object pushing, what the robot really needs from contact is the object's geometry.
        ViTacGen trains with vision and touch together, so the model learns the relationship between what the camera
        sees and what the fingertip would feel. At deployment, the camera alone carries that learned contact knowledge.
      </P>
      <P>
        This is not an argument against tactile sensors. It is closer to how people work: we have touched enough things
        that we can look at a surface and predict it is soft, rough or slippery. That prediction exists only because of
        earlier physical experience. Tactile hardware generates the experience, data captures it, and models make it
        transferable.
      </P>
      <P>
        GenForce and ViTacGen are complementary. One makes touch portable across sensors; the other makes it portable
        into vision. Both point to the same conclusion: the lasting value in tactile robotics sits in the data and the
        learned representations, not only in the fingertip.
      </P>

      <H2>There is no best sensor, only the best robot for the task</H2>
      <P>
        Robotics usually builds the hardware first and writes the algorithm afterwards. That order leaves performance
        on the table, because the right fingertip depends on the job.
      </P>
      <P>
        A parallel gripper with flat, cube-shaped tactile pads handles a phone or a mug well, but struggles to lift a
        sheet of paper or a piece of cloth. Luo's group built <Strong>RoTipBot</Strong> with cylindrical, finger-like
        tips that roll across a thin object and use shear force to pick it up, something a flat pad cannot do. Shape,
        not sensing resolution, was the deciding factor.
      </P>
      <P>
        <Strong>TacDiff</Strong> generalises that lesson. It uses differentiable simulation to optimise the finger's
        morphology, the elastomer's material properties and the control policy together, starting from the task. A
        delicate-handling task may call for a soft tip with high force sensitivity. An assembly insertion may favour a
        stiffer finger with sensing concentrated where contact reveals misalignment. The design question shifts from
        "which tactile sensor is best?" to "which tactile robot is best for this job?"
      </P>

      <H2>From lab to warehouse: what industry needs, and what is still missing</H2>
      <P>
        The industrial pull is already visible. Unilever has worked with Luo's group to replace subjective hand-feel
        panels for hair and fabric with tactile measurements that line up with human judgement. Ocado's automated
        grocery warehouses still route delicate items such as fruit to people, because robots there cannot sense how
        hard they are squeezing. Force-aware grasping is exactly the gap tactile sensing closes.
      </P>
      <P>Three things stand between today's research and touch on every production robot:</P>
      <ol className="mt-5 space-y-4">
        {gaps.map((item, i) => (
          <li key={item.t} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
              {i + 1}
            </span>
            <p className="text-[17px] leading-relaxed text-[#13233B]">
              <Strong>{item.t}</Strong> {item.b}
            </p>
          </li>
        ))}
      </ol>
      <P>
        The field is already moving in this direction. Tactile research has shifted from designing new hardware toward
        foundation models, simulation and scalable data. In five years, the warehouse robot will not just look at a
        box. It will know what it is holding, what it is made of, and how much force it can safely apply.
      </P>
      <P>That is the difference between a robot that attempts work and one that completes it.</P>

      <H2>Further reading</H2>
      <ul className="mt-5 space-y-3">
        <Bullet>GenForce: cross-sensor transfer of tactile force prediction (Luo group, King's College London)</Bullet>
        <Bullet>ViTacGen: visuo-tactile learning for vision-only deployment</Bullet>
        <Bullet>TacDiff and RoTipBot: task-driven co-design of tactile fingers and control policies</Bullet>
      </ul>
    </BlogArticle>
  );
}
