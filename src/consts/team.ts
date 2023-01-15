import enhanceTeamMembers from '@utils/enhanceTeamMembers';
import colors from '@theme/colors';

export const CATEGORIES = {
  FULL_TIME_MEMBERS: 'Full-time Members',
  BOARD_OF_DIRECTORS: 'Board of Directors',
  ADVISORS: 'Advisors',
};

export const MEMBERS = enhanceTeamMembers([
  {
    name: 'Mrinal',
    surname: 'Wadhwa',
    position: 'CTO',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'US',
    photo: 'mrinal-wadhwa.png',
    description: 'Loves rock-n-roll and has a dog named Sargent Pepper',
    bgColor: colors.extras.pictonBlue,
  },
  {
    name: 'Matthew',
    surname: 'Gregory',
    position: 'CEO',
    categories: [CATEGORIES.FULL_TIME_MEMBERS, CATEGORIES.BOARD_OF_DIRECTORS],
    country: 'US',
    photo: 'matthew-gregory.png',
    description: 'Started his career in professional sailing and has a passion for meteorology',
    bgColor: colors.extras.iceCold,
  },
  {
    name: 'Sabeen',
    surname: 'Syed',
    position: 'VP of Engineering',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'US',
    photo: 'sabeen-syed.png',
    description:
      'Enjoys reading historical fiction, playing board games and running after her 4 kids',
  },
  {
    name: 'Daniil',
    surname: 'Fedotov',
    position: 'Engineer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'CA',
    photo: 'daniil-fedotov.png',
    description: 'Is playing his bagpipes in Canada',
  },
  {
    name: 'Michael',
    surname: 'Uti',
    position: 'Engineer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'NG',
    photo: 'michael-uti.png',
    description: 'A recent graduate that is an ace with GitHub actions',
  },
  {
    name: 'Oleksandr',
    surname: 'Deundiak',
    position: 'Engineer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'UA',
    photo: 'oleksandr-deundiak.png',
    description: 'Rides really fast motorcycles',
  },
  {
    name: 'Pablo',
    surname: 'Polvorin',
    position: 'Engineer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'AR',
    photo: 'pablo-polvorin.png',
    description:
      'Once debugged a performance issue on a large scale system below a giant tree in the amazon',
  },
  {
    name: 'Nicholas',
    surname: 'Ippolito',
    position: 'Business Operations',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'US',
    photo: 'nick-ippolito.png',
    description: 'The newest member of The Team',
  },
  {
    name: 'Adrian',
    surname: 'Benavides',
    position: 'Engineer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'ES',
    photo: 'adrian-benavides.png',
    description: 'Loves music, playing the guitar and video games',
  },
  {
    name: 'Chris',
    surname: 'Oakley',
    position: 'Engineer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'US',
    photo: 'chris-oakley.png',
    description: 'Most often found somewhere on top of a mountain'
  },
  {
    name: 'Maryanna',
    surname: 'Saenko',
    position: 'Board Member',
    categories: [CATEGORIES.BOARD_OF_DIRECTORS],
    country: 'US',
    photo: 'maryanna-saenko.png',
    description: 'Partner at Future Ventures',
  },
  {
    name: 'Arra',
    surname: 'Malekzadeh',
    position: 'Board Member',
    categories: [CATEGORIES.BOARD_OF_DIRECTORS],
    country: 'US',
    photo: 'arra-malekzadeh.png',
    description: 'Partner at Craft Ventures',
  },
  {
    name: 'Fergal',
    surname: 'Donoher',
    position: 'Board Member',
    categories: [CATEGORIES.BOARD_OF_DIRECTORS],
    country: 'US',
    photo: 'fergal-donoher.png',
    description: 'SVP at Flex',
  },
  {
    name: 'Patricia',
    surname: 'Muoio',
    position: 'Board Member',
    categories: [CATEGORIES.BOARD_OF_DIRECTORS],
    country: 'US',
    photo: 'patricia-muoio.png',
    description: 'Partner at SineWave Ventures',
  },
  {
    name: 'Joanna',
    surname: 'Drake',
    position: 'Board Member',
    categories: [CATEGORIES.BOARD_OF_DIRECTORS],
    country: 'US',
    photo: 'joanna-drake.png',
    description: 'Partner at Core Ventures',
  },
  {
    name: 'Jeanne',
    surname: 'DeWitt Grosser',
    position: 'Product Advisor',
    categories: [CATEGORIES.ADVISORS],
    country: 'US',
    photo: 'j-dewitt-grosser.png',
    description: 'Head of Revenue and Growth at Stripe',
  },
  {
    name: 'Matthew',
    surname: 'Trifiro',
    position: 'Product Advisor',
    categories: [CATEGORIES.ADVISORS],
    country: 'US',
    photo: 'matthew-trifiro.png',
    description: 'CMO at Vapor.io',
  },
  {
    name: 'Brian',
    surname: 'Mullen',
    position: 'Product Advisor',
    categories: [CATEGORIES.ADVISORS],
    country: 'US',
    photo: 'brian-mullen.png',
    description: 'CMO at InfluxData',
  },
]);
