import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [".next/**", "node_modules/**", "public/**", "dist/**", ".github/**"]
  },
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
);
