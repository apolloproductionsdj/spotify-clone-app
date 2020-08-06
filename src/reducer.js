export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE after finished developing...
  // token: "BQBCkA0C0ZsUpnNzFPHGl-o6ks9lIm_UbQqE6Xawoxd1jCEdQ8NyfMgsOtY0ACXPZKHTJvgqnc8lzSCF4OH_oNR3PdxXLHs3t-xmfwYu_dPh5RFGQ95asKk2kBC08p9p7MTQpYjUqil3VI6NrdiZGPp-kWo"
};

const reducer = (state, action) => {
console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return { 
        ...state,
        user: action.user 
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token 
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    default: 
      return state;
  }
};

export default reducer;