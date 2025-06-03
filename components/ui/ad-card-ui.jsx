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
export default function AdCardUi() {
  return (
    <div>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <Image src={car} width={400} height={400} alt="image" />
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
