interface IAccessibilityWording {
  heading: string;
  text: string;
}

interface IMenuWording {
  heading: string;
  promotion: string;
  products: string;
  services: string;
  stores: string;
}

interface IContactWording {
  heading: string;
  messanger: string;
  faq: string;
  phoneNumber: string;
  whatsapp: string;
  contactUs: string;
  textButton: string;
}

interface IJoinUsWording {
  heading: string;
  facebook: string;
  instagram: string;
  youtube: string;
}

interface IDownloadAppWording {
  heading: string;
  infoText: string;
  scanBoldText: string;
  scanNormalText: string;
}

interface ICopyrightWording {
  politicText: string;
  copyrightText: string;
  cguText: string;
}

export interface IFooterWording {
  accessibilityWording: IAccessibilityWording;
  menuWording: IMenuWording;
  contactWording: IContactWording;
  joinUsWording: IJoinUsWording;
  downloadAppWording: IDownloadAppWording;
  copyrightWording: ICopyrightWording;
}
