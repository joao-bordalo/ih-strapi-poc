import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export type TRepo = {
  sha: string;
  url: string;
  tree: { path: string }[];
  truncated: boolean;
};

const SideMenu = ({ guidesLists }: { guidesLists: Record<string, TRepo> }) => {
  const router = useRouter();

  const menuLeaf = (key, item) => {
    const isSelected = router.asPath === `/mdx/github/${key}/${item.path}`;

    const itemPath = item.path.split("/");

    return (
      <li
        key={`${key}-${item.id}`}
        className={isSelected ? "selected" : ""}
        style={{
          marginLeft: `${(itemPath.length - 1) * 15}px`,
        }}
      >
        <Link href={`/mdx/github/${key}/${item.path}`}>
          {`${item.name.charAt(0).toUpperCase()}${item.name.slice(1)}`.replace(
            /-/g,
            " "
          )}
        </Link>
      </li>
    );
  };

  const files: Record<string, any> = {};
  Object.entries(guidesLists).map(([key, guidesList]) => {
    files[key] = {};
    if (guidesList.tree.length) {
      files[key].children = [];
    }

    guidesList.tree
      .filter((item) => item.path.slice(-3) === ".md")
      .forEach((item) => {
        const itemPath = item.path.split("/");
        const fileName = itemPath[itemPath.length - 1]
          .slice(0, -3)
          .replace(/_/g, " ");

        const parent = itemPath.length > 1 ? itemPath[0] : undefined;

        if (parent) {
          let parentIndex = files[key].children.findIndex(
            (item) => item.id === parent
          );

          if (parentIndex === -1) {
            files[key].children.push({
              path: undefined,
              name: parent,
              id: parent,
              parent: undefined,
              children: [],
            });

            parentIndex = files[key].children.length - 1;
          }

          files[key].children[parentIndex].children.push({
            path: item.path,
            id: fileName,
            name: fileName,
            parent,
          });
        } else {
          files[key].children.push({
            path: item.path,
            name: fileName,
            id: "root",
            parent: undefined,
          });
        }
      });
  });

  return (
    <div className="side-menu-v2">
      {Object.entries(files).map(([key, section]) => {
        return (
          <div className="side-menu-v2-item" key={`menu-${key}`}>
            <span className="title">{key}</span>
            <ul>
              {section.children.map((item) => {
                if (!item.children) {
                  return menuLeaf(key, item);
                }

                return (
                  <Fragment key={`frag-${item.id}`}>
                    <li key={item.id} className={item.id}>
                      {`${item.name.charAt(0).toUpperCase()}${item.name.slice(
                        1
                      )}`.replace(/-/g, " ")}
                    </li>
                    {item.children.map((item2) => menuLeaf(key, item2))}
                  </Fragment>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SideMenu;
