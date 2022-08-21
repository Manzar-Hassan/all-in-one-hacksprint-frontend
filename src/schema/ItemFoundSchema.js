import * as yup from "yup";

export const itemFoundSchema = yup.object().shape({
  item: yup.string().min(4, "Item-name must be greater than 3 characters"),
  placeFound: yup
    .string()
    .min(4, "Place name must be greater than 3 characters!!"),
});
