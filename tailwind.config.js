module.exports = {
  theme: {
    extend: {
      spacing: {
        "80": "20rem",
        "108": "27rem"
      },
      borderWidth: {
        "14": "14px"
      },
      container: {
        padding: "1rem"
      },
      colors: {
        background: {
          primary: "var(--bg-background-primary)",
          secondary: "var(--bg-background-secondary)",
          tertiary: "var(--bg-background-tertiary)",
          form: "var(--bg-background-form)"
        },

        copy: {
          primary: "var(--text-copy-primary)",
          secondary: "var(--text-copy-hover)"
        },

        "border-color": {
          primary: "var(--border-border-color-primary)"
        },

        transparent: "transparent"
      },
      fontFamily: {
        sans: ["Nunito Sans"]
      }
    }
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ]
};
