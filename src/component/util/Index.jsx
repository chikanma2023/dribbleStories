export const proxy = "http://localhost:5000/blog";

export const img_url = (img_id) =>
  `https://cloud.appwrite.io/v1/storage/buckets/654eebaf29a4647e9656/files/${img_id}/view?project=2222&mode=admin`;

export const find_item = (itemsArray, itemId) => {
  if (itemsArray && itemId) {
    const foundItem = itemsArray.find((item) => item.id == itemId);
    return foundItem;
  }
};
