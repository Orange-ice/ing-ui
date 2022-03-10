// Boolean  相当于 (value) => value
export const joinClass = (...names: (string | undefined)[]) => {
  return names.filter(Boolean).join(' ');
};
