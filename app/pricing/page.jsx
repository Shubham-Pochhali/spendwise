"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const PricingPage = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".hero-content", { y: 30, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.2 });
    
    gsap.from(".pricing-card", { 
      y: 50, 
      opacity: 0, 
      duration: 0.8, 
      stagger: 0.2, 
      ease: "back.out(1.7)",
      delay: 0.2
    });

    gsap.from(".faq-item", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".faq-container",
        start: "top 85%"
      }
    });
  }, { scope: container });

  const tiers = [
    {
      name: "Basic",
      price: "$0",
      description: "Perfect for individuals just getting started with personal finance.",
      features: [
        "Manual transaction entry",
        "Basic categorization",
        "Monthly spending summary",
        "Email support",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
      popular: false,
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/month",
      description: "Advanced AI tools to supercharge your financial planning.",
      features: [
        "Everything in Basic",
        "AI-powered receipt scanning",
        "Predictive budgeting",
        "Custom categories & tags",
        "Priority 24/7 support",
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$29.99",
      period: "/month",
      description: "For small businesses and advanced wealth management.",
      features: [
        "Everything in Pro",
        "Multi-user accounts",
        "Advanced export capabilities (CSV, API)",
        "Dedicated account manager",
        "Custom financial reports",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false,
    },
  ];

  return (
    <div ref={container} className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto hero-content">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sans">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose the plan that best fits your financial lifestyle. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {tiers.map((tier, index) => (
            <Card 
              key={index} 
              className={'pricing-card relative flex justify-between flex-col ${tier.popular ? "border-blue-600 shadow-xl scale-105 z-10" : "border-gray-200 mt-4 md:mt-0"}'}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 left-0 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider text-center py-1 rounded-t-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className={'${tier.popular ? "pt-10" : ""}'}>
                <CardTitle className="text-2xl font-bold text-gray-900">{tier.name}</CardTitle>
                <CardDescription className="text-gray-600 min-h-[40px]">{tier.description}</CardDescription>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold text-gray-900">
                  {tier.price}
                  {tier.period && (
                     <span className="ml-1 text-xl font-medium text-gray-500">
                       {tier.period}
                     </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard" className="w-full">
                  <Button 
                    variant={tier.buttonVariant} 
                    className="w-full"
                    size="lg"
                  >
                    {tier.buttonText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto faq-container">
           <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Frequently Asked Questions</h2>
           <div className="space-y-6">
              {[
                  { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Prorated charges will be applied automatically." },
                  { q: "What payment methods do you accept?", a: "We accept all major credit cards and debit cards, including Visa, MasterCard, and American Express." },
                  { q: "Is there a free trial for the Pro plan?", a: "Yes, we offer a 14-day free trial on our Pro plan. You get full access to all features so you can test them out before committing." },
              ].map((faq, i) => (
                  <Card key={i} className="border border-gray-200 faq-item">
                      <CardContent className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                          <p className="text-gray-600">{faq.a}</p>
                      </CardContent>
                  </Card>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
