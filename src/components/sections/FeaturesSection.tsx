import { ShieldIcon, TruckIcon, SettingsIcon, UsersIcon } from "lucide-react";

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="mb-4 rounded-full bg-primary/10 p-3">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      icon: ShieldIcon,
      title: "Calidad garantizada",
      description:
        "Utilizamos materiales de primera calidad y técnicas de fabricación avanzadas para asegurar la durabilidad de nuestros productos.",
    },
    {
      icon: SettingsIcon,
      title: "Diseño personalizado",
      description:
        "Adaptamos nuestros diseños a las necesidades específicas de su negocio, creando soluciones únicas y funcionales.",
    },
    {
      icon: TruckIcon,
      title: "Entrega e instalación",
      description:
        "Ofrecemos servicios completos de entrega e instalación profesional para que su mobiliario esté listo para usar.",
    },
    {
      icon: UsersIcon,
      title: "Asesoría especializada",
      description:
        "Nuestro equipo de expertos le guiará en la selección del mobiliario ideal para optimizar sus espacios comerciales.",
    },
  ];

  return (
    <section
      id="servicios"
      className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestros servicios
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Ofrecemos soluciones completas para equipar su negocio con
              mobiliario de alta calidad
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}