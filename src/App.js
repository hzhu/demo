import React from "react";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import {
  Dropdown,
  Field,
  Menu,
  Item,
  Select,
  Label,
} from "@zendeskgarden/react-dropdowns";

const items = [
  { label: "Fern", value: "item-1" },
  { label: "Snake plant", value: "item-2" },
  { label: "Rubber tree", value: "item-3" },
];

export default function App() {
  const [selectedItem, setSelectedItem] = React.useState(items[0]);

  return (
    <ThemeProvider>
      <Dropdown
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
        downshiftProps={{ itemToString: (item) => item && item.label }}
      >
        <Field>
          <Label>Houseplant</Label>
          <Select>{selectedItem.label}</Select>
        </Field>
        <Menu>
          {items.map((option) => (
            <Item key={option.value} value={option}>
              {option.label}
            </Item>
          ))}
        </Menu>
      </Dropdown>
    </ThemeProvider>
  );
}
