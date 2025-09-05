import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How are plans personalized?",
    answer: "Our AI analyzes your fitness level, goals, preferences, available equipment, schedule, and dietary restrictions to create completely customized workout and meal plans. The more you use the app, the smarter it gets at tailoring recommendations specifically for you."
  },
  {
    question: "Is there a free plan?",
    answer: "Yes! Our free plan includes basic AI workout plans, simple meal suggestions, progress tracking, and community access. You can upgrade to Pro for advanced AI coaching, detailed analytics, and premium features when it launches."
  },
  {
    question: "Can I change goals?",
    answer: "Absolutely! You can update your goals anytime in the app settings. Our AI will automatically adjust your workout and meal plans to align with your new objectives, whether it's weight loss, muscle gain, endurance, or overall wellness."
  },
  {
    question: "Which wearables are supported?",
    answer: "Super Coach Pro integrates seamlessly with Apple Health, Google Fit, Fitbit, Garmin, and most popular fitness trackers. We automatically sync your activity data, heart rate, and sleep patterns to provide more accurate AI recommendations."
  },
  {
    question: "How do you handle data privacy?",
    answer: "Your privacy is our top priority. All personal data is encrypted and stored securely. We never sell your information to third parties, and you have full control over your data. You can export or delete your information at any time through the app settings."
  }
];

export function FAQSection() {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Still need help? Contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}