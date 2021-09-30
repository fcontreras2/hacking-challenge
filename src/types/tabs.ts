
export type TabOption = {
  title: string;
  active: boolean;
  description: string;
  icon: string;
}

export type Tab = {
  title: string;
  options: TabOption[]
}