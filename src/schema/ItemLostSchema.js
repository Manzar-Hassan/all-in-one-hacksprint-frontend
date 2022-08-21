import * as yup from "yup";

export const itemLostSchema = yup.object().shape({
  lostItem: yup.string().min(4, "lost-item name must be greater than 3 characters"),
  placeLost: yup.string().min(4, "place name must be greater than 3 characters"),
});