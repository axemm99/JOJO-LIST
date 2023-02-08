import { create } from "zustand";
import produce from "immer";

export const useStore = create((set, get) => ({
  jojoCount: 21,
  jojoAllParts: [
    {
      value: 1,
      label: "Part 1",
    },
    {
      value: 2,
      label: "Part 2",
    },
    {
      value: 3,
      label: "Part 3",
    },
    {
      value: 4,
      label: "Part 4",
    },
    {
      value: 5,
      label: "Part 5",
    },
    {
      value: 6,
      label: "Part 6",
    },
    {
      value: 7,
      label: "Part 7",
    },
    {
      value: 8,
      label: "Part 8",
    },
  ],
  jojoTypes: [
    {
      id: 1,
      type: "JOESTAR",
    },
    {
      id: 2,
      type: "JOBRO",
    },
    {
      id: 3,
      type: "ENEMY",
    },
    {
      id: 4,
      type: "ANTAGONIST",
    },
    {
      id: 5,
      type: "NORMAL",
    },
  ],
  jojos: [
    {
      id: 0,
      name: "DEFAULT",
      img: "https://www.marmofoz.com/media/IMPORTACOES//CORES/SIL.ICOWHT/IMG//00.jpg",
      type: "DEFAULT",
      jojoPart: [0],
      hasStand: "false",
      standName: "",
      status: "DEFAULT",
    },
    {
      id: 1,
      name: "Jonathan Joestar",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/054a91f2-3cd8-45d1-89f2-dd4828550aeb/dew0i9g-9f37f761-876b-414f-88a1-fe6443f579fc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA1NGE5MWYyLTNjZDgtNDVkMS04OWYyLWRkNDgyODU1MGFlYlwvZGV3MGk5Zy05ZjM3Zjc2MS04NzZiLTQxNGYtODhhMS1mZTY0NDNmNTc5ZmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CnsIVx-glHS30nlwVCO_TpnE6qBRloHE6sA2Z0sG0Us",
      type: "JOESTAR",
      jojoPart: [1],
      hasStand: "false",
      standName: "",
      status: "Dead",
    },
    {
      id: 2,
      name: "Robert E. O. Speedwagon",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6753d47f-b1fc-4412-b8b3-a7b164f5be05/dd5vz2j-56e1dcee-c4f7-43b7-b700-47b1b815799b.png/v1/fill/w_1920,h_2716,q_80,strp/robert_e__o_speedwagon__jojo_s_bizarre_adventure__by_panda3471_dd5vz2j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjcxNiIsInBhdGgiOiJcL2ZcLzY3NTNkNDdmLWIxZmMtNDQxMi1iOGIzLWE3YjE2NGY1YmUwNVwvZGQ1dnoyai01NmUxZGNlZS1jNGY3LTQzYjctYjcwMC00N2IxYjgxNTc5OWIucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.N1mathJ2wlViJ-3N4VIXdVk6aQqbgGAzCqoTGLjc654",
      type: "JOBRO",
      jojoPart: [1, 2],
      hasStand: "false",
      standName: "",
      status: "Dead",
    },
    {
      id: 3,
      name: "Dio Brando",
      img: "https://i.pinimg.com/originals/f9/83/18/f98318a9e1266c62d984d9ffb462cf05.jpg",
      type: "ANTAGONIST",
      jojoPart: [1, 3, 6],
      hasStand: "true",
      standName: "The World",
      status: "Dead",
    },
    {
      id: 4,
      name: "Joseph Joestar",
      img: "https://i.pinimg.com/originals/96/c2/83/96c28354e0c7a18e7d9df36b81eaaee5.png",
      type: "JOESTAR",
      jojoPart: [2, 3, 4],
      hasStand: "true",
      standName: "Hermit Purple",
      status: "Dead",
    },
    {
      id: 5,
      name: "Caesar Zeppeli",
      img: "https://i.pinimg.com/736x/0b/b0/3e/0bb03eb43d58a73ac3dfbc289fa36f77.jpg",
      type: "JOBRO",
      jojoPart: [2],
      hasStand: "false",
      standName: "",
      status: "Dead",
    },
    {
      id: 6,
      name: "Jotaro Kujo",
      img: "https://i1.sndcdn.com/avatars-KHCJysyj9xSJNBhs-hTFe8g-t500x500.jpg",
      type: "JOESTAR",
      jojoPart: [3, 4, 5, 6],
      hasStand: "true",
      standName: "Star Platinum",
      status: "Dead",
    },
    {
      id: 7,
      name: "Noriaki Kakyoin",
      img: "https://i.pinimg.com/280x280_RS/bc/21/61/bc216182cd90750e969e609c02982083.jpg",
      type: "JOBRO",
      jojoPart: [3],
      hasStand: "true",
      standName: "Hierophant Green",
      status: "Dead",
    },
    {
      id: 8,
      name: "Jean Pierre Polnareff",
      img: "https://i.pinimg.com/736x/c8/d8/3c/c8d83cf6b032dfc2404b601ffb6d3a2a.jpg",
      type: "JOBRO",
      jojoPart: [3, 5],
      hasStand: "true",
      standName: "Silver Chariot",
      status: "Dead",
    },
    {
      id: 9,
      name: "Muhammad Avdol",
      img: "https://i.pinimg.com/originals/fe/62/a6/fe62a6034a5c000c63ad6e9575127de7.png",
      type: "NORMAL",
      jojoPart: [3],
      hasStand: "true",
      standName: "Magician's Red",
      status: "Dead",
    },
    {
      id: 10,
      name: "Josuke Higashikata",
      img: "https://i1.sndcdn.com/avatars-000300697546-7jwd4h-t500x500.jpg",
      type: "JOESTAR",
      jojoPart: [4],
      hasStand: "true",
      standName: "Crazy Diamond",
      status: "Unknown",
    },
    {
      id: 11,
      name: "Okuyasu Nijimura",
      img: "https://i1.sndcdn.com/avatars-iwtVcvcaN56QbjN0-TcxONA-t500x500.jpg",
      type: "JOBRO",
      jojoPart: [4],
      hasStand: "true",
      standName: "The Hand",
      status: "Alive",
    },
    {
      id: 12,
      name: "Yoshikage Kira",
      img: "https://i.pinimg.com/550x/55/a4/73/55a4732921f604423c0251f86a0c894b.jpg",
      type: "ANTAGONIST",
      jojoPart: [4],
      hasStand: "true",
      standName: "Killer Queen",
      status: "Dead",
    },
    {
      id: 13,
      name: "Koichi Hirose",
      img: "https://i1.sndcdn.com/avatars-j9I98urbq52E73nV-4R5ulA-t500x500.jpg",
      type: "NORMAL",
      jojoPart: [4, 5],
      hasStand: "true",
      standName: "Echoes",
      status: "Unknown",
    },
    {
      id: 14,
      name: "Kars",
      img: "https://i.pinimg.com/736x/49/c8/a9/49c8a97066a2d5258f0a7ecbd1defa75.jpg",
      type: "ANTAGONIST",
      jojoPart: [2],
      hasStand: "false",
      standName: "",
      status: "Dead",
    },
    {
      id: 15,
      name: "Rudol von Stroheim",
      img: "https://i.pinimg.com/originals/c9/14/a2/c914a28a7edb7bc20d188f4ff3df9e04.jpg",
      type: "NORMAL",
      jojoPart: [2],
      hasStand: "false",
      standName: "",
      status: "Dead",
    },
    {
      id: 16,
      name: "Giorno Giovanna",
      img: "https://i.pinimg.com/736x/af/53/55/af5355d2e928deb428fd3961a317cca4.jpg",
      type: "JOESTAR",
      jojoPart: [5],
      hasStand: "true",
      standName: "Gold Experience",
      status: "Unknown",
    },
    {
      id: 17,
      name: "Jolyne Cujoh",
      img: "https://thicc.mywaifulist.moe/waifus/1346/ee67d282722c086ce9300d25810ff04f67c2490f694ef893b402e42d21a3e7ef_thumb.jpg",
      type: "JOESTAR",
      jojoPart: [6],
      hasStand: "true",
      standName: "Stone Free",
      status: "Alive",
    },
    {
      id: 18,
      name: "Johnny Joestar",
      img: "https://i.pinimg.com/474x/4e/81/ed/4e81edabd467cbea4964e17f0524a51c.jpg",
      type: "JOESTAR",
      jojoPart: [7],
      hasStand: "true",
      standName: "Tusk",
      status: "Dead",
    },
    {
      id: 19,
      name: "Gyro Zeppeli",
      img: "https://cdn.myanimelist.net/images/characters/13/311885.jpg",
      type: "JOBRO",
      jojoPart: [7],
      hasStand: "true",
      standName: "Ball Breaker",
      status: "Dead",
    },
    {
      id: 20,
      name: "Josuke Higashikata",
      img: "https://i.pinimg.com/originals/e8/9d/b1/e89db1b7ef17284c452bea536651ecd5.jpg",
      type: "JOESTAR",
      jojoPart: [8],
      hasStand: "true",
      standName: "Soft & Wet",
      status: "Alive",
    },
    {
      id: 21,
      name: "Rohan Kishibe",
      img: "https://i.pinimg.com/236x/5c/83/3a/5c833abec1faa7b0e295f288f3a23c5d.jpg",
      type: "NORMAL",
      jojoPart: [4],
      hasStand: "true",
      standName: "Heaven's Door",
      status: "Alive",
    },
  ],
  increaseNumJojos: () => set((state) => ({ jojoCount: state.jojoCount + 1 })),
  addJojoToArray: (
    idPl,
    namePl,
    imgPl,
    typePl,
    jojoPartPl,
    hasStandPl,
    standNamePl,
    statusPl
  ) =>
    set(
      produce((draft) => {
        draft.jojos.push({
          id: idPl,
          name: namePl,
          img: imgPl,
          type: typePl,
          jojoPart: jojoPartPl,
          hasStand: hasStandPl,
          standName: standNamePl,
          status: statusPl,
        });
      })
    ),
  removeJojo: (payload) =>
    set(
      produce((draft) => {
        const jojoIndex = draft.jojos.findIndex((e) => e.id === payload);
        draft.jojos.splice(jojoIndex, 1);
      })
    ),
  patchJojo: (payload) =>
    set(
      produce((draft) => {
        console.log(draft);
        const jojoDraft = draft.jojos.find((e) => e.id === payload.id);
        console.log(jojoDraft);
        jojoDraft.name = payload.name;
        jojoDraft.img = payload.img;
        jojoDraft.type = payload.type;
        jojoDraft.jojoPart = payload.jojoPart;
        jojoDraft.hasStand = payload.hasStand;
        jojoDraft.standName = payload.standName;
        jojoDraft.status = payload.status;
      })
    ),
}));
