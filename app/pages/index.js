import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
const data = require('./data.json');

for(var i=0;i<data.length;i++){
    data[i].id=i+1;
    data[i].prix=parseFloat(data[i].prix);
}

const columns = [{
    dataField: 'id',
    text: '#',
    sort: true
  },{
  dataField: 'nom',
  text: 'Nom',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'url',
  text: 'Access Site',
  events:{
      onClick(e)=>{
          goto(e);
      }
  }
}, {
  dataField: 'chef',
  text: 'Chef Etoilé',
  sort: true,
  filter: textFilter()
}, {
    dataField: 'prix',
    text: 'Prix (euros)',
    sort: true
  },{
    dataField: 'etoile',
    text: 'Etoiles',
    sort: true,
    filter: textFilter()
  }];

const defaultSorted = [{
  dataField: 'prix',
  order: 'asc'
}];


export class MyComp extends React.Component {
    render() {
      return (
        <html>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
            </head>
            <body>
            <div class="container">
                <nav class="navbar navbar-dark bg-dark">
                    <a class="h1" href="https://www.relaischateaux.com/fr/destinations/europe/france">
                    <img src="logo.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
                        Relais Chateau
                    </a>
                </nav>
            </div>
            
                    <div class="container">
                            <BootstrapTable 
                            bootstrap4
                            keyField="id"
                            data={ data }
                            columns={ columns }
                            defaultSorted={ defaultSorted} 
                            filter={ filterFactory() }
                        />
                    </div>
            </body>
    </html> 
      )
    }
  }
  
  export default MyComp;
