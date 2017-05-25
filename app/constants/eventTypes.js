export const EVENT_TYPES = [
  { id: 0, name: 'Unknown', color: '#BFBFBF' },
  { id: 3, name: 'Central Apnea', color: '#28E2B3', signalTypes: [6, 9] },
  { id: 4, name: 'Mixed Apnea', color: '#9966ff', signalTypes: [6, 9] },
  { id: 5, name: 'Obstructive Apnea', color: '#FFAFA3', signalTypes: [6, 9] },
  { id: 6, name: 'Unclassified Apnea', color: '#4491AB', signalTypes: [6, 9] },
  { id: 7, name: 'Unclassified Hypopnea', color: '#5AC5E8', signalTypes: [6, 9] },
  { id: 9, name: 'Desaturation', color: '#AF5FA0', signalTypes: [13, 1] },
  { id: 10, name: 'Bradycardia', color: '#000000' },
  { id: 11, name: 'Tachycardia', color: '#000000' },
  { id: 12, name: 'Artefact', color: '#778899', signalTypes: [0, 1, 2, 3, 4, 5, 6, 9, 10, 12, 13, 17, 18, 22, 23, 24, 26, 27, 28, 45, 46] },
  { id: 14, name: 'Heart Rate Variation', color: '#28E2B3', signalTypes: [10, 27, 28] },
];
export const NAMES = [
  'Unknown',
  'Central Apnea',
  'Mixed Apnea',
  'Obstructive Apnea',
  'Unclassified Apnea',
  'Unclassified Hypopnea',
  'Desaturation',
  'Bradycardia',
  'Tachycardia',
  'Artefact',
  'Heart Rate Variation'
];
