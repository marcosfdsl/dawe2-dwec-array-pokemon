import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {
  pokemons = [
    { id: 1, foto: 'assets/fotos/bulbasaur.png', nombre: 'Bulbasaur', codigo: '001', tipo: 'Planta, Veneno', altura: 0.70, peso: 6.90 },
    { id: 2, foto: 'assets/fotos/ivysaur.png', nombre: 'Ivysaur', codigo: '002', tipo: 'Planta, Veneno', altura: 1.00, peso: 13.00 },
    { id: 3, foto: 'assets/fotos/venusaur.png', nombre: 'Venusaur', codigo: '003', tipo: 'Planta, Veneno', altura: 2.00, peso: 100.00 },
    { id: 4, foto: 'assets/fotos/charmander.png', nombre: 'Charmander', codigo: '004', tipo: 'Fuego', altura: 0.60, peso: 8.50 },
    { id: 5, foto: 'assets/fotos/charmeleon.png', nombre: 'Charmeleon', codigo: '005', tipo: 'Fuego', altura: 1.10, peso: 19.00 },
    { id: 6, foto: 'assets/fotos/charizard.png', nombre: 'Charizard', codigo: '006', tipo: 'Fuego, Volador', altura: 1.70, peso: 90.50 },
    // Otros objetos Pokemon
  ];
}