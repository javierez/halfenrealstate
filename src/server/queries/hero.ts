import type { HeroProps } from "../../lib/data";
import { getContactProps } from "./contact";

export type HeroPropsWithCities = HeroProps & { cities: string[] };

/**
 * Cities used for the homepage rotation and the navbar "Zonas" dropdown.
 * Sourced from the offices configured in `website_config.contact_props`,
 * not from the listings table — this is the authoritative list of cities
 * the agency has a physical presence in.
 */
export const getHeroCities = (_accountIdArg?: bigint): string[] => {
  return ["Madrid"];
}

// Using React cache to memoize the query
export const getHeroProps = (_accountIdArg?: bigint): HeroProps | null => {
  return {
  "title": "Servicios inmobiliarios a tu medida",
  "slides": [{
  "href": "#properties",
  "title": "Inmuebles",
  "subtitle": "Consulte toda nuestra oferta de inmuebles",
  "buttonText": "Saber más"
}, {
  "href": "/alquiler-propiedades/todas-ubicaciones",
  "title": "Alquiler",
  "subtitle": "Pisos y casas exclusivos en alquiler en Madrid",
  "buttonText": "Ver alquileres"
}, {
  "href": "/venta-propiedades/todas-ubicaciones",
  "title": "Compraventa",
  "subtitle": "Le acompañamos en cada etapa de la compra",
  "buttonText": "Ver en venta"
}],
  "subtitle": "Agencia inmobiliaria especializada en propiedades de lujo en Madrid, con un acompañamiento personalizado y exclusivo en cada etapa del proceso, con atención en español, portugués e inglés.",
  "contactButton": "Contáctanos",
  "backgroundType": "video",
  "backgroundImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/224/hero/portada-1_0XACwVfe.jpg",
  "backgroundMedia": [{
  "url": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/224/hero/portada-video_7a3604d5.mp4",
  "type": "video"
}],
  "backgroundVideo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/224/hero/portada-video_7a3604d5.mp4",
  "findPropertyButton": "Explorar Propiedades"
};
}
