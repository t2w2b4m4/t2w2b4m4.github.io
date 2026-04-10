import { ProgressStatus } from '../constants';

const showings = [
  {
    fileName: 'lucid-dream-1.jpg',
    displayName: 'Lucid Dream 1',
    description: '',
    date: 'March 3, 2024',
  },
  {
    fileName: 'lucid-dream-2.jpg',
    displayName: 'Lucid Dream 2',
    description: '',
    date: 'March 21, 2024',
  },
  // {
  //   fileName: 'lucid-dream-3.jpg',
  //   displayName: 'Lucid Dream 3',
  //   description: '',
  //   date: 'March 21, 2024',
  // },
  // {
  //   fileName: 'lucid-dream-5.jpg',
  //   displayName: 'Lucid Dream 5',
  //   description: '',
  //   date: 'May 7, 2024',
  // },
  // {
  //   fileName: 'lucid-dream-8.jpg',
  //   displayName: 'Lucid Dream 8',
  //   description: '',
  //   date: 'May 26, 2025',
  // },
  // {
  //   fileName: 'lucid-dream-9.jpg',
  //   displayName: 'Lucid Dream 9',
  //   description: '',
  //   date: 'May 27, 2025',
  // },
];

const lucidDream = {
  meta: {
    name: 'lucid-dream',
    displayName: 'Lucid Dream',
    about: '',
    detailedDescription: '',
    imageFolderName: 'curated-works',
    progressStatus: ProgressStatus.IN_PROGRESS,
    // numberOfImages: showings.length,
    status: '',
    releaseStatus: '',
    releaseDate: '',
    link: '',
    linkDescription: '',
    // specialRendering: true,
  },
  showings,
};

export default lucidDream;
