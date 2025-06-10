import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex flex-col gap-6 lg:gap-8 max-w-[600px]">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Mobiliario profesional para transformar su negocio
            </h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Diseño, fabricación y venta de mobiliario de alta calidad para
              espacios comerciales y oficinas.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200"
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Solicitar cotización
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group"
              onClick={() => {
                const element = document.getElementById('servicios');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Ver catálogo
              <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-square overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&auto=format"
            alt="Oficina moderna con mobiliario de fierro - Fierro y Forma"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 [background:radial-gradient(circle_500px_at_50%_200px,#e5e7eb,transparent)]"></div>
    </section>
  );
}