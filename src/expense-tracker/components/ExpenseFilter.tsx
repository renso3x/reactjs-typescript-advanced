import { categories } from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category, id) => (
        <option key={`${id}-${category}`} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
