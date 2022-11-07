export interface Text {
  text: string;
}

export interface Source {
  SourceProducer: Text;
  SourceCode: Text;
}

export interface StockLineRow {
  StokName: Text;
  StokID: Text;
  StockQTY: Text;
  DeliveryDelay: Text;
}

export interface OnStocks {
  StockLine: StockLineRow[] | StockLineRow;
}

export interface CodeListRow {
  ZakazCode: Text;
  Supplier: Text;
  ProducerBrand: Text;
  ProducerCode: Text;
  Brand: Text;
  Country: Text;
  Name: Text;
  OnStocks: OnStocks;
  PriceRUR: Text;
  CodeType: Text;
  Source: Source;
  PrefixLength: Text;
}

export interface List {
  Code_List_Row: CodeListRow[];
}

export interface CodeList {
  Code_Search: Text;
  List: List;
}

export interface MikadoCodeSearchRes {
  Code_List: CodeList;
}
