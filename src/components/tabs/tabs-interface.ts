export interface BdsTabData {
  active: boolean;
  name: string;
}

export interface BdsTabHeaderData extends BdsTabData {
  id: string;
}

export interface TabGroup {
  header: BdsTabHeaderData;
  content: BdsTabData;
}
