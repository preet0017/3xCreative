/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* Original hex values — these are the defaults (Original Yellow theme).
           All other themes override these via CSS class overrides in index.css. */
        "on-secondary":                  "#ffffff",
        "surface-container-low":         "#f4f3f3",
        "on-background":                 "#1a1c1c",
        "outline-variant":               "#cdc7aa",
        "surface-bright":                "#f9f9f9",
        "outline":                       "#7c775f",
        "on-primary-container":          "var(--color-on-primary-container)",
        "primary-fixed":                 "var(--color-primary-fixed)",
        "secondary-fixed-dim":           "#c6c6c6",
        "on-secondary-fixed-variant":    "#474747",
        "primary-fixed-dim":             "var(--color-primary-fixed-dim)",
        "inverse-primary":               "var(--color-primary-fixed-dim)",
        "surface-dim":                   "#dadada",
        "on-surface-variant":            "#4b4731",
        "on-tertiary-container":         "#646666",
        "background":                    "#f9f9f9",
        "on-secondary-fixed":            "#1b1b1b",
        "inverse-surface":               "#2f3131",
        "secondary-container":           "#e2e2e2",
        "tertiary-container":            "#e4e4e4",
        "secondary":                     "#5e5e5e",
        "surface-variant":               "#e2e2e2",
        "error":                         "#ba1a1a",
        "surface-tint":                  "var(--color-surface-tint)",
        "on-secondary-container":        "#646464",
        "tertiary":                      "#5d5f5f",
        "tertiary-fixed-dim":            "#c6c6c7",
        "on-tertiary-fixed-variant":     "#454747",
        "primary-container":             "var(--color-primary-container)",
        "inverse-on-surface":            "#f1f1f1",
        "primary":                       "var(--color-primary)",
        "surface-container-highest":     "#e2e2e2",
        "surface-container":             "#eeeeee",
        "on-primary":                    "#ffffff",
        "on-primary-fixed":              "var(--color-on-primary)",
        "surface-container-lowest":      "#ffffff",
        "tertiary-fixed":                "#e2e2e2",
        "on-error-container":            "#93000a",
        "surface":                       "#f9f9f9",
        "surface-container-high":        "#e8e8e8",
        "on-surface":                    "#1a1c1c",
        "on-tertiary":                   "#ffffff",
        "on-error":                      "#ffffff",
        "error-container":               "#ffdad6",
        "on-primary-fixed-variant":      "var(--color-on-primary-container)",
        "on-tertiary-fixed":             "#1a1c1c",
        "secondary-fixed":               "#e2e2e2"
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px"
      },
      spacing: {
        "margin-mobile": "16px",
        xs: "4px",
        "margin-desktop": "40px",
        lg: "32px",
        gutter: "24px",
        xl: "64px",
        md: "16px",
        unit: "4px",
        sm: "8px"
      },
      fontFamily: {
        "display-lg":        ["Montserrat", "sans-serif"],
        "display-lg-mobile": ["Montserrat", "sans-serif"],
        "body-lg":           ["JetBrains Mono", "monospace"],
        "label-bold":        ["JetBrains Mono", "monospace"],
        "code":              ["JetBrains Mono", "monospace"],
        "headline-md":       ["Montserrat", "sans-serif"],
        "body-md":           ["JetBrains Mono", "monospace"],
        "headline-lg":       ["Montserrat", "sans-serif"]
      },
      fontSize: {
        "display-lg":        ["80px", { lineHeight: "88px", letterSpacing: "-0.04em", fontWeight: "900" }],
        "display-lg-mobile": ["48px", { lineHeight: "52px", letterSpacing: "-0.02em", fontWeight: "900" }],
        "body-lg":           ["18px", { lineHeight: "28px", fontWeight: "500" }],
        "label-bold":        ["14px", { lineHeight: "20px", fontWeight: "700" }],
        "code":              ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "headline-md":       ["32px", { lineHeight: "40px", fontWeight: "800" }],
        "body-md":           ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-lg":       ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "800" }]
      },
      boxShadow: {
        /* CSS variables ensure boxShadow tokens respond to theme changes */
        brutal:    "4px 4px 0px 0px var(--color-shadow)",
        "brutal-lg": "8px 8px 0px 0px var(--color-shadow)",
      }
    }
  },
  plugins: [],
}
