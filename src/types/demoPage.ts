export interface VideoScenario {
  id: number;
  title: string;
  description: string;
  callouts: string[];
  thumbnail?: string;
  videoUrl?: string;
}

export interface TranscriptLine {
  speaker: string;
  text: string;
}

export interface RecordedDemo {
  title: string;
  voice: string;
  duration: string;
  audio: string;
  transcript: TranscriptLine[];
}

export interface SuggestedPrompt {
  id: number;
  text: string;
}