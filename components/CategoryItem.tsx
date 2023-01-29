import { CategoryItemType } from "@/types/categoryItem";

export const CategoryItem = ({ item }: CategoryItemType) => {
  return (
    <div>
      <h1>{item.name}</h1>
    </div>
  );
};
