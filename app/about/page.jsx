"use client";

import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutPage = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".hero-text", { y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out" });
    
    gsap.from(".story-section", { 
      y: 50, 
      opacity: 0, 
      duration: 1, 
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".story-section",
        start: "top 80%"
      }
    });

    gsap.from(".value-card", { 
      y: 50, 
      opacity: 0, 
      duration: 0.8, 
      stagger: 0.2, 
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".values-container",
        start: "top 80%"
      }
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto hero-text">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sans hero-text">
            Our Mission is to Simplify Your Finances
          </h1>
          <p className="text-xl text-gray-600 hero-text">
            At SpendWise, we believe that managing money should be intuitive, intelligent, and completely stress-free. We integrate advanced AI to give you the clarity you deserve.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center story-section">
          <div className="rounded-2xl bg-blue-50 overflow-hidden relative min-h-[400px] flex items-center justify-center">
             <div className="text-blue-200 opacity-50 p-8 text-center">
                <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                <p className="text-xl font-semibold">Headquarters</p>
             </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4 whitespace-pre-line">
              SpendWise was born out of shared frustration. Our founders realized that while the world was advancing rapidly with technology, personal finance management was stuck in the past—reliant on complicated spreadsheets or outdated apps.
            </p>
            <p className="text-lg text-gray-600 mb-4 whitespace-pre-line">
              We set out to build a platform that didn't just track numbers, but genuinely understood them. By harnessing the power of artificial intelligence, SpendWise actively helps you save, budget, and achieve your financial goals with personalized insights.
            </p>
            <p className="text-lg text-gray-600">
              Today, thousands of users trust SpendWise to be their financial copilot. We're constantly innovating to bring you the best tools to take total control of your money.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24 values-container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency First",
                description: "We believe you should always know exactly where your money is going and how your data is being used. No hidden fees, no opaque algorithms.",
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                )
              },
              {
                title: "Intelligent Design",
                description: "Complex financial data is simplified through clean, intuitive interfaces and smart categorizations that proactively organize your life.",
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                )
              },
              {
                title: "Uncompromising Security",
                description: "Your financial data is protected with bank-level encryption. We treat your privacy and security as our absolute highest priority.",
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                )
              }
            ].map((value, i) => (
              <Card key={i} className="border-none shadow-md bg-white value-card">
                <CardContent className="p-8">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
