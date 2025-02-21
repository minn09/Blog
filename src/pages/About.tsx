import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Code,
  Pen,
  Book,
  Users,
} from "lucide-react";

export function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#63B3ED]/10 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Profile picture"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">John Doe</h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl">
              Frontend Developer & Technical Writer
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-[#63B3ED] hover:bg-[#63B3ED]/10"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-[#63B3ED] hover:bg-[#63B3ED]/10"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-[#63B3ED] hover:bg-[#63B3ED]/10"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-[#63B3ED] hover:bg-[#63B3ED]/10"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            About Me
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600 space-y-6">
            <p>
              Hello! I'm John, a passionate frontend developer and technical
              writer based in Barcelona. With over 5 years of experience in web
              development, I specialize in creating clean, user-friendly
              interfaces and sharing my knowledge through writing.
            </p>
            <p>
              My journey in web development started when I built my first
              WordPress blog in 2018. Since then, I've worked with various
              technologies and frameworks, always staying current with the
              latest web development trends and best practices.
            </p>
            <p>
              When I'm not coding or writing, you can find me exploring new
              coffee shops, reading tech blogs, or contributing to open-source
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#63B3ED]/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="border-none bg-white/50 backdrop-blur">
              <CardContent className="flex flex-col items-center p-6">
                <Code className="h-8 w-8 mb-2 text-[#63B3ED]" />
                <h3 className="text-3xl font-bold text-gray-900">50+</h3>
                <p className="text-gray-600">Projects</p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white/50 backdrop-blur">
              <CardContent className="flex flex-col items-center p-6">
                <Pen className="h-8 w-8 mb-2 text-[#63B3ED]" />
                <h3 className="text-3xl font-bold text-gray-900">100+</h3>
                <p className="text-gray-600">Articles</p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white/50 backdrop-blur">
              <CardContent className="flex flex-col items-center p-6">
                <Book className="h-8 w-8 mb-2 text-[#63B3ED]" />
                <h3 className="text-3xl font-bold text-gray-900">5+</h3>
                <p className="text-gray-600">Years</p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white/50 backdrop-blur">
              <CardContent className="flex flex-col items-center p-6">
                <Users className="h-8 w-8 mb-2 text-[#63B3ED]" />
                <h3 className="text-3xl font-bold text-gray-900">10k+</h3>
                <p className="text-gray-600">Followers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "TailwindCSS",
              "Node.js",
              "Git",
              "HTML/CSS",
            ].map((skill) => (
              <Card
                key={skill}
                className="border-none bg-[#63B3ED]/5 hover:bg-[#63B3ED]/10 transition-colors"
              >
                <CardContent className="p-4 text-center">
                  <p className="font-medium text-gray-900">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#63B3ED]/5">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <Button className="bg-[#63B3ED] hover:bg-[#63B3ED]/90" size="lg">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </section>
    </main>
  );
}
