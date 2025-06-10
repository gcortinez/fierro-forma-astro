import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Sobre nosotros
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Expertos en mobiliario para negocios
            </h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              En Fierro y Forma, nos dedicamos a crear espacios de trabajo
              funcionales, estéticos y duraderos que reflejen la identidad de su
              empresa.
            </p>
            <div className="space-y-4 mt-2">
              <div className="flex items-start">
                <div className="mr-2 h-4 w-4 mt-1 rounded-full bg-primary" />

                <p className="text-gray-500 dark:text-gray-400">
                  <strong className="font-medium text-foreground">
                    Experiencia:
                  </strong>{" "}
                  Más de 15 años diseñando y fabricando mobiliario de alta
                  calidad para empresas de todos los sectores.
                </p>
              </div>
              <div className="flex items-start">
                <div className="mr-2 h-4 w-4 mt-1 rounded-full bg-primary" />

                <p className="text-gray-500 dark:text-gray-400">
                  <strong className="font-medium text-foreground">
                    Materiales premium:
                  </strong>{" "}
                  Utilizamos solo los mejores materiales para garantizar
                  durabilidad y estética en cada pieza.
                </p>
              </div>
              <div className="flex items-start">
                <div className="mr-2 h-4 w-4 mt-1 rounded-full bg-primary" />

                <p className="text-gray-500 dark:text-gray-400">
                  <strong className="font-medium text-foreground">
                    Equipo profesional:
                  </strong>{" "}
                  Nuestro equipo incluye diseñadores, ingenieros y artesanos
                  especializados en mobiliario comercial.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200"
                onClick={() => {
                  const element = document.getElementById('servicios');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Conocer más
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contactar
              </Button>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&auto=format"
              alt="Taller de fabricación de Fierro y Forma"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}