/*
 This file contains all the theme variables that is used to override the default variables for the 

  Reference for variables:
  https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
*/

// Blueprint colors is the core palette for the app.
// import { Colors } from '@blueprintjs/core';

const { Colors: BlueprintColors } = require('@blueprintjs/core');
// const MaterialColors = require('material-colors');
// const AntDesignColors = require('@ant-design/colors');

// common colors
// note - use the colors in portal-colors.less / portal-colors.css instead.
const primaryColor = BlueprintColors.BLUE2;
// const backgroundColor = BlueprintColors.LIGHT_GRAY5;
const backgroundColor = '#FAFAFA';

// const textColorSecondary = 'rgba(16, 22, 26, 0.45)';
const textColorSecondary = 'rgba(105,105,105,1)';

const black = BlueprintColors.BLACK;

const lightGreyVariant1 = BlueprintColors.LIGHT_GRAY2;
const lightGreyVariant2 = BlueprintColors.LIGHT_GRAY4;

const tagColors = {
  LIME: BlueprintColors.LIME3,
  BLUE: BlueprintColors.BLUE2,
  GREEN: BlueprintColors.GREEN3,
  COBALT: BlueprintColors.COBALT3,
  INDIGO: BlueprintColors.INDIGO3,
  RED: BlueprintColors.RED2,
  GOLD: BlueprintColors.GOLD3,
  FOREST: BlueprintColors.FOREST3,
  ORANGE: BlueprintColors.ORANGE3,
  ROSE: BlueprintColors.ROSE3,
  SEPIA: BlueprintColors.SEPIA3
};

// specific element colors
const bookingStatusColors = {
  pending: BlueprintColors.LIME3,
  completed: BlueprintColors.BLUE2,
  confirmed: BlueprintColors.COBALT2,
  accepted: BlueprintColors.INDIGO3,
  rejected: BlueprintColors.RED2,
  inprogress: BlueprintColors.GOLD3,
  finished: BlueprintColors.FOREST3,
  removed: BlueprintColors.RED2
};

const workerStatusColors = {
  finding: BlueprintColors.LIME3,
  rejected: BlueprintColors.RED2,
  found: BlueprintColors.COBALT2
};

// Add override theme variables below, eg
// '@primary-color' : '#00b0ff'

const themeVariables = {
  // Colors
  '@primary-color': primaryColor,
  '@info-color': primaryColor,
  '@success-color': BlueprintColors.GREEN3,
  '@processing-color': primaryColor,
  '@error-color': BlueprintColors.RED2,
  '@highlight-color': BlueprintColors.RED3,
  '@warning-color': BlueprintColors.ORANGE3,
  '@normal-color': '#d9d9d9',
  '@white': '#ffffff',
  '@black': BlueprintColors.BLACK,

  // Default Font
  // '@font-family': "-apple-system, 'Lato', sans-serif",
  '@font-family': "'Lato', sans-serif",
  '@font-size-base': '16px',

  // text-colors
  '@text-color': BlueprintColors.BLACK,

  // Added by Jir :
  '@line-height-base': 1.35,

  // background
  '@layout-body-background': backgroundColor,

  // header/footer variables
  '@layout-header-padding': `0px 0px 0px 0px`,
  '@layout-footer-padding': `0px 0px 0px 0px`,

  // For Menu & headers
  '@layout-header-background': BlueprintColors.DARK_GRAY1,

  // Menu dark theme
  // Bottom of menu trigger
  '@menu-dark-item-active-bg': BlueprintColors.DARK_GRAY5,
  '@layout-trigger-background': BlueprintColors.DARK_GRAY3, //'#000000',
  '@menu-dark-submenu-bg': 'transparent', //BlueprintColors.BLUE2,

  // background
  '@body-background': '#ffffff',
  '@component-background': '#ffffff',

  // buttons
  // '@btn-padding-sm': '0 16px',
  // '@btn-padding-base': '0 24px',
  // '@btn-padding-lg': '0 40px',

  //  !!!! internal colors/variables. Used internally by components
  // this is used to determine what is the height of the view without the header height.
  bodyHeight: 'calc(100vh - 64px)',
  // Side column have an additional 1px in height, this change prevent the page using them having a scrollbar.
  bodyHeightSideCol: 'calc(100vh - 65px)',
  primaryColor,
  backgroundColor,
  black,
  lightGreyVariant1,
  lightGreyVariant2,
  textColorSecondary,

  // exported common colors
  bookingStatusColors,
  tagColors,
  workerStatusColors
};

module.exports = themeVariables;
