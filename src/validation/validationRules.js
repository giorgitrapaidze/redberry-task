export const validationRules = [
  {
    fieldName: "first_name",
    rules: [{ type: "required", message: "Field is required" }],
    page: 0,
  },
  {
    fieldName: "last_name",
    rules: [{ type: "required", message: "Field is required" }],
    page: 0,
  },
  {
    fieldName: "email",
    rules: [
      { type: "required", message: "Field is required" },
      { type: "email", message: "Incorrect format" },
    ],
    page: 0,
  },
  {
    fieldName: "phone",
    rules: [{ type: "phone", message: "Incorrect format" }],
    page: 0,
  },
  {
    fieldName: "skills",
    rules: [{ type: "objectRequired", message: "Add at least 1 skill" }],
    page: 1,
  },
  {
    fieldName: "work_preference",
    rules: [{ type: "required", message: "Field is required" }],
    page: 2,
  },
  {
    fieldName: "had_covid",
    rules: [{ type: "radio", message: "Field is required" }],
    page: 2,
  },
  {
    fieldName: "had_covid_at",
    rules: [{ type: "required", message: "Field is required" }],
    page: 2,
  },
  {
    fieldName: "vaccinated",
    rules: [{ type: "radio", message: "Field is required" }],
    page: 2,
  },
  {
    fieldName: "vaccinated_at",
    rules: [{ type: "required", message: "Field is required" }],
    page: 2,
  },
  {
    fieldName: "will_organize_devtalk",
    rules: [{ type: "radio", message: "Field is required" }],
    page: 3,
  },
  {
    fieldName: "devtalk_topic",
    rules: [{ type: "required", message: "Field is required" }],
    page: 3,
  },
  {
    fieldName: "something_special",
    rules: [{ type: "required", message: "Field is required" }],
    page: 3,
  },
];
