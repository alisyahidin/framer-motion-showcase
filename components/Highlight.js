import PrismHighlighter, { defaultProps } from "prism-react-renderer";

const Highlight = ({ children, ...props }) => (
  <PrismHighlighter {...defaultProps} code={children} {...props}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={{ ...style, backgroundColor: 'transparent' }}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </PrismHighlighter>
)

export default Highlight