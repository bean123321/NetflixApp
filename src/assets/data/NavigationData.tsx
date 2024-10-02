const HomeButtonLogo = require("../images/HomeButtonLogo.png");
const NewHotButtonLogo = require("../images/NewHotButtonLogo.png");
const LaughButtonLogo = require("../images/LaughButtonLogo.png");
const SearchButtonLogo = require("../images/SearchButtonLogo.png");
const DownloadButtonLogo = require("../images/DownloadButtonLogo.png");

export const navigationItems = (navigation) => [
  {
    id: 1,
    logo: HomeButtonLogo,
    label: "Home",
    width: 18.74,
    height: 19.02,
    onPress: () => navigation.navigate("HomePageScreen"),
  },
  {
    id: 2,
    logo: NewHotButtonLogo,
    label: "New & Hot",
    width: 18.74,
    height: 19.02,
    onPress: () => {},
  },
  {
    id: 3,
    logo: LaughButtonLogo,
    label: "Fast Laughs",
    width: 21,
    height: 21,
    onPress: () => {},
  },
  {
    id: 4,
    logo: SearchButtonLogo,
    label: "Search",
    width: 19.9,
    height: 19.9,
    onPress: () => navigation.navigate("SearchPageScreen"),
  },
  {
    id: 5,
    logo: DownloadButtonLogo,
    label: "Download",
    width: 20,
    height: 20,
    onPress: () => {},
  },
];
