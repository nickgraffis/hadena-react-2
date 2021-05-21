export const isWhite = (hex?: string) => {
  if(!hex) return true;

  hex = hex.substring(1); // strip #
  const rgb = parseInt(hex, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff; // extract red
  const g = (rgb >> 8) & 0xff; // extract green
  const b = (rgb >> 0) & 0xff; // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  
  return luma > 200 ? true : false;
};