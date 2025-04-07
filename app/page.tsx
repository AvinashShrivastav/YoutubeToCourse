import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Form } from "@/components/ui/form";
import {
  CheckCircle2,
  Menu,
  PlayCircle,
  Search,
  Star,
  BookOpen,
  BarChart2,
  Clock,
  Zap,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className=" bg-white text-black">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="text-xl font-bold"
              style={{ fontSize: "2rem" }}
            >
              Transform
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-md hover:text-purple-400">
                Features
              </Link>
              <Link href="#" className="text-md hover:text-purple-400">
                Pricing
              </Link>
              <Link href="#" className="text-md hover:text-purple-400">
                How it Works
              </Link>
              <Link href="#" className="text-md hover:text-purple-400">
                About
              </Link>
              <Link href="#" className="text-md hover:text-purple-400">
                Blog
              </Link>
              <Link href="#" className="text-md hover:text-purple-400">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-purple-400 "
            >
              Login
            </Button>
            <Button
              size="sm"
              className="bg-purple-600 hover:bg-purple-700 text-white border-white hover:bg-white/10"
              style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
            >
              Sign Up
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-neutral-50 dark:bg-neutral-900 text-white py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1
                className="text-4xl md:text-5xl font-bold leading-tight "
                style={{
                  fontSize: "5rem",
                  lineHeight: 1,
                  fontWeight: 700,
                  fontFamily: "Sora, sans-serif",
                }}
              >
                Transform YouTube Videos Into Structured Courses
              </h1>
              <p className="text-gray-300 text-lg md:text-xl text-neutral-200 mb-8">
                Convert any YouTube content into organized, interactive learning
                experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-purple-600 hover:bg-purple-700 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                  style={{
                    borderRadius: "0.5rem",
                    width: "30%",
                    height: "3rem",
                    fontSize: "larger",
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                  style={{
                    borderRadius: "0.5rem",
                    width: "50%",
                    height: "3rem",
                    fontSize: "larger",
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[600px]">
              <Image
                src="/images/man.jpeg"
                alt="Professional in suit"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Transform YouTube Videos Into Structured Courses
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform converts any YouTube video into
                comprehensive learning experiences with just one link.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<PlayCircle className="h-8 w-8 text-blue-500" />}
                title="Automatic Content Analysis"
                description="Our AI analyzes video content to identify key topics and learning objectives"
              />
              <FeatureCard
                icon={<BookOpen className="h-8 w-8 text-yellow-500" />}
                title="Interactive Transcripts"
                description="Navigate through video content with searchable, timestamped transcripts"
              />
              <FeatureCard
                icon={<BarChart2 className="h-8 w-8 text-green-500" />}
                title="Progress Tracking"
                description="Track learning progress and completion rates for all your courses"
              />
              <FeatureCard
                icon={<Clock className="h-8 w-8 text-red-500" />}
                title="Time-Saving Summaries"
                description="Get concise summaries of video content to quickly grasp key concepts"
              />
              <FeatureCard
                icon={<Zap className="h-8 w-8 text-purple-500" />}
                title="Instant Knowledge Access"
                description="Quickly find and access specific information within videos"
              />
              <FeatureCard
                icon={<MessageCircle className="h-8 w-8 text-indigo-500" />}
                title="AI-Generated Quizzes"
                description="Reinforce learning with automatically generated quizzes and assessments"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-neutral-50 dark:bg-neutral-900 py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <div className="bg-purple-600 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Sign Up for Access</h3>
                <p className="mb-6">
                  Join thousands of learners transforming how they use YouTube
                  for education
                </p>
                <Button className="bg-white text-purple-600 hover:bg-gray-100">
                  Sign Up Free
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/likeaboss.png"
                alt="Learning visualization"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <StatCard value="85%" label="Completion Rate" />
              <StatCard value="75%" label="Time Saved" />
              <StatCard value="150%" label="Learning Efficiency" />
              <StatCard value="4.8/5" label="User Satisfaction" />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Transform any YouTube video into a structured learning
                experience in three simple steps.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="bg-gray-50 dark:bg-neutral-800 p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">
                      Paste Your YouTube Link
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 ml-16">
                    Simply copy the URL of any educational YouTube video and
                    paste it into our platform.
                  </p>

                  <div className="mt-6 ml-16 bg-white dark:bg-neutral-700 p-4 rounded-lg border border-gray-200 dark:border-neutral-600 flex items-center gap-3">
                    <Input
                      type="text"
                      placeholder="https://youtube.com/watch?v=example"
                      class="w-full bg-transparent outline-none text-gray-700 dark:text-gray-200"
                      disabled=""
                    />
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                      Import
                    </button>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Image
                  src="/images/man.jpeg"
                  alt="/placeholder-user.jpg"
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                  width="5066"
                  height="3377"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20">
              <div>
                <Image
                  src="images/likeaboss.png"
                  alt="AI processing and analyzing video content"
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                  width="5760"
                  height="3840"
                />
              </div>
              <div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">
                      AI Processes the Content
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 ml-16">
                    Our advanced AI analyzes the video, transcribes the content,
                    and identifies key concepts.
                  </p>

                  <div className="mt-6 ml-16">
                    <div className="flex items-center gap-2 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        Transcription complete
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        Content analysis
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        Chapter generation
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        Quiz creation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gray-50 dark:bg-neutral-800 p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">
                      Access Your Course
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 ml-16">
                    Get instant access to your structured course with
                    interactive quizzes, notes, and analytics.
                  </p>

                  <div className="mt-6 ml-16 grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg border border-gray-200 dark:border-neutral-600 text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 mx-auto mb-2 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                      <p className="text-gray-700 dark:text-gray-200 font-medium">
                        Detailed Notes
                      </p>
                    </div>
                    <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg border border-gray-200 dark:border-neutral-600 text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 mx-auto mb-2 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <p className="text-gray-700 dark:text-gray-200 font-medium">
                        Interactive Quizzes
                      </p>
                    </div>
                    <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg border border-gray-200 dark:border-neutral-600 text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 mx-auto mb-2 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        ></path>
                      </svg>
                      <p className="text-gray-700 dark:text-gray-200 font-medium">
                        Progress Analytics
                      </p>
                    </div>
                    <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg border border-gray-200 dark:border-neutral-600 text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 mx-auto mb-2 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <p className="text-gray-700 dark:text-gray-200 font-medium">
                        Visual Summaries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Image
                  src="/images/coat.png"
                  alt="/"
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                  width="5048"
                  height="3370"
                />
              </div>
            </div>

            {/* <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Paste Your YouTube Link</h3>
                <p className="text-gray-600">Simply copy and paste the URL of any YouTube video or playlist</p>
                <div className="mt-6 w-full max-w-md">
                  <div className="relative">
                    <Input placeholder="https://youtube.com/watch?v=" className="pr-12" />
                    <Button className="absolute right-0 top-0 h-full bg-purple-600 hover:bg-purple-700 rounded-l-none">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">AI Processes the Content</h3>
                <p className="text-gray-600">
                  Our AI analyzes the video, extracts key points, and structures the content
                </p>
                <div className="mt-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="AI processing"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Access Your Course</h3>
                <p className="text-gray-600">
                  Get instant access to your structured course with chapters, notes, and quizzes
                </p>
                <div className="mt-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Course dashboard"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Choose Your Plan
              </h2>
              <p className="text-xl text-white-600 bg-neutral-50 dark:bg-neutral-900 max-w-3xl mx-auto">
                Transform YouTube videos into structured courses with AI-powered
                tools
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard
                title="Basic"
                price="$9"
                period="/mo"
                features={[
                  "5 courses per month",
                  "Basic AI analysis",
                  "Standard transcripts",
                  "Email support",
                ]}
                buttonText="Choose Basic"
                popular={false}
              />
              <PricingCard
                title="Pro"
                price="$29"
                period="/mo"
                features={[
                  "Unlimited courses",
                  "Advanced AI analysis",
                  "Interactive transcripts",
                  "Quiz generation",
                  "Priority support",
                ]}
                buttonText="Choose Pro"
                popular={true}
              />
              <PricingCard
                title="Team"
                price="$79"
                period="/mo"
                features={[
                  "Everything in Pro",
                  "5 team members",
                  "Team analytics",
                  "Custom branding",
                  "API access",
                  "Dedicated support",
                ]}
                buttonText="Choose Team"
                popular={false}
                dark={true}
              />
            </div>
            <div className="mt-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Not sure which plan is right?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    We offer a 14-day free trial on all plans. Try our platform
                    with no commitment and see how it transforms your YouTube
                    content into structured learning experiences.
                  </p>
                  <button className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-semibold inline-flex items-center">
                    <span>Start Free Trial</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <Image
                    src="/images/help.png"
                    alt="/career"
                    className="w-full h-auto rounded-lg shadow-lg"
                    width="5048"
                    height="3370"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Users Say
              </h2>
              <p className="text-lg text-white-600  max-w-3xl mx-auto">
                Discover how educators and learners are transforming YouTube
                content into structured courses.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="This tool has completely transformed how I learn from YouTube. I can finally organize all that knowledge!"
                author="Sarah Johnson"
                role="Online Educator"
                rating={5}
              />
              <TestimonialCard
                quote="As a teacher, this helps me create structured learning materials from YouTube videos in minutes instead of hours."
                author="Michael Thompson"
                role="High School Teacher"
                rating={5}
              />
              <TestimonialCard
                quote="The AI-generated quizzes are fantastic for testing my understanding. Best learning tool I've used this year."
                author="David Rodriguez"
                role="University Student"
                rating={4}
              />
            </div>
            <div className="mt-16 bg-white dark:bg-neutral-700 rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-4">
                  <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    94%
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    of users report improved learning outcomes
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    3.5x
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    higher content engagement with structured courses
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    15,000+
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    courses created from YouTube videos
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button className="text-white border-white hover:bg-white/10 hover:bg-gray-700">
                Read More Testimonials
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16bg-neutral-50 dark:bg-neutral-900">
          {/* <div className="space-y-6">
          
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 active" x-data="{ open: false }">
            <button className="flex justify-between items-center w-full focus:outline-none" onClick={(event) => { 
              const parent = (event.target as HTMLElement).parentElement;
              if (parent) {
                parent.classList.toggle('active');
                const sibling = parent.querySelector(':scope > .hidden');
                if (sibling) sibling.classList.toggle('hidden');
              }
            }}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">What types of YouTube videos work best?</h3>
              <svg class="w-5 h-5 text-gray-500 transition-transform duration-300 transform rotate-0" id="arrow1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(0deg);"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="mt-4 text-gray-600 dark:text-gray-300">
              <p>Our AI works best with educational content, tutorials, lectures, and explainer videos. Longer, information-rich videos typically yield the most comprehensive courses. The system can process videos in multiple languages and across diverse subjects from programming to cooking.</p>
            </div>
          </div>

         
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6" x-data="{ open: false }">
            <button className="flex justify-between items-center w-full focus:outline-none" onClick={() => { const parent = event.currentTarget.parentElement; if (parent) { parent.classList.toggle('active'); const sibling = parent.querySelector(':scope > .hidden'); if (sibling) sibling.classList.toggle('hidden'); } }}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">How accurate are the AI-generated notes and quizzes?</h3>
              <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 transform rotate-0" id="arrow2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="mt-4 text-gray-600 dark:text-gray-300 hidden">
              <p>Our AI maintains a 92-96% accuracy rate for content extraction and summarization. Quiz questions are generated based on key concepts identified in the video. You can always review and edit both notes and quizzes before finalizing your course.</p>
            </div>
          </div>

     
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6" x-data="{ open: false }">
            <button className="flex justify-between items-center w-full focus:outline-none" onClick={(event) => { const parent = event.currentTarget.parentElement; if (parent) { parent.classList.toggle('active'); const sibling = parent.querySelector(':scope > .hidden'); if (sibling) sibling.classList.toggle('hidden'); } }}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Can I customize the generated course materials?</h3>
              <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 transform rotate-0" id="arrow3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="mt-4 text-gray-600 dark:text-gray-300 hidden">
              <p>Yes! After AI generates the initial course structure, you can edit notes, modify or add quiz questions, adjust section breaks, and customize the overall formatting. Premium users can also add their branding and export courses in multiple formats.</p>
            </div>
          </div>

         
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6" x-data="{ open: false }">
            <button className="flex justify-between items-center w-full focus:outline-none" onClick={(event) => { 
              const parent = event.currentTarget.parentElement; 
              if (parent) { 
                parent.classList.toggle('active'); 
                const sibling = parent.querySelector(':scope > .hidden'); 
                if (sibling) sibling.classList.toggle('hidden'); 
              } 
            }}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">What analytics and stats are provided?</h3>
              <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 transform rotate-0" id="arrow4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="mt-4 text-gray-600 dark:text-gray-300 hidden">
              <p>Our platform provides comprehensive learning analytics including quiz completion rates, knowledge retention scores, time spent on each section, progress tracking, and performance comparisons. Educators get additional insights on student engagement patterns.</p>
            </div>
          </div>

        </div> */}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 mb-12">
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Transform YouTube Videos Into Structured Courses
                </h2>
                <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                  See how our AI-powered platform converts any YouTube video
                  into comprehensive learning materials with just one link.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    How It Works
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold">1</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-medium">
                          Paste YouTube URL
                        </h4>
                        <p className="text-neutral-300">
                          Simply paste any educational YouTube video link into
                          our platform
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold">2</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-medium">
                          AI Processes Content
                        </h4>
                        <p className="text-neutral-300">
                          Our AI analyzes the video content and extracts key
                          information
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold">3</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-medium">
                          Get Complete Course
                        </h4>
                        <p className="text-neutral-300">
                          Receive structured notes, quizzes, and learning
                          statistics
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      id="show-demo-btn"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Watch Live Demo
                    </button>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/help.png"
                    alt="/"
                    className="w-full h-full object-cover"
                    width="5048"
                    height="3370"
                  />
                </div>
              </div>
              <div>
                <div className="bg-neutral-800 rounded-xl p-6 md:p-8 mb-12">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                    What You'll Get
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-neutral-700 p-6 rounded-lg">
                      <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          ></path>
                        </svg>
                      </div>
                      <h4 className="text-xl font-medium mb-2">
                        Structured Notes
                      </h4>
                      <p className="text-neutral-300">
                        AI-generated comprehensive notes organized by topics and
                        timestamps
                      </p>
                    </div>

                    <div className="bg-neutral-700 p-6 rounded-lg">
                      <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <h4 className="text-xl font-medium mb-2">
                        Quiz Generator
                      </h4>
                      <p className="text-neutral-300">
                        Automatically created quizzes to test knowledge and
                        reinforce learning
                      </p>
                    </div>

                    <div className="bg-neutral-700 p-6 rounded-lg">
                      <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          ></path>
                        </svg>
                      </div>
                      <h4 className="text-xl font-medium mb-2">
                        Learning Analytics
                      </h4>
                      <p className="text-neutral-300">
                        Detailed statistics tracking your progress and knowledge
                        retention
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="./images/coat.png"
                  alt="./"
                  className="w-full h-full object-cover"
                  width="5048"
                  height="3370"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Try It Now
                </h3>
                <p className="text-xl text-neutral-300">
                  Experience the power of AI-enhanced learning with any
                  educational YouTube video.
                </p>

                <div className="bg-neutral-800 p-6 rounded-lg">
                  <form id="demo-form" className="space-y-4">
                    <div>
                      <Label className="block text-sm font-medium mb-2">
                        YouTube Video URL
                      </Label>
                      <Input
                        type="url"
                        id="youtube-url"
                        placeholder="https://www.youtube.com/watch?v=..."
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-lg px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                    >
                      Generate Course
                    </button>
                  </form>
                </div>

                <div className="flex items-center space-x-2 text-neutral-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>No sign-up required for demo</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Follow Our Progress</h3>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Product screenshot"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <div className="flex gap-4 mb-6">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-700 hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-700 hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-700 hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-700 hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  <span>Weekly product updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  <span>Early access to new features</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  <span>Educational content and tips</span>
                </div>
              </div>
            </div>
          

          <div className="pt-8 border-t border-gray-800 text-center text-sm text-white-500">
            <p>© 2023 Transform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 transition-transform duration-300 hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2" style={{ fontSize: "1.5rem" }}>
        {title}
      </h3>
      <p className="text-white-600" style={{ fontSize: "1rem" }}>
        {description}
      </p>
    </Card>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow">
      <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
        {value}
      </div>
      <p
        className="text-white-600"
        style={{ fontSize: "1rem", marginTop: "1rem" }}
      >
        {label}
      </p>
    </div>
  );
}

function PricingCard({
  title,
  price,
  period,
  features,
  buttonText,
  popular = false,
  dark = false,
}) {
  return (
    <Card
      className={`p-6 border transition-transform duration-300 hover:scale-105 ${
        popular ? "border-purple-500 ring-2 ring-purple-500" : "border-gray-200"
      } ${dark ? "bg-neutral-50 dark:bg-neutral-800 text-white" : ""} relative`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg font-medium">
          POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex items-baseline mb-6">
        <span className="text-3xl font-bold">{price}</span>
        <span className={`${dark ? "text-gray-400" : "text-gray-600"}`}>
          {period}
        </span>
      </div>
      <ul className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle2
              className={`h-5 w-5 ${
                dark ? "text-purple-400" : "text-purple-600"
              } shrink-0 mt-0.5`}
            />
            <span className={dark ? "text-gray-700 dark:text-gray-300" : ""}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full ${
          dark
            ? "text-white border-white hover:bg-white/10"
            : "bg-white text-gray-900 hover:bg-gray-100"
        }`}
        style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
      >
        {buttonText}
      </Button>
    </Card>
  );
}

function TestimonialCard({ quote, author, role, rating }) {
  return (
    <Card className="bg-white dark:bg-neutral-700 rounded-lg shadow-lg p-6 border transition-transform duration-300 hover:scale-105">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <p className="mb-4 text-white-700">"{quote}"</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-sm text-white-600">{role}</p>
      </div>
    </Card>
  );
}

function FaqItem({ question, answer }) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h4 className="text-lg font-bold mb-2">{question}</h4>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}
