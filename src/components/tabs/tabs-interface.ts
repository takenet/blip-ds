export interface BdsTabData {
  active: boolean;
  name: string;
}
export interface TabGroup {
  header: BdsTabData;
  content: BdsTabData;
}
