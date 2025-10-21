import Hero from "@/screens/Hero";
import React from "react";
import Categories from "@/screens/Categories";
import Services from "@/screens/Services";
import Quality from "@/screens/Quality";
import FAQ from "@/screens/FAQ";
import Banner from "@/screens/Banner";


export default function Home() {
    return (
        <>
            <Hero/>
            <Categories/>
            <Services/>
            <Quality/>
            <FAQ/>
            <Banner/>
        </>
    );
}
