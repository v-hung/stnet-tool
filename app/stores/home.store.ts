import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type HomeStoreState = {
  convertType: 'csvToTsv' | 'tsvToCsv'
  setConvertType: (value?: 'csvToTsv' | 'tsvToCsv') => void
}

export const useHomeStore = create<HomeStoreState>()(
  persist(
    set => ({
      convertType: 'csvToTsv',
      setConvertType: value =>
        set(state => ({
          convertType:
            value || state.convertType == 'csvToTsv' ? 'tsvToCsv' : 'csvToTsv',
        })),
    }),
    {
      name: 'home-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
