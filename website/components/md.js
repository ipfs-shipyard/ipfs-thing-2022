import React from 'react';
import ReactDOM from 'react-dom';
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";

export default function Markdown({markdown}) {
  const content = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, { createElement: React.createElement })
    .processSync(markdown).result;

  return (
      <div>
          {content}
      </div>
  )
}