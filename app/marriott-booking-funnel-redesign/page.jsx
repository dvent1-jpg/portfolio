import MarriottBookingFunnel from "../../src/views/MarriottBookingFunnel";

const description =
  "An end-to-end booking funnel redesign at Marriott's Homes & Villas that lifted mobile step conversion 322% and grew daily mobile bookings 80%.";

export const metadata = {
  title: "Marriott Booking Funnel Redesign",
  description,
  alternates: { canonical: "/marriott-booking-funnel-redesign" },
  openGraph: {
    title: "Marriott Booking Funnel Redesign — Dennis Ventrello",
    description,
    url: "/marriott-booking-funnel-redesign",
    images: ["/images/booking-funnel/Hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriott Booking Funnel Redesign — Dennis Ventrello",
    description,
    images: ["/images/booking-funnel/Hero.png"],
  },
};

export default function Page() {
  return <MarriottBookingFunnel />;
}
