import { FilterType } from "@/types/FilterType";
import { PriorityType } from "@/types/PriorityType";

export function getCategory(type: FilterType) {
  if (type === FilterType.MUG) return "mugs";
  if (type === FilterType.SHIRT) return "t-shirts";
  return "";
}

export function getPriority(priority: PriorityType) {
  if (priority === PriorityType.NEWS) return {field: "created_at", order: "ASC"}
  if (priority === PriorityType.BIGGEST_PRICE) return {field: "price_in_cents", order: "DSC"}
  if (priority === PriorityType.MINOR_PRICE) return {field: "price_in_cents", order: "ASC"}
  return {field: "sales", order: "DSC"}
}

export function filterQuery(type: FilterType, priority: PriorityType) {
  if (type === FilterType.ALL && priority === PriorityType.POPULARITY) {
    return `
      query {
        allProducts(sortField: "sales", sortOrder: "DSC") {
          id
          image_url
          name
          price_in_cents
        }
      }
    `
  }

  const sortSettings = getPriority(priority);
  const categorySettings = getCategory(type)

  return `
    query {
      allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categorySettings ? `filter: {category: "${categorySettings}"}` : ''}) {
        id
        image_url
        name
        price_in_cents
      }
    }
  `
}

