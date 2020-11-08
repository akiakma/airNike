import { combineReducers } from "redux";

const SELECT = "jordan1/SELECT";
const CLOSEMODAL = "jorda1/CLOSEMODAL";

export const selected = item => ({ type: SELECT, item });

export const closeModal = () => ({ type: CLOSEMODAL });

const initialState = { select: null };

function selectJordan(state = initialState, action) {
  switch (action.type) {
    case SELECT:
      return { ...state, select: action.item };
    case CLOSEMODAL:
      return { ...state, select: null };
    default:
      return state;
  }
}
const dataJordan = () => {
  return [
    {
      name: "Travis Scott",
      line: "Nike Jordan 1 High",
      date: `JAN '02`,
      url: "https://i.postimg.cc/FsMtfFLh/jordan1-scott-removebg-preview.png",
      value: 3000,
      range: [
        `https://i.postimg.cc/FsMtfFLh/jordan1-scott-removebg-preview.png`,
        `https://i.postimg.cc/d012RJ54/02.png`,
        `https://i.postimg.cc/7Y8Nv8LZ/03.png`,
        `https://i.postimg.cc/fR570VfV/04.png`,
        `https://i.postimg.cc/GhFxd7BJ/05.png`,
        `https://i.postimg.cc/T2WcHYfs/06.png`,
        `https://i.postimg.cc/g2GqJV89/07.png`,
        `https://i.postimg.cc/VvMBS4Kw/08.png`,
        `https://i.postimg.cc/1zjpJbTP/09.png`,
        `https://i.postimg.cc/Tw5nSCMb/10.png`,
        `https://i.postimg.cc/1XxDZwsj/11.png`,
        `https://i.postimg.cc/XNFwkHgS/12.png`,
        `https://i.postimg.cc/mkQCZkr2/13.png`,
        `https://i.postimg.cc/gkW3SVMw/14.png`,
        `https://i.postimg.cc/rwyxc82M/15.png`,
        `https://i.postimg.cc/c4BwVvjF/16.png`,
        `https://i.postimg.cc/vmcng3mK/17.png`,
        `https://i.postimg.cc/HLRyQXck/18.png`,
        `https://i.postimg.cc/HnC8NmtG/19.png`,
        `https://i.postimg.cc/WpMkkD2s/20.png`,
        `https://i.postimg.cc/nzmQTrBY/21.png`,
        `https://i.postimg.cc/tCpVtXTW/22.png`,
        `https://i.postimg.cc/5NgQsZYG/23.png`,
        `https://i.postimg.cc/13zn2JDz/24.png`,
        `https://i.postimg.cc/W4BdDVCD/25.png`,
        `https://i.postimg.cc/d1GLrXc5/26.png`,
        `https://i.postimg.cc/2ym3wwzr/27.png`,
        `https://i.postimg.cc/Wznzfk3r/28.png`,
        `https://i.postimg.cc/L4BJsrTX/29.png`,
        `https://i.postimg.cc/pXWp5qGB/30.png`,
        `https://i.postimg.cc/sDT1Y7bC/31.png`,
        `https://i.postimg.cc/9Qz0JzjR/32.png`,
        `https://i.postimg.cc/85gCpHfM/33.png`,
        `https://i.postimg.cc/mZwr47L1/34.png`,
        `https://i.postimg.cc/153334XC/35.png`,
        `https://i.postimg.cc/bNVND82z/36.png`,
      ],
      description:
        "Grab a pack of coffee beans to match the Jordan 1 Retro High Travis Scott. This AJ1 comes with a brown upper plus white accents, black Nike 'Swoosh', sail midsole, and a brown sole. These sneakers released in May 2019 and retailed for $175. Mess the club up in these after buying them on StockX.",
      style: "CD4487-100",
      retailprice: "$175",
      releasedate: "05/11/2019",
    },
    {
      name: "Off-White Chicago",
      line: "Nike Jordan 1 High",
      date: `MAR '20`,
      url:
        "https://i.postimg.cc/Bn4r5YMz/jordan1-offwhite-removebg-preview.png",
      value: 2000,
      range: null,
      description: `The Off-White x Air Jordan 1 Retro High OG was one of the most highly anticipated footwear collaborations of 2017. It marked the first time Virgil Abloh, founder of the Milan-based fashion label and Jordan Brand had teamed up. Nicknamed "The 10" edition, this pair comes in the original Chicago-themed white, black and varsity red colorway. Featuring a white, red and black-based deconstructed leather upper with a Swooshless medial side branded with "Off-White for Nike Air Jordan 1, Beaverton, Oregon, USA © 1985."`,
      style: "AA3834-101",
      retailprice: "$190",
      releasedate: "09/09/2017",
    },
    {
      name: "Union Los-Angeles Blue",
      line: "Nike Jordan 1 High",
      date: `MAR '20`,
      url:
        "https://i.postimg.cc/5Nn3GsfT/Jordan-1-Retro-High-Union-Los-Angeles-Blue-Toe-removebg-preview.png",
      value: 2000,
      range: null,
      description: null,
      style: null,
      retailprice: null,
      releasedate: null,
    },
    {
      name: "Hight Think 16",
      line: "Nike Jordan 1 High",
      date: `June '20`,
      url:
        "https://i.postimg.cc/2jXyKWPT/Jordan-1-Retro-High-Think-16-Pass-the-Torch-removebg-preview.png",
      value: 2000,
      range: null,
      description: null,
      style: null,
      retailprice: null,
      releasedate: null,
    },
    {
      name: "Air Dior",
      line: "Nike Jordan 1 High",
      date: `MAR '04`,
      url:
        "https://i.postimg.cc/bw6qZfpg/Jordan-1-Retro-High-Dior-removebg-preview.png",
      value: 800,
      range: [
        `https://i.postimg.cc/bw6qZfpg/Jordan-1-Retro-High-Dior-removebg-preview.png`,
        `https://i.postimg.cc/FKMHLjFx/img02-removebg-preview.png`,
        `https://i.postimg.cc/QM9MC6Dt/img03-removebg-preview.png`,
        `https://i.postimg.cc/pL1TPwg4/img04-removebg-preview.png`,
        `https://i.postimg.cc/8zCcQpnL/img05-removebg-preview.png`,
        `https://i.postimg.cc/sDs1m9Y6/img06-removebg-preview.png`,
        `https://i.postimg.cc/VLgvVr4Y/img07-removebg-preview.png`,
        `https://i.postimg.cc/kMxBWhbR/img08-removebg-preview.png`,
        `https://i.postimg.cc/j2Kq8t7w/img09-removebg-preview.png`,
        `https://i.postimg.cc/hvrD66LC/img10-removebg-preview.png`,
        `https://i.postimg.cc/xjy1XJwK/img11-removebg-preview.png`,
        `https://i.postimg.cc/hP24rFPv/img12-removebg-preview.png`,
        `https://i.postimg.cc/CLhLkM09/img13-removebg-preview.png`,
        `https://i.postimg.cc/bwdyV6sT/img14-removebg-preview.png`,
        `https://i.postimg.cc/pL72wDjt/img16-removebg-preview.png`,
        `https://i.postimg.cc/Jhk1MG3H/img17-removebg-preview.png`,
        `https://i.postimg.cc/pTMPTRkG/img18-removebg-preview.png`,
        `https://i.postimg.cc/3RjY0VcK/img19-removebg-preview.png`,
        `https://i.postimg.cc/Y0b7bg7Z/img20-removebg-preview.png`,
        `https://i.postimg.cc/7hxD39FS/img21-removebg-preview.png`,
        `https://i.postimg.cc/YqCMjXfH/img22-removebg-preview.png`,
        `https://i.postimg.cc/v8zGYRnh/img23-removebg-preview.png`,
        `https://i.postimg.cc/7YtDzgmT/img24-removebg-preview.png`,
        `https://i.postimg.cc/9Q42Yrng/img25-removebg-preview.png`,
        `https://i.postimg.cc/dVzYHJMs/img26-removebg-preview.png`,
        `https://i.postimg.cc/2ycp4DFf/img27-removebg-preview.png`,
        `https://i.postimg.cc/k5KdLL9x/img28-removebg-preview.png`,
        `https://i.postimg.cc/85GVGwPx/img29-removebg-preview.png`,
        `https://i.postimg.cc/qRGHvnNq/img30-removebg-preview.png`,
        `https://i.postimg.cc/2y8Rb6Ww/img31-removebg-preview.png`,
        `https://i.postimg.cc/NGpwh6hP/img32-removebg-preview.png`,
        `https://i.postimg.cc/WbzcsdTp/img33-removebg-preview.png`,
        `https://i.postimg.cc/9Fk50cQd/img34-removebg-preview.png`,
        `https://i.postimg.cc/fR0401V6/img35-removebg-preview.png`,
        `https://i.postimg.cc/jjVp6vNC/img36-removebg-preview.png`,
        `https://i.postimg.cc/bw6qZfpg/Jordan-1-Retro-High-Dior-removebg-preview.png`,
      ],
      description: `Jordan Brand connected with Parisian fashion house Dior to create history with the Jordan 1 Retro High Dior, now available on StockX. This is the first time that Jordan has collaborated with a legacy fashion label like Dior, making this release one for the books. This release was limited to only 8,500 pairs, each pair individually numbered.`,
      style: "CN8607-002",
      retailprice: "$2,000",
      releasedate: "04/06/2020",
    },
    {
      name: "Not For Resale",
      line: "Nike Jordan 1 High",
      date: `MAR '08`,
      url:
        "https://i.postimg.cc/bvQL6prH/Jordan-1-Retro-High-Not-for-Resale-Varsity-Red-removebg-preview.png",
      value: 2000,
      range: null,
      description: `Jordan Brand connected with Parisian fashion house Dior to create history with the Jordan 1 Retro High Dior, now available on StockX. This is the first time that Jordan has collaborated with a legacy fashion label like Dior, making this release one for the books. This release was limited to only 8,500 pairs, each pair individually numbered.`,
      style: "CN8607-002",
      retailprice: "$2,000",
      releasedate: "04/06/2020",
    },
    {
      name: "85 Varsity Red",
      line: "Nike Jordan 1 High",
      date: `MAR '02`,
      url:
        "https://i.postimg.cc/ZRnBWxGB/Jordan-1-Retro-High-85-Varsity-Red-removebg-preview.png",
      value: 2000,
      range: null,
      description: null,
      style: null,
      retailprice: null,
      releasedate: null,
    },
    {
      name: "Black Crimson Tint",
      line: "Nike Jordan 1 High",
      date: `June '05`,
      url:
        "https://i.postimg.cc/7PVHF2dj/Jordan-1-Retro-High-Black-Crimson-Tint-removebg-preview.png",
      value: 2000,
      range: null,
      description: null,
      style: null,
      retailprice: null,
      releasedate: null,
    },
    {
      name: "Court Purple",
      line: "Nike Jordan 1 High",
      date: `MAR '05`,
      url:
        "https://i.postimg.cc/WzbvN5CC/Jordan-1-Retro-High-Court-Purple-White-removebg-preview.png",
      value: 800,
      range: null,
      description: null,
      style: null,
      retailprice: null,
      releasedate: null,
    },
    {
      name: "Game Royal",
      line: "Nike Jordan 1 High",
      date: `MAR '05`,
      url:
        "https://i.postimg.cc/FFDvWQJ4/Jordan-1-Retro-High-Game-Royal-removebg-preview.png",
      value: 2000,
      range: null,
      description: null,
      style: null,
      retailprice: null,
      releasedate: null,
    },
    {
      name: "LA to Chicaga",
      line: "Nike Jordan 1 High",
      date: `MAR '04`,
      url:
        "https://i.postimg.cc/RZnzZ6pS/Jordan-1-Retro-High-OG-Defiant-SB-LA-to-Chicago-removebg-preview.png",
      value: 2000,
      range: null,
      description: null,
      style: null,
      retailprice: null,
      releasedate: null,
    },
    {
      name: "Pine Green",
      line: "Nike Jordan 1 High",
      date: `MAR '02`,
      url:
        "https://i.postimg.cc/d1JM6Ws3/Jordan-1-Retro-High-Pine-Green-Black-removebg-preview.png",
      value: 2000,
      range: null,
      description: null,
      style: null,
      retailprice: null,
      releasedate: null,
    },
  ];
};

const rootReducer = combineReducers({
  selectJordan,
  dataJordan,
});

export default rootReducer;
