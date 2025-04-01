import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, Code, Palette, Laptop, Code2, Layers, LineChart, Globe, Zap } from "lucide-react";

const App = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Showcase Your Work With A
                <span className="block text-primary">Professional Portfolio</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Stand out from the crowd with a stunning portfolio website that
                highlights your skills, projects, and achievements.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg">Get Started Now</Button>
                <Button size="lg" variant="outline">
                  View Demo
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative rounded-lg bg-white p-2 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Portfolio Website Preview"
                  className="rounded"
                  width={500}
                  height={300}
                />
                <div className="absolute inset-0 rounded border-2 border-primary/40" />
              </div>
              <div className="absolute -bottom-6 -right-6 z-10 rounded-lg bg-white/80 p-4 shadow-lg backdrop-blur">
                <div className="flex gap-2">
                  <div className="flex h-3 w-3 rounded-full bg-red-500" />
                  <div className="flex h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="flex h-3 w-3 rounded-full bg-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Everything You Need to Showcase Your Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our platform provides all the tools you need to create a
              professional portfolio that gets you noticed.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Palette className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Beautiful Templates</CardTitle>
                <CardDescription>
                  Choose from a variety of professionally designed templates that
                  match your style and industry.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Laptop className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Responsive Design</CardTitle>
                <CardDescription>
                  Your portfolio will look great on any device, from desktops to
                  mobile phones.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Code2 className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Easy Customization</CardTitle>
                <CardDescription>
                  Customize every aspect of your portfolio without writing a
                  single line of code.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Layers className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Project Showcase</CardTitle>
                <CardDescription>
                  Highlight your best work with beautiful project pages, images,
                  and descriptions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Custom Domain</CardTitle>
                <CardDescription>
                  Connect your own domain name for a professional online
                  presence.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <LineChart className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  Track visitors, page views, and engagement with built-in
                  analytics.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="bg-gray-50 py-20" id="portfolio">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Stunning Portfolio Examples
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See what others have created with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioExamples.map((example) => (
              <div
                key={example.title}
                className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
              >
                <img
                  src={example.image}
                  alt={example.title}
                  className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">{example.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{example.category}</p>
                  <Button className="mt-4" size="sm">
                    View Live
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              View More Examples
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              What Our Users Are Saying
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from professionals who have transformed their online presence
            </p>
          </div>

          <Carousel className="mx-auto max-w-5xl">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name} className="md:basis-1/2">
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col justify-between p-6">
                      <div className="mb-4">
                        <div className="flex mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="h-5 w-5 fill-current text-yellow-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <p className="italic text-gray-700">{testimonial.quote}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-20" id="pricing">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that's right for you
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col ${
                  plan.popular ? "relative border-primary shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="mt-4">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <ul className="mb-6 flex-1 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Showcase Your Work?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Join thousands of professionals who trust Portfolio Pro for their
              online presence. Get started today and take your career to the next level.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary">
                Get Started For Free
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10 hover:text-white border-white">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data for portfolio examples
const portfolioExamples = [
  {
    title: "Sarah Johnson",
    category: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mark Williams",
    category: "Photographer",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Alex Chen",
    category: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Emily Davis",
    category: "Web Developer",
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "David Wilson",
    category: "Architect",
    image: "https://images.unsplash.com/photo-1567093322503-341d262ad8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sophia Martinez",
    category: "3D Artist",
    image: "https://images.unsplash.com/photo-1628620475273-676d044cdc0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

// Sample data for testimonials
const testimonials = [
  {
    quote: "Portfolio Pro helped me land my dream job! The templates are beautiful and the customization options are endless.",
    name: "Jessica T.",
    title: "Graphic Designer",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    quote: "I've tried many portfolio platforms, but this one stands above the rest. It's so easy to use and the results are stunning.",
    name: "Michael R.",
    title: "Photographer",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote: "My clients are consistently impressed with my portfolio website. It's been a game-changer for my freelance business.",
    name: "Alicia K.",
    title: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote: "The analytics feature helps me understand which projects attract the most attention. This insight has been invaluable.",
    name: "Robert J.",
    title: "Web Developer",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

// Sample data for pricing plans
const pricingPlans = [
  {
    name: "Basic",
    price: "9",
    description: "Perfect for beginners and students",
    features: [
      "5 portfolio projects",
      "Basic templates",
      "Responsive design",
      "Custom domain",
      "24/7 support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "19",
    description: "Ideal for freelancers and professionals",
    features: [
      "Unlimited projects",
      "Premium templates",
      "Custom CSS",
      "Analytics integration",
      "Priority support",
      "Client feedback tools",
    ],
    popular: true,
  },
  {
    name: "Agency",
    price: "49",
    description: "For teams and agencies",
    features: [
      "Everything in Professional",
      "Team collaboration",
      "White-label option",
      "Advanced analytics",
      "API access",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

export default App;
