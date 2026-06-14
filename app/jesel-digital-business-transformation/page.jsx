import JeselTransformation from "../../src/views/JeselTransformation";

const description =
  "Leading Jesel's digital business transformation — a 9x lift in organic search visibility, 230% organic traffic growth, and 0 to 41k engaged email subscribers.";

export const metadata = {
  title: "Jesel Digital Business Transformation",
  description,
  alternates: { canonical: "/jesel-digital-business-transformation" },
  openGraph: {
    title: "Jesel Digital Business Transformation — Dennis Ventrello",
    description,
    url: "/jesel-digital-business-transformation",
    images: ["/images/jesel/Header1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesel Digital Business Transformation — Dennis Ventrello",
    description,
    images: ["/images/jesel/Header1.png"],
  },
};

export default function Page() {
  return <JeselTransformation />;
}
