export interface DropdownProps {
  options: string[];
  primary?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
