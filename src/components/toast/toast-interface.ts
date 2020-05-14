export type ActionType = 'button' | 'icon';

export type VariantType = 'system' | 'error' | 'success' | 'warning';

export type ButtonActionType = 'close' | 'custom';

export type IconVariantMap = { [key in VariantType]: string };

export type OpenToastType = {
  buttonAction: ButtonActionType;
  buttonText: string;
  toastText: string;
  toastTitle: string;
  icon?: string;
  actionType?: ActionType;
  variant?: VariantType;
  duration?: number;
};

export type CreateToastType = {
  buttonAction: ButtonActionType;
  buttonText: string;
  toastText: string;
  toastTitle: string;
  icon?: string;
  actionType?: ActionType;
  variant?: VariantType;
  duration?: number;
};
