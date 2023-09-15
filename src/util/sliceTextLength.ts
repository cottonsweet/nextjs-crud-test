const sliceTextLength = (text: string) => {
  if (text.length > 100) {
    return text.slice(0, 99);
  }
  return text;
};

export default sliceTextLength;
