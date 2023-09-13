import styled from "styled-components";
import { useState } from "react";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
`;

interface ListGroupProps {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ heading, items, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, idx) => (
          <ListItem
            active={idx === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(idx);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
