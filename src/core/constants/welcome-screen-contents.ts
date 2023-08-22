import colors from '../config/colors';

export const welcomeScreenContents: any = [
  {
    bg: colors.lightOrange,
    textColor: colors.orange,
    image: require('../../../assets/images/welcome/quality-asset.png'),
    heading: 'Quality assets',
    subHeading:
      'Rise invests your money into the best dollar investments around the world.',
  },
  {
    bg: colors.lightIndigo,
    textColor: colors.indigo,
    image: require('../../../assets/images/welcome/superior.png'),
    heading: 'Superior Selection',
    subHeading:
      'Our expert team and intelligent algorithms select assets that beat the markets.',
  },
  {
    bg: colors.lightTeal,
    textColor: colors.teal,
    image: require('../../../assets/images/welcome/performance.png'),
    heading: 'Better Performance',
    subHeading:
      'You earn more returns, achieve more of your financial goals and protect your money from devaluation.',
  },
];
