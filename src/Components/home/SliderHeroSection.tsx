import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sliderData } from '../../data/SliderData';

const SliderHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, sliderData.length]);

  // Nettoyage des timeouts au démontage
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  // Scroll automatique vers la miniature active
 // Scroll automatique vers la miniature active
useEffect(() => {
  if (thumbnailRef.current) {
    const activeThumb = thumbnailRef.current.children[currentSlide] as HTMLElement;
    if (activeThumb) {
      // Scroll uniquement dans le conteneur, pas dans la page
      const container = thumbnailRef.current;
      const thumbLeft = activeThumb.offsetLeft;
      const thumbWidth = activeThumb.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollTarget = thumbLeft - (containerWidth / 2) + (thumbWidth / 2);
      
      container.scrollTo({
        left: scrollTarget,
        behavior: 'smooth',
      });
    }
  }
}, [currentSlide]);

  // Pause auto-play au survol
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
  };
  
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    
    // Reprend après 10s d'inactivité
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % sliderData.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <section 
      className="relative bg-[#F9FAFB] text-white h-screen max-h-150 min-h-140 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div className="relative h-full w-full">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}
            `}
          >
            {/* Image de fond */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>
            </div>

            {/* Titre du slide */}
            <div className="relative z-20 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full">
                <h1 className="text-3xl md:text-6xl font-bold text-white max-w-4xl leading-tight">
                  {slide.title}
                </h1>

                <p className='text-lg wrap-break-word mt-2.5'>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Contrôles en bas avec miniatures */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex justify-between items-end">
            
            {/* Indicateurs (dots) à gauche */}
            <div className="flex gap-3">
              {sliderData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                    transition-all duration-300 rounded-full
                    ${index === currentSlide 
                      ? 'w-8 h-1.5 bg-white' 
                      : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                    }
                  `}
                  aria-label={`Aller au slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Miniatures avec navigation */}
            <div className="relative flex items-center gap-2">
              {/* Flèche gauche miniatures */}
              <button
                onClick={prevSlide}
                className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Miniature précédente"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Conteneur des miniatures */}
              <div
                ref={thumbnailRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', maxWidth: '280px' }}
              >
                {sliderData.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`
                      group relative shrink-0 transition-all duration-500 ease-out
                      ${index === currentSlide ? 'scale-105' : 'scale-100'}
                    `}
                  >
                    <div className={`
                      relative rounded-lg overflow-hidden transition-all duration-500
                      ${index === currentSlide 
                        ? 'ring-2 ring-white shadow-2xl' 
                        : 'ring-1 ring-white/30 hover:ring-white/60 opacity-70 hover:opacity-100'
                      }
                    `}>
                      <img
                        src={slide.thumbnail}
                        alt={slide.title}
                        className="w-20 md:w-24 h-12 md:h-14 object-cover"
                      />
                      
                      {/* Overlay avec titre au survol */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-1.5">
                        <span className="text-[8px] md:text-[10px] font-medium truncate text-white">
                          {slide.title.length > 30 ? slide.title.substring(0, 30) + '...' : slide.title}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Flèche droite miniatures */}
              <button
                onClick={nextSlide}
                className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Miniature suivante"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur auto-play minimal */}
      {!isAutoPlaying && (
        <div className="absolute top-4 right-4 z-40">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default SliderHeroSection;