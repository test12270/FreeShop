import {
  createAsyncThunk,
  configureStore,
  combineReducers,
  createSlice,
} from "@reduxjs/toolkit";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

type initialStateType = {
  loadingState: string;
  productList: any;
};
const initialState: initialStateType = {
  productList: [],
  loadingState: "loading",
};

const URL = "https://fakestoreapi.com/products";

export const fetchAPI = createAsyncThunk("products/fetchProduct", async () => {
  return await (await fetch(URL)).json();
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAPI.pending, (state) => {
      state.loadingState = "loading";
    });
    builder.addCase(fetchAPI.fulfilled, (state, action) => {
      state.loadingState = "success";
      state.productList = action.payload;
    });
    builder.addCase(fetchAPI.rejected, (state) => {
      state.loadingState = "failed";
    });
  },
});

export const cartSlice = createSlice({
  name: "carts",
  initialState: {
    productlist: [],
    countState: 0,
  },
  reducers: {
    addToCart: (state: any, action: any) => {
      const newProduct = action.payload;
      const alreadyItem = state.productlist.find(
        (item: any) => item.id === newProduct.id
      );
      if (!alreadyItem) {
        state.productlist.push({
          id: newProduct.id,
          title: newProduct.title,
          price: newProduct.price,
          image: newProduct.image,
          totalPrice: newProduct.price,
          quantity: 1,
        });
      } else {
        alreadyItem.totalPrice = alreadyItem.totalPrice + alreadyItem.price;
        alreadyItem.quantity++;
      }
      state.countState++;
    },
    removeFromCart: (state: any, action: any) => {
      const cartItem = action.payload;
      const target = state.productlist.find(
        (item: any) => item.id === cartItem.id
      );
      if (target.quantity === 1) {
        target.quantity--;
        state.productlist = state.productlist.filter(
          (item: any) => item.quantity !== 0
        );
      }
      state.countState--;
      target.quantity--;
      target.totalPrice -= target.price;
    },
    Buying: (state: any, action: any) => {
      state.productlist = [];
      state.countState = 0;
    },
  },
});
export const wishSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishList: [],
  },
  reducers: {
    addToWishList: (state: any, action: any) => {
      const newWishList = action.payload;
      const alreadyItem = state.wishList.find(
        (item: any) => item.id === newWishList.id
      );
      if (!alreadyItem) {
        state.wishList.push({
          id: newWishList.id,
          title: newWishList.title,
          price: newWishList.price,
          image: newWishList.image,
          quantity: 1,
        }),
          alert("success add to wishlist");
      } else {
        alert("This item has already been added to wishlist");
      }
    },
    removeFromWishList: (state: any, action: any) => {
      const cartItem = action.payload;
      const target = state.wishList.find(
        (item: any) => item.id === cartItem.id
      );
      if (target.quantity === 1) {
        target.quantity--;
        state.wishList = state.wishList.filter(
          (item: any) => item.quantity !== 0
        );
      }
    },
  },
});
export const cartDispatcher = cartSlice.actions;
export const wishListDispatcher = wishSlice.actions;
export default productSlice;
