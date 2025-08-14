
// src/privacy_guidelines.ts
// Guidelines for respectful capture and storage when identity matters for proof and recognition.
// Faces and real names are stored when people consent.

export const PRIVACY_GUIDELINES = [
  "Faces and real names are stored when people give informed consent, because identity can be part of recognition and proof",
  "Collect explicit consent before capture and storage, and record the consent reference together with the act",
  "For minors, collect consent from a parent or guardian",
  "Give clear choices: public profile, pseudonym, or private contribution",
  "Allow removal requests through a simple contact path and respect legal obligations",
  "Use a coarse grid for location unless a person asks for precise location",
  "Never record sensitive attributes that are not needed for the act"
];


// Suggested fields to log consent alongside the act record
export interface ActConsent {
  consentReference: string; // link or identifier for the consent
  consentCollectedAt: string; // ISO timestamp
}
