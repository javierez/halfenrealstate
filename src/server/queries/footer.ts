
import type { FooterProps } from "../../lib/data";

export const getFooterProps = (_accountIdArg?: bigint): FooterProps | null => {
  return {
  "companyName": "Halfen Real Estate",
  "description": "Inmobiliaria de lujo en Madrid. Servicios inmobiliarios a tu medida, en español, portugués e inglés.",
  "socialLinks": {
  "instagram": "https://www.instagram.com/halfen_realestate/"
},
  "officeLocations": [{
  "name": "Halfen Real Estate",
  "address": ["Calle Núñez de Balboa, 13", "Madrid, Madrid"],
  "phone": "+34 616 674 403",
  "email": "fh@halfenrealestate.com"
}],
  "copyright": "© 2026 Halfen Real Estate. Todos los derechos reservados."
};
}
