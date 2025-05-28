import { ReactNode } from "react";

interface AlertProps {
  type: "info" | "warning" | "success" | "error";
  children: ReactNode;
}

export function Alert({ type, children }: AlertProps) {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/50 dark:border-blue-800 dark:text-blue-200",
    warning:
      "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/50 dark:border-yellow-800 dark:text-yellow-200",
    success:
      "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/50 dark:border-green-800 dark:text-green-200",
    error:
      "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/50 dark:border-red-800 dark:text-red-200",
  };

  return (
    <div className={`p-4 mb-4 border rounded-lg ${styles[type]}`}>
      {children}
    </div>
  );
}
