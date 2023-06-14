import * as fs from "fs";

type TreeObject = {
  title: string;
  collapsable: boolean;
  children: string[];
};

class Sidebar {
  treeObj: TreeObject;
  makeSubTree: (dir: string) => string[];
  makeTree: () => TreeObject[];
}

export const sidebar: Sidebar = {
  treeObj: {
    title: "",
    collapsable: true,
    children: [],
  },
  makeSubTree: (dir: string) => {
    let tempArr = fs.readdirSync(`./src/${dir}`);
    let regex = /(.md)$/;
    tempArr = tempArr.filter((el: string) => {
      return regex.test(el);
    });
    return tempArr.map((el: string) => `../${dir}/` + el.replace(regex, ""));
  },

  makeTree: () => {
    let tempArr = fs.readdirSync("./src");

    let makeTree = tempArr.filter((el: string) => {
      let regex = [/^\./g, /(\.md)$/];
      return !regex[0].test(el) && !regex[1].test(el);
    });

    return makeTree.map<TreeObject>((el) => {
      return (sidebar.treeObj = {
        ...sidebar.treeObj,
        title: el,
        children: sidebar.makeSubTree(el),
      });
    });
  },
};
