import {Component, Input, OnInit} from '@angular/core';
import {RosterService} from '../../service/roster.service';
import {Roster} from '../../class/roster';
import {trigger,state,style,animate,transition} from '@angular/animations';
import {InstanceService} from "../../service/instance.service";
import {Raid} from "../../class/raid";
import {ItemService} from "../../service/item.service";
import {Item} from "../../class/item";
import {Router} from "@angular/router";
import {LootService} from "../../service/loot.service";
import {Loot} from "../../class/loot";

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss'],
})
export class RosterComponent implements OnInit {
public raids: Raid[];
public players: any;
showPool = false;
public week: number;
idRaid: number;
nameRaid: string;
itemRaid = Item;
numberChest: number;
filterLoot: any;
public loots: Loot;
  constructor(
    private instanceServ: InstanceService,
    private router: Router,
    public rosterServ: RosterService,
    public lootService: LootService,
  ) { }

  ngOnInit(): void {
    this.week = Date.now();
    this.lootService.getWeekLoot().subscribe((data)=> {
    this.loots = data;
    });
    this.instanceServ.getInstances().subscribe((data) => {
      if (data) {
        this.raids = data;
      }
    },(_)=>{
      this.router.navigate(['/']);
      this.rosterServ.logout();
    });
  }

}
