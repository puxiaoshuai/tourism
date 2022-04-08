export interface IMenu {
  id: number,
  key: string,
  grade: number,
  title: string,
  pagepermisson: number
  children?: IMenu[],
  rightId?: number
}
