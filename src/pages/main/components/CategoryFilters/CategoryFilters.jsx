import FilterButton from "@/components/FilterButton/FilterButton";
import styles from "./CategoryFilters.module.scss";

const CategoryFilters = ({ categories, selectedFilters, onCategoryClick }) => {
  return (
    <div className={styles.categoryFilters}>
      {categories.map((category) => (
        <FilterButton
          key={category}
          onClick={() => {
            onCategoryClick(category);
          }}
          selected={selectedFilters.includes(category)}
        >
          {category}
        </FilterButton>
      ))}
    </div>
  );
};

export default CategoryFilters;
