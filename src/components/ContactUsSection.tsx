"use client";

import React, { useState } from "react";
import Footer from "./Footer";
import { submitContactForm } from "@/app/actions/contactActions";
import { toast } from "sonner";

export default function ContactUsSection() {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <section className="relative overflow-hidden min-h-screen">
            <img
                data-aos="slide-up"
                src="/footer-bg.png"
                alt=""
                className="absolute bottom-0 left-0 -z-10 w-full min-h-[600px] md:min-h-[800px] lg:h-auto object-cover"
            />

            <div data-aos="flip-down" className="py-16 flex justify-center px-0">
                <div className="w-full max-w-4xl rounded-2xl bg-[url('/contact-card.png')] bg-cover bg-center bg-no-repeat shadow-lg p-6 md:p-10 lg:px-16 text-white">

                    <div className="text-center mb-12 md:mb-16 lg:mb-20">
                        <h2 className="text-3xl md:text-4xl font-semibold">
                            We're Here To Help You Run Smarter
                        </h2>
                        <p className="text-sm mt-4 px-0 md:px-10 lg:px-20">
                            Have Questions or Need Expert Help? Ready to Guide You Through Setup, Demo & Support.
                        </p>
                    </div>

                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            setLoading(true);

                            const form = e.target as HTMLFormElement;

                            const formData = {
                                firstName: form.firstName.value,
                                lastName: form.lastName.value,
                                email: form.email.value,
                                phone: form.phone.value,
                                country: form.country.value,
                                company: form.company.value,
                                message: form.message.value,
                            };

                            try {
                                const emailjs = (await import("@emailjs/browser")).default;

                                await emailjs.send(
                                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                                    formData,
                                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
                                );

                                toast.success("Your message has been sent!");
                                form.reset();
                            } catch (error) {
                                console.error(error);
                                toast.error("Something went wrong. Please try again.");
                            } finally {
                                setLoading(false);
                            }
                        }}

                        className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 md:gap-y-12"
                    >
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            required
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none h-12"
                        />

                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            required
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none h-12"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email ID"
                            required
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none sm:col-span-2 h-12"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone number"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none h-12"
                        />

                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none h-12"
                        />

                        <input
                            type="text"
                            name="company"
                            placeholder="Company name"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none sm:col-span-2 h-12"
                        />

                        <textarea
                            name="message"
                            placeholder="Message"
                            required
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none sm:col-span-2 h-16 resize-none"
                        ></textarea>

                        <div className="flex justify-end sm:col-span-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="hover:underline text-lg md:text-[20px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {loading ? (
                                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    "Let's Start the Conversation →"
                                )}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            <Footer />
        </section>
    );
}
