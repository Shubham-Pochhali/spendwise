"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".hero-content", { y: 30, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.2 });
    gsap.from(".contact-info-card", {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      delay: 0.2
    });
    gsap.from(".contact-form", {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.5
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto hero-content">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sans">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600">
            Have a question or need support? Our team is here to help you navigate your financial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
             <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
             
             <Card className="border-none shadow-sm bg-blue-50 contact-info-card">
               <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full text-white">
                      <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600 mb-1">Our friendly team is here to help.</p>
                    <a href="mailto:support@spendwise.com" className="text-blue-600 font-medium hover:underline">
                      support@spendwise.com
                    </a>
                  </div>
               </CardContent>
             </Card>

             <Card className="border-none shadow-sm bg-blue-50 contact-info-card">
               <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full text-white">
                      <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600 mb-1">Come say hello at our office HQ.</p>
                    <p className="text-gray-900 font-medium">
                      Connaught Place,<br />
                      Block A<br />
                      New Delhi, DL 110001
                    </p>
                  </div>
               </CardContent>
             </Card>

             <Card className="border-none shadow-sm bg-blue-50 contact-info-card">
               <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full text-white">
                      <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600 mb-1">Mon-Fri from 8am to 5pm.</p>
                    <a href="tel:+15551234567" className="text-gray-900 font-medium hover:text-blue-600">
                      +1 (555) 123-4567
                    </a>
                  </div>
               </CardContent>
             </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg border-gray-200 contact-form">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none text-gray-700">Full Name</label>
                  <Input id="name" placeholder="Rahul Sharma" className="w-full" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none text-gray-700">Email Address</label>
                  <Input id="email" type="email" placeholder="rahul@example.com" className="w-full" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium leading-none text-gray-700">Subject</label>
                  <Input id="subject" placeholder="How can we help you?" className="w-full" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    placeholder="Tell us a little about your issue..."
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
