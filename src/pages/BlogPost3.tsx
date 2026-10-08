import { BlogArticle, Bullet, H2, P, Strong } from "@/components/site/BlogArticle";

export default function BlogPost3() {
  return (
    <BlogArticle
      title="Introducing CloudBee Robotics · CloudBee Robotics"
      heading="Introducing CloudBee Robotics"
      description="Meet the RWTH Aachen spin-off working to make industrial robots more useful for the people and businesses that depend on them."
      path="/blog/introducing-cloudbee-robotics"
      category="Announcement"
      date="5 January 2026"
      lede="We are CloudBee Robotics, an RWTH Aachen spin-off with an ambition to make robotics more useful in everyday industrial work."
      closing="We welcome industrial partners, future colleagues, and supporters who share our ambition. Tell us where you would like to take robotics next."
    >
      <P>
        We started CloudBee to address a practical question: how can more businesses benefit from robotics? Our
        mission is to bring industrial teams closer to useful automation, with their goals and the people doing the
        work at the center.
      </P>

      <H2>What we stand for</H2>
      <ul className="mt-5 space-y-3">
        <Bullet><Strong>Useful robotics.</Strong> Focus on work that matters to industrial customers.</Bullet>
        <Bullet><Strong>Customer partnerships.</Strong> Listen to the people who understand their operation best.</Bullet>
        <Bullet><Strong>Practical ambition.</Strong> Keep business value and everyday usability in view as we build.</Bullet>
      </ul>

      <H2>Our roots in Aachen</H2>
      <P>
        CloudBee Robotics grew out of the RWTH Aachen ecosystem. We are supported by EXIST funding and a WestAI
        compute grant, and advised by Prof. Dr. Bastian Leibe at RWTH Aachen. We are grateful to the people and
        organizations helping us build the company.
      </P>

      <H2>Build with us</H2>
      <P>
        We are inviting industrial partners to explore pilot opportunities and welcoming people who want to help
        shape our next chapter. Whether you are considering automation, looking for a role, or interested in a
        partnership, we would like to hear from you.
      </P>
    </BlogArticle>
  );
}
