import { GET_BANNER } from "../type/BannerType";

const initialState = {
  arrPhim: [],
};

export const BannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANNER:
      state.arrPhim = action.payload;
      return { ...state };

    default:
      return state;
  }
};
