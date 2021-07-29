import { Component, ViewChild} from '@angular/core';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myDropDownList', { static: false }) myDropDownList: jqxDropDownListComponent;

  data: string = `[
    {
		"CustomerID": "ALFKI",
        "CompanyName": "Alfreds Futterkiste",
        "ContactName": "Maria Anders",
        "ContactTitle": "Sales Representative",
        "Address": "Obere Str. 57",
        "City": "Berlin",
        "Country": "Germany"
    },
    {
		"CustomerID": "ANATR",
        "CompanyName": "Ana Trujillo Emparedados y helados",
        "ContactName": "Ana Trujillo",
        "ContactTitle": "Owner",
        "Address": "Avda. de la Constitucin 2222",
        "City": "Mxico D.F.",
        "Country": "Mexico"
    },
    {
		"CustomerID": "ANTON",
        "CompanyName": "Antonio Moreno Taquera",
        "ContactName": "Antonio Moreno",
        "ContactTitle": "Owner",
        "Address": "Mataderos 2312",
        "City": "Mxico D.F.",
        "Country": "Mexico"
    }]`

  source: any =
  {
      datatype: 'json',
      datafields: [
          { name: 'CompanyName' },
          { name: 'ContactName' }
      ],
      localdata: this.data
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  myInputOnSelect(event: any): void {
      if (event.args) {
          let item = event.args.item;
          console.log('Select event', item);
      }
  }

  Change(event: any): void {
    console.log('Change event', event);
  }



  
  listOnSelect(event: any): void {
    let args = event.args;
    let item = this.myDropDownList.getItem(args.index);
    if (item != null) {
      console.log('List select event', item);
    }
};
  listOnUnselect(event: any): void {
    let args = event.args;
    let item = this.myDropDownList.getItem(args.index);
    if (item != null) {
      console.log('List unselect event', item)
    }
  };
}
