import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {AutoComplete} from 'primereact/autocomplete';
import {CountryService} from '../service/CountryService';

export class AutoCompleteDemo extends Component {

  constructor() {
      super();
      this.state = {
          countriesData: [],
          filteredCountriesSingle: null,
          filteredBrands: null,
          filteredCountriesMultiple: null
      };

      this.filterCountrySingle = this.filterCountrySingle.bind(this);
      this.filterBrands = this.filterBrands.bind(this);
      this.filterCountryMultiple = this.filterCountryMultiple.bind(this);
      this.countryservice = new CountryService();
  }

  componentDidMount() {
      this.countriesData = this.countryservice.getCountries(this);
      this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'];
  }

  filterCountrySingle(event) {
      setTimeout(() => {
          var results = this.state.countriesData.filter((country) => {
              return country.name.toLowerCase().startsWith(event.query.toLowerCase());
          });
          this.setState({ filteredCountriesSingle: results });
      }, 250);
  }

  filterBrands(event) {
      setTimeout(() => {
          let results;

          if (event.query.length === 0) {
              results = [...this.brands];
          }
          else {
              results = this.brands.filter((brand) => {
                  return brand.toLowerCase().startsWith(event.query.toLowerCase());
              });
          }

          this.setState({ filteredBrands: results });
      }, 250);
  }

  filterCountryMultiple(event) {
      setTimeout(() => {
          let results = this.state.countriesData.filter((country) => {
              return country.name.toLowerCase().startsWith(event.query.toLowerCase());
          });

          this.setState({ filteredCountriesMultiple: results });
      }, 250);
  }

  itemTemplate(brand) {
      return (
          <div className="p-clearfix">
              <img alt={brand} src={'showcase/resources/demo/images/car/${brand}.png'} style={{ width: '32px', display: 'inline-block', margin: '5px 0 2px 5px' }} />
              <div style={{ fontSize: '16px', float: 'right', margin: '10px 10px 0 0' }}>{brand}</div>
          </div>
      );
  }

  render() {
      return (
          <div>
              <div className="content-section introduction">
                  <div className="feature-intro">
                      <h1>AutoComplete</h1>
                      <p>AutoComplete is an input component that provides real-time suggestions when being typed.</p>
                  </div>
              </div>

              <div className="content-section implementation">
                  <h3>Basic</h3>
                  <AutoComplete value={this.state.country} suggestions={this.state.filteredCountriesSingle} completeMethod={this.filterCountrySingle} field="name"
                      size={30} placeholder="Countries" minLength={1} onChange={(e) => this.setState({country: e.value})} />
                  <span style={{ marginLeft: '10px' }}>Country: {this.state.country ? this.state.country.name || this.state.country : 'none'}</span>

                  <h3>Advanced</h3>
                  <AutoComplete value={this.state.brand} suggestions={this.state.filteredBrands} completeMethod={this.filterBrands} size={30} minLength={1}
                      placeholder="Hint: type 'v' or 'f'" dropdown={true} itemTemplate={this.itemTemplate.bind(this)} onChange={(e) => this.setState({brand: e.value})} />
                  <span style={{ marginLeft: '50px' }}>Brand: {this.state.brand || 'none'}</span>

                  <h3>Multiple</h3>
                  <span className="p-fluid">
                      <AutoComplete value={this.state.countries} suggestions={this.state.filteredCountriesMultiple} completeMethod={this.filterCountryMultiple}
                          minLength={1} placeholder="Countries" field="name" multiple={true} onChange={(e) => this.setState({countries: e.value})} />
                  </span>
              </div>
          </div>
      )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
