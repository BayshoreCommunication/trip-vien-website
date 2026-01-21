export async function getAllPostData() {
  const res = await fetch(
    "https://backend-trip-vien-website.vercel.app/site/blog",
    { next: { revalidate: 200 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await res.json();

  return {
    data: Array.isArray(data) ? data : data.data ?? [],
  };
}
