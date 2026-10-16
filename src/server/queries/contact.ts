

export type ContactProps = {
  /** Photo of the premises for the editorial "Ven a vernos" panel. */
  image?: string;
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Optional hero banner for /contacto page. Absent => no hero rendered.
  heroImage?: string;
  heroVideo?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  // Optional dedicated WhatsApp number for the floating button. When set (and a
  // valid Spanish mobile), it overrides the default-office phone. Lets the
  // WhatsApp line differ from any single office's displayed number.
  whatsappNumber?: string;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode?: string;
    };
    phoneNumbers: {
      main: string;
      sales?: string;
    };
    emailAddresses: {
      info: string;
      sales?: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
};

export const getContactProps = (_accountIdArg?: bigint): ContactProps | null => {
  return {
  "title": "Contáctanos",
  "subtitle": "Entra en contacto y descubre lo que podemos hacer por ti",
  "messageForm": true,
  "address": true,
  "phone": true,
  "mail": true,
  "schedule": false,
  "map": true,
  "offices": [{
  "id": "office-1",
  "name": "Halfen Real Estate",
  "address": {
  "street": "Calle Núñez de Balboa, 13",
  "city": "Madrid",
  "state": "Madrid",
  "country": "España",
  "postalCode": "28001"
},
  "phoneNumbers": {
  "main": "+34 616 674 403"
},
  "emailAddresses": {
  "info": "fh@halfenrealestate.com"
},
  "scheduleInfo": {
  "weekdays": "",
  "saturday": "",
  "sunday": ""
},
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=Calle+N%C3%BA%C3%B1ez+de+Balboa+13+Madrid",
  "isDefault": true
}],
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/224/hero/contacto_B42ZftRq.jpg"
};
}

