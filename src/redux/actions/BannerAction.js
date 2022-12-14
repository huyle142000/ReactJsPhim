import axios from "axios";
import { bothServiceToken } from "../../Service/BothTokenService";
import { DOMAIN_CINEMA, MA_NHOM, TOKEN } from "../../utils/setting";
import { GET_BANNER, PLAY_TRAILER } from "../type/BannerType";

export function getBanner() {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get(
        `QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`
      );
      dispatch({ type: GET_BANNER, payload: data.content });
    } catch (e) {
    }
  };
}
// PlayTrailer
export function playTrailer(payload) {
  return (dispatch) => {
    dispatch({ type: PLAY_TRAILER, payload });
  };
}
