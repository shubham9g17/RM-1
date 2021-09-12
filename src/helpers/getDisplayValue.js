export default function getDisplayValue(value) {
  switch (typeof value) {
    case "object":
      return Object.keys(value)
        .filter((key) => value[key])
        .join(", ");
    default:
      return value;
  }
}
