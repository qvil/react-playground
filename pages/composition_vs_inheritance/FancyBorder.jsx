const FancyBorder = ({ color, children }) => (
  <div style={{ border: `1px solid ${color}`, padding: 16 }}>{children}</div>
);

export default FancyBorder;
