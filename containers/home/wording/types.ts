interface IHomeWording {
  title: string;
  mainTitle: string;
  description: string;
  ChooseMainStore: IChooseMainStoreWording;
  goToFidelitySpace: string;
}
export interface IChooseMainStoreWording {
  title: string;
  description: string;
  buttonTitle: string;
}

export default IHomeWording;
