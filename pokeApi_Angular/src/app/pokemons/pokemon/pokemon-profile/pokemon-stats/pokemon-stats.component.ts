import { Component, Input, OnInit } from '@angular/core';
import { BasicStats } from 'src/app/utils/types';

@Component({
    selector: 'pokemon-stats-chart',
    templateUrl: './pokemon-stats.component.html',
    styleUrls: ['./pokemon-stats.component.scss']
})
export class PokemonStatsChart implements OnInit {
    @Input()
    pokemonStats!: BasicStats[];


    ngOnInit() {
        this.formatStatNames();
    }

    formatStatNames() {
        this.pokemonStats.forEach((stat) => {
            if(stat.stat === 'hp') {
                stat.stat = 'HP';
                return;
            }

            if(stat.stat.includes('-')) {
                let tempName: string[] = stat.stat.split('-');
                stat.stat = this.capitalizeName(tempName[0]) + ' ' + this.capitalizeName(tempName[1]);
                return;
            }

            stat.stat = this.capitalizeName(stat.stat);
        });
    }

    capitalizeName(name: string) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}