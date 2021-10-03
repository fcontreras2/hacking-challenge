export enum DocumentType {
  "DNI",
  "CE",
}

export interface CoverageOption {
  id: number;
  title: string;
  price: number;
  description: string;
  exonerated: boolean;
  icon: string;
}

export interface Coverage {
  title: string;
  options: CoverageOption[];
}

export interface Car {
  documentType: DocumentType;
  document: number;
  plate: string;
  brand: string;
  year: number;
  model: string;
  name: string;
  email: string;
}
