import { cn } from "@/lib/utils";

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = "center",
  className,
  animated = true,
  inView = true,
  theme = "dark", // "dark" or "light" text mode
}) {
  const alignClass =
    align === "center"
      ? "text-center mx-auto"
      : "text-left";

  const isLight = theme === "light";

  const content = (
    <div className={cn("max-w-2xl", alignClass, className)}>
      {badge && (
        <span className={cn(
          "mb-5 inline-block rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md shadow-sm",
          isLight 
            ? "border-black/10 bg-black/5 text-black/90" 
            : "border-white/10 bg-white/5 text-white/90"
        )}>
          {badge}
        </span>
      )}
      <h2 className={cn(
        "mb-5 font-[Plus_Jakarta_Sans] text-3xl font-bold leading-[1.1] sm:mb-6 sm:text-4xl lg:text-5xl",
        isLight ? "text-black" : "text-white"
      )}>
        {title}
        {highlight && (
          <>
            <br />
            <span className={isLight ? "text-black/80" : "text-white"}>{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={cn(
          "text-base leading-[1.8] sm:text-lg",
          isLight ? "text-black/60" : "text-white"
        )}>
          {description}
        </p>
      )}
    </div>
  );

  if (!animated) return content;

  return (
    <div
      className={cn(
        "transition-all duration-700",
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
    >
      {content}
    </div>
  );
}
