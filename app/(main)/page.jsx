import AdCard from "@/components/cards/ad-card";
import Navbar from "@/components/layouts/navbar";
import { strapi } from "@/lib/strapi";

export default async function Home() {
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
      <Navbar data={data} />
      <AdCard />
    </div>
  );
}
