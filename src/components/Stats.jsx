"use client";

import { useRef, useEffect, useState } from "react";
import Container from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

function AnimatedCounter({ value, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const target = Number(value) || 0;
    if (target === 0) return;
    
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="font-[Plus_Jakarta_Sans] text-4xl font-bold text-black sm:text-5xl lg:text-6xl">
      {count}
      <span className="text-black/50">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pb-20 pt-4 sm:pb-28 sm:pt-8 lg:pb-32 lg:pt-12 z-10 bg-transparent">
      <div className="section-divider mb-10 sm:mb-16 opacity-50" />
      <Container ref={ref}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {siteConfig.stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={cn(
                  "transition-all duration-1000 delay-100 glass-panel-light rounded-3xl p-8 text-center sm:p-10",
                  inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                )}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/5 border border-black/10 text-black">
                  <Icon className="size-6" />
                </div>
                <div className="mb-3">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>
                <p className="text-sm font-semibold text-black/60 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
