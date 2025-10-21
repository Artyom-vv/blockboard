"use client";

import { motion, useInView } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    duration?: number;
    delay?: number;
    distanceY?: number;
    initialScale?: number;
    stagger?: number;
}

const FadeIn: FC<FadeInProps> = ({
                                     children,
                                     duration = 0.4,
                                     delay = 0,
                                     distanceY = 20,
                                     initialScale = 0.95,
                                     stagger = 0.15,
                                     ...rest
                                 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const items = Array.isArray(children) ? children : [children];

    return (
        <div ref={ref} {...rest}>
            {items.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: distanceY, scale: initialScale }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{
                        duration,
                        delay: delay + idx * stagger,
                        ease: "easeOut",
                    }}
                >
                    {item}
                </motion.div>
            ))}
        </div>
    );
};

export default FadeIn;
