import Logo from "@/components/Logo";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo variant="vertical" size="md" className="text-white" />
            <p className="text-gray-300 text-sm max-w-xs">
              Expertos en mobiliario profesional para transformar espacios
              comerciales con calidad y diseño.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Diseño personalizado</li>
              <li>Fabricación a medida</li>
              <li>Instalación profesional</li>
              <li>Asesoría especializada</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" />
                <span>+56 9 6209 6849</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-4 w-4" />
                <span>info@fierroyforma.cl</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4" />
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Horarios</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>
                <p className="font-medium">Lunes - Viernes</p>
                <p>9:00 - 18:00</p>
              </div>
              <div>
                <p className="font-medium">Sábados</p>
                <p>9:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Fierro y Forma. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
