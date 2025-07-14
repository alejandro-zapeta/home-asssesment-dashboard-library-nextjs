'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types/asset';
import { mockUsers } from '@/data/mockUsers';

type UserState = {
  list: User[];
  currentUserId: string | null;
};

const initialState: UserState = {
  list: mockUsers as unknown as User[],
  currentUserId: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<string>) => {
      const found = state.list.find(
        (u) => u.name.toLowerCase() === action.payload.toLowerCase()
      );
      state.currentUserId = found ? found.idUser : null;
    },
    requestAccess: (state) => {
      const user = state.list.find((u) => u.idUser === state.currentUserId);
      if (user) {
        user.hasAccess = true;
      }
    },
    addKpi: (state, action: PayloadAction<any>) => {
      const user = state.list.find((u) => u.idUser === state.currentUserId);
      if (user) {
        user.kpis.push(action.payload);
      }
    },

    addLayout: (state, action: PayloadAction<any>) => {
      const user = state.list.find((u) => u.idUser === state.currentUserId);
      if (user) {
        user.layouts.push(action.payload);
      }
    },
    toggleFavoriteAsset: (state, action: PayloadAction<{ assetId: string; mode: 'layout' | 'storyboard' }>) => {
        const user = state.list.find((u) => u.idUser === state.currentUserId);
        if (!user) return;

        if (action.payload.mode === 'layout') {
          const layout = user.layouts.find((l) => l.id === action.payload.assetId);
          if (layout) {
            layout.isFavorite = !layout.isFavorite;
          }
        } else {
          const storyboard = user.storyboards.find((s) => s.id === action.payload.assetId);
          if (storyboard) {
            storyboard.isFavorite = !storyboard.isFavorite;
          }
        }
      },
    addStoryboard: (state, action: PayloadAction<any>) => {
      const user = state.list.find((u) => u.idUser === state.currentUserId);
      if (user) {
        user.storyboards.push(action.payload);
      }
    }

  }
});

export const {
  setCurrentUser,
  requestAccess,
  addKpi,
  addLayout,
  addStoryboard,
  toggleFavoriteAsset
} = usersSlice.actions;

export const selectCurrentUser = (state: any) =>
  state.users.list.find((u: User) => u.idUser === state.users.currentUserId);

export default usersSlice.reducer;
