export function useFormatter() {
  return {
    capitalizeUnderscore: (str: string): string => {
      if (!str) return '';
      return (str.charAt(0).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase()).replace(
        /_/g,
        ' '
      );
    },
  };
}
