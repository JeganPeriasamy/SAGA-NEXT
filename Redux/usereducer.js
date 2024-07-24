import { SUBMIT} from "./constants";

export const userData = (data = [], action) => {
  switch (action.type) {
    case SUBMIT:
      console.log(action.data)
      return [action.data, ...data];
        default:
      return data;
  }
};
