import "./NavButton.css";

function NavButton({children, onSelect, isSelected}) {

  return (
    <>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
    </>
  );
}

export default NavButton;