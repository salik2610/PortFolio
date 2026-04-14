import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "#constants"

const DEFAULT_LOCATION = locations.work


const useLocationstore = create(immer((set) => ({
    activeLocations: DEFAULT_LOCATION,

    setActiveLocation: (location = null) => {
        set((state) => {
            state.activeLocations = location
        })
    },
    resetActiveLocation: () => {
        set((state) => {
            state.activeLocations = DEFAULT_LOCATION
        })
    }

})))

export default useLocationstore;