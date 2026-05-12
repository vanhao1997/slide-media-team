import { useState, useCallback, useEffect } from 'react';
import type { ComponentType } from 'react';
import { SlideLayout } from './components/SlideLayout';
import {
  Slide01, Slide02, Slide03, Slide04, Slide05,
  Slide06, Slide07, Slide08, Slide09, Slide10,
  Slide11, Slide11a, Slide11b, Slide11c, Slide11d,
  Slide12, Slide13, Slide14, Slide15,
  Slide16, Slide17, Slide17b, Slide18, Slide19, Slide20,
  Slide21, Slide21a, Slide21b, Slide22, Slide23, Slide24, Slide25,
  Slide26, Slide27, Slide27a, Slide27b, Slide27c, Slide27d,
  Slide27e, Slide27f, Slide27g, Slide27h, Slide27i, Slide27j, Slide27k, Slide27l,
  Slide28, Slide28a, Slide28b, Slide28c,
  Slide28d, Slide28e, Slide28f, Slide28g, Slide28h,
  Slide29, Slide30, Slide31, Slide32,
} from './slides';
import {
  Slide28i, Slide28j, Slide28k, Slide28l, Slide28m, Slide28n,
} from './presentations/tiktok-affiliate';

type DeckSlide = ComponentType<Record<string, never>>;
type TabbedDeckSlide = ComponentType<{ tabIndex?: number }>;
type IndexedDeckSlide = ComponentType<{ activeIndex?: number }>;
type StageDeckSlide = ComponentType<{ stageIndex?: number }>;

const tabbed = (Component: TabbedDeckSlide, tabIndex: number): DeckSlide => function RemoteTabbedSlide() {
  return <Component tabIndex={tabIndex} />;
};

const indexed = (Component: IndexedDeckSlide, activeIndex: number): DeckSlide => function RemoteIndexedSlide() {
  return <Component activeIndex={activeIndex} />;
};

const stage = (Component: StageDeckSlide, stageIndex: number): DeckSlide => function RemoteStageSlide() {
  return <Component stageIndex={stageIndex} />;
};

const fullDeckSlides = [
  Slide01, Slide02, Slide03, Slide04, Slide05,
  Slide06, Slide07, Slide08, Slide09, Slide10,
  Slide11, Slide11a, Slide11b, Slide11c, Slide11d,
  Slide12,
  tabbed(Slide13, 0), tabbed(Slide13, 1),
  tabbed(Slide14, 0), tabbed(Slide14, 1),
  tabbed(Slide15, 0), tabbed(Slide15, 1),
  tabbed(Slide16, 0), tabbed(Slide16, 1),
  stage(Slide17, 0), stage(Slide17, 1), stage(Slide17, 2),
  tabbed(Slide17b, 0), tabbed(Slide17b, 1),
  tabbed(Slide18, 0), tabbed(Slide18, 1),
  tabbed(Slide19, 0), tabbed(Slide19, 1),
  tabbed(Slide20, 0), tabbed(Slide20, 1),
  indexed(Slide21, 0), indexed(Slide21, 1), indexed(Slide21, 2), indexed(Slide21, 3),
  Slide21a, Slide21b, Slide22, Slide23, Slide24, Slide25,
  Slide26, indexed(Slide27, 0), indexed(Slide27, 1), indexed(Slide27, 2), Slide27a, Slide27b, Slide27c, Slide27d,
  Slide27e, Slide27f, Slide27g, Slide27h, Slide27i, Slide27j, Slide27k, Slide27l,
  Slide28, Slide28a, Slide28b, Slide28c,
  Slide28d, Slide28e, Slide28f, Slide28g, Slide28h,
  Slide29, Slide30, indexed(Slide31, 0), indexed(Slide31, 1), indexed(Slide31, 2), Slide32,
];

const tiktokAffiliateSlides = [
  Slide28i, Slide28j, Slide28k, Slide28l, Slide28m, Slide28n,
];

const isTikTokAffiliateRoute = () => (
  typeof window !== 'undefined'
  && [
    '/resources/tiktok-affiliate',
    '/learning/tiktok-affiliate',
    '/learning/tiktok-affilate',
  ].some((route) => window.location.pathname.toLowerCase().startsWith(route))
);

const isTikTokAffiliateDeck = import.meta.env.VITE_DECK === 'tiktok-affiliate' || isTikTokAffiliateRoute();

const slides = isTikTokAffiliateDeck ? tiktokAffiliateSlides : fullDeckSlides;

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const activeElement = document.activeElement as HTMLElement | null;
      const targetFormControl = target?.closest('input, select, textarea');
      const activeFormControl = activeElement?.closest('input, select, textarea');
      const activeButtonControl = activeElement?.closest('button, [data-interactive]');

      if (targetFormControl || activeFormControl) return;
      if (activeButtonControl && (e.key === 'Enter' || e.key === ' ')) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <SlideLayout
      slideIndex={currentSlide}
      totalSlides={slides.length}
      onNext={goNext}
      onPrev={goPrev}
    >
      <CurrentSlideComponent />
    </SlideLayout>
  );
}

export default App;
