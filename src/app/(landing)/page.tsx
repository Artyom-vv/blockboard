import Hero from "@/screens/Hero";
import React from "react";
import Categories from "@/screens/Categories";
import Services from "@/screens/Services";
import Footer from "@/components/Footer/Footer";
import Quality from "@/screens/Quality";


export default function Home() {
    return (
        <>
            <Hero/>
            <Categories/>
            <Services/>
            <Quality/>
            <div className="py-[200px] text-center space-y-[200px]">
                <h1>FAQ</h1>
                <h1>Every Talent Matters</h1>
                <Footer/>
            </div>
        </>
    );
}
