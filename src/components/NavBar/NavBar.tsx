interface Props {
  cartItemsCount: number;
}

function NavBar({ cartItemsCount }: Props) {
  return <div>{cartItemsCount}</div>;
}

export default NavBar;
