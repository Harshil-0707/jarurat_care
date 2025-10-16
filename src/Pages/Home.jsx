import React from "react";
import { Link } from "react-router-dom";
import placeholderImages from "../utils/placeholder-images.json";
import {
  HeartIcon,
  LifebuoyIcon,
  SpeakerWaveIcon,
  UsersIcon,
  ShieldCheckIcon,
  HandRaisedIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const { whoWeAre } = placeholderImages;

  const whatWeDoItems = [
    { title: "Provide Comprehensive Patient Support", icon: UsersIcon },
    { title: "Facilitate Access to Quality Care", icon: LifebuoyIcon },
    { title: "Promote Awareness and Education", icon: SpeakerWaveIcon },
    { title: "Advocate for Better Cancer Care", icon: HeartIcon },
  ];

  const supportItems = [
    {
      title: "Patient Advocacy",
      description:
        "We stand by your side, helping you navigate treatment options and the healthcare system.",
      icon: ShieldCheckIcon,
      features: [
        "Insurance Assistance",
        "Legal Support",
        "Healthcare Navigation",
      ],
    },
    {
      title: "Emotional & Mental Well-being",
      description:
        "We offer a range of services to support your mental and emotional health during challenging times.",
      icon: HandRaisedIcon,
      features: ["Individual Counseling", "Support Groups", "24/7 Helpline"],
    },
    {
      title: "Holistic Care Options",
      description:
        "We believe in treating the whole person, not just the disease, with a focus on overall wellness.",
      icon: SparklesIcon,
      features: [
        "Nutrition Counseling",
        "Stress Management",
        "Wellness Programs",
      ],
    },
  ];

  return (
    <>
      <main className="flex-grow flex flex-col">
        <div className="relative bg-gray-50 overflow-hidden min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 py-24 md:py-32 text-center">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-gray-900">
                <span className="text-primary drop-shadow-md">
                  JARURAT CARE
                </span>
              </h1>
              <p className="mt-2 text-2xl md:text-3xl text-gray-600">
                Jaisi Jarurat Vaisi Care
              </p>
              <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                Providing support, guidance, hope and personalized care for
                cancer patients and their families. Here to ensure you never
                face your journey alone.
              </p>
              <div className="mt-10">
                <Link
                  to="/patients"
                  className="inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Patient Records
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full-squircle animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full-squircle animate-pulse-slow"></div>
        </div>
        <div className="bg-background py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                  Who We Are
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Our mission is to support and empower cancer patients and
                  their families.
                </p>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Through comprehensive programs, Jarurat Care provides vital
                  support to those affected by cancer. We offer emotional,
                  financial, and practical assistance to help patients and their
                  families navigate their cancer journey.
                </p>
              </div>
              <div className="relative hidden lg:block">
                <img
                  src={whoWeAre.src}
                  alt="Doctor consoling a patient"
                  width={400}
                  height={400}
                  data-ai-hint={whoWeAre.hint}
                  className="rounded-lg object-cover m-8"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-headline text-gray-900 sm:text-4xl">
                What We Do
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                We focus on delivering crucial support to patients, ensuring
                access to quality treatment, raising awareness, and advocating
                for better care.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {whatWeDoItems.map((item) => (
                <div
                  key={item.title}
                  className="text-center bg-card p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-6">
                    <item.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-headline text-gray-900 sm:text-4xl">
                How We Support You
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                Comprehensive care and support throughout your cancer journey.
                We're here to help with advocacy, treatment access, and holistic
                wellness.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {supportItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-card p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                      <item.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                    <ul className="mt-6 space-y-2 text-left">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <ShieldCheckIcon className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
