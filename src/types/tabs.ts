
export type TabOption<T> = {
  id: number;
  title: string;
  active: boolean;
  description: string;
  icon: string;
} & T

export type Tab<T> = {
  title: string;
  options: T[]
}