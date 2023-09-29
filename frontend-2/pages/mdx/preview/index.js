import React, { useEffect, useState } from "react";
import styles from "../stuff/styles";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import MyComponent from "../stuff/MyComponent";
import Header from "../stuff/header";

const components = { MyComponent };

const fixLinks = (markdown = "") => {
  return markdown.replaceAll("(../docs/", "(./").replaceAll("(docs/", "(./");
};

const fixImages = (markdown = "", assetsList = []) => {
  console.log(assetsList);
  const regexImages = /\.\.\/assets\/images\/([\s\S]*?)[\),\>]/gm;
  const matches = [...markdown.matchAll(regexImages)];

  return matches.reduce((currentMarkdown, match) => {
    const path = match[0].slice(0, -1);
    const name = match[1];
    const asset = assetsList.find((asset) => asset.name === name);
    return currentMarkdown.replaceAll(path, asset?.download_url);
  }, markdown);
};

const cleanupMarkdown = (markdown = "") => {
  const regexComments = /<!--([\s\S]*?)-->/gm;
  const regexStyles = /style="([\s\S]*?)"/gm;

  return markdown
    .replaceAll('<div style="width:100px"></div>', "")
    .replaceAll("<br>", "<br />")
    .replaceAll(regexComments, "")
    .replaceAll(regexStyles, "");
};

const localStyles = `
html, body, #__next {
    height: 100%;
}

.main-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

    .guides-page-wrapper {
        display: flex;
        height: 100%;
        background: #333;
    }

    .guides-page-wrapper > * {
        flex: 1;
        margin: 10px;
        background: white;
    }
    
    .guides-page-wrapper > :last-child {
        padding: 10px;
        
    }

    textarea {
        width: 100%;
        height: 100%;
        resize: none;
    }

    .documentation-page-wrapper {
        overflow-y: auto;
    }
`;

const MdxPreview = () => {
  const [textAreaValue, setTextAreaValue] = useState();
  const [mdxModule, setMdxModule] = useState();
  const assetsList = [];

  useEffect(() => {
    (async () => {
      //   const rawContent = Buffer.from(textAreaValue, "base64").toString();
      const rawContent = textAreaValue;

      const mdExample2 = cleanupMarkdown(rawContent);
      const mdExample3 = fixImages(mdExample2, assetsList);
      const mdExample = fixLinks(mdExample3);

      try {
        const content = await serialize(mdExample, {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
          parseFrontmatter: false,
        });
        setMdxModule(content);
      } catch (error) {}
    })();
  }, [textAreaValue]);

  return (
    <>
      <style jsx>{`
        ${styles} ${localStyles}
      `}</style>

      <div className="main-wrapper">
        <Header />
        <div className="guides-page-wrapper">
          <div className="editor-container">
            <textarea
              value={textAreaValue}
              onChange={({ target }) => setTextAreaValue(target.value)}
            ></textarea>
          </div>
          <div className="documentation-page-wrapper">
            <div>
              {mdxModule && (
                <MDXRemote {...mdxModule} components={components} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MdxPreview;
