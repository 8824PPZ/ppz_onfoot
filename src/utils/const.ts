// const
const MAPBOX_TOKEN =
<<<<<<< HEAD
  'pk.eyJ1IjoiYnVnMzY1IiwiYSI6ImNscHRnMnI0YjBicmUyaXF6Nzh3Y3djeGgifQ.Lp4Tg7ifvOI0NiyPzeVM4w';
=======
  'sk.eyJ1IjoiYnVnMzY1IiwiYSI6ImNscWV0M2w0YjBvZWIyanJxanJpNTh3ZGIifQ.w70CPbWxy2tEEaqT6pJtMg';
>>>>>>> master
const MUNICIPALITY_CITIES_ARR = [
  '北京市',
  '上海市',
  '天津市',
  '重庆市',
  '香港特别行政区',
  '澳门特别行政区',
];
const MAP_LAYER_LIST = [
  'road-label',
  'waterway-label',
  'natural-line-label',
  'natural-point-label',
  'water-line-label',
  'water-point-label',
  'poi-label',
  'airport-label',
  'settlement-subdivision-label',
  'settlement-label',
  'state-label',
  'country-label',
];

// styling: set to `true` if you want dash-line route
const USE_DASH_LINE = false
// styling: route line opacity: [0, 1]
const LINE_OPACITY = 1;
// styling: map height
const MAP_HEIGHT = 600;
//set to `false` if you want to hide the road label characters
const ROAD_LABEL_DISPLAY = true;

// IF you outside China please make sure IS_CHINESE = false
const IS_CHINESE = true;
const USE_ANIMATION_FOR_GRID = false;
const CHINESE_INFO_MESSAGE = (yearLength: number, year: string): string => {
  const yearStr = year === 'Total' ? '所有' : ` ${year} `;
  return `开始修仙 ${yearLength} 年了，下面列表展示的是${yearStr}的数据`;
};
const ENGLISH_INFO_MESSAGE = (yearLength: number, year: string): string =>
  `Running Journey with ${yearLength} Years, the table shows year ${year} data`;

// not support English for now
const CHINESE_LOCATION_INFO_MESSAGE_FIRST =
  '我跑过了一些地方，希望随着时间推移，地图点亮的地方越来越多';
const CHINESE_LOCATION_INFO_MESSAGE_SECOND = '人生苦短，及时行乐';

const INFO_MESSAGE = IS_CHINESE ? CHINESE_INFO_MESSAGE : ENGLISH_INFO_MESSAGE;
const FULL_MARATHON_RUN_TITLE = IS_CHINESE ? '全程马拉松' : 'Full Marathon';
const HALF_MARATHON_RUN_TITLE = IS_CHINESE ? '半程马拉松' : 'Half Marathon';
const MORNING_RUN_TITLE = IS_CHINESE ? '清晨修炼' : 'Morning Run';
const MIDDAY_RUN_TITLE = IS_CHINESE ? '午间修炼' : 'Midday Run';
const AFTERNOON_RUN_TITLE = IS_CHINESE ? '御剑回家' : 'Afternoon Run';
const EVENING_RUN_TITLE = IS_CHINESE ? '傍晚修炼' : 'Evening Run';
const NIGHT_RUN_TITLE = IS_CHINESE ? '夜晚修炼' : 'Night Run';

const RUN_TITLES = {
  FULL_MARATHON_RUN_TITLE,
  HALF_MARATHON_RUN_TITLE,
  MORNING_RUN_TITLE,
  MIDDAY_RUN_TITLE,
  AFTERNOON_RUN_TITLE,
  EVENING_RUN_TITLE,
  NIGHT_RUN_TITLE,
};

export {
  CHINESE_LOCATION_INFO_MESSAGE_FIRST,
  CHINESE_LOCATION_INFO_MESSAGE_SECOND,
  MAPBOX_TOKEN,
  MUNICIPALITY_CITIES_ARR,
  MAP_LAYER_LIST,
  IS_CHINESE,
  ROAD_LABEL_DISPLAY,
  INFO_MESSAGE,
  RUN_TITLES,
  USE_ANIMATION_FOR_GRID,
  USE_DASH_LINE,
  LINE_OPACITY,
  MAP_HEIGHT,
};

const nike = 'rgb(224,237,94)'; // if you want change the main color change here src/styles/variables.scss

// If your map has an offset please change this line
// issues #92 and #198
export const NEED_FIX_MAP = false;
export const MAIN_COLOR = nike;
export const PROVINCE_FILL_COLOR = '#47b8e0';
