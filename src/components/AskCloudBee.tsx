import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_CONTEXT = `You are the CloudBee Robotics assistant - a friendly, helpful guide on the CloudBee Robotics website. Help visitors understand what CloudBee Robotics does, answer warmly and concisely, and point them to the right next step.

WHO WE ARE:
- CloudBee Robotics helps companies put robots to work faster. We turn a task description into a safety-validated, self-improving robot capability.
- A deep-tech startup from RWTH Aachen, Germany, backed by the EXIST grant and a WestAI compute grant.
- We work with humanoids, robotic arms and mobile robots (AMRs) and are hardware-agnostic (ROS 2).

WHAT WE HELP WITH (outcomes, not methods):
- Onboard a new robot or task in days, not months.
- Generate multimodal synthetic experience so teams need far less real-world data.
- Train task AI models and validate safety before anything runs on a real robot.
- Deploy fleets that keep improving themselves, with real-time (6G-ready) intelligence.
- Industries: automotive, manufacturing, logistics, healthcare and AI research.

HOW TO HELP:
- Be warm, human and brief. No hype, no jargon. Point to a next step: book a demo (/contact), request early access (/request-access), see roles (/careers), or email mayur.waghchoure@cloudbeerobotics.com.
- If you don't know something, say so and offer to connect them with the team. Never invent facts, numbers, customers, prices or dates.

NEVER DISCUSS (politely deflect):
- Any code, software implementation or how it's built; system architecture, algorithms, model names, training methods or datasets; benchmarks, financials, fundraising, roadmap dates, or customer names.
- For these say: "That's part of our proprietary technology, so I can't get into the details here - but our team shares a technical brief with partners under NDA. Would you like to book a demo?"

TONE: Friendly, confident, supportive - like a great customer-success teammate. Keep replies short.`;

const STARTERS = [
  "What does CloudBee Robotics do?",
  "Which robots do you support?",
  "How do I book a demo?",
];

export function AskCloudBee() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (preset?: string) => {
    const userMessage = (preset ?? input).trim();
    if (!userMessage || isLoading) return;

    if (!preset) setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://jylhsfklzzbawcgiptwa.supabase.co/functions/v1/ask-cloudbee`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [
              { role: "system", content: SYSTEM_CONTEXT },
              ...messages,
              { role: "user", content: userMessage },
            ],
          }),
        }
      );

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm having trouble connecting right now. Please try again later or reach out through our Request Access form.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[500px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">Ask CloudBee Robotics</h3>
                  <p className="text-xs text-muted-foreground">Here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground text-sm py-6">
                  <Bot className="w-10 h-10 mx-auto mb-3 text-primary/50" />
                  <p className="mb-1 text-foreground">Hi! I'm the CloudBee Robotics assistant.</p>
                  <p className="text-xs mb-5">Ask about what we do, who we help, or how to get started.</p>
                  <div className="flex flex-col gap-2">
                    {STARTERS.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="text-left text-xs px-3 py-2 rounded-lg border border-border bg-background/60 text-foreground/90 hover:border-primary/50 hover:text-foreground transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-3 py-2 rounded-xl text-sm ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted px-3 py-2 rounded-xl">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:0.1s]" />
                        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-3 border-t border-border bg-muted/20">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about CloudBee Robotics..."
                  className="flex-1 bg-background"
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
