import { ProgressStatus } from '../constants';

const showings = [
  {
    fileName: 'people-and-lighthouse.jpg',
    displayName: 'People and Lighthouse',
    description: '',
    date: 'October 2023',
  },
  {
    fileName: 'early-friday-afternoon.jpg',
    displayName: 'Early Friday Afternoon',
    description: '',
    date: 'September 2024',
  },
  {
    fileName: 'intermission-3x2.jpg',
    displayName: 'Intermission',
    description: '',
    date: 'December 2025',
  },
  {
    fileName: 'when-the-rain-subsides-1.jpg',
    displayName: 'When the Rain Subsides',
    description: '',
    date: 'January 2024',
  },
  {
    fileName: 'people-in-the-sun.jpg',
    displayName: 'People in the Sun',
    description: '',
    date: 'October 2024',
  },
];

const contemplative = {
  meta: {
    name: 'contemplative',
    displayName: '∎∎∎',
    about: '',
    detailedDescription: '',
    imageFolderName: 'curated-works',
    progressStatus: ProgressStatus.IN_PROGRESS,
    numberOfImages: showings.length,
    status: '',
    releaseStatus: '',
    releaseDate: '',
    link: '',
    linkDescription: '',
    specialRendering: true,
  },
  showings,
};

export default contemplative;
