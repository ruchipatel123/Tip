"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
const CarouselCoverLucide = () => {
  // Base slides data
  const baseSlides = [
    {
      id: 1,
      title: "Pilates Linfodrenante™",
      image: "/images/PilatesLinfodrenant.png",
      description:
        "L'esclusivo Pilates per eliminare la ritenzione, migliorare la cricolazione e tonificare",
      duration: "5-25",
      frequency: "3 volte a settimana",
      level: "principiante",
      isLarge:true,
      objectives: "ritenzione, sgonfiare, tonificare",
      equipment: "nessun attrezzo richiesto",
      category: "Pilates",
    },
    {
      id: 2,
      title: "Pilates Cardio™",
      image: "/images/ReformerPilates.jpeg",
      description:
        "Combinazione dinamica di Pilates e cardio per bruciare calorie e migliorare la resistenza",
      duration: "20-40",
      frequency: "3-4 volte a settimana",
      level: "avanzato",
      isLarge:true,
      objectives: "dimagrire, resistenza, energia",
      equipment: "tappetino, palla pilates",
      category: "Cardio",
    },
    {
      id: 3,
      title: "Pilates Tonificante™",
      image: "/images/carouselleft2.jpeg",
      description:
        "Pilates intensivo per sviluppare forza muscolare e definizione corporea",
      duration: "15-30",
      frequency: "4 volte a settimana",
      level: "intermedio",
      isLarge:true,
      objectives: "tonificare, rinforzare, definire",
      equipment: "elastici, pesi leggeri",
      category: "Tonificazione",
    },

    {
      id: 4,
      title: "Pilates Posturale™",
      image: "/images/carouselright1.png",
      description:
        "Esercizi mirati per migliorare la postura e alleviare tensioni della colonna vertebrale",
      duration: "10-20",
      frequency: "5 volte a settimana",
      level: "principiante",
      isLarge:true,
      objectives: "postura, flessibilità, benessere",
      equipment: "cuscino, rullo foam",
      category: "Yoga",
    },
    {
      id: 5,
      title: "Pilates Pre/Post Parto™",
      image: "/images/carouselright2.png",
      description:
        "Programma specializzato per supportare il corpo durante e dopo la gravidanza",
      duration: "15-25",
      frequency: "2-3 volte a settimana",
      level: "adattato",
      isLarge:true,
      objectives: "forza core, recupero, benessere",
      equipment: "palla, fasce elastiche",
      category: "Pre e post parto",
    },
  ];

  // Create 5 separate static data arrays with different arrangements
  const tuttiSlides = [
    {
      id: 15,
      title: "Easy Pilates™",
      image: "/images/easyPilates.jpeg",
      description:
        "Il Pilates pensato per te che vuoi (ri)cominciare ad allenarti.",
      duration: "30",
      frequency: "3 volte a settimana",
      level: "principiante",
      isLarge:true,
      objectives: "dimagrire, tonificare, mobilità, postura",
      equipment: "nessun attrezzo richiesto",
      category: "Pilates",
    },
    {
      id: 16,
      title: "Dance & Sculpt™",
      image: "/images/Dance&Sculp.png",
      description: "Tonifica e divertiti ballando $",
      duration: "30",
      frequency: "3 volte a settimana",
      level: "intermedio",
      isLarge:true,
      objectives: "tonificare, dimagrire",
      equipment: "nessun attrezzo richiesto",
      category: "Cardio",
    },
    {
      id: 1,
      title: "Pilates Linfodrenante™",
      image: "/images/PilatesLinfodrenante.jpg",
      description:
        "L'esclusivo Pilates per eliminare la ritenzione, migliorare la cricolazione e tonificare.",
      duration: "5-25",
      frequency: "3 volte a settimana",
      level: "avanzato",
      isLarge:true,
      objectives: "ritenzione, sgonifiare, tonificare",
      equipment: "nessun attrezzo richiesto",
      category: "Pilates",
    },
    {
      id: 2,
      title: "Reformer Pilates™",
      image: "/images/ReformerPilates.jpeg",
      description: "Il Pilates Reformer efficace, come in studio a casa tua.",
      duration: "30",
      frequency: "3 volte a settimana",
      level: "avanzato",
      isLarge:true,
      objectives: "dimagrire, tonificare, mobilità, postura",
      equipment: "palla da yoga/pilates + cavigliere",
      category: "Pilates",
    },
    {
      id: 3,
      title: "Sculpt Pilates™",
      image: "/images/sculptPilates.png",
      description: "Il Pilates come in studio nella comodità di casa tua.",
      duration: "30",
      isLarge:true,
      frequency: "3 volte a settimana",
      level: "intermedio-avanzato",
      objectives: "dimagrire, tonificare, mobilità, postura",
      equipment: "nessun attrezzo richiesto",
      category: "Pilates",
    },

    {
      id: 4,
      title: "Cardio Burn™",
      image: "/images/cardioBurn.png",
      description: "Il programma per te che ami il cardio ad alta intensità.",
      duration: "12-30",
      isLarge:true,
      frequency: "3 volte a settimana",
      level: "intermedio-avanzato",
      objectives: "dimagrire, tonificare",
      equipment: "nessun attrezzo richiesto",
      category: "Cardio",
    },
    {
      id: 5,
      title: "Home Pump™",
      image: "/images/HomePump.png",
      description:
        "L'adrenalina dei corsi in palestra nella comodità di casa tua.",
      duration: "30",
      isLarge:true,
      frequency: "3 volte a settimana",
      level: "intermedio-avanzato",
      objectives: "dimagrire, tonificare, massa muscolare",
      equipment: "manubri (consigliati)",
      category: "Tonificazione",
    },
    {
      id: 6,
      title: "Easy Pump™",
      image: "/images/easyPump.png",
      description:
        "Il programma pensato per te che vuoi (ri)cominciare ad allenarti, divertendoti.",
      duration: "30",
      isLarge:true,
      frequency: "3 volte a settimana",
      level: "principiante",
      objectives: "dimagrire, tonificare, massa muscolare",
      equipment: "manubri (consigliati)",
      category: "Tonificazione",
    },
    {
      id: 7,
      title: "Gym Power™",
      image: "/images/GymPower.jpg",
      description:
        "Ottieni il massimo dal abbonamento in palestra o dalla tua home gym.",
      duration: "50",
      isLarge:true,
      frequency: "3 volte a settimana",
      level: "intermedio-avanzato",
      objectives: "dimagrire, tonificare, massa muscolare",
      equipment: "abbonamento in palestra o home gym",
      category: "Tonificazione",
    },
    {
      id: 8,
      title: "Pilates Linfodrenante™ Gravidanza",
      isThreeLines:true,
      isLarge:true,
      image: "/images/PilatesLinfodrenante Gravidanza.jpg",
      description:
        "L'esclusivo Pilates per tonificare, drenare e sgonfiare in gravidanza.",
      duration: "20-30",
      frequency: "3 volte a settimana",
      level: "intermedio",
      objectives: "dimagrire, tonificare, drenare",
      equipment:
        "Primo trimestre - nessun attrezzo, Secondo trimestre - Palla da Pilates + elastico lungo aperto, Terzo trimestre - Attrezzi secondo trimestre + Fitness/Birthing Ball",
      category: "Pre e post parto",
    },
    {
      id: 9,
      title: "Pilates Post-Parto & Diastasi™",
      isThreeLines:true,
      isLarge:true,
      image: "/images/nutrizone.jpg",
      description:
        "Il Pilates per tonificare dopo il parto e ridurre la diastasi.",
      duration: "20-30",
      frequency: "3 volte a settimana",
      level: "principiante-intermedio",
      objectives: "tonificare, sgonfiare, ridurre diastasi",
      equipment: "palla da pilates + elastico lungo aperto",
      category: "Pre e post parto",
    },
    {
      id: 10,
      title: "Yoga Circle™",
      image: "/images/YogaCircle.png",
      description: "Il tuo circolo privato di Yoga 5.",
      duration: "30",
      isLarge:true,
      frequency: "3 volte a settimana",
      level: "intermedio",
      objectives: "flessibilità, mobilità, serenità mentale",
      equipment: "nessun attrezzo richiesto",
      category: "Yoga",
    },
    {
      id: 11,
      title: "Easy Yoga",
      image: "/images/EasyYoga.png",
      description: "Il Percorso di introduzione allo Yoga per principianti",
      duration: "30",
      isLarge:true,
      frequency: "3 volte a settimana",
      level: "principiante",
      objectives: "flessibilità, mobilità, serenità mentale",
      equipment: "nessun attrezzo richiesto",
      category: "Yoga",
    },
    {
      id: 12,
      title: "Funzionale con Lucrezia",
      image: "/images/FunzionaleconLucrezia.png",
      description: "Per le amanti dell'allenamento con pesi a casa",
      duration: "30",
      isLarge:true,
      frequency: "3 volte a settimana",
      level: "intermedio",
      objectives: "dimagrire, tonificare, massa muscolare",
      equipment: "manubri",
      category: "Tonificazione",
    },
    {
      id: 13,
      title: "Pilates Linfodrenante™ Principianti",
      isThreeLines:true,
      isLarge:true,
      image: "/images/PilatesLinfodrenantePrincipianti.jpg",
      description: "Il Percorso di introduzione al Pilates Linfodrenante",
      duration: "5-25",
      frequency: "tutti i giorni",
      level: "principiante",
      objectives: "ritenzione, sgonifiare, tonificare",
      equipment: "nessun attrezzo richiesto",
      category: "Pilates",
    },
    {
      id: 14,
      title: "Funzionale con Carlotta",
      image: "/images/FunzionaleconCarlotta.png",
      description: "Per le amanti dell'allenamento con pesi a casa",
      duration: "30",
      isLarge:true,
      frequency: "3 volte a settimana",
      level: "intermedio",
      objectives: "dimagrire, tonificare, massa muscolare",
      equipment: "manubri",
      category: "Tonificazione",
    },
  ];

  const pilatesSlides = [
    {
      id: 11,
      title: "Pilates Classico™",
      image: "/images/carouselright1.png",
      description:
        "Il vero Pilates secondo i principi originali di Joseph Pilates",
      duration: "20-30",
      isLarge:true,
      frequency: "4 volte a settimana",
      level: "intermedio",
      objectives: "controllo, precisione, fluidità",
      equipment: "tappetino, magic circle",
      category: "Pilates",
    },
    {
      id: 12,
      title: "Pilates Reformer Style™",
      image: "/images/carouselleft2.jpeg",
      description:
        "Movimenti ispirati al reformer ma eseguibili a corpo libero",
      duration: "25-35",
      isLarge:true,
      frequency: "3 volte a settimana",
      level: "avanzato",
      objectives: "forza, coordinazione, equilibrio",
      equipment: "elastici, palla",
      category: "Pilates",
    },
    {
      id: 13,
      title: "Pilates Flow™",
      image: "/images/yoga.jpg",
      description:
        "Sequenze fluide che combinano respirazione e movimento continuo",
      duration: "18-28",
      isLarge:true,
      frequency: "4 volte a settimana",
      level: "intermedio",
      objectives: "fluidità, concentrazione, benessere",
      equipment: "tappetino",
      category: "Pilates",
    },
    {
      id: 14,
      title: "Pilates Mat Work™",
      image: "/images/carouselleft1.png",
      description: "Lavoro completo a terra per sviluppare forza e controllo",
      duration: "22-32",
      isLarge:true,
      frequency: "5 volte a settimana",
      level: "principiante",
      objectives: "fondamenta, controllo, stabilità",
      equipment: "tappetino, cuscino",
      category: "Pilates",
    },
    {
      id: 15,
      title: "Pilates Advanced™",
      image: "/images/carouselright2.png",
      description:
        "Sfide avanzate per praticanti esperti che vogliono progredire",
      duration: "30-40",
      isLarge:true,
      frequency: "3-4 volte a settimana",
      level: "avanzato",
      objectives: "challenge, progressione, maestria",
      equipment: "palla, pesi, elastici",
      category: "Pilates",
    },
  ];

  const tonificazioneSlides = [
    {
      id: 16,
      title: "Toning Express™",
      image: "/images/carouselleft2.jpeg",
      description: "Allenamenti brevi ma intensi per tonificare tutto il corpo",
      duration: "15-20",
      isLarge:true,
      frequency: "5 volte a settimana",
      level: "intermedio",
      objectives: "tono muscolare, definizione",
      equipment: "pesi leggeri, elastici",
      category: "Tonificazione",
    },
    {
      id: 17,
      title: "Sculpt & Shape™",
      image: "/images/carouselright1.png",
      description:
        "Modellare e scolpire ogni distretto muscolare con precisione",
      duration: "25-35",
      isLarge:true,
      frequency: "4 volte a settimana",
      level: "avanzato",
      objectives: "sculpting, definizione, forma",
      equipment: "pesi, bande elastiche",
      category: "Tonificazione",
    },
    {
      id: 18,
      title: "Resistance Training™",
      image: "/images/yoga.jpg",
      description:
        "Allenamento di resistenza per aumentare forza e massa magra",
      duration: "20-30",
      isLarge:true,
      frequency: "4 volte a settimana",
      level: "intermedio",
      objectives: "forza, massa magra, resistenza",
      equipment: "elastici, pesi",
      category: "Tonificazione",
    },
    {
      id: 19,
      title: "Body Sculpting™",
      image: "/images/carouselleft1.png",
      description: "Programma completo per rimodellare la silhouette",
      duration: "30-40",
      isLarge:true,
      frequency: "3 volte a settimana",
      level: "avanzato",
      objectives: "rimodellamento, tono, forma",
      equipment: "pesi, palla, elastici",
      category: "Tonificazione",
    },
  ];

  const cardioSlides = [
    {
      id: 20,
      title: "Cardio Blast™",
      image: "/images/yoga.jpg",
      description:
        "Esplosioni cardio ad alta intensità per bruciare al massimo",
      duration: "20-30",
      isLarge:true,
      frequency: "4 volte a settimana",
      level: "avanzato",
      objectives: "bruciare calorie, resistenza cardiovascolare",
      equipment: "tappetino",
      category: "Cardio",
    },
    {
      id: 21,
      title: "Dance Cardio™",
      image: "/images/carouselleft2.jpeg",
      description: "Cardio divertente con movimenti ispirati alla danza",
      duration: "25-35",
      isLarge:true,
      frequency: "3-4 volte a settimana",
      level: "intermedio",
      objectives: "divertimento, cardio, coordinazione",
      equipment: "nessuno",
      category: "Cardio",
    },
    {
      id: 22,
      title: "HIIT Pilates™",
      image: "/images/carouselright1.png",
      description: "Combinazione di HIIT e Pilates per massimi risultati",
      duration: "18-25",
      isLarge:true,
      frequency: "4 volte a settimana",
      level: "avanzato",
      objectives: "intensità, forza, cardio",
      equipment: "tappetino, pesi",
      category: "Cardio",
    },
    {
      id: 23,
      title: "Low Impact Cardio™",
      image: "/images/carouselleft1.png",
      description: "Cardio a basso impatto per proteggere le articolazioni",
      duration: "25-30",
      isLarge:true,
      frequency: "5 volte a settimana",
      level: "principiante",
      objectives: "cardio sicuro, resistenza, benessere",
      equipment: "tappetino",
      category: "Cardio",
    },
    {
      id: 24,
      title: "Fat Burn Zone™",
      image: "/images/carouselright2.png",
      description: "Allenamenti mirati alla zona brucia grassi ottimale",
      duration: "30-40",
      isLarge:true,
      frequency: "4 volte a settimana",
      level: "intermedio",
      objectives: "brucia grassi, definizione, energia",
      equipment: "fascia cardio (opzionale)",
      category: "Cardio",
    },
  ];

  const yogaSlides = [
    {
      id: 25,
      title: "Yoga Flow™",
      image: "/images/carouselright1.png",
      description:
        "Sequenze fluide che uniscono movimento, respiro e mindfulness",
      duration: "20-30",
      isLarge:true,
      frequency: "4 volte a settimana",
      level: "intermedio",
      objectives: "flessibilità, equilibrio, calma",
      equipment: "tappetino, blocchi",
      category: "Yoga",
    },
    {
      id: 26,
      title: "Yin Yoga™",
      image: "/images/carouselleft1.png",
      description:
        "Pratica meditativa con posture tenute a lungo per il rilassamento profondo",
      duration: "30-45",
      isLarge:true,
      frequency: "2-3 volte a settimana",
      level: "principiante",
      objectives: "rilassamento, flessibilità, meditazione",
      equipment: "tappetino, cuscini, coperta",
      category: "Yoga",
    },
    {
      id: 27,
      title: "Power Yoga™",
      image: "/images/yoga.jpg",
      description: "Yoga dinamico e vigoroso per forza e resistenza",
      duration: "25-35",  
      isLarge:true,
      frequency: "3 volte a settimana",
      level: "avanzato",
      objectives: "forza, flessibilità, concentrazione",
      equipment: "tappetino, blocchi",
      category: "Yoga",
    },
    {
      id: 28,
      title: "Restorative Yoga™",
      image: "/images/carouselright2.png",
      description:
        "Yoga riparatore per il recupero e il benessere del sistema nervoso",
      duration: "35-45",
      isLarge:true,
      frequency: "2 volte a settimana",
      level: "principiante",
      objectives: "recupero, calma, rigenerazione",
      equipment: "tappetino, cuscini, coperta",
      category: "Yoga",
    },
  ];

  const prePostPartoSlides = [
    {
      id: 29,
      title: "Prenatal Safe™",
      image: "/images/carouselright2.png",
      description:
        "Esercizi sicuri e benefici durante tutti i trimestri di gravidanza",
      duration: "15-25",
      isLarge:true,
      frequency: "3 volte a settimana",
      level: "adattato",
      objectives: "benessere in gravidanza, forza, preparazione parto",
      equipment: "palla gravidanza, cuscino",
      category: "Pre e post parto",
    },
    {
      id: 30,
      title: "Postnatal Recovery™",
      image: "/images/carouselleft1.png",
      description:
        "Recupero graduale post-parto per ripristinare forza e benessere",
      duration: "12-20",
      isLarge:true,
      frequency: "4 volte a settimana",
      level: "adattato",
      objectives: "recupero post-parto, core recovery",
      equipment: "tappetino, fascia elastica",
      category: "Pre e post parto",
    },
    {
      id: 31,
      title: "Mamma & Baby™",
      image: "/images/carouselright1.png",
      description: "Allenamenti che puoi fare insieme al tuo bambino",
      duration: "15-25",
      isLarge:true,
      frequency: "3-4 volte a settimana",
      level: "principiante",
      objectives: "bonding, fitness mamma, divertimento",
      equipment: "tappetino, giochi baby",
      category: "Pre e post parto",
    },
  ];

  // Map tabs to their respective static data arrays
  const slidesData = {
    Tutti: tuttiSlides,
    Pilates: pilatesSlides,
    Tonificazione: tonificazioneSlides,
    Cardio: cardioSlides,
    Yoga: yogaSlides,
    "Pre e post parto": prePostPartoSlides,
  };

  // Tab configuration array
  const tabs = [
    { key: "Tutti", label: "Tutti" },
    { key: "Pilates", label: "Pilates" },
    { key: "Tonificazione", label: "Tonificazione" },
    { key: "Cardio", label: "Cardio" },
    { key: "Yoga", label: "Yoga" },
    { key: "Pre e post parto", label: "Pre e post parto" },
  ];

  const [activeCard, setActiveCard] = useState("Tutti");

  // Get current slides based on active tab
  const originalSlides = slidesData[activeCard];

  // Create infinite slides by cloning first and last slides
  const slides = [
    // Clone last 2 slides at the beginning
    {
      ...originalSlides[originalSlides.length - 2],
      id: `clone-${originalSlides[originalSlides.length - 2].id}-start-2`,
    },
    {
      ...originalSlides[originalSlides.length - 1],
      id: `clone-${originalSlides[originalSlides.length - 1].id}-start-1`,
    },
    // Original slides
    ...originalSlides,
    // Clone first 2 slides at the end
    { ...originalSlides[0], id: `clone-${originalSlides[0].id}-end-1` },
    { ...originalSlides[1], id: `clone-${originalSlides[1].id}-end-2` },
  ];

  const [currentIndex, setCurrentIndex] = useState(2 + 2); // Start at original slide index 2 + 2 clones at start
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const mouseStartX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const videoRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Close accordion when slide changes
  useEffect(() => {
    setExpandedCard(null);
  }, [currentIndex]);

  // Reset carousel when active tab changes
  useEffect(() => {
    setCurrentIndex(2 + 2); // Reset to first slide (accounting for clones)
    setExpandedCard(null);
    setIsAnimating(false);
    setIsTransitioning(true);
  }, [activeCard]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);

    setTimeout(() => {
      setIsAnimating(false);
      // Check if we're at a cloned slide and need to reset
      if (currentIndex + 1 >= slides.length - 2) {
        // We're at the end clones, jump to beginning of original slides
        setIsTransitioning(false);
        setCurrentIndex(2); // First original slide (after 2 clones)
        setTimeout(() => setIsTransitioning(true), 50);
      }
    }, 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);

    setTimeout(() => {
      setIsAnimating(false);
      // Check if we're at a cloned slide and need to reset
      if (currentIndex - 1 <= 1) {
        // We're at the start clones, jump to end of original slides
        setIsTransitioning(false);
        setCurrentIndex(slides.length - 3); // Last original slide (before 2 clones)
        setTimeout(() => setIsTransitioning(true), 50);
      }
    }, 600);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;

    // Calculate current position in original slides (0-4)
    const totalSlides = originalSlides.length;
    const currentOriginalIndex = (currentIndex - 2 + totalSlides) % totalSlides;
    const targetOriginalIndex = index;

    if (currentOriginalIndex === targetOriginalIndex) return;

    // Calculate shortest path distances
    const forwardDistance =
      (targetOriginalIndex - currentOriginalIndex + totalSlides) % totalSlides;
    const backwardDistance =
      (currentOriginalIndex - targetOriginalIndex + totalSlides) % totalSlides;

    // Create a navigation queue to smoothly animate to target
    let steps;
    let navigationFunction;

    if (forwardDistance <= backwardDistance) {
      steps = forwardDistance;
      navigationFunction = nextSlide;
    } else {
      steps = backwardDistance;
      navigationFunction = prevSlide;
    }

    // Execute navigation steps with proper timing
    const executeNavigation = (remainingSteps) => {
      if (remainingSteps > 0) {
        navigationFunction();
        // Wait for current animation to complete before next step
        setTimeout(() => executeNavigation(remainingSteps - 1), 650);
      }
    };

    executeNavigation(steps);
  };

  const handleDetailsClick = (e, slideId) => {
    e.stopPropagation(); // Prevent slide navigation

    if (expandedCard === slideId) {
      // Close accordion
      setExpandedCard(null);
    } else {
      // Open accordion and play video
      setExpandedCard(slideId);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 300); // Wait for accordion animation to start
    }
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Simple mouse drag handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0 || isAnimating) return; // Only left button, not during animation
    setIsDragging(true);
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    
    setIsDragging(true);
    const mouseEndX = e.clientX;
    const distance = mouseStartX.current - mouseEndX;
    
    // Same threshold as touch
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    
    mouseStartX.current = 0;
  };

     const getSlideStyle = (index) => {
     const diff = index - currentIndex;
     const absIndex = Math.abs(diff);

     // Get screen width for responsive adjustments
     const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
     
     // Responsive transform values - smaller transforms for smaller screens in 1200-1900px range
     const getResponsiveTransform = (baseTransform) => {
       if (screenWidth >= 1900) return baseTransform;
       if (screenWidth >= 1600) return baseTransform * 0.92; // Large screens
       if (screenWidth >= 1400) return baseTransform * 0.85; // Medium large screens
       if (screenWidth >= 1200) return baseTransform * 0.78; // Large tablet/small desktop
       return baseTransform * 0.7; // Below 1200px
     };

     let transform = "";
     let opacity = 1;
     let scale = 1;
     let zIndex = 0;
     let boxShadow = "";

     if (diff === 0) {
       // Center slide
       transform = "translateX(0%)";
       opacity = 1;
       scale = 1;
       zIndex = 10;
       boxShadow = "none"; // No shadow for active card
     } else if (diff === 1) {
       // Right slide (1st position)
       const translateX = getResponsiveTransform(80);
       transform = `translateX(${translateX}%)`;
       scale = 0.8;
       zIndex = 5;
       boxShadow = "0px 4px 10px 0px #00000026";
     } else if (diff === -1) {
       // Left slide (1st position)
       const translateX = getResponsiveTransform(80);
       transform = `translateX(-${translateX}%)`;
       scale = 0.8;
       zIndex = 5;
       boxShadow = "0px 4px 10px 0px #00000026";
     } else if (diff === 2) {
       // Far right slide (2nd position)
       const translateX = getResponsiveTransform(115);
       transform = `translateX(${translateX}%)`;
       scale = 0.7;
       zIndex = 2;
       boxShadow = "0px 4px 10px 0px #00000026";
     } else if (diff === -2) {
       // Far left slide (2nd position)
       const translateX = getResponsiveTransform(115);
       transform = `translateX(-${translateX}%)`;
       scale = 0.7;
       zIndex = 2;
       boxShadow = "0px 4px 10px 0px #00000026";
     } else {
       // Hidden slides
       const translateX = getResponsiveTransform(190);
       if (diff > 0) {
         transform = `translateX(${translateX}%)`;
       } else {
         transform = `translateX(-${translateX}%)`;
       }
       opacity = 0;
       scale = 0.6;
       zIndex = 1;
       boxShadow = "0px 4px 10px 0px #00000026";
     }

    // Calculate base z-index to prevent abrupt layering changes during transitions
    const baseZIndex = 50; // Base layer for all slides
    const dynamicZIndex = baseZIndex - Math.abs(diff); // Closer slides have higher z-index

    return {
      transform: `translate3d(${
        transform.includes("translateX")
          ? transform.split("(")[1].split(")")[0]
          : "0"
      }, 0, 0) scale3d(${scale}, ${scale}, 1)`,
      opacity,
      zIndex: dynamicZIndex,
      boxShadow,
      // Apply consistent transitions to all slides during animation
      transition: isTransitioning
        ? "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        : "none",
      // Ensure hardware acceleration and smooth rendering
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
    };
  };

  return (
    <div className="relative w-full bg-white py-20 overflow-hidden">
      <h1 className="text-center relative font-poppins text-2xl-up-custom leading-10 lg:text-[28px] xxl:text-4xl font-normal max-w-[290px] md:max-w-[479px] mx-auto">
        Allenamenti su misura per <br className="hidden md:block" /> te per
        risultati garantiti
        <Image
          src="/dotLineSeven.svg"
          alt="dotLineSeven"
          width={348}
          height={106}
          className="absolute -top-30 left-1/2 ml-[1px] hidden lg:block"
        />
        <Image
          src="/dotLineFour.svg"
          alt="dotLineFour"
          width={2}
          height={106}
          className="absolute -top-35 left-1/2 block lg:hidden"
        />
      </h1>
      {/* Tab bar - responsive flex layout */}
      <div className="flex items-center justify-center flex-wrap gap-x-[35px] gap-y-4 md:gap-10 mt-8 md:mt-10 px-4 md:px-0">
        {tabs.map((tab) => (
          <p
            key={tab.key}
            className={`${
              activeCard === tab.key ? "text-black" : "opacity-20"
            } cursor-grab relative font-poppins text-xl xxl:text-2xl-custom font-normal leading-[1.4em] tracking-[-0.25%] ${
              tab.key === "Tutti" ? "text-center" : "text-left"
            }`}
            onClick={() => setActiveCard(tab.key)}
          >
            {tab.label}
            {activeCard === tab.key && (
              <span
                className="absolute text-black font-poppins text-[18px] md:text-xl font-normal leading-[1.44em] -top-3 md:-top-3"
                style={{
                  right: tab.key !== "Tutti" ? "-10px" : "auto",
                }}
              >
                {slidesData[tab.key].length}
              </span>
            )}
          </p>
        ))}
      </div>
      <div className="relative h-full flex items-center justify-center px-4 mt-10 xxl:mt-14 z-100">
        {/* Carousel container */}
        <div
                     ref={containerRef}
           className="relative max-w-[1000px] lg:max-w-[1100px] xl:max-w-[1200px] xxl:max-w-[1358px] w-full min-h-[400px] h-[60vh] lg:h-[65vh] xl:h-[70vh] xxl:h-[673px] flex rounded-2xl items-center justify-center perspective-1000"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onDragStart={(e) => {
            if (isDragging) {
              e.preventDefault();
              handleMouseDown(e);
            }
          }}
       
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          style={{ 
            perspective: "1000px",
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none'
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
                             className={`absolute w-88 lg:w-88 xl:w-96 xxl:w-100 h-[90%] md:h-full rounded-2xl preserve-3d ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{
                ...getSlideStyle(index),
                // Ensure smooth width/scale transitions by using will-change
                willChange: isAnimating ? "transform, opacity" : "auto",
              }}
              onClick={() => {
                // For cloned slides, calculate the equivalent original slide index
                if (slide.id.toString().includes("clone")) {
                  const originalId = parseInt(slide.id.split("-")[1]);
                  const originalIndex = originalSlides.findIndex(
                    (s) => s.id === originalId
                  );
                  goToSlide(originalIndex);
                } else {
                  const originalIndex = originalSlides.findIndex(
                    (s) => s.id === slide.id
                  );
                  goToSlide(originalIndex);
                }
              }}
            >
              <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-[0px_2px_20px_0px_#00000026] md:shadow-none">
                {/* Get the original slide ID for comparison */}
                {(() => {
                  const originalSlideId = slide.id.toString().includes("clone")
                    ? parseInt(slide.id.split("-")[1])
                    : slide.id;
                  const isExpanded =
                    expandedCard === originalSlideId && index === currentIndex;

                  return (
                    <>
                      {/* Video container - shows in top 50% when accordion is expanded */}
                      {isExpanded && (
                        <div className="absolute bg-[#F3EFEC] top-0 left-0 w-full h-[50%] md:h-1/2 overflow-hidden z-20 flex items-center justify-center">
                          <video
                            ref={videoRef}
                            className="w-full h-full object-cover md:rounded-t-2xl"
                            autoPlay
                            muted
                            loop
                            playsInline
                          >
                            <source
                              src="https://res.cloudinary.com/dga6g9bws/video/upload/Video_sample_for_TIP_Website_1_inbebe.mp4"
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )}

                      {/* Image container - always present, but hidden when accordion is expanded */}
                      <div
                        className={`relative w-full h-full transition-all duration-700 ease-in-out ${
                          isExpanded ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover rounded-t-2xl"
                          width={400}
                          height={673}
                        />
                        {/* White overlay for inactive cards */}
                        {index !== currentIndex && (
                          <div
                            className="absolute inset-0 bg-white rounded-t-2xl"
                            style={{
                              mixBlendMode: "lighten",
                              opacity: 0.6,
                            }}
                          />
                        )}
                      </div>

                      {/* Content - only visible on active card when NOT expanded */}
                      {index === currentIndex && !isExpanded && (
                        <div
                          className="absolute bottom-0 left-0 w-full h-16 bg-[#F3EFEC] flex items-center justify-between px-4 rounded-b-2xl cursor-grab transition-all duration-300 hover:bg-[#ece3dc] z-30 gap-5"
                          onClick={(e) =>
                            handleDetailsClick(e, originalSlideId)
                          }
                          style={{
                            borderWidth: "0px 1px 1px 1px",
                            borderStyle: "solid",
                            borderColor: "#0000001A",
                          }}
                        >
                          <h3 className="font-poppins text-[18px] font-medium leading-[1.41em] tracking-[-0.23%] text-black">
                            {slide.title}
                          </h3>
                          <p className="text-black font-dm-sans text-base font-normal leading-[1.625em] flex items-center gap-2">
                            <span className="hidden md:block">Details</span>
                            <FaArrowRight />
                          </p>
                        </div>
                      )}

                      {/* Expanded Accordion - slides up from bottom as overlay */}
                      <div
                        className={`absolute bottom-0 left-0 w-full bg-[#F3EFEC] rounded-b-2xl transition-all duration-500 ease-in-out z-25 ${
                          isExpanded
                            ? "h-1/2 translate-y-0 opacity-100"
                            : "h-0 translate-y-full opacity-0"
                        }`}
                        style={{
                          borderWidth: "0px 1px 1px 1px",
                          borderStyle: "solid",
                          borderColor: "#0000001A",
                        }}
                        onClick={(e) =>
                          handleDetailsClick(e, originalSlideId)
                        }
                      >
                        {isExpanded && (
                          <div className="h-full flex flex-col">
                            {/* Header with title and close button - now at top of accordion */}
                            <div
                              className={`  xxl:pt-10 xxl:pb-10
                                ${slide.isThreeLines ? 'pt-10 pb-10 h-18 xxl:h-20 ' : 'h-12 xxl:h-14'}
                                
                                bg-[#F3EFEC] flex items-center justify-between px-4 cursor-grab transition-all duration-300 hover:bg-[#ece3dc] flex-shrink-0`}
                              onClick={(e) =>
                                handleDetailsClick(e, originalSlideId)
                              }
                              style={{
                                paddingTop: "10px",
                                paddingBottom: "10px",
                              }}
                            >
                              <h3 className="font-poppins text-[18px] xxl:text-[22px] font-medium leading-[1.41em] tracking-[-0.23%] text-black">
                                {slide.title}
                              </h3>
                              <p className="text-black font-dm-sans text-sm xxl:text-base font-normal leading-[1.625em] flex items-center gap-2">
                                Details
                                <FaArrowRight className="rotate-90" />
                              </p>
                            </div>

                            {/* Accordion content below the header */}
                            <div className={`flex-1 p-3 xxl:p-5 xxl:pt-0 pt-0 overflow-hidden ${slide.isLarge ? 'overflow-y-scroll' : ''}`}>
                              <div className="space-y-3 xxl:space-y-4">
                                {/* Description */}
                                <p className="text-black mb-2 font-dm-sans text-sm xxl:text-base leading-[1.5em] xxl:leading-[1.625em] max-w-[342px]">
                                  {slide.description}
                                </p>

                                {/* Content grid with vertical divider */}
                                <div className="relative">
                                  {/* Left Column */}
                                  <div className="flex justify-between border-b border-[#DBD7D4]">
                                    {/* Allenamenti Section */}
                                    <div className="w-1/2 py-1 xxl:py-2">
                                      <h4 className="text-black font-dm-sans text-xs xxl:text-sm font-normal leading-[1.5em] opacity-40">
                                        Allenamenti
                                      </h4>
                                      <div className="flex items-baseline gap-1 xxl:gap-2">
                                        <span className="text-black font-dm-sans text-sm xxl:text-base font-normal leading-[1.625em] text-center">
                                          {slide.duration}
                                        </span>
                                        <span className="text-black font-dm-sans text-xs font-normal leading-[1.5em] tracking-[0.83%] text-center">
                                          minuti
                                        </span>
                                      </div>
                                      <p className="text-black font-dm-sans text-xs xxl:text-sm font-normal leading-[1.5em]">
                                        {slide.frequency}
                                      </p>
                                    </div>

                                    {/* Livello Section */}
                                    <div className="w-1/2 py-1 xxl:py-2 border-l border-[#DBD7D4] pl-3 xxl:pl-4">
                                      <h4 className="text-black font-dm-sans text-xs xxl:text-sm font-normal leading-[1.5em] opacity-40">
                                        Livello
                                      </h4>
                                      <p className="text-black font-dm-sans text-sm xxl:text-base font-normal leading-[1.625em]">
                                        {slide.level}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Right Column */}
                                  <div className="flex justify-between">
                                    {/* Obiettivi Section */}
                                    <div className="w-1/2 py-1 xxl:py-2">
                                      <h4 className="text-black font-dm-sans text-xs xxl:text-sm font-normal leading-[1.5em] opacity-40">
                                        Obiettivi
                                      </h4>
                                      <p className="text-black font-dm-sans text-sm xxl:text-base font-normal leading-[1.625em] max-w-[155px]">
                                        {slide.objectives}
                                      </p>
                                    </div>
                                    {/* Attrezzi Section */}
                                      <div className="w-1/2 py-1 xxl:py-2 border-l border-[#DBD7D4] pl-3 xxl:pl-4">
                                      <h4 className="text-black font-dm-sans text-xs xxl:text-sm font-normal leading-[1.5em] opacity-40">
                                        Attrezzi
                                      </h4>
                                      <p className="text-black font-dm-sans text-sm xxl:text-base font-normal leading-[1.625em] max-w-[117px]">
                                        {slide.equipment}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 md:mt-12">
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className=" z-20 bg-[#F3EFEC] cursor-grab backdrop-blur-sm hover:bg-[#ece3dc] disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-300"
          style={{
            border: "1px solid #6847441A",
            boxShadow: "0px 2px 20px 0px #00000026",
          }}
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className=" z-20 bg-[#F3EFEC] cursor-grab backdrop-blur-sm hover:bg-[#ece3dc] disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-300 border border-white/20"
          style={{
            border: "1px solid #6847441A",
            boxShadow: "0px 2px 20px 0px #00000026",
          }}
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>
      <div className="flex flex-col bg-white z-10 mt-12 lg:flex-row items-center justify-center gap-6 sm:gap-8 relative px-4">
        {/* Primary CTA */}
        <button className="primary-cta cursor-grab flex items-center justify-center gap-3 bg-[#f3efec] border border-[rgba(0,0,0,0.10)] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4 py-3 text-[#684744] text-lg sm:text-xl font-medium leading-snug w-full sm:min-w-60 sm:w-auto h-14">
          <span className="font-bold text-center font-dm-sans">
            Parlaci dei tuoi obiettivi
          </span>
          <div className="arrow-container">
            <FaArrowRight size={15} className="arrow-slide" />
          </div>
        </button>

        {/* OR Text */}
        <span className="text-black font-dm-sans text-lg font-normal opacity-90">
          oppure
        </span>

        {/* Secondary CTA */}
        <button className="secondary-cta cursor-grab flex items-center justify-center gap-3 bg-[#684744] border border-[rgba(243,239,236,0.20)] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4 py-3 text-white text-lg sm:text-xl font-medium leading-snug w-full sm:min-w-60 sm:w-auto h-14">
          <span className="font-bold font-dm-sans">
            Inizia la prova gratuita
          </span>
          <div className="arrow-container">
            <FaArrowRight size={15} className="arrow-slide" />
          </div>
        </button>
        <Image
          src="/dotLineSix.svg"
          alt="dotLineSix"
          width={270}
          height={207}
          className="absolute bottom-52 lg:bottom-15 left-[51%] hidden md:block"
        />
        <Image
          src="/dotLineFour.svg"
          alt="dotLineFour"
          width={2}
          height={50}
          className="absolute -bottom-30 left-[51%] hidden md:block"
        />
        <Image
          src="/dotLineFour.svg"
          alt="dotLineFour"
          width={1}
          height={106}
          className="absolute -bottom-24 left-1/2 block md:hidden"
        />
      </div>
    </div>
  );
};

export default CarouselCoverLucide;
