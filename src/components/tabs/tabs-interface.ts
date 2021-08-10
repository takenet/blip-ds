export interface BdsTabData {
  select: () => void;
  unselect: () => void;
  name: string;
}

export interface BdsTabHeaderData extends BdsTabData {
  id: string;
}

export interface TabGroup {
  header: BdsTabHeaderData;
  content: BdsTabData;
}
