export interface IToast {
  isHidden: boolean;
  message: string;
  title: string;
  dateTime: Date;
  timeout: number;
}
