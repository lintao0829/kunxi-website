export const navListPC = [
  {
    title: "首页",
    name: "Home",
    url: "/",
    index: 1
  },
  {
    title: "联络焜曦",
    name: "Contact",
    url: "/contact",
    index: 7
  }
];

export const navListMobile = [
  {
    title: "首页",
    name: "Home_m",
    name2: "Estate_m",
    url: "/home_m",
    index: 1,
    children: []
  },
  {
    title: "工业机器人",
    name: "robot",
    name2: "Estate_m",
    url: "/robot",
    index: 2,
    children: []
  },
  {
    title: "走进焜曦",
    name: "About_m",
    name2: "Estate_m",
    url: "/about_m",
    index: 3,
    children: [
      { title: "集团介绍", index: 1, ids: 2 },
      { title: "合作院校资源", index: 2, ids: 1 },
      { title: "学习生活", index: 3, ids: 6 },
      { title: "名师团队", index: 4, ids: 7 }
    ]
  },
  {
    title: "联系我们",
    name: "Estate_m",
    name2: "Estate_m",
    index: 4,
    ids: 5,
    children: []
  }
];
