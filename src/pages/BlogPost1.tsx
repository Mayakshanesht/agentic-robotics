import { BlogArticle, Bullet, H2, P, Strong } from "@/components/site/BlogArticle";

export default function BlogPost1() {
  return (
    <BlogArticle
      title="Helping robots become useful at work · CloudBee Robotics"
      heading="Helping robots become useful at work"
      description="CloudBee Robotics is working to make industrial automation more accessible, with customer needs and business priorities at the center."
      path="/blog/why-physical-ai-needs-4d-synthetic-data"
      category="Company"
      date="15 January 2026"
      lede="The value of a robot is the work it helps people accomplish. That is the ambition behind CloudBee Robotics."
      closing="Have an automation opportunity in mind? Tell us what matters to your business and let us explore whether a pilot is a good fit."
    >
      <P>
        Industrial teams balance quality, staffing, changing customer demand, and the daily need to keep work moving.
        Automation has to earn its place within those priorities. Our aim is to make robotics a practical option for
        businesses looking for support with repetitive work.
      </P>

      <H2>Start with the business need</H2>
      <P>
        We want the conversation to begin with your goals: the work you would like to improve, the people involved,
        and what a worthwhile outcome would mean to your team. Relevance to your operation matters when considering
        an investment.
      </P>
      <ul className="mt-5 space-y-3">
        <Bullet><Strong>Practical value.</Strong> Focus on the opportunities that matter to your business.</Bullet>
        <Bullet><Strong>Usability.</Strong> Keep the needs of the people using automation in view.</Bullet>
        <Bullet><Strong>Clear expectations.</Strong> Discuss the scope and goals of a potential partnership openly.</Bullet>
      </ul>

      <H2>A more accessible future for robotics</H2>
      <P>
        Our ambition is to help more industrial teams consider robotics with confidence. We believe useful automation
        should support the people doing the work and fit the priorities of the business adopting it.
      </P>
      <P>
        Every opportunity is different. We welcome conversations with industrial partners who want to explore the
        possibilities for their operation and decide what makes commercial sense together.
      </P>
    </BlogArticle>
  );
}
