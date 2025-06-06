import { strapi } from "@/lib/strapi";

export default async function AdCard() {
  const { data } = await strapi.find("ads", {
    populate: {
      category: {
        fields: ["name", "slug"],
      },
      details: true,
    },
  });
  console.log(data);
  console.log(data[0].details);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title} -{" "}
            {item.price.toLocaleString("tr-TR", {
              style: "currency",
              currency: "TRY",
            })}
            {
              item.details.find((detail) =>
                detail.__component.includes(item.category.slug)
              )?.housingType
            }
          </li>
        ))}
      </ul>
    </div>
  );
}
