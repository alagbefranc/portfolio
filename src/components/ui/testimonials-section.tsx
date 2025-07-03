"use client"

import * as React from "react"
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  ReviewStars,
} from "@/components/ui/animated-cards-stack"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    profession: "Project Manager",
    rating: 5,
    description:
      "Francis delivered exceptional results for our web application. His technical expertise and problem-solving skills made our project a success. Highly recommended!",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    profession: "Tech Lead",
    rating: 4.5,
    description:
      "Working with Francis was a game-changer for our project. His expertise in modern web technologies and attention to detail exceeded our expectations.",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "testimonial-3",
    name: "Emily Rodriguez",
    profession: "UX Designer",
    rating: 5,
    description:
      "Francis has an exceptional ability to translate design concepts into flawless code. His collaborative approach and technical skills made our project a seamless experience.",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "testimonial-4",
    name: "David Wilson",
    profession: "Startup Founder",
    rating: 4.5,
    description:
      "Francis brought our vision to life with impressive technical skills and creativity. The quality of his work and communication throughout the project was outstanding.",
    avatarUrl:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
]

export function TestimonialsSection() {
  // Ensure client-side only hydration
  const [isMounted, setIsMounted] = React.useState(false);
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  
  // Check for system/user preference on component mount
  // IMPORTANT: Always call hooks at the top level, never conditionally
  React.useEffect(() => {
    setIsMounted(true);
    
    // Now that we're client-side, check preferences
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark");
    }
    
    if (document.documentElement.classList.contains('dark')) {
      setTheme("dark");
    }
  }, [])
  
  const getSectionClass = (theme: "light" | "dark") => {
    return theme === "dark"
      ? "bg-black/80 text-white px-8 py-24"
      : "bg-accent/80 px-8 py-24"
  }

  const getReviewStarsClass = (theme: "light" | "dark") => {
    return theme === "dark" ? "text-primary" : "text-primary"
  }

  const getTextClass = (theme: "light" | "dark") => {
    return theme === "dark" ? "text-white" : ""
  }

  const getAvatarClass = (theme: "light" | "dark") => {
    return theme === "dark"
      ? "!size-12 border border-stone-700"
      : "!size-12 border border-stone-300"
  }

  const getCardVariant = (theme: "light" | "dark") => {
    return theme === "dark" ? "dark" : "light"
  }

  return (
    <section id="testimonials" className={getSectionClass(theme)}>
      <div>
        <h2 className="text-center text-4xl font-bold mb-3">Client Testimonials</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-lg mb-12">
          What others say about my work and collaboration experience
        </p>
      </div>
      <ContainerScroll className="container h-[300vh]">
        <div className="sticky left-0 top-0 h-svh w-full py-12">
          <CardsContainer className="mx-auto size-full h-[450px] w-[350px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <CardTransformed
                arrayLength={TESTIMONIALS.length}
                key={testimonial.id}
                variant={getCardVariant(theme)}
                index={index + 2}
                role="article"
                aria-labelledby={`card-${testimonial.id}-title`}
                aria-describedby={`card-${testimonial.id}-content`}
              >
                <div className="flex flex-col items-center space-y-4 text-center">
                  <ReviewStars
                    className={getReviewStarsClass(theme)}
                    rating={testimonial.rating}
                  />
                  <div className={`mx-auto w-4/5 text-lg ${getTextClass(theme)}`}>
                    <blockquote cite="#" id={`card-${testimonial.id}-content`}>{testimonial.description}</blockquote>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className={getAvatarClass(theme)}>
                    <AvatarImage
                      src={testimonial.avatarUrl}
                      alt={`Portrait of ${testimonial.name}`}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <span id={`card-${testimonial.id}-title`} className="block text-lg font-semibold tracking-tight md:text-xl">
                      {testimonial.name}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {testimonial.profession}
                    </span>
                  </div>
                </div>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  )
}
