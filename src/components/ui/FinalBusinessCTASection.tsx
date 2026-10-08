"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const FinalBusinessCTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-white/80 backdrop-blur-[2px] border-t border-[rgba(15,23,42,0.06)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Heading & Vision */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF1F4] border border-[rgba(15,23,42,0.08)] text-[#3155FF] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>

              <h2 className="text-4xl sm:text-6xl lg:text-[62px] font-[750] text-[#101216] tracking-tight leading-[1.06]">
                Let&apos;s Build <br /> What&apos;s Next.
              </h2>

              <p className="text-base sm:text-lg text-[#3155FF] font-semibold">
                Your Next Technology Advantage Starts Here.
              </p>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                Connect directly with our engineering and architecture leadership. Whether you are modernizing legacy infrastructure, constructing cloud data platforms, or rolling out autonomous AI systems, we are ready to partner.
              </p>

              {/* Direct Details */}
              <div className="pt-4 space-y-2.5 text-xs text-[#6B7280] font-mono">
                <div>GLOBAL HUBS: Nagpur · Pune · Dubai</div>
                <div>ENTERPRISE RESPONSE: Within 24 Business Hours</div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="relative rounded-2xl p-7 sm:p-10 bg-[#F6F7F9]/90 border border-[rgba(15,23,42,0.08)] shadow-[0_12px_36px_-12px_rgba(15,23,42,0.06)]">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-[750] text-[#101216]">
                      Conversation Initiated
                    </h3>
                    <p className="text-sm text-[#4B5563] max-w-md mx-auto">
                      Thank you for reaching out, {formData.name || "partner"}. An executive technical partner will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", organization: "", message: "" });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-white border border-[rgba(15,23,42,0.1)] text-xs font-semibold text-[#17191D] hover:bg-[#EEF1F4] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#17191D]">
                          Name <span className="text-[#3155FF]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[rgba(15,23,42,0.1)] text-xs sm:text-sm text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF] transition-all"
                        />
                      </div>

                      {/* Work Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#17191D]">
                          Work Email <span className="text-[#3155FF]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rahul@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[rgba(15,23,42,0.1)] text-xs sm:text-sm text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF] transition-all"
                        />
                      </div>
                    </div>

                    {/* Organization */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#17191D]">
                        Organization <span className="text-[#3155FF]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Company or Enterprise Name"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[rgba(15,23,42,0.1)] text-xs sm:text-sm text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF] transition-all"
                      />
                    </div>

                    {/* How Can We Help */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#17191D]">
                        How Can We Help? <span className="text-[#3155FF]">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your technical goals, data challenges, or AI initiatives..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[rgba(15,23,42,0.1)] text-xs sm:text-sm text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-7 bg-[#101216] hover:bg-[#3155FF] text-white font-[550] text-sm rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-2 group hover:-translate-y-0.5 disabled:opacity-70"
                    >
                      <span>{isSubmitting ? "Submitting..." : "Start a Conversation"}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-[11px] text-center text-[#6B7280] font-mono">
                      Strict NDA & Confidentiality Standard · No Spam Guaranteed
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
