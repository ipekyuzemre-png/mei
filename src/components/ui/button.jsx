import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)]",
        "default-light": "bg-black text-white hover:bg-black/90 shadow-[0_0_20px_rgba(0,0,0,0.15)]",
        outline:
          "border-white/10 bg-white/5 hover:bg-white/10 hover:text-white backdrop-blur-md shadow-sm",
        "outline-light":
          "border-black/10 bg-black/5 hover:bg-black/10 hover:text-black backdrop-blur-md shadow-sm text-black/60",
        secondary:
          "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md",
        ghost:
          "hover:bg-white/10 hover:text-white",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-white underline-offset-4 hover:underline",
        glass:
          "glass-panel hover:glass-panel-hover text-white transition-all duration-300",
        "glass-light":
          "glass-panel-light hover:glass-panel-light-hover text-black transition-all duration-300",
      },
      size: {
        default:
          "h-10 gap-2 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        xs: "h-7 gap-1 rounded-[min(var(--radius-md),10px)] px-3 text-xs",
        sm: "h-9 gap-1.5 rounded-[min(var(--radius-md),12px)] px-4 text-[0.8rem]",
        lg: "h-12 gap-2 px-8 text-base has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        icon: "size-10",
        "icon-xs": "size-7 rounded-[min(var(--radius-md),10px)]",
        "icon-sm": "size-9 rounded-[min(var(--radius-md),12px)]",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <ButtonPrimitive
      data-slot="button"
      nativeButton={props.render ? false : undefined}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
