
import React from 'react';

export interface ClassCardData {
  title: string;
  description: string;
  image: string;
  Icon: React.FC<{ className?: string }>;
}

export interface AllianceTab {
  id: string;
  title: string;
  content: string;
  image: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}
