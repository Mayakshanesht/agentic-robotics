import { BlogArticle, Bullet, H2, P, Strong } from "@/components/site/BlogArticle";

export default function BlogPost2() {
  return (
    <BlogArticle
      title="Building confidence in industrial automation · CloudBee Robotics"
      heading="Building confidence in industrial automation"
      description="A useful robotics partnership starts with business goals, clear expectations, and a shared view of what value means for your operation."
      path="/blog/sim-to-real-gap-solved"
      category="Partnerships"
      date="10 January 2026"
      lede="A robotics partnership should give you a clear view of the opportunity and the business goals it could serve."
      closing="Considering automation for your operation? Share your priorities with us and explore a potential pilot."
    >
      <P>
        Choosing automation is a business decision. Production teams need to consider the work involved, the people
        affected, and how an investment fits their broader plans. CloudBee Robotics aims to make those conversations
        practical and focused on the customer's priorities.
      </P>

      <H2>What matters to your team?</H2>
      <P>
        The right starting point is the challenge you want to address. Your business may be looking to support staff
        with repetitive work, accommodate changing demand, or explore a new automation opportunity. We want to
        understand what success would mean in your context.
      </P>

      <H2>What to expect from the conversation</H2>
      <ul className="mt-5 space-y-3">
        <Bullet><Strong>Customer focus.</Strong> Your goals and constraints guide the discussion.</Bullet>
        <Bullet><Strong>Clear scope.</Strong> Discuss the opportunity, priorities, and commercial expectations together.</Bullet>
        <Bullet><Strong>Honest communication.</Strong> Ask questions and make decisions with a shared understanding of the proposed partnership.</Bullet>
      </ul>

      <H2>Explore an opportunity with CloudBee</H2>
      <P>
        We welcome industrial partners interested in exploring where robotics could support their business. A pilot
        offers a focused way to consider a specific opportunity. Scope and commercial terms are discussed directly
        with each partner.
      </P>
    </BlogArticle>
  );
}
