export const joinClass = (...names: (string | undefined)[]) => {
  return names.filter((name) => Boolean(name?.trim())).join(' ');
};
