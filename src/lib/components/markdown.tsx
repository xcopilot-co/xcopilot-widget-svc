import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Markdown = ({ content }: any) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown_prose ">
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
