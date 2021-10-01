export function saveStatePlugin(store: any) {
  store.subscribe((mutation: any, state: State) => {
    localStorage.setItem("notes", JSON.stringify(state.notes));
    localStorage.setItem("recentNotes", JSON.stringify(state.recentNotes));
  });
}

export interface State {
  notes: Note[];
  recentNotes: any;
  note: Note | {};
  settings: any;
}

export interface Note {
  title: string;
  text: string;
  favorite: boolean;
  deleted: boolean;
  id: number;
}

export const defaultSettings = {
  showRecents: true,
  showFavorites: true,
  autoSave: false,
};