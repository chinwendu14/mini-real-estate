import {
  Apt1,
  Apt2,
  Apt3,
  Apt4,
  Floor1,
  Floor10,
  Floor11,
  Floor12,
  Floor13,
  Floor14,
  Floor15,
  Floor2,
  Floor3,
  Floor4,
  Floor5,
  Floor6,
  Floor7,
  Floor8,
  Floor9,
  Tower1,
  Tower2,
  Tower3,
} from "@/assest";

export const towers = [
  {
    img: Tower1,
    id: "1",
    name: "Residential Tower",
  },
  {
    img: Tower2,
    name: " Commercial Tower",
    id: "2",
  },
  {
    img: Tower3,
    name: "Mixed-Use Tower",
    id: "3",
  },
];

export const Floors = [
  {
    img: Floor1,
    name: "Solid Hardwood Flooring ",
    text: "Made from a single piece of hardwood; durable and classic",
  },
  {
    img: Floor2,
    name: "Engineered Wood Flooring",
    text: "Layers of wood veneer over plywood; more moisture-resistant than solid hardwood",
  },
  {
    img: Floor3,
    name: "Parquet Flooring",
    text: "Geometric mosaic of wood pieces; elegant and decorative.",
  },
  {
    img: Floor4,
    name: "Laminate Flooring",
    text: "Composite with a photographic top layer; affordable wood-like appearance.",
  },
  {
    img: Floor5,
    name: "Laminate Flooring",
    text: " Eco-friendly, technically a grass, but looks like wood.",
  },
  {
    img: Floor6,
    name: "Ceramic Tile Flooring",
    text: " Durable and water-resistant; commonly used in kitchens and bathrooms",
  },
  {
    img: Floor7,
    name: "Porcelain Tile Flooring",
    text: "Denser and more water-resistant than ceramic; suitable for high-traffic areas",
  },
  {
    img: Floor8,
    name: "Marble Flooring",
    text: "Luxurious, natural stone; unique veining patterns.",
  },
  {
    img: Floor9,
    name: "Granite Flooring",
    text: "Very hard and durable; used in upscale interiors.",
  },
  {
    img: Floor10,
    name: "Slate Flooring",
    text: "Natural, textured stone; good for rustic or earthy aesthetics.",
  },
  {
    img: Floor11,
    name: "Vinyl Plank Flooring (LVP)",
    text: " Resembles hardwood, waterproof, easy to install.",
  },
  {
    img: Floor12,
    name: "Sheet Vinyl Flooring",
    text: "Large, continuous sheets of vinyl; good for waterproofing.",
  },
  {
    img: Floor13,
    name: "Linoleum Flooring",
    text: "Made from natural materials; resilient and eco-friendly.",
  },
  {
    img: Floor14,
    name: "Epoxy Flooring",
    text: "Common in garages and industrial spaces; chemical-resistant and glossy.",
  },
  {
    img: Floor15,
    name: "Polished Concrete Flooring",
    text: "Modern, industrial look; highly durable and low-maintenance.",
  },
];

export const apartments = [
  {
    thumbnail: Apt1,
    id: "1",
    area: "45 sqm",
    unitType: "Studio",
    rooms: 1,
  },
  { thumbnail: Apt2, id: "2", area: "65 sqm", unitType: "1BHK", rooms: 2 },
  { thumbnail: Apt3, area: "85 sqm", unitType: "2BHK", rooms: 3, id: "3" },
  { thumbnail: Apt4, area: "105 sqm", unitType: "3BHK", rooms: 4, id: "4" },
];
