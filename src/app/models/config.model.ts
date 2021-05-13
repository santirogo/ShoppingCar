export interface ConfigModel {
  DeliveryAddress: DeliveryAddress;
  Summary: Summary;
}

export interface FormInput {
  Icon: string;
  PlaceHolder: string;
}

export interface DeliveryAddress {
  Title: string;
  Inputs: FormInput[];
  Buttons: string[];
  CheckboxInfo: string;
  SuccessMessage: string;
  ErrorMessage: string;
}

export interface Summary {
  Title: string;
  Button: string;
  SubtotalLabel: string;
  ShippingValueLabel: string;
  ShippingValue: string;
  TotalLabel: string;
}
