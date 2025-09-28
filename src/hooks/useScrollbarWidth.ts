import { useEffect, useState } from "react";

export const useScrollbarWidth = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (typeof document === "undefined") return;

        const measure = () => {
            const outer = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.position = "absolute";
            outer.style.top = "-9999px";
            outer.style.width = "100px";
            outer.style.height = "100px";
            outer.style.overflow = "scroll";
            document.body.appendChild(outer);

            const scrollbarWidth = outer.offsetWidth - outer.clientWidth;

            document.body.removeChild(outer);
            setWidth(scrollbarWidth);
        };

        measure();
        window.addEventListener("resize", measure, { passive: true });
        return () => window.removeEventListener("resize", measure);
    }, []);

    return width;
};
