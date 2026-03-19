import { ProgressStatus } from '../constants';

const onDisplay = {
  meta: {
    name: 'onDisplay',
    displayName: 'Currenly On Display',
    about: '',
    detailedDescription: '',
    numberOfImages: '',
    progressStatus: ProgressStatus.RELEASED,
    releaseDate: 'Today',
    link: '',
    linkDescription: '',
    imageFolderName: 'on-display',

    // special
    specialRendering: true,
  },
  showings: [
    {
      fileName: 'angel-island-1.jpg',
      name: '',
      description: '',
      date: 'May 28th, 2025',
    },
    {
      fileName: 'angel-island-2.jpg',
      name: '',
      description: '',
      date: 'May 28th, 2025',
    },
  ],
};

export default onDisplay;
