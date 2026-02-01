import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star, Award, Building } from "lucide-react";

const testimonials = [
  {
    quote: "CloudBee's approach to synthetic data generation addresses the fundamental bottleneck in robotics training. Their solution has strong commercial potential.",
    author: "Graff Jo",
    organization: "Deloitte",
    role: "Manager",
    rating: 5,
  },
  {
    quote: "The sim-to-real transfer capabilities are impressive. This could accelerate robotic deployment significantly across multiple industries.",
    author: "Dr Tobias Recker",
    organization: "RWTH Innovation",
    role: "Coach",
    rating: 5,
  },
  {
    quote: "CloudBee's platform addresses critical challenges in industrial automation. The synthetic data approach could revolutionize how we train robotic systems.",
    author: "Dr Dominik Boemer",
    organization: "FEV Consulting",
    role: "Manager",
    rating: 5,
  },
];

const achievements = [
  {
    icon: Award,
    title: "Deloitte PSF Graduate",
    description: "Successfully completed rigorous validation program",
    date: "December 2025",
  },
  {
    icon: Building,
    title: "RWTH Acceleration",
    description: "Selected for prestigious innovation program",
    date: "December 2025 - March 2026",
  },
  {
    icon: Building,
    title: "Industry LOI secured",
    description: "Multiple letters of intent from key partners",
    date: "2025",
  },
  {
    icon: Star,
    title: "Industry Recognition",
    description: "Validated by robotics and AI experts",
    date: "Ongoing",
  },
];

export function TrustIndicators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Trusted By Industry Leaders
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Validation & <span className="text-gradient-teal">Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our approach has been validated by leading innovation programs and industry experts.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.organization}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm font-medium text-primary">{testimonial.organization}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="font-display text-xl font-semibold mb-8 text-center text-foreground">
            Key Milestones
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="text-center group"
              >
                <div className="relative mx-auto w-16 h-16 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl w-full h-full flex items-center justify-center border border-primary/20">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h4 className="font-semibold text-foreground text-lg mb-2">
                  {achievement.title}
                </h4>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {achievement.description}
                </p>
                
                <span className="text-xs text-primary font-medium">
                  {achievement.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-green-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
              Ready to Transform Your Robotics Development?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join leading companies leveraging CloudBee's infrastructure to accelerate their robotics initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-access"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
              >
                Request Early Access
              </a>
              <a
                href="/technology"
                className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground font-semibold rounded-xl border border-border hover:bg-secondary transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
