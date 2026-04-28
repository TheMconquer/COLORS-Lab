/**
 * Unit tests for color utility functions.
 */

function isValidHexColor(hex) {
  return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex);
}

function formatColorName(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().toLowerCase().replace(/\s+/g, "-");
}

describe("Color Utility Functions", () => {
  test("accepts a valid 6-digit hex color", () => {
    expect(isValidHexColor("#FF5733")).toBe(true);
  });

  test("accepts a valid 3-digit hex color", () => {
    expect(isValidHexColor("#F57")).toBe(true);
  });

  test("rejects a hex color missing the #", () => {
    expect(isValidHexColor("FF5733")).toBe(false);
  });

  test("rejects an invalid hex string", () => {
    expect(isValidHexColor("#ZZZZZZ")).toBe(false);
  });

  test("rejects an empty string", () => {
    expect(isValidHexColor("")).toBe(false);
  });

  // --- formatColorName ---
  test("formats a color name to lowercase with hyphens", () => {
    expect(formatColorName("Sky Blue")).toBe("sky-blue");
  });

  test("trims whitespace from color names", () => {
    expect(formatColorName("  Red  ")).toBe("red");
  });

  test("returns empty string for null input", () => {
    expect(formatColorName(null)).toBe("");
  });
});