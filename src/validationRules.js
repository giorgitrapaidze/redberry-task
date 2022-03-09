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
    rules: [{ type: "required", message: "Add at least 1 skill" }],
  },
  {
    fieldName: "work_preference",
    rules: [{ type: "required", message: "Field is required" }],
  },
  {
    fieldName: "had_covid",
    rules: [{ type: "radio", message: "Field is required" }],
  },
  {
    fieldName: "had_covid_at",
    rules: [{ type: "required", message: "Field is required" }],
  },
  {
    fieldName: "vaccinated",
    rules: [{ type: "radio", message: "Field is required" }],
  },
  {
    fieldName: "vaccinated_at",
    rules: [{ type: "required", message: "Field is required" }],
  },
  {
    fieldName: "will_organize_devtalk",
    rules: [{ type: "radio", message: "Field is required" }],
  },
  {
    fieldName: "devtalk_topic",
    rules: [{ type: "required", message: "Field is required" }],
  },
  {
    fieldName: "something_special",
    rules: [{ type: "required", message: "Field is required" }],
  },
];
