interface ProductInterface {
  id?: number;
  name: string;
  description: string;
  price: number | null;
  image?: string;
  available: boolean;
}

export const fetchAllProducts = async () => {
  const response = await fetch("http://localhost:3001/products");
  return response.json();
};

export const fetchProductById = async (id: string | null) => {
  if (id) {
    const response = await fetch(`http://localhost:3001/product/${id}`);
    return response.json();
  }
  return;
};

export const updateProduct = async ({
  id,
  name,
  description,
  price,
  image,
  available,
}: ProductInterface) => {
  const response = await fetch(`http://localhost:3001/product`, {
    method: "POST",
    body: JSON.stringify({
      id: id,
      name: name,
      description: description,
      price: price,
      image: image,
      available: available,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
};

export const createProduct = async ({
  name,
  description,
  price,
  // image,
  available = true,
}: ProductInterface) => {
  const response = await fetch(`http://localhost:3001/product`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      description: description,
      price: price,
      image:
        "https://answers.fortinet.com/themes/base/admin/img/default-coverImage.png",
      available: available,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
};
