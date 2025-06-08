import { strapi } from "@/lib/strapi";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import car from "@/public/carPlaceholder.png";
import Image from "next/image";

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
            <Card className="w-full max-w-sm">
              <CardHeader>
                <Image src={car} width={400} height={400} alt="image" />
                <CardTitle> {item.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p>
                  {" "}
                  {item.price.toLocaleString("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  })}
                </p>
              </CardContent>
              <CardFooter>
                <p>
                  {
                    item.details.find((detail) =>
                      detail.__component.includes(item.category.slug)
                    )?.housingType
                  }
                </p>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
