interface IMenuItem {
  lable: string;
  redirectTo: string;
  imagePath: string;
}
interface ISettingsWording {
  title: string;
  menuItems: IMenuItem[];
}

export default ISettingsWording;
