export interface ModalProps {
  title?: React.ReactNode;
  style?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
  helpText?: string;
  onClose?: () => void;
  open: boolean;
  primaryButton?: {
    title?: string;
    onClick?: () => void;
    disabled?: boolean;
  };
  secondaryButton?: {
    title: string;
    onClick: () => void;
    disabled?: boolean;
  };
  steps?: Array<{
    stepTitle: string;
    stepChildren?: React.ReactNode;
    prevStepText?: string;
    nextStepText?: string;
  }>;
  children?: React.ReactNode;
  successMessage?: string;
  errorMessage?: string;
  closeWindowOnSuccessMessage?: boolean;
  reloadOnWindowClose?: boolean;
  checked?: boolean;
  label?: string;
  footerColumn?: boolean;
  footerRaw?: boolean;
  displayBottom?: boolean;
  width?: number | string;
  bodypadding?: number | string;
  size?: "extraSmall" | "small" | "medium" | "large";
  checkedIconColor?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "primary50"
    | "primary100"
    | "primary200"
    | "primary300"
    | "primary400"
    | "primary500"
    | "primary600"
    | "primary700"
    | "primary800"
    | "primary900"
    | "primaryA11y"
    | "secondary50"
    | "secondary100"
    | "secondary200"
    | "secondary300"
    | "secondary400"
    | "secondary500"
    | "secondary600"
    | "secondary700"
    | "secondary800"
    | "secondary900"
    | "secondaryA11y"
    | "danger50"
    | "danger100"
    | "danger200"
    | "danger300"
    | "danger400"
    | "danger500"
    | "danger600"
    | "danger700"
    | "danger800"
    | "danger900"
    | "dangerA11y"
    | "success50"
    | "success100"
    | "success200"
    | "success300"
    | "success400"
    | "success500"
    | "success600"
    | "success700"
    | "success800"
    | "success900"
    | "successA11y"
    | "white"
    | "black100"
    | "black200"
    | "black300"
    | "black400"
    | "black500"
    | "black600"
    | "black700"
    | "black800"
    | "black900"
    | "black1000";
}