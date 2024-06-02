import { index } from "drizzle-orm/mysql-core";
import Image from "next/image";

const mockUrls = [
  "https://utfs.io/f/79a2a73b-9498-420a-a6c3-586fbecf073f-nm33wo.jpeg",
  "https://utfs.io/f/fa1ab770-c9ae-44c5-ac8c-0f1dcb066c39-ibcluw.jpeg",
  "https://utfs.io/f/c8d3a889-1a0e-48b9-8afd-cdf9b53aea32-ibclvr.jpeg",
  "https://utfs.io/f/6c39a172-d06c-44d6-a48c-46879a497674-uqe41n.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
