const CONTACT = "mayur.waghchoure@cloudbeerobotics.de";

const confidentialAnswer =
  `We share company information and customer benefits here. Proprietary methods, customer identities and project details are handled in confidential discussions. Contact our team at /contact or ${CONTACT}.`;

// Approved marketing answers only. Visitor input selects an answer and is never
// echoed, executed or used as instructions to generate new claims.
export function publicAnswer(question: string): string {
  const text = question.toLowerCase();

  if (/\b(customer|client|partner)s?\b.*\b(name|names|list|who|logo|logos|results?|contract|data)\b|\bwho\b.*\b(customer|client|partner)s?\b|\b(source|code|algorithm|architecture|dataset|training|model|pipeline|prompt|secret|internal|proprietary|confidential|benchmark|nda)\b/.test(text)) {
    return confidentialAnswer;
  }
  if (/\b(career|careers|job|jobs|thesis|theses|apply|application|deadline|hiring)\b/.test(text)) {
    return "Explore our engineering roles and three external master's thesis opportunities in Aachen at /careers. Thesis applications close 30 October 2026, with university registration planned for November 2026.";
  }
  if (/\b(invest|investment|investor|investors|funding|deck|raise|raising)\b/.test(text)) {
    return "Investors can meet the team and request a confidential discussion at /contact?interest=Investment. Learn more at /investors.";
  }
  if (/\b(price|pricing|cost|costs|rate|rates|quote|budget|commercial)\b/.test(text)) {
    return "We discuss commercial terms directly, based on your task and your robots. Tell us about your application at /contact.";
  }
  if (/\b(location|where|based|aachen|backed|supporters|university)\b/.test(text)) {
    return "CloudBee Robotics is an RWTH Aachen spin-off in Aachen, Germany, supported by EXIST and WestAI, with a hardware lab at the Collective Incubator.";
  }
  if (/\b(robot|robots|arm|arms|humanoid|humanoids|hand|hands|support)\b/.test(text)) {
    return "We work on capabilities for robot arms, humanoids and dexterous hands. Tell us about your robot and task at /contact so we can discuss a suitable pilot.";
  }
  if (/\b(sector|sectors|industry|industries|manufacturing|automotive|logistics|electronics|battery)\b/.test(text)) {
    return "We work with industrial teams in manufacturing, automotive, electronics, battery technology and logistics. Explore customer benefits at /why-cloudbee.";
  }
  if (/\b(pilot|pilots|demo|demonstration|start|started|task|customer|customers)\b/.test(text)) {
    return "Tell us the task you want to automate and what success would look like. Our team will discuss a pilot scope and next steps with you at /contact?interest=Pilot%20Program.";
  }
  return `CloudBee Robotics helps industrial teams turn everyday tasks into useful robot capabilities. Explore /pilots, see opportunities at /careers, or contact us at /contact or ${CONTACT}.`;
}
