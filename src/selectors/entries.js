export default (entries, { text }) => {
  return entries
    .filter((entry) => {
      const titleMatch = entry.title.toLowerCase().includes(text.toLowerCase());

      const textMatch = entry.entryText
        .toLowerCase()
        .includes(text.toLowerCase());

      return textMatch || titleMatch;
    })
    .sort((a, b) => {
      return a.createdAt < b.createdAt ? 1 : -1;
    });
};
