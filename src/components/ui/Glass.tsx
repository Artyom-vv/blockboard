"use client";

import * as React from "react";
import {cn} from "@/lib/cn";

export interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
    wrapperClassName?: string;
    contentClassName?: string;
    radius?: number | string;
    blurClassName?: string;
    baseOpacity?: number;
    tint?: string;
    highlight?: boolean;
    highlightAngle?: number;
    highlightOpacity?: number;
    dispersion?: boolean;
    dispersionIntensity?: number;
    noise?: boolean;
    noiseOpacity?: number;
    borderClassName?: string;
    insetPadding?: string;

    /** Усиление блика под курсором */
    interactiveGlow?: boolean;                 // default: false
    glowRadius?: number;                       // default: 220
    glowStrength?: number;                     // default: 0.28
    glowBlend?: "screen" | "soft-light";       // default: "screen"
    /** Плавность появления/исчезновения линзы */
    glowEnterMs?: number;                      // default: 160
    glowExitMs?: number;                       // default: 220
    glowEasing?: string;                       // default: "ease"
}

export const Glass = React.forwardRef<HTMLDivElement, GlassProps>(
    (
        {
            className,
            wrapperClassName,
            contentClassName,
            children,
            radius = 30,
            blurClassName = "backdrop-blur-[14px]",
            baseOpacity = 0.8,
            tint = "#F9F7F7",
            highlight = true,
            highlightAngle = -45,
            highlightOpacity = 0.55,
            dispersion = true,
            dispersionIntensity = 0.10,
            noise = true,
            noiseOpacity = 0.05,
            borderClassName = "border border-white/30",
            insetPadding = "",

            interactiveGlow = false,
            glowRadius = 220,
            glowStrength = 0.28,
            glowBlend = "screen",
            glowEnterMs = 400,
            glowExitMs = 220,
            glowEasing = "cubic-bezier(.2,.6,.2,1)",

            ...rest
        },
        ref
    ) => {
        const clamp = (v: number, min = 0, max = 1) => Math.max(min, Math.min(max, v));
        const o1 = clamp(highlightOpacity);
        const o2 = clamp(highlightOpacity * 0.33);
        const no = clamp(noiseOpacity);
        const di = clamp(dispersionIntensity);

        const noiseDataUrl = `url('data:image/svg+xml;utf8,` +
            `<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22>` +
            `<filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter>` +
            `<rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.25%22/></svg>')`;

        const radiusStyle = typeof radius === "number" ? `${radius}px` : radius;

        // Видимость линзы (opacity) для плавности
        const [glowVisible, setGlowVisible] = React.useState(false);
        const clearTimer = React.useRef<number | null>(null);

        const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
            if (!interactiveGlow) return;
            const el = e.currentTarget;
            const rect = el.getBoundingClientRect();
            el.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
            el.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
        }, [interactiveGlow]);

        const handleMouseEnter = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
            if (!interactiveGlow) return;
            const el = e.currentTarget;
            // на входе — короткая длительность
            el.style.setProperty("--glow-dur", `${glowEnterMs}ms`);
            if (clearTimer.current) {
                window.clearTimeout(clearTimer.current);
                clearTimer.current = null;
            }
            setGlowVisible(true);
        }, [interactiveGlow, glowEnterMs]);

        const handleMouseLeave = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
            if (!interactiveGlow) return;
            const el = e.currentTarget;
            // на выходе — длиннее
            el.style.setProperty("--glow-dur", `${glowExitMs}ms`);
            setGlowVisible(false);
            // координаты чистим ПОСЛЕ завершения анимации
            if (clearTimer.current) window.clearTimeout(clearTimer.current);
            clearTimer.current = window.setTimeout(() => {
                el.style.removeProperty("--glow-x");
                el.style.removeProperty("--glow-y");
                clearTimer.current = null;
            }, glowExitMs);
        }, [interactiveGlow, glowExitMs]);

        return (
            <div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={cn(
                    "relative overflow-hidden bg-transparent",
                    blurClassName,
                    borderClassName,
                    insetPadding,
                    wrapperClassName || className
                )}
                style={{
                    borderRadius: radiusStyle,
                    backgroundColor: `${tint}${Math.round(clamp(baseOpacity) * 255).toString(16).padStart(2, "0")}`,
                    // glow vars
                    "--glow-radius": `${glowRadius}px`,
                    "--glow-strength": clamp(glowStrength),
                } as React.CSSProperties}
                {...rest}
            >
                <div className={cn("relative z-10", contentClassName)}>{children}</div>

                {highlight && (
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(${highlightAngle}deg, rgba(255,255,255,${o1}) 0%, rgba(255,255,255,${o2}) 35%, rgba(255,255,255,0) 65%)`,
                        }}
                    />
                )}

                {dispersion && (
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-[inherit]"
                        style={{
                            boxShadow: `inset 0 0 0 1px rgba(255,0,128,${di}), inset 0 0 0 2px rgba(0,128,255,${di})`,
                        }}
                    />
                )}

                {noise && (
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 mix-blend-overlay"
                        style={{opacity: no, backgroundImage: noiseDataUrl, borderRadius: "inherit"}}
                    />
                )}

                {interactiveGlow && (
                    <div
                        aria-hidden
                        className="pointer-events-none absolute top-[0] left-[0] w-full h-full inset-0 rounded-[inherit]"
                        style={{
                            background: `
                radial-gradient(
                  circle var(--glow-radius) at var(--glow-x, -1000px) var(--glow-y, -1000px),
                  rgba(255,255,255,var(--glow-strength)) 0%,
                  rgba(255,255,255,0) 60%
                ),
                radial-gradient(
                  circle calc(var(--glow-radius) * 0.8) at var(--glow-x, -1000px) var(--glow-y, -1000px),
                  ${tint}33 0%,
                  rgba(0,0,0,0) 70%
                )
              `,
                            mixBlendMode: glowBlend,
                            opacity: glowVisible ? 1 : 0,
                            transition: `opacity ${glowVisible ? glowEnterMs : glowExitMs}ms ${glowEasing}`,
                            willChange: "opacity",
                        }}
                    />
                )}
            </div>
        );
    }
);
Glass.displayName = "Glass";
