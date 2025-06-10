import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "horizontal" | "vertical" | "icon";
}

export default function Logo({
  className,
  size = "md",
  variant = "horizontal",
}: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };

  if (variant === "icon") {
    return (
      <div className={cn("flex items-center", className)}>
        <div className={cn("relative", sizeClasses[size])}>
          <svg
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-full w-auto")}
          >
            <path
              d="M20 40L80 40L70 10H30L20 40Z"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
            />

            <path
              d="M15 45L25 110H75L85 45"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
            />

            <line
              x1="30"
              y1="45"
              x2="25"
              y2="110"
              stroke="currentColor"
              strokeWidth="4"
            />

            <line
              x1="70"
              y1="45"
              x2="75"
              y2="110"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>
        </div>
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div className={cn("flex flex-col items-center text-center", className)}>
        <div className={cn("relative", sizeClasses[size])}>
          <svg
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-full w-auto")}
          >
            <path
              d="M20 40L80 40L70 10H30L20 40Z"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
            />

            <path
              d="M15 45L25 110H75L85 45"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
            />

            <line
              x1="30"
              y1="45"
              x2="25"
              y2="110"
              stroke="currentColor"
              strokeWidth="4"
            />

            <line
              x1="70"
              y1="45"
              x2="75"
              y2="110"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>
        </div>
        <div className="mt-2 flex flex-col">
          <span className="font-bold text-xl md:text-2xl tracking-tight">
            FIERRO Y FORMA
          </span>
          <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
            Mobiliario para negocios, con enfoque profesional
          </span>
        </div>
      </div>
    );
  }

  // Default horizontal variant
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        <svg
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("h-full w-auto")}
        >
          <path
            d="M20 40L80 40L70 10H30L20 40Z"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
          />

          <path
            d="M15 45L25 110H75L85 45"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
          />

          <line
            x1="30"
            y1="45"
            x2="25"
            y2="110"
            stroke="currentColor"
            strokeWidth="4"
          />

          <line
            x1="70"
            y1="45"
            x2="75"
            y2="110"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl md:text-2xl tracking-tight">
          FIERRO Y FORMA
        </span>
        <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
          Mobiliario para negocios, con enfoque profesional
        </span>
      </div>
    </div>
  );
}