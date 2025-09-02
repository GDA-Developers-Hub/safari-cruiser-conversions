import heroSafari1 from "@/assets/hero-safari-1.jpg";
import heroWorkshop from "@/assets/hero-workshop.jpg";
import heroSafari2 from "@/assets/hero-safari-2.jpg";
import conversionBeforeAfter from "@/assets/conversion-before-after.jpg";
import interiorConversion from "@/assets/interior-conversion.jpg";
import pkLogo from "@/assets/pk logo.jpeg";

// Placeholder for additional images - replace with actual imports when available
const additionalImages = [
  {
    src: "https://images.unsplash.com/photo-1583121274602-3e2820c6988f?w=800&auto=format&fit=crop&q=80",
    title: "Safari Adventure",
    category: "Adventure Tours"
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80",
    title: "Scenic Landscapes",
    category: "Nature Views"
  },
  {
    src: "https://images.unsplash.com/photo-1506197603053-7530988a5891?w=800&auto=format&fit=crop&q=80",
    title: "Luxury Camping",
    category: "Accommodation"
  },
  {
    src: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&auto=format&fit=crop&q=80",
    title: "Wildlife Safari",
    category: "Wildlife"
  },
  {
    src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32a?w=800&auto=format&fit=crop&q=80",
    title: "Sunset Safari",
    category: "Scenic Views"
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80",
    title: "Mountain Views",
    category: "Landscape"
  }
];

const galleryImages = [
  {
    src: heroSafari1,
    title: "Safari Land Cruiser in Action",
    category: "Completed Conversions"
  },
  {
    src: conversionBeforeAfter,
    title: "Before & After Conversion",
    category: "Conversion Process"
  },
  {
    src: interiorConversion,
    title: "Custom Interior Design",
    category: "Interior Modifications"
  },
  {
    src: heroWorkshop,
    title: "Professional Workshop",
    category: "Our Facility"
  },
  {
    src: heroSafari2,
    title: "Tourist Safari Experience",
    category: "Client Success"
  },
  {
    src: pkLogo,
    title: "Our Fleet",
    category: "Vehicle Showcase"
  },
  ...additionalImages
];

export default galleryImages;
