
import React from 'react';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import ClassStructureSection from './components/ClassStructureSection';
import ClassAllianceSection from './components/ClassAllianceSection';
import PuzzleSection from './components/PuzzleSection';
import TimelineSection from './components/TimelineSection';
import ConclusionSection from './components/ConclusionSection';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="bg-beige">
      <Header />
      <main>
        <HeroSection />
        <IntroductionSection />
        <ClassStructureSection />
        <ClassAllianceSection />
        <PuzzleSection />
        <TimelineSection />
        <ConclusionSection />
      </main>
    </div>
  );
};

export default App;
