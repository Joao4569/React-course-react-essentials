export default function TabButton({ children, isSelected, ...props }) {
  console.log('Tab component executed');
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}