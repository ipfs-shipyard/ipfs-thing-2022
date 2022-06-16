import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export default function MarkdownText({ children }) {
  return (
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[gfm]}>{children}</ReactMarkdown>
    </div>
  )
}