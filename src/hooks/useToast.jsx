import { enqueueSnackbar } from "notistack";

export default function useToast() {
  const success = (message) => enqueueSnackbar(message, { variant: "success" });
  const warning = (message) => enqueueSnackbar(message, { variant: "warning" });
  const error = (message) => enqueueSnackbar(message, { variant: "error" });
  const info = (message) => enqueueSnackbar(message, { variant: "info" });

  return { success, warning, error, info };
}
