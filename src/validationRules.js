export const validationRules = [
  {
    fieldName: "first_name",
    rules: [{ type: "required", message: "Field is required" }],
  },
  {
    fieldName: "last_name",
    rules: [{ type: "required", message: "Field is required" }],
  },
  {
    fieldName: "email",
    rules: [
      { type: "required", message: "Field is required" },
      { type: "email", message: "Incorrect format" },
    ],
  },
  {
    fieldName: "phone",
    rules: [{ type: "phone", message: "Incorrect format" }],
  },
  {
    fieldName: "skills",
    rules: [{ type: "required", message: "Field is required" }],
  },
];
