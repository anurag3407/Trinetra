"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Minimize2,
  X,
  Sparkles,
  HelpCircle,
  Cpu,
  Layers,
  Zap,
  Play,
  RotateCcw,
  Presentation,
  CheckCircle2,
  Info,
} from "lucide-react";
import { SLIDES, SlideData } from "@/components/presentation/PresentationSlides";

export default function PresentationPage() {
  const router = useRouter();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTechMode, setIsTechMode] = useState(false);
  const [showSpeakerCue, setShowSpeakerCue] = useState(true);

  const currentSlide: SlideData = SLIDES[currentSlideIndex];
  const totalSlides = SLIDES.length;
  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;

  const goToNext = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (["input", "textarea"].includes((e.target as HTMLElement).tagName.toLowerCase())) {
        return;
      }

      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goToPrev();
      } else if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key.toLowerCase() === "t") {
        e.preventDefault();
        setIsTechMode((prev) => !prev);
      } else if (e.key === "Escape") {
        if (!document.fullscreenElement) {
          router.push("/");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, toggleFullscreen, router]);

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-[#121212] flex flex-col justify-between selection:bg-[#D02020] selection:text-white relative overflow-hidden font-sans">
      {/* Top Presentation Control Header */}
      <header className="bg-white border-b-4 border-[#121212] px-4 sm:px-8 py-3.5 flex items-center justify-between z-30 shadow-[0_4px_0px_0px_#121212]">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 p-1.5 hover:bg-gray-100 border-2 border-[#121212] transition-colors"
            title="Exit Presentation"
          >
            <X className="w-4 h-4 text-[#121212]" />
            <span className="text-xs font-black uppercase tracking-wider hidden sm:inline">Exit</span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 rounded-full bg-[#D02020]" />
              <div className="w-3.5 h-3.5 bg-[#1040C0]" />
              <div className="w-3.5 h-3.5 clip-triangle bg-[#F0C020]" />
            </div>
            <span className="font-black text-lg tracking-tighter uppercase">TRINETRA PITCH DECK</span>
            <span className="hidden md:inline bg-[#121212] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-widest ml-1">
              FOR JUDGES
            </span>
          </div>
        </div>

        {/* Center Slide Jump Selector */}
        <div className="hidden lg:flex items-center gap-1.5">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`w-7 h-7 border-2 border-[#121212] font-mono text-xs font-bold transition-all ${
                currentSlideIndex === idx
                  ? "bg-[#D02020] text-white shadow-[2px_2px_0px_0px_#121212] -translate-y-0.5"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              title={`Slide ${idx + 1}: ${slide.title}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        {/* Right Tools & Mode Toggles */}
        <div className="flex items-center gap-3">
          {/* Simple vs Technical Mode Toggle */}
          <button
            onClick={() => setIsTechMode(!isTechMode)}
            className={`px-3 py-1.5 border-2 border-[#121212] font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-[2px_2px_0px_0px_#121212] ${
              isTechMode ? "bg-[#1040C0] text-white" : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
            title="Toggle Technical Details"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isTechMode ? "Technical Mode" : "Simple Judge Mode"}</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 bg-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] hover:bg-gray-100 transition-colors"
            title={isFullscreen ? "Exit Fullscreen (F)" : "Enter Fullscreen (F)"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Slide Content Viewport */}
      <main className="flex-1 flex flex-col justify-center px-4 sm:px-12 lg:px-20 py-8 max-w-7xl mx-auto w-full relative z-10">
        <div className="space-y-6 animate-fadeIn">
          {/* Slide Badge & Counter */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span
              className="px-3 py-1 text-white border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] font-black text-xs uppercase tracking-widest"
              style={{
                backgroundColor: currentSlide.badgeColor,
                color: currentSlide.badgeColor === "#F0C020" ? "#121212" : "#ffffff",
              }}
            >
              {currentSlide.badge}
            </span>

            <span className="font-mono text-xs font-black uppercase text-gray-500">
              SLIDE {String(currentSlideIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
            </span>
          </div>

          {/* Slide Main Heading */}
          <div className="space-y-2">
            <h1 className="font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-[#121212] leading-[0.92]">
              {currentSlide.title}
            </h1>
            <p className="font-medium text-lg sm:text-2xl text-gray-700 leading-snug">
              {currentSlide.subtitle}
            </p>
          </div>

          {/* Judge Analogy Callout Box (Crystal Clear Real-World Explanation) */}
          {currentSlide.analogyTitle && currentSlide.analogyText && (
            <div className="bg-[#FFF9C4] border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-5 sm:p-6 space-y-1.5 max-w-4xl">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#121212]">
                <Sparkles className="w-4 h-4 text-[#D02020]" />
                <span>NON-TECHNICAL ANALOGY: {currentSlide.analogyTitle}</span>
              </div>
              <p className="font-medium text-sm sm:text-base text-gray-900 leading-relaxed">
                {currentSlide.analogyText}
              </p>
            </div>
          )}

          {/* Interactive Slide Graphic / Cards Body */}
          <div className="pt-2">
            {currentSlide.renderContent(isTechMode)}
          </div>
        </div>
      </main>

      {/* Speaker Notes / Cue Footer Strip (Collapsible) */}
      {showSpeakerCue && currentSlide.speakerCue && (
        <div className="bg-white border-t-2 border-b-2 border-[#121212] px-6 py-2.5 flex items-center justify-between text-xs font-medium text-gray-700">
          <div className="flex items-center gap-2">
            <span className="bg-[#121212] text-white px-2 py-0.5 font-mono text-[10px] font-black uppercase">
              SPEAKER TALKING POINT
            </span>
            <span className="italic text-gray-800 line-clamp-1">{currentSlide.speakerCue}</span>
          </div>
          <button
            onClick={() => setShowSpeakerCue(false)}
            className="text-[10px] font-bold uppercase hover:underline text-gray-500"
          >
            Hide Cue
          </button>
        </div>
      )}

      {/* Bottom Controls Bar */}
      <footer className="bg-white border-t-4 border-[#121212] px-4 sm:px-8 py-4 z-30 shadow-[0_-4px_0px_0px_#121212]">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 border-2 border-[#121212] mb-4 overflow-hidden">
          <div
            className="h-full bg-[#D02020] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Left: Restart & Canvas CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentSlideIndex(0)}
              className="px-3 py-2 bg-white text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] font-black text-xs uppercase hover:bg-gray-100 transition-all flex items-center gap-1.5"
              title="Restart from Slide 1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Restart</span>
            </button>

            <Link
              href="/dashboard"
              className="px-4 py-2 bg-[#D02020] text-white border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] font-black text-xs uppercase hover:bg-[#b01a1a] transition-all flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Launch Live Canvas</span>
            </Link>
          </div>

          {/* Center: Keyboard Hint */}
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-gray-500">
            <span>Use keys:</span>
            <kbd className="px-2 py-0.5 bg-gray-100 border border-gray-400 font-bold text-black">←</kbd>
            <kbd className="px-2 py-0.5 bg-gray-100 border border-gray-400 font-bold text-black">→</kbd>
            <kbd className="px-2 py-0.5 bg-gray-100 border border-gray-400 font-bold text-black">Space</kbd>
            <kbd className="px-2 py-0.5 bg-gray-100 border border-gray-400 font-bold text-black">F (Fullscreen)</kbd>
          </div>

          {/* Right: Previous & Next Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={goToPrev}
              disabled={currentSlideIndex === 0}
              className={`px-5 py-2.5 border-3 border-[#121212] font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
                currentSlideIndex === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-[#121212] shadow-[3px_3px_0px_0px_#121212] hover:bg-gray-100 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={goToNext}
              disabled={currentSlideIndex === totalSlides - 1}
              className={`px-6 py-2.5 border-3 border-[#121212] font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
                currentSlideIndex === totalSlides - 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-[#D02020] text-white shadow-[4px_4px_0px_0px_#121212] hover:bg-[#b01a1a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              }`}
            >
              <span>Next Slide</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
