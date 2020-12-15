import { TIMEOUT } from './timeout';

const FOLDERS = [
  {
    id: '1',
    name: 'Empty Folder',
    stars: 24,
    count: 42,
    light: true,
    nodes: [],
    hasContent: false
  },
  {
    id: '2',
    name: 'Images',
    stars: 42,
    count: 24,
    light: false,
    hasContent: true,
    nodes: [
      {
        id: '62',
        name: 'More Images',
        stars: 322,
        count: 333,
        light: true,
        hasContent: true,
        nodes: [
          {
            id: '6444',
            name: 'Old Images',
            stars: 3522,
            count: 3633,
            light: false,
            nodes: [],
            hasContent: true
          }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'New Folder',
    stars: 111,
    count: 111,
    light: true,
    nodes: [],
    hasContent: false
  },
  {
    id: '4',
    name: 'MyFolder',
    stars: 122,
    count: 133,
    light: false,
    nodes: [],
    hasContent: true
  },
  {
    id: '6',
    name: 'Empty Folder 2',
    stars: 155,
    count: 155,
    light: true,
    nodes: [],
    hasContent: false
  }
];

const TOP_LEVEL_FILES = [
  {
    id: '5',
    name: 'Some Video.mp4',
    stars: 133,
    count: 122,
    light: true
  },
  {
    id: '7',
    name: 'Video3.mp4',
    stars: 155,
    count: 155,
    light: true
  }
];

const FILES_BY_FOLDER = {
  '1': [],
  '2': [
    {
      id: '64',
      name: 'Some Picture.jpg',
      stars: 522,
      count: 633,
      light: false
    }
  ],
  '3': [],
  '62': [
    {
      id: '6442',
      name: 'Image 1.png',
      stars: 2322,
      count: 3333,
      light: true
    }
  ],
  '6444': [
    {
      id: '64422',
      name: 'Image 1.jpg',
      stars: 423224,
      count: 233334,
      light: true
    },
    {
      id: '64144',
      name: 'Image 3.jpg',
      stars: 135224,
      count: 136334,
      light: false
    }
  ],
  '4': [
    {
      id: '42',
      name: 'Video 1.mp4',
      stars: 422,
      count: 433,
      light: true
    },
    {
      id: '44',
      name: 'Video 2.mp4',
      stars: 222,
      count: 233,
      light: false
    }
  ]
};

export const getFolders = () =>
  new Promise(resolve => {
    let modifiedFolders = [...FOLDERS];

    setTimeout(() => resolve(modifiedFolders), TIMEOUT);
  });

export const getFilesByFolder = ({ id }) =>
  new Promise(resolve => {
    let modifiedTopLevelFiles = [...TOP_LEVEL_FILES];
    let modifiedByFolderFiles = { ...FILES_BY_FOLDER };

    if (!id) {
      setTimeout(() => resolve(modifiedTopLevelFiles), TIMEOUT);
    } else {
      setTimeout(() => resolve(modifiedByFolderFiles[id]), TIMEOUT);
    }
  });
