import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Factory, Package, CheckCircle, TrendingUp } from "lucide-react";
import useCase1Img from "@/assets/use-case-1.png";
import useCase2Img from "@/assets/use-case-2.png";

const useCases = [
  {
    icon: Factory,
    title: "Manufacturing Automation",
    subtitle: "Assembly & Quality Control",
    description: "Complex, multi-step assembly operations with real-time quality inspection and adaptive handling of variation.",
    image: useCase1Img,
    benefits: [
      "Complex, multi-step assembly operations",
      "Real-time quality inspection", 
      "Adaptive handling of variation",
      "Reduced downtime and faster commissioning"
    ]
  },
  {
    icon: Package,
    title: "Logistics & Warehousing", 
    subtitle: "Pick, Pack & Fulfillment",
    description: "Intelligent handling of diverse inventory with adaptation to changing environments and scalable, continuous operation.",
    image: useCase2Img,
    benefits: [
      "Intelligent handling of diverse inventory",
      "Adaptation to changing environments",
      "Scalable, continuous operation",
      "Improved throughput and accuracy"
    ]
  }
];

const UseCases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
                Real-World <span className="text-gradient-teal">Applications</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CloudBee supports robotics teams operating in complex, high-impact industrial environments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-secondary/30">
          <div className="section-container">
            <div className="space-y-16">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                        <useCase.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl lg:text-3xl font-bold mb-2">
                          {useCase.title}
                        </h2>
                        <p className="text-primary font-semibold">{useCase.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                      {useCase.description}
                    </p>
                    <div className="space-y-3">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-accent flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
                      <img 
                        src={useCase.image} 
                        alt={useCase.title}
                        className="w-full h-auto object-contain max-h-96"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why CloudBee */}
        <section className="py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gradient-to-r from-primary/5 to-green-accent/5 rounded-2xl p-8 border border-primary/20">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="font-display text-2xl font-bold mb-4">
                  Built for Scale, Not Demos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Traditional robotics pipelines struggle to scale across environments and use cases. 
                  CloudBee enables faster iteration and deployment where reliability matters most.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;
