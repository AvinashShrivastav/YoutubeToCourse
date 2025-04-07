import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
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
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="text-xl font-bold">
              Transform
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-sm hover:text-purple-400">
                Features
              </Link>
              <Link href="#" className="text-sm hover:text-purple-400">
                Pricing
              </Link>
              <Link href="#" className="text-sm hover:text-purple-400">
                How it Works
              </Link>
              <Link href="#" className="text-sm hover:text-purple-400">
                About
              </Link>
              <Link href="#" className="text-sm hover:text-purple-400">
                Blog
              </Link>
              <Link href="#" className="text-sm hover:text-purple-400">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-purple-400">
              Login
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
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
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Transform YouTube Videos Into Structured Courses
              </h1>
              <p className="text-gray-300">
                Convert any YouTube content into organized, interactive learning experiences
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Professional in suit"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Transform YouTube Videos Into Structured Courses</h2>
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
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <div className="bg-purple-600 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Sign Up for Access</h3>
                <p className="mb-6">Join thousands of learners transforming how they use YouTube for education</p>
                <Button className="bg-white text-purple-600 hover:bg-gray-100">Sign Up Free</Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Learning visualization"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="py-16">
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-12">
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
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard
                title="Basic"
                price="$9"
                period="/mo"
                features={["5 courses per month", "Basic AI analysis", "Standard transcripts", "Email support"]}
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
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Not sure which plan is right?</p>
              <Button className="bg-purple-600 hover:bg-purple-700">Contact Sales</Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
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
            <div className="mt-12 flex justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600">96%</div>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">8.9</div>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">10,000+</div>
                <p className="text-gray-600">Active Users</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-purple-600 hover:bg-purple-700">Read More Testimonials</Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <FaqItem
                  question="What is this service?"
                  answer="Our platform transforms YouTube videos into structured courses with chapters, notes, and quizzes to enhance learning efficiency."
                />
                <FaqItem
                  question="How accurate is the AI?"
                  answer="Our AI achieves over 90% accuracy in content analysis and summarization, continuously improving through machine learning."
                />
                <FaqItem
                  question="Can I use this for any YouTube video?"
                  answer="Yes, our platform works with any public YouTube video, though results are best with educational and instructional content."
                />
              </div>
              <div className="space-y-6">
                <FaqItem
                  question="What makes this different from just watching videos?"
                  answer="We provide structure, interactive elements, progress tracking, and knowledge retention tools that transform passive watching into active learning."
                />
                <FaqItem
                  question="Can I share courses with others?"
                  answer="Yes, Pro and Team plans allow course sharing with customizable access permissions."
                />
                <FaqItem
                  question="Is there a free trial?"
                  answer="Yes, we offer a 7-day free trial with access to all Pro features so you can experience the full platform before deciding."
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-purple-600 hover:bg-purple-700">View All FAQs</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Transform YouTube Videos Into Structured Courses</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center">1</div>
                  <span>Paste YouTube Link</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center">2</div>
                  <span>AI Processes Content</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center">3</div>
                  <span>Access Your Course</span>
                </div>
                <div>
                  <Button className="bg-purple-600 hover:bg-purple-700 mt-2">Get Started</Button>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">What You'll Get</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  <span>Structured Chapters</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  <span>Interactive Transcripts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  <span>AI-Generated Notes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  <span>Knowledge Quizzes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  <span>Progress Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  <span>Mobile Access</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 py-8 border-t border-gray-800">
            <div>
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Name" className="bg-gray-800 border-gray-700" />
                  <Input placeholder="Email" className="bg-gray-800 border-gray-700" />
                </div>
                <Input placeholder="Subject" className="bg-gray-800 border-gray-700" />
                <textarea
                  placeholder="Message"
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  rows={4}
                ></textarea>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full">Send Message</Button>
              </form>
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
                <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:bg-gray-800">
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
                <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:bg-gray-800">
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
                <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:bg-gray-800">
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
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:bg-gray-800">
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
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© 2023 Transform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="p-4">
      <div className="text-3xl font-bold text-purple-600 mb-2">{value}</div>
      <p className="text-gray-600">{label}</p>
    </div>
  )
}

function PricingCard({ title, price, period, features, buttonText, popular = false, dark = false }) {
  return (
    <Card
      className={`p-6 border ${popular ? "border-purple-500 ring-2 ring-purple-500" : "border-gray-200"} ${dark ? "bg-gray-900 text-white" : ""} relative`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg font-medium">
          POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex items-baseline mb-6">
        <span className="text-3xl font-bold">{price}</span>
        <span className={`${dark ? "text-gray-400" : "text-gray-600"}`}>{period}</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle2 className={`h-5 w-5 ${dark ? "text-purple-400" : "text-purple-600"} shrink-0 mt-0.5`} />
            <span className={dark ? "text-gray-300" : ""}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${dark ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-purple-600 hover:bg-purple-700"}`}
      >
        {buttonText}
      </Button>
    </Card>
  )
}

function TestimonialCard({ quote, author, role, rating }) {
  return (
    <Card className="p-6 border border-gray-200">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <p className="mb-4 text-gray-700">"{quote}"</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </Card>
  )
}

function FaqItem({ question, answer }) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h4 className="text-lg font-bold mb-2">{question}</h4>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}

