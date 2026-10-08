import { BlogArticle, Bullet, H2, P, Strong } from "@/components/site/BlogArticle";

export default function BlogPostTouch() {
  return (
    <BlogArticle
      title="The last mile of automation is dependable work · CloudBee Robotics"
      heading="The last mile of automation is dependable work"
      description="CloudBee Robotics focuses on practical business value, everyday usability, and the priorities of industrial teams considering automation."
      path="/blog/the-last-mile-is-touch"
      category="Industry"
      date="6 October 2026"
      lede="Useful automation starts with the people and priorities on the production floor."
      closing="What would useful automation look like for your business? Share your priorities and explore a partnership with CloudBee Robotics."
    >
      <P>
        A production team considers quality expectations, staffing, changing demand, and day-to-day usability when
        deciding whether an automation opportunity is worth pursuing. Those are the conversations we want to have
        with industrial partners.
      </P>

      <H2>Focus on the work that matters</H2>
      <P>
        CloudBee's ambition is to make robotics useful for businesses with real operational needs. The starting point
        is understanding the work you want to improve and what a valuable outcome would mean to your team.
      </P>
      <ul className="mt-5 space-y-3">
        <Bullet><Strong>Business relevance.</Strong> Consider opportunities in the context of your priorities.</Bullet>
        <Bullet><Strong>People first.</Strong> Include the perspective of the team that works with automation every day.</Bullet>
        <Bullet><Strong>Clear expectations.</Strong> Agree on the focus of a potential partnership before making commitments.</Bullet>
      </ul>

      <H2>A conversation about your operation</H2>
      <P>
        The most useful discussion begins with your business: where your team needs support, which opportunities
        deserve attention, and how automation fits your plans. We welcome partners who want to explore those
        questions with us.
      </P>
      <P>
        Our focus is practical value and a clear relationship with each partner. If you have an opportunity in mind,
        get in touch to discuss whether a pilot could be a good fit.
      </P>
    </BlogArticle>
  );
}
