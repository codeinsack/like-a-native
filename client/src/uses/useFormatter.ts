export function useFormatter() {
  return {
    formatDate: (date: number): string => {
      if (!date) return '';
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
      };
      return new Intl.DateTimeFormat('en-EN', options).format(date);
    },
    capitalizeUnderscore: (str: string): string => {
      if (!str) return '';
      return (str.charAt(0).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase()).replace(
        /_/g,
        ' '
      );
    },
  };
}
