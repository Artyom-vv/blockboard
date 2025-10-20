import Hero from "@/screens/Hero";
import React from "react";
import Categories from "@/screens/Categories";
import Services from "@/screens/Services";
import Footer from "@/components/Footer/Footer";
import Quality from "@/screens/Quality";
import Faq from "@/screens/Faq";
import Banner from "@/screens/Banner";


export default function Home() {
    return (
        <>
            <Hero/>
            <Categories/>
            <Services/>
            <Quality/>
            <Faq/>
            <div className="py-[200px] text-center space-y-[200px]">
                <Banner/>
                <Footer/>
            </div>
        </>
    );
}
